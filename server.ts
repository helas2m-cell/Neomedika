import express from 'express';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer as createViteServer } from 'vite';
import {
  validateEnquiryInput,
  type EnquiryRecord,
  type EnquiryInput,
  type Locale,
} from './src/utils/neomedikaLogic';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = path.join(__dirname, 'data');
const ENQUIRIES_FILE = path.join(DATA_DIR, 'enquiries.json');

const SEED_ENQUIRIES: EnquiryRecord[] = [
  {
    id: 'NEO-2026-0101',
    fullName: 'drg. Amanda Pratiwi, Sp.KG',
    businessEmail: 'amanda.pratiwi@praktekdentaljakarta.id',
    phone: '+62 812 8890 1122',
    organisation: 'Klinik Gigi Senyum Optima (3 Cabang)',
    countryCity: 'Jakarta Selatan',
    category: 'Healthcare Solutions',
    productInterest: 'KHAYR Digital Dental Platform',
    message:
      'Kami tertarik menjadwalkan presentasi dan demo sistem operasional klinik gigi KHAYR beserta fitur Odontogram Digital dan KHAYR Voucher Promotion untuk 3 cabang klinik kami.',
    privacyConsent: true,
    locale: 'id',
    createdAt: '2026-11-01T09:15:00.000Z',
    syncedToSheets: true,
    emailNotificationSent: true,
  },
  {
    id: 'NEO-2026-0102',
    fullName: 'Ir. Hendra Kusuma, M.Kes',
    businessEmail: 'procurement@rsbaktihusada.co.id',
    phone: '+62 811 2233 4455',
    organisation: 'RS Bakti Husada Utama',
    countryCity: 'Bandung, Jawa Barat',
    category: 'Business & Strategic Partnerships',
    productInterest: 'Neolyte SN / DS Hygiene Line',
    message:
      'Mohon penawaran resmi untuk pengadaan rutin Neolyte DS (5000ml) dan Neolyte SN (500ml & 1000ml) berizin Kemenkes RI PKD untuk kebutuhan sterilisasi ruang tindakan dan poliklinik.',
    privacyConsent: true,
    locale: 'id',
    createdAt: '2026-11-02T03:40:00.000Z',
    syncedToSheets: true,
    emailNotificationSent: true,
  },
];

function ensureEnquiriesLoaded(): EnquiryRecord[] {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(ENQUIRIES_FILE)) {
      fs.writeFileSync(ENQUIRIES_FILE, JSON.stringify(SEED_ENQUIRIES, null, 2), 'utf-8');
      return [...SEED_ENQUIRIES];
    }
    const raw = fs.readFileSync(ENQUIRIES_FILE, 'utf-8');
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [...SEED_ENQUIRIES];
  } catch (err) {
    console.error('Error loading enquiries file:', err);
    return [...SEED_ENQUIRIES];
  }
}

function saveEnquiries(enquiries: EnquiryRecord[]): void {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(ENQUIRIES_FILE, JSON.stringify(enquiries, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error saving enquiries file:', err);
  }
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: '1mb' }));

  // Health & system config endpoint
  app.get('/api/health', (_req, res) => {
    res.json({
      status: 'ok',
      company: 'PT Neomedika Elektra Optima',
      brand: 'NEO',
      corporateRecipientEmail: process.env.CORPORATE_EMAIL || 'helas.m@gmail.com',
    });
  });

  // SEO robots.txt & sitemap.xml per Document 04 Section 5
  app.get('/robots.txt', (req, res) => {
    const baseUrl = process.env.APP_URL || `${req.protocol}://${req.get('host')}`;
    res.type('text/plain').send(`User-agent: *\nAllow: /\nSitemap: ${baseUrl}/sitemap.xml\n`);
  });

  app.get('/sitemap.xml', (req, res) => {
    const baseUrl = process.env.APP_URL || `${req.protocol}://${req.get('host')}`;
    const pages = ['', '#about', '#business', '#khayr', '#neolyte', '#technology', '#partnerships', '#insights', '#contact'];
    const urlsXml = pages
      .map(
        (slug) => `
  <url>
    <loc>${baseUrl}/${slug}</loc>
    <changefreq>weekly</changefreq>
    <priority>${slug === '' ? '1.0' : '0.8'}</priority>
  </url>`
      )
      .join('');
    res.type('application/xml').send(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlsXml}\n</urlset>`);
  });

  // GET all enquiries stored in PT Neomedika Elektra Optima system
  app.get('/api/enquiries', (_req, res) => {
    const list = ensureEnquiriesLoaded();
    res.json({
      enquiries: list,
      corporateEmail: process.env.CORPORATE_EMAIL || 'helas.m@gmail.com',
    });
  });

  // POST a new enquiry from the Contact NEO form
  app.post('/api/enquiries', (req, res) => {
    const body = req.body || {};
    const locale: Locale = body.locale === 'en' ? 'en' : 'id';

    const input: EnquiryInput = {
      fullName: String(body.fullName || ''),
      businessEmail: String(body.businessEmail || ''),
      phone: body.phone ? String(body.phone) : '',
      organisation: body.organisation ? String(body.organisation) : '',
      countryCity: body.countryCity ? String(body.countryCity) : 'Indonesia',
      category: String(body.category || 'General'),
      productInterest: String(body.productInterest || 'General NEO Enquiry'),
      message: String(body.message || ''),
      privacyConsent: Boolean(body.privacyConsent),
    };

    const validation = validateEnquiryInput(input, locale);
    if (!validation.valid) {
      res.status(400).json({
        error: locale === 'id' ? 'Validasi formulir gagal.' : 'Form validation failed.',
        fieldErrors: validation.errors,
      });
      return;
    }

    const list = ensureEnquiriesLoaded();
    const nextNum = 101 + list.length;
    const newRecord: EnquiryRecord = {
      ...input,
      id: `NEO-2026-${String(nextNum).padStart(4, '0')}`,
      locale,
      createdAt: new Date().toISOString(),
      syncedToSheets: Boolean(body.syncedToSheets),
      emailNotificationSent: Boolean(body.emailNotificationSent),
      spreadsheetUrl: body.spreadsheetUrl ? String(body.spreadsheetUrl) : undefined,
    };

    const updated = [newRecord, ...list];
    saveEnquiries(updated);

    res.status(201).json({
      enquiry: newRecord,
      total: updated.length,
    });
  });

  // PATCH an enquiry when synced to Google Sheets or Gmail notification is dispatched
  app.patch('/api/enquiries/:id', (req, res) => {
    const { id } = req.params;
    const list = ensureEnquiriesLoaded();
    const idx = list.findIndex((item) => item.id === id);
    if (idx === -1) {
      res.status(404).json({ error: 'Enquiry not found' });
      return;
    }

    const updatedRecord: EnquiryRecord = {
      ...list[idx],
      syncedToSheets:
        typeof req.body.syncedToSheets === 'boolean' ? req.body.syncedToSheets : list[idx].syncedToSheets,
      emailNotificationSent:
        typeof req.body.emailNotificationSent === 'boolean'
          ? req.body.emailNotificationSent
          : list[idx].emailNotificationSent,
      spreadsheetUrl: req.body.spreadsheetUrl || list[idx].spreadsheetUrl,
    };

    list[idx] = updatedRecord;
    saveEnquiries(list);
    res.json({ enquiry: updatedRecord });
  });

  // DELETE an enquiry (requires explicit confirmation in UI)
  app.delete('/api/enquiries/:id', (req, res) => {
    const { id } = req.params;
    const list = ensureEnquiriesLoaded();
    const filtered = list.filter((item) => item.id !== id);
    saveEnquiries(filtered);
    res.json({ deletedId: id, total: filtered.length });
  });

  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`PT Neomedika Elektra Optima (NEO) server running at http://localhost:${PORT}`);
  });
}

startServer();
