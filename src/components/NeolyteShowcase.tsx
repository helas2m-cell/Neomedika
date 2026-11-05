import React, { useState } from 'react';
import {
  CheckCircle2,
  Calculator,
  ArrowRight,
  AlertCircle,
  Droplets,
  ShieldCheck,
  FlaskConical,
  Sparkles,
} from 'lucide-react';
import { motion } from 'motion/react';
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
  {
    key: '1:5',
    labelId: '1 : 5 (Sanitasi Permukaan Ringan & Harian)',
    labelEn: '1 : 5 (Light Surface & Everyday Sanitization)',
  },
  {
    key: '1:4',
    labelId: '1 : 4 (Peralatan Rumah Tangga & Diffuser Ruangan)',
    labelEn: '1 : 4 (Household Equipment & Indoor Diffuser)',
  },
  {
    key: '1:3',
    labelId: '1 : 3 (Bilik Neogate & Permukaan Interior)',
    labelEn: '1 : 3 (Neogate Chamber & Interior Surfaces)',
  },
  {
    key: '1:2',
    labelId: '1 : 2 (Ruang Publik, Gedung & Kantor)',
    labelEn: '1 : 2 (Public Spaces, Buildings & Offices)',
  },
  {
    key: '1:1',
    labelId: '1 : 1 (Rumah Sakit, Klinik Gigi & Puskesmas)',
    labelEn: '1 : 1 (Hospitals, Dental & Outpatient Clinics)',
  },
  {
    key: 'undiluted',
    labelId: 'Tanpa Pengenceran (Area Utilitas & Sanitasi Berat)',
    labelEn: 'Undiluted (Heavy-Duty Utility Sanitation)',
  },
];

const VOLUME_PRESETS_ML = [500, 1000, 2000, 5000, 10000];

const ADVANTAGE_ICONS = [Droplets, ShieldCheck, FlaskConical, Sparkles];

export function NeolyteShowcase({ content, locale, onSelectEnquiry }: NeolyteShowcaseProps) {
  const [selectedRatio, setSelectedRatio] = useState<DilutionRatioKey>('1:1');
  const [targetVolumeMl, setTargetVolumeMl] = useState<number>(1000);
  const [selectedSnSize, setSelectedSnSize] = useState<string>('500 ml');
  const [selectedDsSize, setSelectedDsSize] = useState<string>('5000 ml');

  const dilution = calculateNeolyteDilution(selectedRatio, targetVolumeMl, 220);
  const neolytePercent = Math.round(
    (dilution.neolyteDsMl / Math.max(1, dilution.totalVolumeMl)) * 100
  );
  const waterPercent = Math.max(0, 100 - neolytePercent);

  return (
    <section
      id="neolyte"
      aria-labelledby="neolyte-heading"
      className="relative py-24 bg-white neolyte-section-mesh border-t border-[#EAE4F2] overflow-hidden"
    >
      {/* Decorative Ambient Teal & Green Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-16 left-1/3 w-96 h-96 rounded-full bg-gradient-to-tr from-[#189AB4]/10 via-[#65B741]/10 to-transparent blur-3xl neo-aura"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Editorial Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 pb-12 border-b border-[#EAE4F2]"
        >
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
            <p className="mt-3 text-lg font-semibold bg-gradient-to-r from-[#189AB4] via-[#65B741] to-[#342077] bg-clip-text text-transparent">
              {content.tagline}
            </p>
            <p className="mt-4 text-base text-[#666666] leading-relaxed max-w-[68ch]">
              {content.lead}
            </p>
          </div>

          <div className="flex flex-col items-start lg:items-end justify-start shrink-0">
            <div className="neo-float p-3 rounded-3xl bg-white/90 border border-[#D9CEE6] shadow-sm">
              <img
                src="/assets/aistudio/Neollyte_logo_2K_379f6785.png"
                alt="Neolyte™"
                className="h-[84px] sm:h-24 lg:h-[102px] w-auto max-w-[330px] sm:max-w-[375px] object-contain object-left lg:object-right mix-blend-multiply select-none"
              />
            </div>
          </div>
        </motion.div>

        {/* HOCl Formulation Overview & 4 Specification Pillars Banner */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
          className="mt-12 bg-gradient-to-r from-[#FAF8FC] via-white to-[#F0F9FB] border border-[#D9CEE6] rounded-3xl p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xs relative overflow-hidden"
        >
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#189AB4] via-[#65B741] to-[#903595]" />
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#189AB4] mb-2">
              <Droplets className="w-4 h-4 text-[#189AB4]" />
              <span>HOCl · HYPOCHLOROUS ACID WATER-BASED FORMULATION</span>
            </div>
            <p className="text-base sm:text-lg font-medium text-[#381B37] leading-relaxed">
              {content.scienceQuote}
            </p>
            <p className="mt-3 text-xs text-[#666666]">{content.scienceSource}</p>
          </div>
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3">
            {content.safetyPillars.map((badge, idx) => (
              <div
                key={badge.title}
                className="neo-card-teal-interactive bg-white border border-[#D9CEE6] rounded-xl p-3.5 text-center relative overflow-hidden"
              >
                <div
                  className={`mx-auto mb-1.5 w-6 h-1 rounded-full ${
                    idx % 2 === 0
                      ? 'bg-gradient-to-r from-[#189AB4] to-[#65B741]'
                      : 'bg-gradient-to-r from-[#903595] to-[#342077]'
                  }`}
                />
                <div className="font-mono text-xs font-extrabold text-[#342077] tracking-wide">
                  {badge.title}
                </div>
                <div className="text-[11px] text-[#666666] mt-0.5">{badge.sub}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 4 Core Advantages */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {content.coreAdvantages.map((adv, idx) => {
            const IconComp = ADVANTAGE_ICONS[idx % ADVANTAGE_ICONS.length];
            return (
              <motion.div
                key={adv.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="neo-card-teal-interactive relative bg-white border border-[#EAE4F2] rounded-2xl p-6 flex flex-col justify-between overflow-hidden group"
              >
                <div
                  className={`absolute top-0 inset-x-0 h-1.5 ${
                    idx % 2 === 0
                      ? 'bg-gradient-to-r from-[#189AB4] to-[#65B741]'
                      : 'bg-gradient-to-r from-[#65B741] via-[#189AB4] to-[#903595]'
                  }`}
                />
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3 pt-1">
                    <div className="text-xs font-mono font-semibold text-[#903595] tabular-nums">
                      0{idx + 1} · {adv.subtitle}
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-[#F0F9FB] border border-[#D4EEF3] flex items-center justify-center text-[#189AB4] group-hover:bg-[#189AB4] group-hover:text-white transition-colors shrink-0">
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#381B37] mb-2">
                    {adv.title}
                  </h3>
                  <p className="text-sm text-[#666666] leading-relaxed">{adv.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Product Line Comparison: Neolyte SN vs Neolyte DS with Floating Bottles */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {content.variants.map((variant) => {
            const isSN = variant.code === 'SN';
            const selectedSize = isSN ? selectedSnSize : selectedDsSize;
            const setSelectedSize = isSN ? setSelectedSnSize : setSelectedDsSize;

            return (
              <motion.div
                key={variant.code}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4 }}
                className="neo-card-teal-interactive relative bg-gradient-to-b from-[#FAF8FC] to-white border border-[#D9CEE6] rounded-3xl p-7 sm:p-8 flex flex-col justify-between overflow-hidden shadow-xs"
              >
                {/* Top Variant Accent Ribbon */}
                <div
                  className={`absolute top-0 inset-x-0 h-2 ${
                    isSN
                      ? 'bg-gradient-to-r from-[#65B741] via-[#189AB4] to-[#903595]'
                      : 'bg-gradient-to-r from-[#189AB4] via-[#342077] to-[#EE498E]'
                  }`}
                />

                <div>
                  {/* Top unboxed metadata */}
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#666666] pb-4 mb-5 border-b border-[#EAE4F2] pt-1">
                    <span className="font-semibold text-[#381B37]">{variant.category}</span>
                    <span className="font-mono font-bold text-[#342077] tabular-nums">
                      {variant.kemenkesNo}
                    </span>
                  </div>

                  {/* Product Header + Floating Product Packaging Visual */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-6">
                    <div>
                      <div className="inline-flex items-baseline gap-2">
                        <span className="font-display text-2xl sm:text-3xl font-extrabold text-[#189AB4]">
                          Neolyte
                        </span>
                        <span
                          className={`font-display text-xl font-extrabold px-2.5 py-0.5 rounded-md text-white shadow-xs ${
                            isSN ? 'bg-[#65B741]' : 'bg-[#189AB4]'
                          }`}
                        >
                          {variant.code}
                        </span>
                      </div>
                      <h3 className="font-display text-xl font-bold text-[#381B37] mt-2">
                        {variant.name}
                      </h3>
                      <div className="mt-2.5 inline-flex items-center gap-3 px-3 py-1 rounded-lg bg-white border border-[#D9CEE6] font-mono text-xs font-semibold text-[#342077] tabular-nums">
                        <span>{variant.ph}</span>
                        <span aria-hidden="true">·</span>
                        <span className={isSN ? 'text-[#65B741]' : 'text-[#189AB4]'}>
                          {variant.ppm}
                        </span>
                      </div>
                    </div>

                    {/* Product Packaging Visual (Preserved 20% Enlarged Size + Floating Animation) */}
                    <div
                      className={`relative w-[173px] sm:w-48 rounded-2xl bg-white border ${
                        isSN ? 'border-[#65B741]/40' : 'border-[#189AB4]/40'
                      } flex flex-col items-center justify-center p-2.5 shrink-0 self-center sm:self-auto overflow-hidden shadow-sm`}
                    >
                      {/* Soft Radial Aura Behind Bottle */}
                      <div
                        aria-hidden="true"
                        className={`pointer-events-none absolute inset-3 rounded-full blur-xl opacity-35 ${
                          isSN ? 'bg-[#65B741]' : 'bg-[#189AB4]'
                        }`}
                      />
                      <img
                        src={
                          isSN
                            ? '/assets/aistudio/Neolyte_SN_69407702.png'
                            : '/assets/aistudio/Neolyte_DS_bcf3a6e4.png'
                        }
                        alt={`${variant.name} ${selectedSize}`}
                        className={`relative w-full aspect-square object-contain select-none ${
                          isSN ? 'neo-float' : 'neo-float-delayed'
                        }`}
                      />
                      <span
                        className={`relative font-mono text-[11px] font-bold px-2.5 py-0.5 rounded-md text-white mt-1 tabular-nums ${
                          isSN ? 'bg-[#65B741]' : 'bg-[#189AB4]'
                        }`}
                      >
                        {selectedSize}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-[#666666] leading-relaxed">{variant.description}</p>

                  {/* Key Use Cases */}
                  <ul className="mt-5 space-y-2">
                    {variant.useCases.map((uc) => (
                      <li
                        key={uc}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-[#381B37]"
                      >
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            isSN ? 'text-[#65B741]' : 'text-[#189AB4]'
                          }`}
                        />
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
                        className={`px-3 py-1.5 rounded-lg font-mono text-xs font-semibold transition-all cursor-pointer tabular-nums whitespace-nowrap ${
                          selectedSize === sz
                            ? isSN
                              ? 'bg-[#65B741] text-white shadow-xs scale-105'
                              : 'bg-[#189AB4] text-white shadow-xs scale-105'
                            : 'bg-white text-[#381B37] border border-[#D9CEE6] hover:border-[#189AB4]'
                        }`}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Official Certifications & Laboratory Test Documentation */}
        <div className="mt-16 bg-gradient-to-br from-[#FAF8FC] via-white to-[#F0F9FB] border border-[#D9CEE6] rounded-3xl p-7 sm:p-10 relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#342077] via-[#189AB4] to-[#65B741]" />
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
            <div className="max-w-3xl">
              <h3 className="font-display text-2xl font-bold text-[#381B37]">
                {content.certifications.title}
              </h3>
              <p className="mt-2 text-sm text-[#666666]">{content.certifications.subtitle}</p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <button
                type="button"
                onClick={() =>
                  onSelectEnquiry('Neolyte Product Enquiry', 'Neolyte SN / DS Hygiene Line')
                }
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-[#EE498E] via-[#903595] to-[#342077] hover:opacity-95 shadow-sm transition-opacity cursor-pointer"
              >
                <span>{content.enquireCta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() =>
                  onSelectEnquiry('Neolyte Product Enquiry', 'Neolyte SN / DS Hygiene Line')
                }
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#342077] bg-white border border-[#D9CEE6] rounded-xl hover:bg-[#F4F0FA] transition-colors cursor-pointer"
              >
                <span>{content.documentationCta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {content.certifications.items.map((cert, idx) => (
              <div
                key={cert.title}
                className="neo-card-teal-interactive bg-white border border-[#EAE4F2] rounded-2xl p-5 flex flex-col justify-between relative overflow-hidden"
              >
                <div
                  className={`absolute top-0 inset-x-0 h-1 ${
                    idx === 0
                      ? 'bg-[#65B741]'
                      : idx === 1
                      ? 'bg-[#189AB4]'
                      : 'bg-gradient-to-r from-[#903595] to-[#342077]'
                  }`}
                />
                <div>
                  <div className="text-xs font-semibold text-[#903595] mb-1.5">{cert.badge}</div>
                  <h4 className="font-mono text-base font-bold text-[#342077] tabular-nums">
                    {cert.title}
                  </h4>
                  <div className="mt-1 text-xs font-semibold text-[#189AB4]">
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
          {/* Left: Interactive Dilution Calculator with Animated HOCl Liquid Visualizer */}
          <div className="lg:col-span-7 bg-white border border-[#D9CEE6] rounded-3xl p-7 sm:p-8 flex flex-col justify-between shadow-xs relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#189AB4] via-[#65B741] to-[#342077]" />
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#189AB4] mb-2">
                <Calculator className="w-4 h-4 text-[#903595]" />
                <span>
                  {locale === 'id'
                    ? 'Panduan Ilustrasi Pengenceran Neolyte DS (Aquades / Air RO)'
                    : 'Illustrative Neolyte DS Dilution Guide (Aquades / RO Water)'}
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
                    ? '1. Pilih Rasio Pengenceran Ilustratif (Neolyte DS : Air RO/Aquades)'
                    : '1. Select Illustrative Dilution Ratio (Neolyte DS : RO Water/Aquades)'}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {RATIO_OPTIONS.map((opt) => {
                    const active = selectedRatio === opt.key;
                    return (
                      <button
                        key={opt.key}
                        type="button"
                        onClick={() => setSelectedRatio(opt.key)}
                        className={`px-3.5 py-2.5 rounded-xl border text-left text-xs font-semibold transition-all cursor-pointer ${
                          active
                            ? 'bg-gradient-to-r from-[#189AB4] to-[#342077] text-white border-[#342077] shadow-xs'
                            : 'bg-[#FAF8FC] text-[#381B37] border-[#EAE4F2] hover:border-[#189AB4]'
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
                      className={`px-3 py-1.5 rounded-lg font-mono text-xs font-semibold border transition-all cursor-pointer tabular-nums ${
                        targetVolumeMl === vol
                          ? 'bg-[#903595] text-white border-[#903595] shadow-xs'
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
                      locale === 'id'
                        ? 'Volume larutan dalam mililiter'
                        : 'Solution volume in milliliters'
                    }
                    className="w-28 px-3 py-1.5 rounded-lg border border-[#D9CEE6] font-mono text-xs font-bold text-[#381B37] tabular-nums focus:outline-none focus:border-[#903595]"
                  />
                </div>
              </div>
            </div>

            {/* Calculated Output Panel + Animated Liquid Mixture Gauge + Mandatory Official Label Notice */}
            <div className="mt-7 space-y-4">
              <div className="p-5 rounded-2xl bg-gradient-to-br from-[#FAF8FC] via-white to-[#F0F9FB] border border-[#D9CEE6] relative overflow-hidden">
                {/* Animated HOCl Molecule / Water Droplet Visual Bar */}
                <div className="mb-4">
                  <div className="flex items-center justify-between text-[11px] font-mono font-semibold text-[#381B37] mb-1.5">
                    <span className="inline-flex items-center gap-1.5 text-[#342077]">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#189AB4]" />
                      Neolyte DS ({neolytePercent}%)
                    </span>
                    <span className="inline-flex items-center gap-1 text-[#903595]">
                      <Droplets className="w-3.5 h-3.5 text-[#189AB4]" />
                      HOCl ~{dilution.effectivePpm} ppm
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[#189AB4]">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#BAE6FD] border border-[#189AB4]" />
                      Aquades / RO ({waterPercent}%)
                    </span>
                  </div>

                  {/* Interactive Liquid Mixture Bar */}
                  <div className="relative h-5 w-full rounded-xl bg-[#E0F2FE] border border-[#BAE6FD] overflow-hidden flex">
                    <div
                      className="h-full bg-gradient-to-r from-[#342077] via-[#903595] to-[#189AB4] transition-all duration-300 relative overflow-hidden"
                      style={{ width: `${neolytePercent}%` }}
                    >
                      <span className="hocl-bubble-1 absolute bottom-0 left-1/4 w-2 h-2 rounded-full bg-white/50" />
                      <span className="hocl-bubble-2 absolute bottom-0 left-1/2 w-1.5 h-1.5 rounded-full bg-white/60" />
                      <span className="hocl-bubble-3 absolute bottom-0 left-3/4 w-2 h-2 rounded-full bg-white/40" />
                    </div>
                    <div
                      className="h-full bg-gradient-to-r from-[#7DD3FC]/45 to-[#E0F2FE] transition-all duration-300"
                      style={{ width: `${waterPercent}%` }}
                    />
                  </div>
                </div>

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
                      {locale === 'id' ? 'Estimasi Konsentrasi' : 'Est. Concentration'}
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
                    {locale === 'id' ? 'Konteks Penggunaan: ' : 'Application Context: '}
                  </strong>
                  <span>
                    {locale === 'id' ? dilution.applicationId : dilution.applicationEn}
                  </span>
                </div>
              </div>

              {/* Mandatory Official Product Label Notice (Page 05 Spec) */}
              <div className="p-4 rounded-xl bg-white border border-[#D9CEE6] flex items-start gap-3 text-xs text-[#381B37] leading-relaxed">
                <AlertCircle className="w-4 h-4 text-[#903595] shrink-0 mt-0.5" />
                <div>{content.dilutionOfficialNotice}</div>
              </div>
            </div>
          </div>

          {/* Right: HOCl Characteristics Comparison Matrix */}
          <div className="lg:col-span-5 bg-white border border-[#D9CEE6] rounded-3xl p-7 sm:p-8 flex flex-col justify-between shadow-xs relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#EE498E] via-[#903595] to-[#189AB4]" />
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
                    className={`p-4 rounded-xl border transition-all ${
                      cmp.isNeolyte
                        ? 'bg-gradient-to-r from-[#FAF8FC] to-[#F0F9FB] border-[#189AB4] shadow-xs'
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
                      <span
                        className={`font-mono text-xs font-semibold tabular-nums ${
                          cmp.isNeolyte ? 'text-[#189AB4]' : 'text-[#903595]'
                        }`}
                      >
                        {cmp.efficacy}
                      </span>
                    </div>
                    <p className="text-xs text-[#666666] mt-1">{cmp.safetyProfile}</p>
                    <div className="mt-2.5 w-full h-2.5 rounded-full bg-[#EAE4F2] overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${cmp.scorePercent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        className={`h-full rounded-full ${
                          cmp.isNeolyte
                            ? 'bg-gradient-to-r from-[#EE498E] via-[#903595] to-[#189AB4]'
                            : 'bg-[#94A3B8]'
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 6 Application Equipment & Neogate Showcase + Collage Image */}
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
                className="neo-card-teal-interactive relative bg-gradient-to-b from-[#FAF8FC] to-white border border-[#EAE4F2] rounded-2xl p-6 flex flex-col justify-between overflow-hidden"
              >
                <div
                  className={`absolute top-0 inset-x-0 h-1 ${
                    idx % 2 === 0
                      ? 'bg-gradient-to-r from-[#189AB4] to-[#65B741]'
                      : 'bg-gradient-to-r from-[#903595] to-[#189AB4]'
                  }`}
                />
                <div>
                  <div className="text-xs font-mono font-semibold text-[#189AB4] mb-1.5 tabular-nums">
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

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45 }}
            className="mt-10 w-full rounded-3xl overflow-hidden border border-[#D9CEE6] bg-gradient-to-br from-[#FAF8FC] via-white to-[#F0F9FB] p-3 sm:p-5 flex items-center justify-center shadow-xs"
          >
            <img
              src="/assets/aistudio/Aplikasi_Neoliye_2K_c316e6a3.png"
              alt={content.devicesTitle}
              className="w-full h-auto max-h-[560px] object-contain rounded-2xl select-none"
            />
          </motion.div>

          {/* Product Specification Disclosure (Page 05 Spec) */}
          <div className="mt-8 p-5 rounded-2xl bg-[#FAF8FC] border border-[#D9CEE6] text-xs text-[#666666] leading-relaxed">
            {content.productDisclosure}
          </div>
        </div>
      </div>
    </section>
  );
}
