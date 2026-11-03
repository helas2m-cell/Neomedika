import React, { useState, useEffect } from 'react';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Download,
  FileSpreadsheet,
  Mail,
  Trash2,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react';
import type { User } from 'firebase/auth';
import type { SiteContent } from '../data/content';
import {
  validateEnquiryInput,
  formatEnquiriesToCsv,
  type EnquiryInput,
  type EnquiryRecord,
  type Locale,
} from '../utils/neomedikaLogic';
import {
  initAuth,
  googleSignIn,
  logout,
  createNeoLeadSpreadsheet,
  appendEnquiriesToSpreadsheet,
  sendEnquiryEmailViaGmail,
} from '../services/googleWorkspace';

interface ContactWorkspaceSectionProps {
  content: SiteContent['contact'];
  locale: Locale;
  prefilledCategory: string;
  prefilledProduct: string;
}

type PendingWorkspaceAction =
  | { type: 'create_sheet'; enquiries: EnquiryRecord[] }
  | { type: 'append_sheet'; enquiries: EnquiryRecord[]; spreadsheetId: string }
  | { type: 'send_gmail'; enquiry: EnquiryRecord; recipientEmail: string; ccVisitor: boolean }
  | { type: 'delete_enquiry'; enquiry: EnquiryRecord };

export function ContactWorkspaceSection({
  content,
  locale,
  prefilledCategory,
  prefilledProduct,
}: ContactWorkspaceSectionProps) {
  // Form State
  const [formData, setFormData] = useState<EnquiryInput>({
    fullName: '',
    businessEmail: '',
    phone: '',
    organisation: '',
    countryCity: 'Jakarta, Indonesia',
    category: prefilledCategory || content.categories[0],
    productInterest: prefilledProduct || content.productInterests[0],
    message: '',
    privacyConsent: false,
  });

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmitted, setLastSubmitted] = useState<EnquiryRecord | null>(null);
  const [statusBanner, setStatusBanner] = useState<{
    tone: 'success' | 'error' | 'info';
    text: string;
  } | null>(null);

  // Enquiries Database State
  const [enquiries, setEnquiries] = useState<EnquiryRecord[]>([]);
  const [isLoadingEnquiries, setIsLoadingEnquiries] = useState(true);

  // Google Workspace OAuth State
  const [user, setUser] = useState<User | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [needsAuth, setNeedsAuth] = useState(true);
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [isExecutingWorkspace, setIsExecutingWorkspace] = useState(false);

  // Workspace Configuration
  const [recipientEmail, setRecipientEmail] = useState('helas.m@gmail.com');
  const [ccVisitor, setCcVisitor] = useState(true);
  const [spreadsheetId, setSpreadsheetId] = useState('');
  const [spreadsheetUrl, setSpreadsheetUrl] = useState('');

  // Mandatory Confirmation Dialog State for Mutating / Sending Actions
  const [pendingAction, setPendingAction] = useState<PendingWorkspaceAction | null>(null);

  // Update form category/product when user clicks a contextual CTA on the page
  useEffect(() => {
    if (prefilledCategory) {
      setFormData((prev) => ({ ...prev, category: prefilledCategory }));
    }
  }, [prefilledCategory]);

  useEffect(() => {
    if (prefilledProduct) {
      setFormData((prev) => ({ ...prev, productInterest: prefilledProduct }));
    }
  }, [prefilledProduct]);

  // Load initial enquiries from backend and initialize Firebase Google OAuth listener
  useEffect(() => {
    const fetchEnquiries = async () => {
      try {
        setIsLoadingEnquiries(true);
        const res = await fetch('/api/enquiries');
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data.enquiries)) {
            setEnquiries(data.enquiries);
          }
          if (data.corporateEmail) {
            setRecipientEmail(data.corporateEmail);
          }
        }
      } catch (err) {
        console.error('Error loading enquiries:', err);
      } finally {
        setIsLoadingEnquiries(false);
      }
    };

    fetchEnquiries();

    const unsubscribe = initAuth(
      (authedUser, token) => {
        setUser(authedUser);
        setAccessToken(token);
        setNeedsAuth(false);
      },
      () => {
        setUser(null);
        setAccessToken(null);
        setNeedsAuth(true);
      }
    );

    return () => {
      if (typeof unsubscribe === 'function') unsubscribe();
    };
  }, []);

  const handleGoogleLogin = async () => {
    setIsSigningIn(true);
    setStatusBanner(null);
    try {
      const result = await googleSignIn();
      if (result) {
        setUser(result.user);
        setAccessToken(result.accessToken);
        setNeedsAuth(false);
        setStatusBanner({
          tone: 'success',
          text:
            locale === 'id'
              ? `Berhasil terhubung ke Google Workspace sebagai ${result.user.email}.`
              : `Successfully connected to Google Workspace as ${result.user.email}.`,
        });
      }
    } catch (err: any) {
      setStatusBanner({
        tone: 'error',
        text:
          locale === 'id'
            ? `Autentikasi Google dibatalkan atau gagal: ${err?.message || 'Unknown error'}`
            : `Google authentication cancelled or failed: ${err?.message || 'Unknown error'}`,
      });
    } finally {
      setIsSigningIn(false);
    }
  };

  const handleGoogleLogout = async () => {
    await logout();
    setUser(null);
    setAccessToken(null);
    setNeedsAuth(true);
    setStatusBanner({
      tone: 'info',
      text:
        locale === 'id'
          ? 'Sesi Google Workspace telah diputuskan.'
          : 'Google Workspace session disconnected.',
    });
  };

  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusBanner(null);

    const validation = validateEnquiryInput(formData, locale);
    if (!validation.valid) {
      setFieldErrors(validation.errors as Record<string, string>);
      return;
    }

    setFieldErrors({});
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          locale,
          syncedToSheets: false,
          emailNotificationSent: false,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        if (data.fieldErrors) {
          setFieldErrors(data.fieldErrors);
        }
        throw new Error(data.error || 'Submission failed');
      }

      const created: EnquiryRecord = data.enquiry;
      setEnquiries((prev) => [created, ...prev]);
      setLastSubmitted(created);

      // Reset text fields while keeping category
      setFormData((prev) => ({
        ...prev,
        fullName: '',
        businessEmail: '',
        phone: '',
        organisation: '',
        message: '',
        privacyConsent: false,
      }));

      setStatusBanner({
        tone: 'success',
        text:
          locale === 'id'
            ? `Terima kasih! Data Anda (${created.id}) telah tersimpan di sistem PT Neomedika Elektra Optima.`
            : `Thank you! Your enquiry (${created.id}) has been saved to PT Neomedika Elektra Optima’s system.`,
      });

      // If admin is already signed in with Google Workspace, prompt confirmation to auto-send Gmail notification
      if (accessToken && !needsAuth) {
        setPendingAction({
          type: 'send_gmail',
          enquiry: created,
          recipientEmail,
          ccVisitor,
        });
      }
    } catch (err: any) {
      setStatusBanner({
        tone: 'error',
        text: err?.message || (locale === 'id' ? 'Gagal mengirim formulir.' : 'Failed to submit form.'),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleExecuteConfirmedAction = async () => {
    if (!pendingAction) return;

    setIsExecutingWorkspace(true);
    setStatusBanner(null);

    try {
      if (pendingAction.type === 'delete_enquiry') {
        const targetId = pendingAction.enquiry.id;
        const res = await fetch(`/api/enquiries/${encodeURIComponent(targetId)}`, {
          method: 'DELETE',
        });
        if (res.ok) {
          setEnquiries((prev) => prev.filter((item) => item.id !== targetId));
          setStatusBanner({
            tone: 'info',
            text:
              locale === 'id'
                ? `Data ${targetId} telah dihapus dari sistem.`
                : `Record ${targetId} has been deleted from the system.`,
          });
        }
        setPendingAction(null);
        return;
      }

      if (!accessToken) {
        setNeedsAuth(true);
        setPendingAction(null);
        return;
      }

      if (pendingAction.type === 'create_sheet') {
        const created = await createNeoLeadSpreadsheet(accessToken, pendingAction.enquiries);
        setSpreadsheetId(created.spreadsheetId);
        setSpreadsheetUrl(created.spreadsheetUrl);

        // Update backend status for synced enquiries
        await Promise.all(
          pendingAction.enquiries.map((item) =>
            fetch(`/api/enquiries/${encodeURIComponent(item.id)}`, {
              method: 'PATCH',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                syncedToSheets: true,
                spreadsheetUrl: created.spreadsheetUrl,
              }),
            })
          )
        );

        setEnquiries((prev) =>
          prev.map((item) => ({
            ...item,
            syncedToSheets: true,
            spreadsheetUrl: created.spreadsheetUrl,
          }))
        );

        setStatusBanner({
          tone: 'success',
          text:
            locale === 'id'
              ? `Google Sheet baru berhasil dibuat dan ${pendingAction.enquiries.length} data prospek telah disinkronkan.`
              : `New Google Sheet created and ${pendingAction.enquiries.length} enquiry records synced.`,
        });
      } else if (pendingAction.type === 'append_sheet') {
        const appended = await appendEnquiriesToSpreadsheet(
          accessToken,
          pendingAction.spreadsheetId,
          pendingAction.enquiries
        );
        setSpreadsheetUrl(appended.spreadsheetUrl);

        await Promise.all(
          pendingAction.enquiries.map((item) =>
            fetch(`/api/enquiries/${encodeURIComponent(item.id)}`, {
              method: 'PATCH',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                syncedToSheets: true,
                spreadsheetUrl: appended.spreadsheetUrl,
              }),
            })
          )
        );

        const syncedIds = new Set(pendingAction.enquiries.map((e) => e.id));
        setEnquiries((prev) =>
          prev.map((item) =>
            syncedIds.has(item.id)
              ? { ...item, syncedToSheets: true, spreadsheetUrl: appended.spreadsheetUrl }
              : item
          )
        );

        setStatusBanner({
          tone: 'success',
          text:
            locale === 'id'
              ? `${appended.updatedRows} baris berhasil ditambahkan ke Google Sheets.`
              : `${appended.updatedRows} row(s) appended to Google Sheets.`,
        });
      } else if (pendingAction.type === 'send_gmail') {
        await sendEnquiryEmailViaGmail({
          accessToken,
          recipientEmail: pendingAction.recipientEmail,
          ccVisitor: pendingAction.ccVisitor,
          enquiry: pendingAction.enquiry,
        });

        await fetch(`/api/enquiries/${encodeURIComponent(pendingAction.enquiry.id)}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ emailNotificationSent: true }),
        });

        setEnquiries((prev) =>
          prev.map((item) =>
            item.id === pendingAction.enquiry.id
              ? { ...item, emailNotificationSent: true }
              : item
          )
        );

        setStatusBanner({
          tone: 'success',
          text:
            locale === 'id'
              ? `Email notifikasi otomatis untuk ${pendingAction.enquiry.id} berhasil dikirim melalui Gmail ke ${pendingAction.recipientEmail}.`
              : `Automated Gmail notification for ${pendingAction.enquiry.id} sent to ${pendingAction.recipientEmail}.`,
        });
      }
    } catch (err: any) {
      setStatusBanner({
        tone: 'error',
        text: err?.message || 'Google Workspace API operation failed.',
      });
    } finally {
      setIsExecutingWorkspace(false);
      setPendingAction(null);
    }
  };

  const handleDownloadCsv = () => {
    const csv = formatEnquiriesToCsv(enquiries);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `NEO_Enquiries_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-24 bg-[#FAF8FC] border-t border-[#EAE4F2]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#666666] mb-3">
            <span className="text-[#903595] font-semibold">{content.sectionNumber}</span>
            <span aria-hidden="true">·</span>
            <span>{content.kicker}</span>
          </div>
          <h2
            id="contact-heading"
            className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#381B37] leading-tight text-balance"
          >
            {content.heading}
          </h2>
          <p className="mt-4 text-base text-[#666666] leading-relaxed">{content.lead}</p>
        </div>

        {/* Status Banner */}
        {statusBanner && (
          <div
            role="status"
            className={`mb-8 p-4 rounded-2xl border flex items-start gap-3 text-sm ${
              statusBanner.tone === 'success'
                ? 'bg-[#ECFDF3] border-[#ABEFC6] text-[#027A48]'
                : statusBanner.tone === 'error'
                ? 'bg-[#FEF3F2] border-[#FECDCA] text-[#B42318]'
                : 'bg-white border-[#D9CEE6] text-[#342077]'
            }`}
          >
            {statusBanner.tone === 'success' ? (
              <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
            )}
            <div className="flex-1 font-medium">{statusBanner.text}</div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left 7 Columns: Official Validated Contact NEO Form */}
          <div className="lg:col-span-7 bg-white border border-[#EAE4F2] rounded-3xl p-7 sm:p-9">
            <h3 className="font-display text-2xl font-bold text-[#381B37]">
              {content.formTitle}
            </h3>
            <p className="mt-1.5 text-xs sm:text-sm text-[#666666]">{content.formSubtitle}</p>

            <form onSubmit={handleSubmitForm} noValidate className="mt-7 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="neo-fullname"
                    className="block text-xs font-bold text-[#381B37] mb-1.5"
                  >
                    {content.fields.fullName}
                  </label>
                  <input
                    id="neo-fullname"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, fullName: e.target.value }))
                    }
                    placeholder={content.fields.fullNamePlaceholder}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-[#381B37] bg-[#FAF8FC] focus:bg-white focus:outline-none transition-colors ${
                      fieldErrors.fullName
                        ? 'border-[#B42318]'
                        : 'border-[#D9CEE6] focus:border-[#903595]'
                    }`}
                  />
                  {fieldErrors.fullName && (
                    <p role="alert" className="mt-1 text-xs text-[#B42318]">
                      {fieldErrors.fullName}
                    </p>
                  )}
                </div>

                {/* Business Email */}
                <div>
                  <label
                    htmlFor="neo-email"
                    className="block text-xs font-bold text-[#381B37] mb-1.5"
                  >
                    {content.fields.businessEmail}
                  </label>
                  <input
                    id="neo-email"
                    type="email"
                    required
                    value={formData.businessEmail}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, businessEmail: e.target.value }))
                    }
                    placeholder={content.fields.businessEmailPlaceholder}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-[#381B37] bg-[#FAF8FC] focus:bg-white focus:outline-none transition-colors ${
                      fieldErrors.businessEmail
                        ? 'border-[#B42318]'
                        : 'border-[#D9CEE6] focus:border-[#903595]'
                    }`}
                  />
                  {fieldErrors.businessEmail && (
                    <p role="alert" className="mt-1 text-xs text-[#B42318]">
                      {fieldErrors.businessEmail}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 items-stretch">
                {/* Phone / WhatsApp */}
                <div className="flex flex-col justify-between">
                  <label
                    htmlFor="neo-phone"
                    className="block text-xs font-bold text-[#381B37] mb-1.5"
                  >
                    {content.fields.phone}
                  </label>
                  <input
                    id="neo-phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, phone: e.target.value }))
                    }
                    placeholder={content.fields.phonePlaceholder}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-[#381B37] bg-[#FAF8FC] focus:bg-white focus:outline-none transition-colors ${
                      fieldErrors.phone
                        ? 'border-[#B42318]'
                        : 'border-[#D9CEE6] focus:border-[#903595]'
                    }`}
                  />
                  {fieldErrors.phone && (
                    <p role="alert" className="mt-1 text-xs text-[#B42318]">
                      {fieldErrors.phone}
                    </p>
                  )}
                </div>

                {/* Organisation */}
                <div className="flex flex-col justify-between">
                  <label
                    htmlFor="neo-org"
                    className="block text-xs font-bold text-[#381B37] mb-1.5"
                  >
                    {content.fields.organisation}
                  </label>
                  <input
                    id="neo-org"
                    type="text"
                    value={formData.organisation}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, organisation: e.target.value }))
                    }
                    placeholder={content.fields.organisationPlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D9CEE6] text-sm text-[#381B37] bg-[#FAF8FC] focus:bg-white focus:border-[#903595] focus:outline-none transition-colors"
                  />
                </div>

                {/* City / Country */}
                <div className="flex flex-col justify-between">
                  <label
                    htmlFor="neo-city"
                    className="block text-xs font-bold text-[#381B37] mb-1.5"
                  >
                    {content.fields.countryCity}
                  </label>
                  <input
                    id="neo-city"
                    type="text"
                    value={formData.countryCity}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, countryCity: e.target.value }))
                    }
                    placeholder={content.fields.countryCityPlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D9CEE6] text-sm text-[#381B37] bg-[#FAF8FC] focus:bg-white focus:border-[#903595] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Enquiry Category */}
                <div>
                  <label
                    htmlFor="neo-category"
                    className="block text-xs font-bold text-[#381B37] mb-1.5"
                  >
                    {content.fields.category}
                  </label>
                  <select
                    id="neo-category"
                    value={formData.category}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, category: e.target.value }))
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D9CEE6] text-sm text-[#381B37] bg-[#FAF8FC] focus:bg-white focus:border-[#903595] focus:outline-none"
                  >
                    {content.categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Product Interest */}
                <div>
                  <label
                    htmlFor="neo-product"
                    className="block text-xs font-bold text-[#381B37] mb-1.5"
                  >
                    {content.fields.productInterest}
                  </label>
                  <select
                    id="neo-product"
                    value={formData.productInterest}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, productInterest: e.target.value }))
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D9CEE6] text-sm text-[#381B37] bg-[#FAF8FC] focus:bg-white focus:border-[#903595] focus:outline-none"
                  >
                    {content.productInterests.map((prod) => (
                      <option key={prod} value={prod}>
                        {prod}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="neo-message"
                  className="block text-xs font-bold text-[#381B37] mb-1.5"
                >
                  {content.fields.message}
                </label>
                <textarea
                  id="neo-message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, message: e.target.value }))
                  }
                  placeholder={content.fields.messagePlaceholder}
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-[#381B37] bg-[#FAF8FC] focus:bg-white focus:outline-none transition-colors ${
                    fieldErrors.message
                      ? 'border-[#B42318]'
                      : 'border-[#D9CEE6] focus:border-[#903595]'
                  }`}
                />
                {fieldErrors.message && (
                  <p role="alert" className="mt-1 text-xs text-[#B42318]">
                    {fieldErrors.message}
                  </p>
                )}
              </div>

              {/* Privacy Consent Checkbox */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    id="neo-consent"
                    type="checkbox"
                    checked={formData.privacyConsent}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, privacyConsent: e.target.checked }))
                    }
                    className="mt-1 w-4 h-4 rounded border-[#D9CEE6] text-[#903595] focus:ring-[#903595]"
                  />
                  <span className="text-xs text-[#666666] leading-relaxed">
                    {content.fields.privacyConsent}
                  </span>
                </label>
                {fieldErrors.privacyConsent && (
                  <p role="alert" className="mt-1 text-xs text-[#B42318]">
                    {fieldErrors.privacyConsent}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#EE498E] via-[#903595] to-[#342077] hover:opacity-95 disabled:opacity-60 transition-opacity cursor-pointer whitespace-nowrap"
              >
                <Send className="w-4 h-4" />
                <span>
                  {isSubmitting ? content.fields.submittingBtn : content.fields.submitBtn}
                </span>
              </button>
            </form>

            {/* Immediate Submission Confirmation Receipt */}
            {lastSubmitted && (
              <div
                data-testid="submission-receipt"
                className="mt-6 p-5 rounded-2xl bg-[#FAF8FC] border border-[#D9CEE6]"
              >
                <div className="flex items-center justify-between text-xs font-mono text-[#342077] mb-1">
                  <span>RECEIPT ID: {lastSubmitted.id}</span>
                  <span>{new Date(lastSubmitted.createdAt).toLocaleTimeString()}</span>
                </div>
                <div className="text-sm font-bold text-[#381B37]">
                  {lastSubmitted.fullName} ({lastSubmitted.businessEmail})
                </div>
                <div className="text-xs text-[#666666] mt-0.5">
                  {lastSubmitted.category} · {lastSubmitted.productInterest}
                </div>
              </div>
            )}
          </div>

          {/* Right 5 Columns: Google Workspace (Gmail & Google Sheets) Auto-Integration Panel */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-[#D9CEE6] rounded-3xl p-7">
              <div className="text-xs font-semibold text-[#903595] mb-1.5">
                Google Workspace · Gmail & Sheets API
              </div>
              <h3 className="font-display text-xl font-bold text-[#381B37]">
                {content.workspaceBox.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#666666] leading-relaxed">
                {content.workspaceBox.subtitle}
              </p>

              {/* Target Recipient Email Input */}
              <div className="mt-5 space-y-3">
                <div>
                  <label
                    htmlFor="workspace-recipient-email"
                    className="block text-xs font-bold text-[#381B37] mb-1"
                  >
                    {content.workspaceBox.recipientLabel}
                  </label>
                  <input
                    id="workspace-recipient-email"
                    type="email"
                    value={recipientEmail}
                    onChange={(e) => setRecipientEmail(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-[#D9CEE6] font-mono text-xs text-[#381B37] bg-[#FAF8FC]"
                  />
                </div>

                <label className="flex items-center gap-2 text-xs text-[#666666] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={ccVisitor}
                    onChange={(e) => setCcVisitor(e.target.checked)}
                    className="rounded border-[#D9CEE6] text-[#903595]"
                  />
                  <span>
                    {locale === 'id'
                      ? 'Kirim salinan konfirmasi otomatis (CC) ke email pengirim formulir'
                      : 'Send automated confirmation copy (CC) to visitor’s email'}
                  </span>
                </label>

                <div>
                  <label
                    htmlFor="workspace-sheet-id"
                    className="block text-xs font-bold text-[#381B37] mb-1"
                  >
                    {content.workspaceBox.sheetIdLabel}
                  </label>
                  <input
                    id="workspace-sheet-id"
                    type="text"
                    value={spreadsheetId}
                    onChange={(e) => setSpreadsheetId(e.target.value)}
                    placeholder={
                      locale === 'id'
                        ? 'Kosongkan untuk membuat Google Sheet baru otomatis'
                        : 'Leave blank to auto-create a new Google Sheet'
                    }
                    className="w-full px-3 py-2 rounded-lg border border-[#D9CEE6] font-mono text-xs text-[#381B37] bg-[#FAF8FC]"
                  />
                </div>
              </div>

              {/* Official Sign in with Google Button or Connected Controls */}
              <div className="mt-6 pt-5 border-t border-[#EAE4F2]">
                {needsAuth || !accessToken ? (
                  <div className="space-y-3">
                    <button
                      type="button"
                      onClick={handleGoogleLogin}
                      disabled={isSigningIn}
                      className="gsi-material-button w-full flex items-center justify-center gap-3 px-4 py-2.5 bg-white border border-[#747775] rounded-lg text-sm font-medium text-[#1F1F1F] hover:bg-[#F8FAFD] transition-colors cursor-pointer whitespace-nowrap"
                    >
                      <div className="w-5 h-5 shrink-0">
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 48 48"
                          className="w-full h-full block"
                        >
                          <path
                            fill="#EA4335"
                            d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                          />
                          <path
                            fill="#4285F4"
                            d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                          />
                          <path
                            fill="#FBBC05"
                            d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                          />
                          <path
                            fill="#34A853"
                            d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                          />
                          <path fill="none" d="M0 0h48v48H0z" />
                        </svg>
                      </div>
                      <span className="gsi-material-button-contents font-semibold">
                        {isSigningIn ? 'Connecting...' : content.workspaceBox.signInBtn}
                      </span>
                    </button>
                    <p className="text-[11px] text-[#666666] leading-normal">
                      {locale === 'id'
                        ? 'Catatan: Pengunjung dapat langsung mengisi formulir tanpa login. Login Google ini dikhususkan bagi pemilik/admin PT Neomedika Elektra Optima untuk mengaktifkan sinkronisasi Google Sheets & Gmail.'
                        : 'Note: Visitors can submit the enquiry form directly without signing in. Google Sign-In is for PT Neomedika Elektra Optima administrators to activate Google Sheets & Gmail sync.'}
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2 bg-[#FAF8FC] p-3 rounded-xl border border-[#EAE4F2]">
                      <div className="text-xs">
                        <span className="text-[#666666] block">
                          {content.workspaceBox.connectedAs}
                        </span>
                        <strong className="font-mono text-[#342077]">{user?.email}</strong>
                      </div>
                      <button
                        type="button"
                        onClick={handleGoogleLogout}
                        className="px-2.5 py-1 text-xs font-semibold text-[#B42318] hover:bg-[#FEF3F2] rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                      >
                        {content.workspaceBox.signOutBtn}
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      <button
                        type="button"
                        onClick={() =>
                          setPendingAction({
                            type: 'create_sheet',
                            enquiries,
                          })
                        }
                        className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#342077] hover:bg-[#903595] transition-colors cursor-pointer whitespace-nowrap"
                      >
                        <FileSpreadsheet className="w-4 h-4" />
                        <span>{content.workspaceBox.createSheetBtn}</span>
                      </button>

                      {spreadsheetId.trim() && (
                        <button
                          type="button"
                          onClick={() =>
                            setPendingAction({
                              type: 'append_sheet',
                              enquiries,
                              spreadsheetId: spreadsheetId.trim(),
                            })
                          }
                          className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold text-[#342077] bg-[#FAF8FC] border border-[#D9CEE6] hover:border-[#903595] transition-colors cursor-pointer whitespace-nowrap"
                        >
                          <FileSpreadsheet className="w-4 h-4" />
                          <span>{content.workspaceBox.syncAllBtn}</span>
                        </button>
                      )}
                    </div>

                    {spreadsheetUrl && (
                      <a
                        href={spreadsheetUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#903595] hover:underline"
                      >
                        <span>
                          {locale === 'id'
                            ? 'Buka Google Spreadsheet PT Neomedika Elektra Optima'
                            : 'Open PT Neomedika Elektra Optima Google Spreadsheet'}
                        </span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Direct Corporate Contact Information Box */}
            <div className="bg-white border border-[#EAE4F2] rounded-3xl p-7">
              <div className="text-xs font-semibold text-[#903595] mb-1">
                PT Neomedika Elektra Optima (NEO)
              </div>
              <h4 className="font-display text-lg font-bold text-[#381B37]">
                {locale === 'id'
                  ? 'Saluran Komunikasi Korporat Resmi'
                  : 'Official Corporate Communication Channels'}
              </h4>
              <dl className="mt-4 space-y-2.5 text-xs sm:text-sm">
                <div className="flex justify-between gap-4 py-1.5 border-b border-[#EAE4F2]">
                  <dt className="text-[#666666]">
                    {locale === 'id' ? 'Entitas Hukum' : 'Legal Entity'}
                  </dt>
                  <dd className="font-semibold text-[#381B37] text-right">
                    PT Neomedika Elektra Optima
                  </dd>
                </div>
                <div className="flex justify-between gap-4 py-1.5 border-b border-[#EAE4F2]">
                  <dt className="text-[#666666]">
                    {locale === 'id' ? 'Email Korporat' : 'Corporate Email'}
                  </dt>
                  <dd className="font-mono font-semibold text-[#342077] text-right">
                    {recipientEmail}
                  </dd>
                </div>
                <div className="flex justify-between gap-4 py-1.5 border-b border-[#EAE4F2]">
                  <dt className="text-[#666666]">WhatsApp KHAYR & NEO</dt>
                  <dd className="font-mono font-semibold text-[#381B37] text-right tabular-nums">
                    +62 819-3241-5455
                  </dd>
                </div>
                <div className="flex justify-between gap-4 py-1.5">
                  <dt className="text-[#666666]">
                    {locale === 'id' ? 'Fokus Wilayah' : 'Primary Market'}
                  </dt>
                  <dd className="font-semibold text-[#381B37] text-right">
                    Jakarta, Bandung, Semarang, Yogyakarta & Nasional
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        {/* Live System Lead Database & Google Workspace Sync Log */}
        <div className="mt-12 bg-white border border-[#EAE4F2] rounded-3xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 mb-6 border-b border-[#EAE4F2]">
            <div>
              <h3 className="font-display text-xl font-bold text-[#381B37]">
                {locale === 'id'
                  ? `Database Pertanyaan Masuk Sistem NEO (${enquiries.length} Data)`
                  : `NEO System Incoming Enquiry Database (${enquiries.length} Records)`}
              </h3>
              <p className="text-xs text-[#666666] mt-0.5">
                {locale === 'id'
                  ? 'Setiap formulir yang dikirim tersimpan otomatis di bawah ini dan siap disinkronkan ke Google Sheets atau dikirim via Gmail.'
                  : 'Every submitted form is automatically stored below and ready for Google Sheets sync or Gmail dispatch.'}
              </p>
            </div>
            <button
              type="button"
              onClick={handleDownloadCsv}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl border border-[#D9CEE6] text-xs font-bold text-[#342077] hover:bg-[#FAF8FC] transition-colors cursor-pointer whitespace-nowrap self-start sm:self-auto"
            >
              <Download className="w-4 h-4" />
              <span>{content.workspaceBox.exportCsvBtn}</span>
            </button>
          </div>

          {isLoadingEnquiries ? (
            <div className="py-8 text-center text-sm text-[#666666]">
              {locale === 'id' ? 'Memuat data sistem...' : 'Loading system records...'}
            </div>
          ) : enquiries.length === 0 ? (
            <div className="py-8 text-center text-sm text-[#666666]">
              {locale === 'id' ? 'Belum ada data pertanyaan masuk.' : 'No enquiries recorded yet.'}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#EAE4F2] text-[11px] font-bold text-[#666666] uppercase tracking-wider">
                    <th className="py-3 pr-4">ID / Waktu</th>
                    <th className="py-3 px-4">Pengirim & Organisasi</th>
                    <th className="py-3 px-4">Kategori & Produk</th>
                    <th className="py-3 px-4">Pesan</th>
                    <th className="py-3 px-4">Status Workspace</th>
                    <th className="py-3 pl-4 text-right">Tindakan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EAE4F2] text-xs">
                  {enquiries.map((item) => (
                    <tr key={item.id} className="hover:bg-[#FAF8FC]/70">
                      <td className="py-3.5 pr-4 align-top whitespace-nowrap">
                        <div className="font-mono font-bold text-[#342077] tabular-nums">
                          {item.id}
                        </div>
                        <div className="font-mono text-[11px] text-[#666666] tabular-nums">
                          {new Date(item.createdAt).toLocaleDateString(
                            locale === 'id' ? 'id-ID' : 'en-US'
                          )}
                        </div>
                      </td>
                      <td className="py-3.5 px-4 align-top">
                        <div className="font-bold text-[#381B37]">{item.fullName}</div>
                        <div className="text-[#666666]">{item.businessEmail}</div>
                        <div className="text-[11px] text-[#903595] font-medium">
                          {item.organisation || '-'} · {item.countryCity || 'Indonesia'}
                        </div>
                      </td>
                      <td className="py-3.5 px-4 align-top">
                        <div className="font-semibold text-[#381B37]">{item.productInterest}</div>
                        <div className="text-[#666666]">{item.category}</div>
                      </td>
                      <td className="py-3.5 px-4 align-top max-w-xs">
                        <p className="text-[#666666] line-clamp-2">{item.message}</p>
                      </td>
                      <td className="py-3.5 px-4 align-top whitespace-nowrap">
                        <div className="text-[11px] text-[#381B37]">
                          Sheets:{' '}
                          <span
                            className={
                              item.syncedToSheets
                                ? 'font-semibold text-[#027A48]'
                                : 'text-[#666666]'
                            }
                          >
                            {item.syncedToSheets ? 'Tersinkron' : 'Lokal'}
                          </span>
                        </div>
                        <div className="text-[11px] text-[#381B37] mt-0.5">
                          Gmail:{' '}
                          <span
                            className={
                              item.emailNotificationSent
                                ? 'font-semibold text-[#027A48]'
                                : 'text-[#666666]'
                            }
                          >
                            {item.emailNotificationSent ? 'Terkirim' : 'Siap Kirim'}
                          </span>
                        </div>
                      </td>
                      <td className="py-3.5 pl-4 align-top text-right whitespace-nowrap">
                        <div className="inline-flex items-center gap-1.5">
                          <button
                            type="button"
                            onClick={() => {
                              if (!accessToken) {
                                handleGoogleLogin();
                                return;
                              }
                              setPendingAction({
                                type: 'send_gmail',
                                enquiry: item,
                                recipientEmail,
                                ccVisitor,
                              });
                            }}
                            title={content.workspaceBox.sendGmailBtn}
                            aria-label={`${content.workspaceBox.sendGmailBtn} ${item.id}`}
                            className="px-2.5 py-1.5 rounded-lg border border-[#D9CEE6] text-[#342077] hover:bg-[#F4F0FA] font-semibold transition-colors cursor-pointer inline-flex items-center gap-1"
                          >
                            <Mail className="w-3.5 h-3.5" />
                            <span>Gmail</span>
                          </button>
                          <button
                            type="button"
                            onClick={() =>
                              setPendingAction({
                                type: 'delete_enquiry',
                                enquiry: item,
                              })
                            }
                            aria-label={`Delete ${item.id}`}
                            className="p-1.5 rounded-lg border border-[#EAE4F2] text-[#666666] hover:text-[#B42318] hover:border-[#FECDCA] transition-colors cursor-pointer"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Mandatory User Confirmation Dialog for Google Workspace & Data Mutations */}
      {pendingAction && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="confirm-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
        >
          <div className="bg-white border border-[#D9CEE6] rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-xl">
            <div className="text-xs font-bold text-[#903595] uppercase tracking-wider mb-1">
              {locale === 'id' ? 'Konfirmasi Tindakan Sistem' : 'Confirm System Action'}
            </div>
            <h4
              id="confirm-modal-title"
              className="font-display text-xl font-bold text-[#381B37]"
            >
              {pendingAction.type === 'create_sheet' &&
                (locale === 'id'
                  ? 'Buat Google Sheet Baru & Simpan Data?'
                  : 'Create New Google Sheet & Sync Records?')}
              {pendingAction.type === 'append_sheet' &&
                (locale === 'id'
                  ? 'Tambahkan Data ke Google Spreadsheet?'
                  : 'Append Records to Google Spreadsheet?')}
              {pendingAction.type === 'send_gmail' &&
                (locale === 'id'
                  ? 'Kirim Email Notifikasi Otomatis via Gmail?'
                  : 'Send Automated Notification Email via Gmail?')}
              {pendingAction.type === 'delete_enquiry' &&
                (locale === 'id'
                  ? `Hapus Data Pertanyaan ${pendingAction.enquiry.id}?`
                  : `Delete Enquiry Record ${pendingAction.enquiry.id}?`)}
            </h4>

            <p className="mt-3 text-sm text-[#666666] leading-relaxed">
              {pendingAction.type === 'create_sheet' &&
                (locale === 'id'
                  ? `Aplikasi akan membuat file Google Spreadsheet baru di akun Google Anda dan menuliskan ${pendingAction.enquiries.length} baris data prospek PT Neomedika Elektra Optima.`
                  : `This will create a new Google Spreadsheet in your Google account and write ${pendingAction.enquiries.length} PT Neomedika Elektra Optima enquiry row(s).`)}
              {pendingAction.type === 'append_sheet' &&
                (locale === 'id'
                  ? `Aplikasi akan menambahkan ${pendingAction.enquiries.length} baris data prospek ke Google Spreadsheet ID "${pendingAction.spreadsheetId}".`
                  : `This will append ${pendingAction.enquiries.length} enquiry row(s) to Google Spreadsheet ID "${pendingAction.spreadsheetId}".`)}
              {pendingAction.type === 'send_gmail' &&
                (locale === 'id'
                  ? `Aplikasi akan mengirim email notifikasi rincian formulir ${pendingAction.enquiry.fullName} (${pendingAction.enquiry.id}) melalui akun Gmail Anda ke ${pendingAction.recipientEmail}${
                      pendingAction.ccVisitor ? ` (dengan CC ke ${pendingAction.enquiry.businessEmail})` : ''
                    }.`
                  : `This will send a formatted enquiry email for ${pendingAction.enquiry.fullName} (${pendingAction.enquiry.id}) via your Gmail account to ${pendingAction.recipientEmail}${
                      pendingAction.ccVisitor ? ` (with CC to ${pendingAction.enquiry.businessEmail})` : ''
                    }.`)}
              {pendingAction.type === 'delete_enquiry' &&
                (locale === 'id'
                  ? `Apakah Anda yakin ingin menghapus data pertanyaan dari ${pendingAction.enquiry.fullName} (${pendingAction.enquiry.id})? Tindakan ini tidak dapat dibatalkan.`
                  : `Are you sure you want to delete the enquiry from ${pendingAction.enquiry.fullName} (${pendingAction.enquiry.id})? This action cannot be undone.`)}
            </p>

            <div className="mt-6 flex items-center justify-end gap-3">
              <button
                type="button"
                disabled={isExecutingWorkspace}
                onClick={() => setPendingAction(null)}
                className="px-4 py-2 rounded-xl border border-[#D9CEE6] text-xs font-bold text-[#381B37] hover:bg-[#FAF8FC] transition-colors cursor-pointer"
              >
                {locale === 'id' ? 'Batal' : 'Cancel'}
              </button>
              <button
                type="button"
                disabled={isExecutingWorkspace}
                onClick={handleExecuteConfirmedAction}
                className={`px-5 py-2 rounded-xl text-xs font-bold text-white transition-opacity cursor-pointer ${
                  pendingAction.type === 'delete_enquiry'
                    ? 'bg-[#B42318] hover:opacity-90'
                    : 'bg-gradient-to-r from-[#EE498E] via-[#903595] to-[#342077] hover:opacity-95'
                }`}
              >
                {isExecutingWorkspace
                  ? locale === 'id'
                    ? 'Memproses...'
                    : 'Processing...'
                  : locale === 'id'
                  ? 'Konfirmasi & Lanjutkan'
                  : 'Confirm & Proceed'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
