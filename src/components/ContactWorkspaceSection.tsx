import React, { useState, useEffect } from 'react';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Mail,
  MapPin,
  Building2,
} from 'lucide-react';
import type { SiteContent } from '../data/content';
import {
  validateEnquiryInput,
  type EnquiryInput,
  type EnquiryRecord,
  type Locale,
} from '../utils/neomedikaLogic';

interface ContactWorkspaceSectionProps {
  content: SiteContent['contact'];
  locale: Locale;
  prefilledCategory: string;
  prefilledProduct: string;
  onOpenPrivacyNotice?: () => void;
}

export function ContactWorkspaceSection({
  content,
  locale,
  prefilledCategory,
  prefilledProduct,
  onOpenPrivacyNotice,
}: ContactWorkspaceSectionProps) {
  const [formData, setFormData] = useState<EnquiryInput>({
    fullName: '',
    roleTitle: '',
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
      setLastSubmitted(created);

      setFormData((prev) => ({
        ...prev,
        fullName: '',
        roleTitle: '',
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
            ? `Terima kasih! Pertanyaan korporat Anda (Nomor Referensi: ${created.id}) telah diterima oleh PT Neomedika Elektra Optima.`
            : `Thank you! Your corporate enquiry (Reference ID: ${created.id}) has been received by PT Neomedika Elektra Optima.`,
      });
    } catch (err: any) {
      setStatusBanner({
        tone: 'error',
        text:
          err?.message ||
          (locale === 'id' ? 'Gagal mengirim formulir.' : 'Failed to submit form.'),
      });
    } finally {
      setIsSubmitting(false);
    }
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
          {/* Left 8 Columns: Official Corporate Enquiry & Partnership Form */}
          <div className="lg:col-span-8 bg-white border border-[#EAE4F2] rounded-3xl p-7 sm:p-9">
            <h3 className="font-display text-2xl font-bold text-[#381B37]">
              {content.formTitle}
            </h3>
            <p className="mt-1.5 text-xs sm:text-sm text-[#666666]">{content.formSubtitle}</p>

            {/* Patient Data Protection Notice (Mandatory per Section 5.1 of Revision Master Doc) */}
            <div className="mt-6 p-4 rounded-2xl bg-[#FAF8FC] border border-[#D9CEE6] flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#903595] shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-[#342077]">
                  {content.patientDataNoticeTitle}
                </div>
                <p className="text-xs text-[#381B37] mt-1 leading-relaxed">
                  {content.patientDataNoticeText}
                </p>
              </div>
            </div>

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

                {/* Role / Title */}
                <div>
                  <label
                    htmlFor="neo-roletitle"
                    className="block text-xs font-bold text-[#381B37] mb-1.5"
                  >
                    {content.fields.roleTitle}
                  </label>
                  <input
                    id="neo-roletitle"
                    type="text"
                    value={formData.roleTitle || ''}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, roleTitle: e.target.value }))
                    }
                    placeholder={content.fields.roleTitlePlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D9CEE6] text-sm text-[#381B37] bg-[#FAF8FC] focus:bg-white focus:border-[#903595] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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

                {/* Phone / WhatsApp */}
                <div>
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
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Company / Institution / Clinic Name */}
                <div>
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
                <div>
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

              {/* Privacy Consent Checkbox + Link to Privacy Notice */}
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
                    {content.fields.privacyConsent}{' '}
                    {onOpenPrivacyNotice && (
                      <button
                        type="button"
                        onClick={onOpenPrivacyNotice}
                        className="font-bold text-[#903595] hover:text-[#342077] underline cursor-pointer"
                      >
                        ({content.fields.privacyNoticeLinkLabel})
                      </button>
                    )}
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
                  <span>REFERENCE ID: {lastSubmitted.id}</span>
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

          {/* Right 4 Columns: Official Corporate Contact Information Card */}
          <div className="lg:col-span-4 space-y-5">
            <div className="bg-white border border-[#EAE4F2] rounded-3xl p-7">
              <div className="text-xs font-bold text-[#903595] uppercase tracking-wider mb-2">
                {locale === 'id' ? 'Saluran Komunikasi Resmi' : 'Official Corporate Channels'}
              </div>
              <h3 className="font-display text-xl font-bold text-[#381B37]">
                PT Neomedika Elektra Optima
              </h3>
              <p className="text-xs text-[#666666] mt-1">
                NEO — Integrated Healthcare Technology
              </p>

              <div className="mt-6 space-y-4 pt-5 border-t border-[#EAE4F2]">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#903595] shrink-0 mt-1" />
                  <div>
                    <div className="text-xs font-semibold text-[#666666]">
                      {locale === 'id' ? 'Email Korporat & Umum' : 'Corporate & General Email'}
                    </div>
                    <a
                      href="mailto:info@neomedika.com"
                      className="text-sm font-bold text-[#342077] hover:text-[#EE498E] transition-colors"
                    >
                      info@neomedika.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Building2 className="w-4 h-4 text-[#903595] shrink-0 mt-1" />
                  <div>
                    <div className="text-xs font-semibold text-[#666666]">
                      {locale === 'id' ? 'Email Kemitraan Strategis' : 'Strategic Partnerships'}
                    </div>
                    <a
                      href="mailto:partnerships@neomedika.com"
                      className="text-sm font-bold text-[#342077] hover:text-[#EE498E] transition-colors"
                    >
                      partnerships@neomedika.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#903595] shrink-0 mt-1" />
                  <div>
                    <div className="text-xs font-semibold text-[#666666]">
                      {locale === 'id' ? 'Domisili Korporat' : 'Corporate Jurisdiction'}
                    </div>
                    <div className="text-sm font-bold text-[#381B37]">Jakarta, Indonesia</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#342077] text-white rounded-3xl p-7">
              <div className="text-xs font-semibold text-[#EE498E] uppercase tracking-wider mb-2">
                {locale === 'id' ? 'Kategori Pertanyaan' : 'Enquiry Categories'}
              </div>
              <ul className="space-y-2 text-xs text-white/85">
                {content.categories.map((cat) => (
                  <li key={cat} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#EE498E] shrink-0" />
                    <span>{cat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
