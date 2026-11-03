export type Locale = 'id' | 'en';

export type DilutionRatioKey = '1:5' | '1:4' | '1:3' | '1:2' | '1:1' | 'undiluted';

export interface DilutionResult {
  ratioKey: DilutionRatioKey;
  totalVolumeMl: number;
  neolyteDsMl: number;
  waterMl: number;
  neolyteDsLiters: number;
  waterLiters: number;
  effectivePpm: number;
  phRange: string;
  applicationId: string;
  applicationEn: string;
}

export interface EnquiryInput {
  fullName: string;
  businessEmail: string;
  phone?: string;
  organisation?: string;
  countryCity?: string;
  category: string;
  productInterest: string;
  message: string;
  privacyConsent: boolean;
}

export interface EnquiryRecord extends EnquiryInput {
  id: string;
  locale: Locale;
  createdAt: string;
  syncedToSheets: boolean;
  emailNotificationSent: boolean;
  spreadsheetUrl?: string;
}

export interface ValidationResult {
  valid: boolean;
  errors: Partial<Record<keyof EnquiryInput | 'sensitiveWarning', string>>;
}

const DILUTION_SPECS: Record<
  DilutionRatioKey,
  {
    neolyteParts: number;
    waterParts: number;
    applicationId: string;
    applicationEn: string;
  }
> = {
  '1:5': {
    neolyteParts: 1,
    waterParts: 5,
    applicationId:
      'Sterilisasi perlengkapan bayi (dot, mainan bayi) dan sterilisasi bahan makanan segar (sayur, daging, ikan, buah).',
    applicationEn:
      'Sterilization of baby items (pacifiers, baby toys) and fresh food ingredients (vegetables, meat, fish, fruit).',
  },
  '1:4': {
    neolyteParts: 1,
    waterParts: 4,
    applicationId:
      'Sterilisasi peralatan dapur (piring, botol, sendok), barang pribadi (sikat gigi, kacamata, alat kosmetik), serta purifikasi udara dengan Humidifier/Diffuser.',
    applicationEn:
      'Sterilization of kitchenware (plates, bottles, utensils), personal items (toothbrushes, glasses, cosmetic tools), and air purification via Humidifier/Diffuser.',
  },
  '1:3': {
    neolyteParts: 1,
    waterParts: 3,
    applicationId:
      'Bilik Sterilisasi (Disinfectant Chamber / Neogate), sanitasi area hewan peliharaan & tanaman, serta disinfeksi perabot rumah tangga (meubelair, elektronik, pakaian).',
    applicationEn:
      'Disinfectant Chamber (Neogate), pet & plant area sanitization, and household furniture/surface disinfection (furniture, electronics, clothing).',
  },
  '1:2': {
    neolyteParts: 1,
    waterParts: 2,
    applicationId:
      'Disinfeksi ruang publik (mall, perkantoran, bioskop, toko, lift) serta sterilisasi kemasan makanan dan minuman.',
    applicationEn:
      'Public space disinfection (malls, offices, cinemas, retail stores, elevators) and food/beverage packaging sterilization.',
  },
  '1:1': {
    neolyteParts: 1,
    waterParts: 1,
    applicationId:
      'Disinfeksi fasilitas layanan kesehatan: Rumah Sakit, Klinik Gigi, Puskesmas, Laboratorium, dan Ruang Isolasi.',
    applicationEn:
      'Healthcare facility disinfection: Hospitals, Dental Clinics, Community Health Centers (Puskesmas), Laboratories, and Isolation Rooms.',
  },
  undiluted: {
    neolyteParts: 1,
    waterParts: 0,
    applicationId:
      'Tanpa pengenceran: Disinfeksi berat pada tempat pengolahan sampah, pengolahan limbah, peternakan, perkebunan, dan toilet publik.',
    applicationEn:
      'Undiluted: Heavy-duty disinfection for waste management sites, sewage treatment, livestock farms, plantations, and public restrooms.',
  },
};

/**
 * Calculates exact Neolyte DS (220 ppm base) and Aquades/RO Water volumes
 * based on the official Neolyte Indonesia Dilution Guide (Page 11).
 */
export function calculateNeolyteDilution(
  ratioKey: DilutionRatioKey,
  totalVolumeMl: number,
  basePpm = 220
): DilutionResult {
  const safeTotalMl = Number.isFinite(totalVolumeMl) && totalVolumeMl > 0 ? Math.min(totalVolumeMl, 1_000_000) : 1000;
  const spec = DILUTION_SPECS[ratioKey] || DILUTION_SPECS['1:4'];
  const totalParts = spec.neolyteParts + spec.waterParts;

  const neolyteDsMl = Math.round((safeTotalMl * spec.neolyteParts) / totalParts);
  const waterMl = Math.max(0, Math.round(safeTotalMl - neolyteDsMl));
  const effectivePpm = Math.round(basePpm * (spec.neolyteParts / totalParts));

  return {
    ratioKey,
    totalVolumeMl: Math.round(safeTotalMl),
    neolyteDsMl,
    waterMl,
    neolyteDsLiters: Number((neolyteDsMl / 1000).toFixed(2)),
    waterLiters: Number((waterMl / 1000).toFixed(2)),
    effectivePpm,
    phRange: '6,0 – 7,0',
    applicationId: spec.applicationId,
    applicationEn: spec.applicationEn,
  };
}

/**
 * Validates corporate contact & partnership enquiry input according to
 * Document 04 (Website Features & Technical Requirements).
 */
export function validateEnquiryInput(input: EnquiryInput, locale: Locale = 'id'): ValidationResult {
  const errors: ValidationResult['errors'] = {};

  const fullName = (input.fullName || '').trim();
  const businessEmail = (input.businessEmail || '').trim();
  const message = (input.message || '').trim();
  const category = (input.category || '').trim();

  if (fullName.length < 2) {
    errors.fullName =
      locale === 'id' ? 'Nama lengkap wajib diisi (minimal 2 karakter).' : 'Full name is required (minimum 2 characters).';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!businessEmail || !emailRegex.test(businessEmail)) {
    errors.businessEmail =
      locale === 'id' ? 'Masukkan alamat email bisnis/institusi yang valid.' : 'Please enter a valid business email address.';
  }

  if (input.phone && input.phone.trim().length > 0) {
    const cleanedPhone = input.phone.replace(/[\s\-()]/g, '');
    if (!/^\+?[0-9]{7,16}$/.test(cleanedPhone)) {
      errors.phone =
        locale === 'id'
          ? 'Format nomor telepon/WhatsApp tidak valid (gunakan angka, mis. +62812...).'
          : 'Invalid phone/WhatsApp format (use digits, e.g. +62812...).';
    }
  }

  if (!category) {
    errors.category = locale === 'id' ? 'Pilih kategori pertanyaan.' : 'Please select an enquiry category.';
  }

  if (message.length < 10) {
    errors.message =
      locale === 'id'
        ? 'Pesan wajib diisi (minimal 10 karakter agar tim kami memahami kebutuhan Anda).'
        : 'Message is required (minimum 10 characters so our team understands your needs).';
  }

  // Document 04 Section 2 guardrail: Do not collect sensitive patient medical records
  const sensitivePattern = /\b(nik\s*pasien|rekam\s*medis\s*pasien|diagnosis\s*pasien|patient\s*medical\s*record|hiv|bpjs\s*no)\b/i;
  if (sensitivePattern.test(message)) {
    errors.message =
      locale === 'id'
        ? 'Sesuai kebijakan privasi NEO, mohon tidak mencantumkan data rekam medis atau informasi kesehatan sensitif pasien pada formulir publik.'
        : 'In accordance with NEO privacy governance, please do not include patient medical records or sensitive personal health data in public forms.';
  }

  if (!input.privacyConsent) {
    errors.privacyConsent =
      locale === 'id'
        ? 'Anda harus menyetujui ketentuan pemrosesan data dan privasi PT Neomedika Elektra Optima.'
        : 'You must acknowledge PT Neomedika Elektra Optima’s privacy and data handling notice.';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Formats an EnquiryRecord into a row array for Google Sheets append.
 */
export function formatEnquiryForSheetsRow(enquiry: EnquiryRecord): string[] {
  return [
    enquiry.id,
    enquiry.createdAt,
    enquiry.fullName,
    enquiry.businessEmail,
    enquiry.phone || '-',
    enquiry.organisation || '-',
    enquiry.countryCity || 'Indonesia',
    enquiry.category,
    enquiry.productInterest,
    enquiry.message,
    enquiry.locale.toUpperCase(),
  ];
}

/**
 * Exports a list of EnquiryRecord items to RFC 4180 CSV string.
 */
export function formatEnquiriesToCsv(enquiries: EnquiryRecord[]): string {
  const headers = [
    'ID',
    'Timestamp',
    'Full Name',
    'Business Email',
    'Phone / WhatsApp',
    'Organisation',
    'Location / Market',
    'Category',
    'Product Interest',
    'Message',
    'Locale',
    'Synced to Google Sheets',
    'Email Notification Sent',
  ];

  const escapeCsvCell = (val: string) => {
    const safe = String(val ?? '').replace(/"/g, '""');
    return `"${safe}"`;
  };

  const rows = enquiries.map((e) =>
    [
      ...formatEnquiryForSheetsRow(e),
      e.syncedToSheets ? 'Yes' : 'No',
      e.emailNotificationSent ? 'Yes' : 'No',
    ]
      .map(escapeCsvCell)
      .join(',')
  );

  return [headers.map(escapeCsvCell).join(','), ...rows].join('\n');
}

/**
 * Encodes a UTF-8 string into Base64URL (RFC 4648) suitable for Gmail API `raw` field.
 */
export function toBase64Url(str: string): string {
  const bytes = new TextEncoder().encode(str);
  let binary = '';
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  const base64 =
    typeof btoa === 'function' ? btoa(binary) : Buffer.from(str, 'utf-8').toString('base64');
  return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

/**
 * Builds an RFC 2822 raw MIME message encoded in Base64URL for the Gmail API
 * so that PT Neomedika Elektra Optima receives structured email notifications
 * and/or sends confirmation emails.
 */
export function buildGmailRawMimeMessage(params: {
  to: string;
  cc?: string;
  subject: string;
  enquiry: EnquiryRecord;
}): string {
  const { to, cc, subject, enquiry } = params;

  const htmlBody = `
<div style="font-family: Arial, sans-serif; color: #381B37; max-width: 640px; margin: 0 auto; border: 1px solid #EAE4F2; border-radius: 12px; overflow: hidden;">
  <div style="background: linear-gradient(135deg, #EE498E 0%, #903595 55%, #342077 100%); padding: 24px; color: #FFFFFF;">
    <div style="font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; opacity: 0.9;">PT Neomedika Elektra Optima (NEO)</div>
    <h2 style="margin: 8px 0 0; font-size: 20px;">Notifikasi Formulir Kontak & Kemitraan Baru</h2>
  </div>
  <div style="padding: 24px; background: #FFFFFF;">
    <p style="margin-top: 0; color: #666666; font-size: 14px;">Data prospek / pertanyaan baru telah diterima melalui portal resmi PT Neomedika Elektra Optima:</p>
    <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin: 16px 0;">
      <tr><td style="padding: 8px 0; color: #666666; width: 170px;"><strong>ID Referensi</strong></td><td style="padding: 8px 0; color: #381B37; font-family: monospace;">${enquiry.id}</td></tr>
      <tr><td style="padding: 8px 0; color: #666666;"><strong>Waktu Masuk</strong></td><td style="padding: 8px 0; color: #381B37;">${enquiry.createdAt}</td></tr>
      <tr><td style="padding: 8px 0; color: #666666;"><strong>Nama Lengkap</strong></td><td style="padding: 8px 0; color: #381B37;">${enquiry.fullName}</td></tr>
      <tr><td style="padding: 8px 0; color: #666666;"><strong>Email Bisnis</strong></td><td style="padding: 8px 0; color: #381B37;">${enquiry.businessEmail}</td></tr>
      <tr><td style="padding: 8px 0; color: #666666;"><strong>Telepon / WhatsApp</strong></td><td style="padding: 8px 0; color: #381B37;">${enquiry.phone || '-'}</td></tr>
      <tr><td style="padding: 8px 0; color: #666666;"><strong>Organisasi / Klinik</strong></td><td style="padding: 8px 0; color: #381B37;">${enquiry.organisation || '-'}</td></tr>
      <tr><td style="padding: 8px 0; color: #666666;"><strong>Lokasi / Pasar</strong></td><td style="padding: 8px 0; color: #381B37;">${enquiry.countryCity || 'Indonesia'}</td></tr>
      <tr><td style="padding: 8px 0; color: #666666;"><strong>Kategori</strong></td><td style="padding: 8px 0; color: #903595; font-weight: bold;">${enquiry.category}</td></tr>
      <tr><td style="padding: 8px 0; color: #666666;"><strong>Minat Produk</strong></td><td style="padding: 8px 0; color: #EE498E; font-weight: bold;">${enquiry.productInterest}</td></tr>
    </table>
    <div style="background: #FAF8FC; border: 1px solid #EAE4F2; border-radius: 8px; padding: 16px; margin-top: 16px;">
      <div style="font-size: 12px; color: #666666; margin-bottom: 6px;"><strong>Pesan / Kebutuhan:</strong></div>
      <div style="font-size: 14px; color: #381B37; white-space: pre-wrap; line-height: 1.5;">${enquiry.message}</div>
    </div>
    <p style="margin-top: 20px; margin-bottom: 0; font-size: 12px; color: #666666;">
      Email otomatis ini dikirim melalui sistem integrasi Google Workspace PT Neomedika Elektra Optima — Trusted Healthcare Solutions.
    </p>
  </div>
</div>`.trim();

  const headers = [
    `To: ${to}`,
    ...(cc ? [`Cc: ${cc}`] : []),
    `Reply-To: ${enquiry.businessEmail}`,
    `Subject: ${subject}`,
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset="UTF-8"',
  ];

  const mimeMessage = `${headers.join('\r\n')}\r\n\r\n${htmlBody}`;
  return toBase64Url(mimeMessage);
}
