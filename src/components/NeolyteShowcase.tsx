import React, { useState } from 'react';
import {
  ShieldCheck,
  Droplets,
  Sparkles,
  CheckCircle2,
  FlaskConical,
  Calculator,
  ArrowRight,
  Award,
} from 'lucide-react';
import type { SiteContent } from '../data/content';
import {
  calculateNeolyteDilution,
  type DilutionRatioKey,
  type Locale,
} from '../utils/neomedikaLogic';

interface NeolyteShowcaseProps {
  content: SiteContent['neolyte'];
  locale: Locale;
  onSelectEnquiry: (category: string, productInterest: string) => void;
}

const RATIO_OPTIONS: { key: DilutionRatioKey; labelId: string; labelEn: string }[] = [
  { key: '1:5', labelId: '1 : 5 (Perlengkapan Bayi & Pangan)', labelEn: '1 : 5 (Baby Items & Fresh Food)' },
  { key: '1:4', labelId: '1 : 4 (Alat Dapur & Diffuser Udara)', labelEn: '1 : 4 (Kitchenware & Air Diffuser)' },
  { key: '1:3', labelId: '1 : 3 (Bilik Neogate & Rumah Tangga)', labelEn: '1 : 3 (Neogate Chamber & Home)' },
  { key: '1:2', labelId: '1 : 2 (Ruang Publik, Mall & Kantor)', labelEn: '1 : 2 (Public Spaces, Malls & Offices)' },
  { key: '1:1', labelId: '1 : 1 (Rumah Sakit, Klinik & Puskesmas)', labelEn: '1 : 1 (Hospitals, Dental & Clinics)' },
  { key: 'undiluted', labelId: 'Tanpa Pengenceran (Limbah & Toilet Publik)', labelEn: 'Undiluted (Waste & Public Sanitation)' },
];

const VOLUME_PRESETS_ML = [500, 1000, 2000, 5000, 10000];

export function NeolyteShowcase({ content, locale, onSelectEnquiry }: NeolyteShowcaseProps) {
  const [selectedRatio, setSelectedRatio] = useState<DilutionRatioKey>('1:1');
  const [targetVolumeMl, setTargetVolumeMl] = useState<number>(1000);
  const [selectedSnSize, setSelectedSnSize] = useState<string>('500 ml');
  const [selectedDsSize, setSelectedDsSize] = useState<string>('5000 ml');

  const dilution = calculateNeolyteDilution(selectedRatio, targetVolumeMl, 220);

  return (
    <section
      id="neolyte"
      aria-labelledby="neolyte-heading"
      className="py-24 bg-white border-t border-[#EAE4F2]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Editorial Header */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 pb-12 border-b border-[#EAE4F2]">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#666666] mb-3">
              <span className="text-[#903595] font-semibold">{content.sectionNumber}</span>
              <span aria-hidden="true">·</span>
              <span>{content.kicker}</span>
            </div>
            <h2
              id="neolyte-heading"
              className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#381B37] leading-[1.15] text-balance"
            >
              {content.heading}
            </h2>
            <p className="mt-3 text-lg font-semibold text-[#189AB4]">{content.tagline}</p>
            <p className="mt-4 text-base text-[#666666] leading-relaxed max-w-[68ch]">
              {content.lead}
            </p>
          </div>

          <div className="flex flex-col items-start lg:items-end justify-between lg:self-stretch gap-6 shrink-0">
            <img
              src="/assets/aistudio/Neollyte_logo_2K_379f6785.png"
              alt="Neolyte™"
              className="h-14 sm:h-16 lg:h-[68px] w-auto max-w-[220px] sm:max-w-[250px] object-contain object-left lg:object-right mix-blend-multiply select-none"
            />
            <button
              type="button"
              onClick={() =>
                onSelectEnquiry('Healthcare Solutions', 'Neolyte SN / DS Hygiene Line')
              }
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-[#EE498E] via-[#903595] to-[#342077] hover:opacity-95 transition-opacity whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>{content.enquireCta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Clinical Quote & 4 Safety Pillars Banner (Baby Safe, Food Grade, 0% Alcohol, Non-Toxic) */}
        <div className="mt-12 bg-[#FAF8FC] border border-[#EAE4F2] rounded-2xl p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <blockquote className="text-base sm:text-lg font-medium text-[#381B37] leading-relaxed">
              {content.scienceQuote}
            </blockquote>
            <p className="mt-3 text-xs text-[#666666]">{content.scienceSource}</p>
          </div>
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3">
            {[
              { title: 'BABY SAFE', sub: locale === 'id' ? 'Aman untuk Bayi' : 'Safe for Infants' },
              { title: 'FOOD GRADE', sub: locale === 'id' ? 'Aman Kontak Pangan' : 'Food Contact Safe' },
              { title: '0% ALCOHOL', sub: locale === 'id' ? 'Bebas Alkohol & Iritasi' : 'Non-Irritating' },
              { title: 'NON-TOXIC', sub: locale === 'id' ? 'Ramah Lingkungan' : 'Eco-Friendly HOCl' },
            ].map((badge) => (
              <div
                key={badge.title}
                className="bg-white border border-[#D9CEE6] rounded-xl p-3.5 text-center"
              >
                <div className="font-mono text-xs font-extrabold text-[#342077] tracking-wide">
                  {badge.title}
                </div>
                <div className="text-[11px] text-[#666666] mt-0.5">{badge.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Core Advantages */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {content.coreAdvantages.map((adv, idx) => (
            <div
              key={adv.title}
              className="bg-white border border-[#EAE4F2] rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-mono font-semibold text-[#903595] mb-2 tabular-nums">
                  0{idx + 1} · {adv.subtitle}
                </div>
                <h3 className="font-display text-lg font-bold text-[#381B37] mb-2">
                  {adv.title}
                </h3>
                <p className="text-sm text-[#666666] leading-relaxed">{adv.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Product Line Comparison: Neolyte SN vs Neolyte DS */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {content.variants.map((variant) => {
            const isSN = variant.code === 'SN';
            const selectedSize = isSN ? selectedSnSize : selectedDsSize;
            const setSelectedSize = isSN ? setSelectedSnSize : setSelectedDsSize;

            return (
              <div
                key={variant.code}
                className="bg-[#FAF8FC] border border-[#D9CEE6] rounded-3xl p-7 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  {/* Top unboxed metadata */}
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#666666] pb-4 mb-5 border-b border-[#EAE4F2]">
                    <span className="font-semibold text-[#381B37]">{variant.category}</span>
                    <span className="font-mono font-bold text-[#342077] tabular-nums">
                      {variant.kemenkesNo}
                    </span>
                  </div>

                  {/* Product Header + Custom Vector Bottle Illustration */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-6">
                    <div>
                      <div className="inline-flex items-baseline gap-2">
                        <span className="font-display text-2xl sm:text-3xl font-extrabold text-[#189AB4]">
                          Neolyte
                        </span>
                        <span
                          className={`font-display text-xl font-extrabold px-2.5 py-0.5 rounded-md text-white ${
                            isSN ? 'bg-[#65B741]' : 'bg-[#189AB4]'
                          }`}
                        >
                          {variant.code}
                        </span>
                      </div>
                      <h3 className="font-display text-xl font-bold text-[#381B37] mt-2">
                        {variant.name}
                      </h3>
                      <div className="mt-2 flex items-center gap-3 font-mono text-xs font-semibold text-[#342077] tabular-nums">
                        <span>{variant.ph}</span>
                        <span aria-hidden="true">·</span>
                        <span>{variant.ppm}</span>
                      </div>
                    </div>

                    {/* Product Packaging Visual */}
                    <div className="w-36 sm:w-40 rounded-2xl bg-white border border-[#EAE4F2] flex flex-col items-center justify-center p-2.5 shrink-0 self-center sm:self-auto overflow-hidden">
                      <img
                        src={
                          isSN
                            ? '/assets/aistudio/Neolyte_SN_69407702.png'
                            : '/assets/aistudio/Neolyte_DS_bcf3a6e4.png'
                        }
                        alt={`${variant.name} ${selectedSize}`}
                        className="w-full aspect-square object-contain select-none"
                      />
                      <span className="font-mono text-[11px] font-bold text-[#381B37] mt-1 tabular-nums">
                        {selectedSize}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-[#666666] leading-relaxed">{variant.description}</p>

                  {/* Key Use Cases */}
                  <ul className="mt-5 space-y-2">
                    {variant.useCases.map((uc) => (
                      <li key={uc} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#381B37]">
                        <CheckCircle2 className="w-4 h-4 text-[#903595] shrink-0 mt-0.5" />
                        <span>{uc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Interactive Packaging Volume Selector */}
                <div className="mt-7 pt-5 border-t border-[#EAE4F2]">
                  <div className="text-xs font-semibold text-[#666666] mb-2.5">
                    {locale === 'id'
                      ? 'Ukuran Kemasan Tersedia (Klik untuk pratinjau):'
                      : 'Available Packaging Sizes (Click to preview):'}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {variant.sizes.map((sz) => (
                      <button
                        key={sz}
                        type="button"
                        onClick={() => setSelectedSize(sz)}
                        className={`px-3 py-1.5 rounded-lg font-mono text-xs font-semibold transition-colors cursor-pointer tabular-nums whitespace-nowrap ${
                          selectedSize === sz
                            ? 'bg-[#342077] text-white'
                            : 'bg-white text-[#381B37] border border-[#D9CEE6] hover:border-[#903595]'
                        }`}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Official Certifications & Laboratory Test Results */}
        <div className="mt-16 bg-[#FAF8FC] border border-[#EAE4F2] rounded-3xl p-7 sm:p-10">
          <div className="max-w-3xl mb-8">
            <h3 className="font-display text-2xl font-bold text-[#381B37]">
              {content.certifications.title}
            </h3>
            <p className="mt-2 text-sm text-[#666666]">{content.certifications.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {content.certifications.items.map((cert) => (
              <div
                key={cert.title}
                className="bg-white border border-[#EAE4F2] rounded-2xl p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-semibold text-[#903595] mb-1.5">{cert.badge}</div>
                  <h4 className="font-mono text-base font-bold text-[#342077] tabular-nums">
                    {cert.title}
                  </h4>
                  <div className="mt-1 text-xs font-semibold text-[#381B37]">
                    {cert.reference}
                  </div>
                  <p className="mt-2.5 text-xs text-[#666666] leading-relaxed">{cert.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Neolyte DS Dilution Calculator & HOCl Comparison Split */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Interactive Dilution Calculator (Page 11 of Brochure) */}
          <div className="lg:col-span-7 bg-white border border-[#D9CEE6] rounded-3xl p-7 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#903595] mb-2">
                <Calculator className="w-4 h-4" />
                <span>
                  {locale === 'id'
                    ? 'Panduan Pengenceran Resmi Neolyte DS (Aquades / Air RO)'
                    : 'Official Neolyte DS Dilution Guide (Aquades / RO Water)'}
                </span>
              </div>
              <h3 className="font-display text-2xl font-bold text-[#381B37]">
                {content.dilutionCalculatorTitle}
              </h3>
              <p className="mt-2 text-sm text-[#666666]">{content.dilutionCalculatorSub}</p>

              {/* Step 1: Select Ratio */}
              <div className="mt-6">
                <label className="block text-xs font-bold text-[#381B37] mb-2">
                  {locale === 'id'
                    ? '1. Pilih Rasio Pengenceran (Neolyte DS : Air RO/Aquades)'
                    : '1. Select Dilution Ratio (Neolyte DS : RO Water/Aquades)'}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {RATIO_OPTIONS.map((opt) => {
                    const active = selectedRatio === opt.key;
                    return (
                      <button
                        key={opt.key}
                        type="button"
                        onClick={() => setSelectedRatio(opt.key)}
                        className={`px-3.5 py-2.5 rounded-xl border text-left text-xs font-semibold transition-colors cursor-pointer ${
                          active
                            ? 'bg-[#342077] text-white border-[#342077]'
                            : 'bg-[#FAF8FC] text-[#381B37] border-[#EAE4F2] hover:border-[#903595]'
                        }`}
                      >
                        {locale === 'id' ? opt.labelId : opt.labelEn}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Select or Input Total Solution Volume */}
              <div className="mt-6">
                <label
                  htmlFor="neolyte-volume-input"
                  className="block text-xs font-bold text-[#381B37] mb-2"
                >
                  {locale === 'id'
                    ? '2. Target Total Volume Larutan Siap Pakai (ml)'
                    : '2. Target Ready-to-Use Solution Volume (ml)'}
                </label>
                <div className="flex flex-wrap items-center gap-2">
                  {VOLUME_PRESETS_ML.map((vol) => (
                    <button
                      key={vol}
                      type="button"
                      onClick={() => setTargetVolumeMl(vol)}
                      className={`px-3 py-1.5 rounded-lg font-mono text-xs font-semibold border transition-colors cursor-pointer tabular-nums ${
                        targetVolumeMl === vol
                          ? 'bg-[#903595] text-white border-[#903595]'
                          : 'bg-white text-[#381B37] border-[#D9CEE6] hover:border-[#903595]'
                      }`}
                    >
                      {vol >= 1000 ? `${vol / 1000} L (${vol} ml)` : `${vol} ml`}
                    </button>
                  ))}
                  <input
                    id="neolyte-volume-input"
                    type="number"
                    min={100}
                    max={100000}
                    step={100}
                    value={targetVolumeMl}
                    onChange={(e) => setTargetVolumeMl(Number(e.target.value) || 1000)}
                    aria-label={
                      locale === 'id' ? 'Volume larutan dalam mililiter' : 'Solution volume in milliliters'
                    }
                    className="w-28 px-3 py-1.5 rounded-lg border border-[#D9CEE6] font-mono text-xs font-bold text-[#381B37] tabular-nums focus:outline-none focus:border-[#903595]"
                  />
                </div>
              </div>
            </div>

            {/* Calculated Output Panel */}
            <div className="mt-7 p-5 rounded-2xl bg-[#FAF8FC] border border-[#D9CEE6]">
              <div className="grid grid-cols-3 gap-4 pb-4 mb-4 border-b border-[#EAE4F2]">
                <div>
                  <div className="text-xs text-[#666666]">Neolyte DS (220 ppm)</div>
                  <div
                    data-testid="calc-neolyte-ml"
                    className="font-mono text-xl sm:text-2xl font-extrabold text-[#342077] mt-0.5 tabular-nums"
                  >
                    {dilution.neolyteDsMl} ml
                  </div>
                  <div className="font-mono text-[11px] text-[#666666] tabular-nums">
                    ({dilution.neolyteDsLiters} Liter)
                  </div>
                </div>
                <div>
                  <div className="text-xs text-[#666666]">
                    {locale === 'id' ? 'Aquades / Air RO' : 'Aquades / RO Water'}
                  </div>
                  <div
                    data-testid="calc-water-ml"
                    className="font-mono text-xl sm:text-2xl font-extrabold text-[#189AB4] mt-0.5 tabular-nums"
                  >
                    {dilution.waterMl} ml
                  </div>
                  <div className="font-mono text-[11px] text-[#666666] tabular-nums">
                    ({dilution.waterLiters} Liter)
                  </div>
                </div>
                <div>
                  <div className="text-xs text-[#666666]">
                    {locale === 'id' ? 'Konsentrasi Akhir' : 'Final Concentration'}
                  </div>
                  <div
                    data-testid="calc-ppm"
                    className="font-mono text-xl sm:text-2xl font-extrabold text-[#903595] mt-0.5 tabular-nums"
                  >
                    ~{dilution.effectivePpm} ppm
                  </div>
                  <div className="font-mono text-[11px] text-[#666666] tabular-nums">
                    pH {dilution.phRange}
                  </div>
                </div>
              </div>
              <div className="text-xs sm:text-sm text-[#381B37] leading-relaxed">
                <strong className="font-bold text-[#342077]">
                  {locale === 'id' ? 'Rekomendasi Aplikasi: ' : 'Recommended Application: '}
                </strong>
                <span>
                  {locale === 'id' ? dilution.applicationId : dilution.applicationEn}
                </span>
              </div>
            </div>
          </div>

          {/* Right: HOCl Product Comparison Matrix (Page 4 of Brochure) */}
          <div className="lg:col-span-5 bg-white border border-[#EAE4F2] rounded-3xl p-7 sm:p-8 flex flex-col justify-between">
            <div>
              <h3 className="font-display text-xl font-bold text-[#381B37]">
                {content.comparisonTitle}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#666666] leading-relaxed">
                {content.comparisonSub}
              </p>

              <div className="mt-6 space-y-4">
                {content.comparisons.map((cmp) => (
                  <div
                    key={cmp.agent}
                    className={`p-4 rounded-xl border ${
                      cmp.isNeolyte
                        ? 'bg-[#FAF8FC] border-[#903595]'
                        : 'bg-white border-[#EAE4F2]'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <span
                        className={`text-sm font-bold ${
                          cmp.isNeolyte ? 'text-[#342077]' : 'text-[#381B37]'
                        }`}
                      >
                        {cmp.agent}
                      </span>
                      <span className="font-mono text-xs font-semibold text-[#903595] tabular-nums">
                        {cmp.efficacy}
                      </span>
                    </div>
                    <p className="text-xs text-[#666666] mt-1">{cmp.safetyProfile}</p>
                    <div className="mt-2.5 w-full h-2 rounded-full bg-[#EAE4F2] overflow-hidden">
                      <div
                        className={`h-full rounded-full ${
                          cmp.isNeolyte
                            ? 'bg-gradient-to-r from-[#EE498E] to-[#342077]'
                            : 'bg-[#94A3B8]'
                        }`}
                        style={{ width: `${cmp.scorePercent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 6 Application Equipment & Neogate Showcase (Pages 12–13 of Brochure) */}
        <div className="mt-16">
          <div className="max-w-3xl mb-8">
            <h3 className="font-display text-2xl font-bold text-[#381B37]">
              {content.devicesTitle}
            </h3>
            <p className="mt-1.5 text-sm text-[#666666]">{content.devicesSub}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {content.devices.map((dev, idx) => (
              <div
                key={dev.name}
                className="bg-[#FAF8FC] border border-[#EAE4F2] rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-mono font-semibold text-[#903595] mb-1.5 tabular-nums">
                    0{idx + 1} · {dev.method}
                  </div>
                  <h4 className="font-display text-lg font-bold text-[#381B37] mb-2">
                    {dev.name}
                  </h4>
                  <p className="text-sm text-[#666666] leading-relaxed">{dev.useCase}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
