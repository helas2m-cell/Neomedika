import { initializeApp, getApps, getApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  type User,
} from 'firebase/auth';
import firebaseConfig from '../../firebase-applet-config.json';
import {
  formatEnquiryForSheetsRow,
  buildGmailRawMimeMessage,
  type EnquiryRecord,
} from '../utils/neomedikaLogic';

export const SCOPES = [
  'https://www.googleapis.com/auth/gmail.send',
  'https://www.googleapis.com/auth/spreadsheets',
];

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();
SCOPES.forEach((scope) => provider.addScope(scope));

let isSigningIn = false;
let cachedAccessToken: string | null = null;

export const initAuth = (
  onAuthSuccess?: (user: User, token: string) => void,
  onAuthFailure?: () => void
) => {
  return onAuthStateChanged(auth, async (user: User | null) => {
    if (user) {
      if (cachedAccessToken) {
        if (onAuthSuccess) onAuthSuccess(user, cachedAccessToken);
      } else if (!isSigningIn) {
        cachedAccessToken = null;
        if (onAuthFailure) onAuthFailure();
      }
    } else {
      cachedAccessToken = null;
      if (onAuthFailure) onAuthFailure();
    }
  });
};

export const googleSignIn = async (): Promise<{ user: User; accessToken: string } | null> => {
  try {
    isSigningIn = true;
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    if (!credential?.accessToken) {
      throw new Error('Failed to obtain Google Workspace access token.');
    }
    cachedAccessToken = credential.accessToken;
    return { user: result.user, accessToken: cachedAccessToken };
  } catch (error) {
    console.error('Google Workspace Sign-In Error:', error);
    throw error;
  } finally {
    isSigningIn = false;
  }
};

export const getAccessToken = async (): Promise<string | null> => {
  return cachedAccessToken;
};

export const logout = async () => {
  await auth.signOut();
  cachedAccessToken = null;
};

/**
 * Fetches spreadsheet metadata to resolve the first tab title dynamically
 * (per Google Sheets API best practices: never hardcode "Sheet1").
 */
async function getFirstSheetTitle(spreadsheetId: string, accessToken: string): Promise<string> {
  const res = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${encodeURIComponent(spreadsheetId)}?fields=sheets.properties.title`,
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    }
  );
  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Google Sheets metadata error (${res.status}): ${errText}`);
  }
  const data = await res.json();
  const title = data?.sheets?.[0]?.properties?.title;
  return title || 'Enquiries';
}

/**
 * Creates a new formatted Google Sheet for PT Neomedika Elektra Optima leads
 * and writes the header row + initial records.
 */
export async function createNeoLeadSpreadsheet(
  accessToken: string,
  initialEnquiries: EnquiryRecord[] = []
): Promise<{ spreadsheetId: string; spreadsheetUrl: string; sheetTitle: string }> {
  const sheetTitle = 'NEO_Enquiries';
  const createRes = await fetch('https://sheets.googleapis.com/v4/spreadsheets', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      properties: {
        title: `PT Neomedika Elektra Optima (NEO) — Lead & Enquiry Database (${new Date().toISOString().slice(0, 10)})`,
      },
      sheets: [
        {
          properties: {
            title: sheetTitle,
            gridProperties: {
              frozenRowCount: 1,
            },
          },
        },
      ],
    }),
  });

  if (!createRes.ok) {
    const errText = await createRes.text();
    throw new Error(`Failed to create Google Sheet (${createRes.status}): ${errText}`);
  }

  const created = await createRes.json();
  const spreadsheetId: string = created.spreadsheetId;
  const spreadsheetUrl: string =
    created.spreadsheetUrl || `https://docs.google.com/spreadsheets/d/${spreadsheetId}/edit`;

  const headers = [
    'Reference ID',
    'Timestamp (ISO)',
    'Full Name',
    'Business Email',
    'Phone / WhatsApp',
    'Organisation / Clinic',
    'Location / Market',
    'Enquiry Category',
    'Product Interest',
    'Message / Requirements',
    'Language',
  ];

  const rows = [headers, ...initialEnquiries.map(formatEnquiryForSheetsRow)];

  const appendRes = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${encodeURIComponent(spreadsheetId)}/values/${encodeURIComponent(`${sheetTitle}!A1`)}:append?valueInputOption=USER_ENTERED`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        values: rows,
      }),
    }
  );

  if (!appendRes.ok) {
    const errText = await appendRes.text();
    throw new Error(`Failed to populate Google Sheet (${appendRes.status}): ${errText}`);
  }

  return { spreadsheetId, spreadsheetUrl, sheetTitle };
}

/**
 * Appends one or more EnquiryRecord rows into an existing Google Sheet.
 */
export async function appendEnquiriesToSpreadsheet(
  accessToken: string,
  spreadsheetId: string,
  enquiries: EnquiryRecord[]
): Promise<{ updatedRows: number; spreadsheetUrl: string }> {
  const sheetTitle = await getFirstSheetTitle(spreadsheetId, accessToken);
  const values = enquiries.map(formatEnquiryForSheetsRow);

  const res = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${encodeURIComponent(spreadsheetId)}/values/${encodeURIComponent(`${sheetTitle}!A1`)}:append?valueInputOption=USER_ENTERED`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ values }),
    }
  );

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Failed to append to Google Sheet (${res.status}): ${errText}`);
  }

  return {
    updatedRows: enquiries.length,
    spreadsheetUrl: `https://docs.google.com/spreadsheets/d/${spreadsheetId}/edit`,
  };
}

/**
 * Sends a structured HTML email notification via Gmail API (`users/me/messages/send`)
 * to the PT Neomedika Elektra Optima corporate recipient and optionally CC's the sender.
 */
export async function sendEnquiryEmailViaGmail(params: {
  accessToken: string;
  recipientEmail: string;
  ccVisitor?: boolean;
  enquiry: EnquiryRecord;
}): Promise<{ messageId: string }> {
  const { accessToken, recipientEmail, ccVisitor, enquiry } = params;

  const raw = buildGmailRawMimeMessage({
    to: recipientEmail,
    cc: ccVisitor ? enquiry.businessEmail : undefined,
    subject: `[PT Neomedika Elektra Optima] ${enquiry.category} — ${enquiry.fullName} (${enquiry.id})`,
    enquiry,
  });

  const res = await fetch('https://gmail.googleapis.com/gmail/v1/users/me/messages/send', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ raw }),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Gmail API send failed (${res.status}): ${errText}`);
  }

  const data = await res.json();
  return { messageId: data.id || 'sent' };
}
