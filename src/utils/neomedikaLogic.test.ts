import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateNeolyteDilution,
  validateEnquiryInput,
  formatEnquiryForSheetsRow,
  buildGmailRawMimeMessage,
  formatEnquiriesToCsv,
  type EnquiryRecord,
} from './neomedikaLogic';

test('calculateNeolyteDilution computes accurate 1:4 ratio for 1000ml', () => {
  const result = calculateNeolyteDilution('1:4', 1000, 220);
  assert.equal(result.totalVolumeMl, 1000);
  assert.equal(result.neolyteDsMl, 200);
  assert.equal(result.waterMl, 800);
  assert.equal(result.effectivePpm, 44);
  assert.equal(result.neolyteDsLiters, 0.2);
  assert.equal(result.waterLiters, 0.8);
});

test('calculateNeolyteDilution computes accurate 1:1 hospital ratio for 5000ml', () => {
  const result = calculateNeolyteDilution('1:1', 5000, 220);
  assert.equal(result.neolyteDsMl, 2500);
  assert.equal(result.waterMl, 2500);
  assert.equal(result.effectivePpm, 110);
});

test('calculateNeolyteDilution computes undiluted ratio accurately', () => {
  const result = calculateNeolyteDilution('undiluted', 2000, 220);
  assert.equal(result.neolyteDsMl, 2000);
  assert.equal(result.waterMl, 0);
  assert.equal(result.effectivePpm, 220);
});

test('validateEnquiryInput rejects incomplete input and accepts valid corporate enquiry', () => {
  const invalid = validateEnquiryInput(
    {
      fullName: 'A',
      businessEmail: 'not-an-email',
      category: '',
      productInterest: 'KHAYR',
      message: 'short',
      privacyConsent: false,
    },
    'id'
  );
  assert.equal(invalid.valid, false);
  assert.ok(invalid.errors.fullName);
  assert.ok(invalid.errors.businessEmail);
  assert.ok(invalid.errors.category);
  assert.ok(invalid.errors.message);
  assert.ok(invalid.errors.privacyConsent);

  const valid = validateEnquiryInput(
    {
      fullName: 'drg. Rina Kusuma',
      businessEmail: 'rina@kliniksenyumsehat.co.id',
      phone: '+62 812 3456 7890',
      organisation: 'Klinik Gigi Senyum Sehat Jakarta',
      countryCity: 'Jakarta Selatan',
      category: 'Healthcare Solutions',
      productInterest: 'KHAYR Digital Dental Platform',
      message: 'Kami ingin menjadwalkan sesi demo KHAYR untuk 3 cabang klinik gigi kami di Jakarta.',
      privacyConsent: true,
    },
    'id'
  );
  assert.equal(valid.valid, true);
  assert.deepEqual(valid.errors, {});
});

test('validateEnquiryInput blocks sensitive patient medical records per Document 04 governance', () => {
  const withMedicalRecord = validateEnquiryInput(
    {
      fullName: 'Budi Santoso',
      businessEmail: 'budi@example.com',
      category: 'General',
      productInterest: 'KHAYR Digital Dental Platform',
      message: 'Berikut adalah rekam medis pasien dan diagnosis pasien untuk dikonsultasikan.',
      privacyConsent: true,
    },
    'id'
  );
  assert.equal(withMedicalRecord.valid, false);
  assert.ok(withMedicalRecord.errors.message?.includes('rekam medis'));
});

test('formatEnquiryForSheetsRow and buildGmailRawMimeMessage produce valid payloads', () => {
  const sampleRecord: EnquiryRecord = {
    id: 'NEO-2026-1001',
    fullName: 'Hendro Wijaya',
    businessEmail: 'hendro@rsmedika.id',
    phone: '+62811998877',
    organisation: 'RS Medika Nusantara',
    countryCity: 'Bandung',
    category: 'Healthcare Solutions',
    productInterest: 'Neolyte SN / DS Hygiene Line',
    message: 'Mohon informasi pengadaan Neolyte DS 5000ml dan unit Neogate untuk rumah sakit kami.',
    privacyConsent: true,
    locale: 'id',
    createdAt: '2026-11-02T10:00:00.000Z',
    syncedToSheets: true,
    emailNotificationSent: true,
  };

  const row = formatEnquiryForSheetsRow(sampleRecord);
  assert.equal(row.length, 11);
  assert.equal(row[0], 'NEO-2026-1001');
  assert.equal(row[2], 'Hendro Wijaya');
  assert.equal(row[8], 'Neolyte SN / DS Hygiene Line');

  const rawMime = buildGmailRawMimeMessage({
    to: 'helas.m@gmail.com',
    subject: '[NEO] Pertanyaan Baru - Hendro Wijaya',
    enquiry: sampleRecord,
  });
  assert.ok(rawMime.length > 50);
  assert.ok(!rawMime.includes('+'));
  assert.ok(!rawMime.includes('/'));
  assert.ok(!rawMime.includes('='));

  const csv = formatEnquiriesToCsv([sampleRecord]);
  assert.ok(csv.includes('"NEO-2026-1001"'));
  assert.ok(csv.includes('"RS Medika Nusantara"'));
});
