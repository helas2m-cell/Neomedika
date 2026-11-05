import React, { useState } from 'react';
import {
  ArrowRight,
  ShieldCheck,
  Stethoscope,
  Scan,
  Users,
  CalendarClock,
  CreditCard,
  PackageCheck,
  Building2,
  BarChart3,
  Layers,
  Lock,
  Activity,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import type { SiteContent } from '../data/content';
import type { Locale } from '../utils/neomedikaLogic';

interface KhayrShowcaseProps {
  content: SiteContent['khayr'];
  locale: Locale;
  onSelectEnquiry: (category: string, productInterest: string) => void;
}

type ToothCondition = 'normal' | 'caries' | 'filling' | 'rct' | 'crown';

const INITIAL_TEETH: Record<number, ToothCondition> = {
  18: 'normal',
  17: 'filling',
  16: 'rct',
  15: 'normal',
  14: 'normal',
  13: 'normal',
  12: 'caries',
  11: 'normal',
  21: 'normal',
  22: 'normal',
  23: 'normal',
  24: 'crown',
  25: 'normal',
  26: 'caries',
  27: 'normal',
  28: 'normal',
};

const CONDITION_CYCLE: ToothCondition[] = ['normal', 'caries', 'filling', 'rct', 'crown'];

const MODULE_ICONS = [
  Stethoscope,
  Scan,
  Users,
  CalendarClock,
  CreditCard,
  PackageCheck,
  Building2,
  BarChart3,
];

export function KhayrShowcase({ content, locale, onSelectEnquiry }: KhayrShowcaseProps) {
  const [activeModuleId, setActiveModuleId] = useState<string>('reservasi');
  const [reservationStep, setReservationStep] = useState<1 | 2 | 3>(1);
  const [patientType, setPatientType] = useState<'returning' | 'new'>('returning');
  const [queueFilter, setQueueFilter] = useState<'all' | 'confirmed' | 'waiting' | 'done'>('all');
  const [teethState, setTeethState] = useState<Record<number, ToothCondition>>(INITIAL_TEETH);
  const [selectedTooth, setSelectedTooth] = useState<number>(16);
  const [voucherExample, setVoucherExample] = useState<'A' | 'B'>('A');

  const activeModule =
    content.modules.find((m) => m.id === activeModuleId) || content.modules[0];

  const handleToggleTooth = (toothNum: number) => {
    setSelectedTooth(toothNum);
    setTeethState((prev) => {
      const current = prev[toothNum] || 'normal';
      const nextIdx = (CONDITION_CYCLE.indexOf(current) + 1) % CONDITION_CYCLE.length;
      return { ...prev, [toothNum]: CONDITION_CYCLE[nextIdx] };
    });
  };

  const conditionLabels: Record<ToothCondition, { label: string; color: string; bg: string; dot: string }> = {
    normal: {
      label: locale === 'id' ? 'Sehat / Normal' : 'Healthy / Normal',
      color: 'text-[#381B37]',
      bg: 'bg-white border-[#D9CEE6]',
      dot: 'bg-[#342077]',
    },
    caries: {
      label: locale === 'id' ? 'Karies (D1/D2)' : 'Caries (D1/D2)',
      color: 'text-[#B42318]',
      bg: 'bg-[#FEF3F2] border-[#FECDCA]',
      dot: 'bg-[#EE498E]',
    },
    filling: {
      label: locale === 'id' ? 'Restorasi Komposit' : 'Composite Filling',
      color: 'text-[#342077]',
      bg: 'bg-[#F4F0FA] border-[#C9B8E8]',
      dot: 'bg-[#342077]',
    },
    rct: {
      label: locale === 'id' ? 'Perawatan Saluran Akar' : 'Root Canal Therapy',
      color: 'text-[#903595]',
      bg: 'bg-[#FDF2FA] border-[#F6D0FE]',
      dot: 'bg-[#903595]',
    },
    crown: {
      label: locale === 'id' ? 'Mahkota / Crown PFM' : 'Porcelain Crown',
      color: 'text-[#027A48]',
      bg: 'bg-[#ECFDF3] border-[#ABEFC6]',
      dot: 'bg-[#65B741]',
    },
  };

  // Synthetic / Demo Patient Data (Per Section 3 Page 04 Spec)
  const sampleAppointments = [
    {
      initials: 'DP',
      name: locale === 'id' ? 'Pasien Demo A (Simulasi)' : 'Demo Patient A (Synthetic)',
      treatment:
        locale === 'id' ? 'Perawatan Saluran Akar (Gigi 16)' : 'Root Canal Therapy (Tooth 16)',
      dentist: locale === 'id' ? 'drg. Praktisi Simulasi A' : 'Dr. Demo Practitioner A',
      time: '09:30',
      statusKey: 'confirmed' as const,
      statusText: locale === 'id' ? 'Terjadwal' : 'Scheduled',
    },
    {
      initials: 'DB',
      name: locale === 'id' ? 'Pasien Demo B (Simulasi)' : 'Demo Patient B (Synthetic)',
      treatment:
        locale === 'id' ? 'Pembersihan Karang Gigi (Scaling)' : 'Scaling & Polishing',
      dentist: locale === 'id' ? 'drg. Praktisi Simulasi B' : 'Dr. Demo Practitioner B',
      time: '10:15',
      statusKey: 'waiting' as const,
      statusText: locale === 'id' ? 'Menunggu di Klinik' : 'Waiting in Clinic',
    },
    {
      initials: 'DC',
      name: locale === 'id' ? 'Pasien Demo C (Simulasi)' : 'Demo Patient C (Synthetic)',
      treatment:
        locale === 'id' ? 'Evaluasi Ortodontik Berkala' : 'Periodic Orthodontic Check',
      dentist: locale === 'id' ? 'drg. Praktisi Simulasi C' : 'Dr. Demo Practitioner C',
      time: '11:00',
      statusKey: 'done' as const,
      statusText: locale === 'id' ? 'Selesai · Siap Tagihan' : 'Completed · Ready for Billing',
    },
  ];

  const filteredAppointments =
    queueFilter === 'all'
      ? sampleAppointments
      : sampleAppointments.filter((a) => a.statusKey === queueFilter);

  return (
    <section
      id="khayr"
      aria-labelledby="khayr-heading"
      className="relative py-24 bg-[#FAF8FC] neo-section-mesh border-t border-[#EAE4F2] overflow-hidden"
    >
      {/* Decorative Ambient Brand Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-[#EE498E]/10 via-[#903595]/10 to-transparent blur-3xl neo-aura"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Editorial Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 pb-12 border-b border-[#D9CEE6]"
        >
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#666666] mb-3">
              <span className="text-[#903595] font-semibold">{content.sectionNumber}</span>
              <span aria-hidden="true">·</span>
              <span>{content.kicker}</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#342077] font-semibold">{content.statusDisclosure}</span>
            </div>
            <h2
              id="khayr-heading"
              className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#381B37] leading-[1.15] text-balance"
            >
              {content.heading}
            </h2>
            <p className="mt-3 text-lg font-semibold bg-gradient-to-r from-[#EE498E] via-[#903595] to-[#342077] bg-clip-text text-transparent">
              {content.tagline}
            </p>
            <p className="mt-4 text-base text-[#666666] leading-relaxed max-w-[68ch]">
              {content.lead}
            </p>
            <p className="mt-3 text-sm text-[#381B37] font-medium">
              {content.subscriptionNote}
            </p>
            <div className="mt-4 inline-flex items-center gap-3 p-2.5 pr-4 rounded-2xl bg-white/90 border border-[#D9CEE6] shadow-xs">
              <img
                src="/assets/aistudio/Logo_Satusehat_965283aa.png"
                alt="SATUSEHAT"
                className="h-10 sm:h-11 lg:h-12 w-auto max-w-[165px] sm:max-w-[185px] object-contain object-left mix-blend-multiply select-none"
              />
            </div>
          </div>

          <div className="flex flex-col items-start lg:items-end justify-between lg:self-stretch gap-6 shrink-0">
            <div className="neo-float p-3 rounded-3xl bg-white/80 border border-[#EAE4F2] shadow-sm">
              <img
                src="/assets/aistudio/KHAYR_Logo_Name_Transparant_cddcce1f.png"
                alt="KHAYR Intelligent Dentistry Solutions"
                className="h-[84px] sm:h-24 lg:h-[102px] w-auto max-w-[330px] sm:max-w-[375px] object-contain object-left lg:object-right select-none"
              />
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={() =>
                  onSelectEnquiry('KHAYR Product Information', 'KHAYR Digital Dental Platform')
                }
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-[#EE498E] via-[#903595] to-[#342077] hover:opacity-95 shadow-md shadow-[#903595]/20 transition-all whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>{content.registerInterestCta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() =>
                  onSelectEnquiry('KHAYR Product Information', 'KHAYR Digital Dental Platform')
                }
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#342077] bg-white border border-[#D9CEE6] rounded-xl hover:bg-[#F4F0FA] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>{content.enquireCta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* 8 Planned Product Modules (Page 04 Spec) with Interactive Graphic Icons & Gradient Ribbons */}
        <div className="mt-14">
          <div className="max-w-3xl mb-6">
            <h3 className="font-display text-2xl font-bold text-[#381B37]">
              {content.plannedModulesTitle}
            </h3>
            <p className="mt-1.5 text-sm text-[#666666]">{content.plannedModulesSub}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {content.plannedModules.map((mod, idx) => {
              const IconComp = MODULE_ICONS[idx % MODULE_ICONS.length];
              return (
                <motion.div
                  key={mod.code}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.35, delay: idx * 0.04 }}
                  className="neo-card-interactive relative bg-white border border-[#EAE4F2] rounded-2xl p-6 flex flex-col justify-between overflow-hidden group"
                >
                  {/* Top Official Gradient Accent Ribbon */}
                  <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#EE498E] via-[#903595] to-[#342077] opacity-80 group-hover:opacity-100 transition-opacity" />

                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3 pt-1">
                      <div className="font-mono text-xs font-bold text-[#903595] tabular-nums">
                        MODULE {mod.code}
                      </div>
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#EE498E]/12 via-[#903595]/15 to-[#342077]/12 border border-[#EAE4F2] flex items-center justify-center text-[#903595] group-hover:bg-gradient-to-br group-hover:from-[#EE498E] group-hover:to-[#342077] group-hover:text-white transition-all">
                        <IconComp className="w-4 h-4" />
                      </div>
                    </div>
                    <h4 className="font-display text-base font-bold text-[#381B37] mb-2 group-hover:text-[#342077] transition-colors">
                      {mod.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">{mod.desc}</p>
                  </div>

                  {/* Bottom Subtle Visual Progress Bar Indicator */}
                  <div className="mt-4 pt-3 border-t border-[#FAF8FC] flex items-center gap-2">
                    <div className="h-1 flex-1 rounded-full bg-[#FAF8FC] overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#EE498E] via-[#903595] to-[#342077]"
                        style={{ width: `${65 + ((idx * 7) % 30)}%` }}
                      />
                    </div>
                    <span className="font-mono text-[10px] font-semibold text-[#903595]">
                      KHAYR-{mod.code}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 7 Product Development Principles (Page 04 Spec) */}
        <div className="mt-16 bg-white border border-[#D9CEE6] rounded-3xl p-7 sm:p-9 shadow-xs relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#342077] via-[#903595] to-[#EE498E]" />
          <div className="max-w-3xl mb-6">
            <h3 className="font-display text-2xl font-bold text-[#381B37]">
              {content.devPrinciplesTitle}
            </h3>
            <p className="mt-1.5 text-sm text-[#666666]">{content.devPrinciplesSub}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {content.devPrinciples.map((pr, idx) => (
              <motion.div
                key={pr.code}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className="neo-card-interactive p-5 rounded-2xl bg-gradient-to-br from-[#FAF8FC] to-white border border-[#EAE4F2] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold text-white px-2.5 py-0.5 rounded-md bg-gradient-to-r from-[#903595] to-[#342077] tabular-nums">
                      {pr.code}
                    </span>
                    <Layers className="w-4 h-4 text-[#EE498E]" />
                  </div>
                  <h4 className="font-display text-sm font-bold text-[#381B37] mb-1.5">
                    {pr.title}
                  </h4>
                  <p className="text-xs text-[#666666] leading-relaxed">{pr.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SATUSEHAT & Interoperability Development Roadmap Block */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
          className="mt-12 bg-gradient-to-r from-white via-[#FAF8FC] to-[#F4F0FA] border border-[#D9CEE6] rounded-3xl p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6 shadow-xs"
        >
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#903595] mb-2">
              <ShieldCheck className="w-4 h-4 text-[#EE498E]" />
              <span>{content.interoperabilityRoadmap.badge}</span>
            </div>
            <h3 className="font-display text-xl font-bold text-[#381B37]">
              {content.interoperabilityRoadmap.title}
            </h3>
            <p className="mt-2 text-sm text-[#666666] leading-relaxed">
              {content.interoperabilityRoadmap.description}
            </p>
          </div>
          <div className="neo-float-delayed shrink-0 bg-white border border-[#D9CEE6] rounded-2xl p-4 flex items-center justify-center shadow-xs">
            <img
              src="/assets/aistudio/Logo_Satusehat_965283aa.png"
              alt="SATUSEHAT Interoperability Roadmap"
              className="h-11 sm:h-12 w-auto object-contain mix-blend-multiply select-none"
            />
          </div>
        </motion.div>

        {/* 4 Clinic Ecosystem Roles */}
        <div className="mt-14">
          <h3 className="font-display text-xl font-bold text-[#381B37] mb-6">
            {content.rolesTitle}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {content.roles.map((item, idx) => (
              <div
                key={item.role}
                className="neo-card-interactive relative bg-white border border-[#EAE4F2] rounded-2xl p-6 flex flex-col justify-between overflow-hidden"
              >
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#EE498E] to-[#342077]" />
                <div>
                  <div className="flex items-center justify-between text-xs text-[#666666] mb-3">
                    <span className="font-mono font-bold text-[#EE498E] tabular-nums">
                      0{idx + 1}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="font-semibold text-[#342077]">{item.badge}</span>
                  </div>
                  <h4 className="font-display text-lg font-bold text-[#381B37] mb-2">
                    {item.role}
                  </h4>
                  <p className="text-sm text-[#666666] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3 Interconnected Pillars of KHAYR */}
        <div className="mt-16">
          <h3 className="font-display text-xl font-bold text-[#381B37] mb-6">
            {content.threePillarsTitle}
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {content.threePillars.map((pillar, idx) => (
              <div
                key={pillar.name}
                className="neo-card-interactive relative bg-white border border-[#D9CEE6] rounded-2xl p-7 flex flex-col overflow-hidden"
              >
                <div
                  className={`absolute top-0 inset-x-0 h-1.5 ${
                    idx === 0
                      ? 'bg-gradient-to-r from-[#EE498E] to-[#903595]'
                      : idx === 1
                      ? 'bg-gradient-to-r from-[#903595] to-[#342077]'
                      : 'bg-gradient-to-r from-[#342077] via-[#903595] to-[#EE498E]'
                  }`}
                />
                <div className="pb-4 mb-5 border-b border-[#EAE4F2]">
                  <div className="text-xs text-[#903595] font-semibold mb-1">
                    {pillar.subtitle}
                  </div>
                  <h4 className="font-display text-xl font-bold text-[#381B37]">
                    {pillar.name}
                  </h4>
                </div>
                <dl className="space-y-3.5 flex-1">
                  {pillar.items.map((sub) => (
                    <div key={sub.name} className="text-sm leading-snug">
                      <dt className="font-semibold text-[#381B37] inline">{sub.name}</dt>
                      <span className="text-[#903595] font-bold"> — </span>
                      <dd className="text-[#666666] inline">{sub.desc}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Concept UI Preview Simulator with Dynamic Tab Transitions */}
        <div className="mt-16 bg-white border border-[#D9CEE6] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-[#EE498E] via-[#903595] to-[#342077]" />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pt-1">
            <div className="max-w-2xl">
              <div className="text-xs font-bold text-[#EE498E] uppercase tracking-wider mb-1">
                {content.conceptUiBadge}
              </div>
              <h3 className="font-display text-2xl font-bold text-[#381B37]">
                {content.modulesTitle}
              </h3>
              <p className="mt-1.5 text-sm text-[#666666]">{content.modulesSub}</p>
            </div>
            <div className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#FAF8FC] to-[#F4F0FA] border border-[#D9CEE6] text-xs font-mono font-semibold text-[#342077] shrink-0 self-start sm:self-auto flex items-center gap-2">
              <Activity className="w-3.5 h-3.5 text-[#EE498E]" />
              <span>{content.conceptUiBadge}</span>
            </div>
          </div>

          {/* Interactive Module Selector Bar */}
          <div
            role="tablist"
            aria-label="KHAYR Planned Modules Concept UI"
            className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#FAF8FC] border border-[#D9CEE6] rounded-xl mb-8"
          >
            {content.modules.map((mod) => {
              const isSelected = mod.id === activeModule.id;
              return (
                <button
                  key={mod.id}
                  role="tab"
                  type="button"
                  aria-selected={isSelected}
                  onClick={() => setActiveModuleId(mod.id)}
                  className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#EE498E] via-[#903595] to-[#342077] text-white shadow-sm'
                      : 'text-[#381B37] hover:bg-[#EAE4F2]/70'
                  }`}
                >
                  {mod.tabLabel}
                </button>
              );
            })}
          </div>

          {/* Animated Module Split Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeModule.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
            >
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold text-[#903595] mb-2">
                    {content.conceptUiBadge}
                  </div>
                  <h4 className="font-display text-2xl font-bold text-[#381B37] leading-snug">
                    {activeModule.title}
                  </h4>
                  <p className="mt-3 text-sm text-[#666666] leading-relaxed">
                    {activeModule.subtitle}
                  </p>

                  <div className="mt-6 space-y-3.5">
                    {activeModule.highlights.map((hl) => (
                      <div
                        key={hl.title}
                        className="p-4 rounded-xl bg-gradient-to-r from-[#FAF8FC] to-white border border-[#EAE4F2] hover:border-[#C9B0E6] transition-colors"
                      >
                        <div className="text-sm font-bold text-[#381B37]">{hl.title}</div>
                        <p className="mt-1 text-xs text-[#666666] leading-relaxed">{hl.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Value Focus Strip (Replacing unvalidated percentages per Page 04 Spec) */}
                <div className="mt-6 pt-6 border-t border-[#EAE4F2] grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  {activeModule.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="bg-gradient-to-br from-[#FAF8FC] to-[#F4F0FA] border border-[#D9CEE6] rounded-xl p-3"
                    >
                      <div className="font-mono text-sm font-bold text-[#342077]">
                        {m.value}
                      </div>
                      <div className="mt-0.5 text-xs font-semibold text-[#381B37]">
                        {m.label}
                      </div>
                      <div className="text-[11px] text-[#903595] font-medium mt-0.5">{m.delta}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Interactive UI Workspace */}
              <div className="lg:col-span-7 bg-gradient-to-br from-[#FAF8FC] via-white to-[#F4F0FA] border border-[#D9CEE6] rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-inner">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-[#EAE4F2]">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#381B37]">
                    <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#EE498E] to-[#903595]" />
                    <span>KHAYR</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-[#903595]">{activeModule.tabLabel}</span>
                  </div>
                  <div className="text-xs text-[#342077] font-mono font-semibold flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-[#903595]" />
                    <span>{content.conceptUiBadge}</span>
                  </div>
                </div>

                {/* Dynamic Interactive Screen by Module */}
                {activeModule.id === 'reservasi' && (
                  <div className="space-y-5 my-auto">
                    <div className="flex items-center gap-2">
                      {([1, 2, 3] as const).map((step) => (
                        <button
                          key={step}
                          type="button"
                          onClick={() => setReservationStep(step)}
                          className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold border transition-all cursor-pointer whitespace-nowrap ${
                            reservationStep === step
                              ? 'bg-gradient-to-r from-[#903595] to-[#342077] text-white border-[#342077] shadow-xs'
                              : 'bg-white text-[#666666] border-[#EAE4F2] hover:border-[#903595]'
                          }`}
                        >
                          {step === 1 && (locale === 'id' ? '1. Tipe Kunjungan' : '1. Visit Type')}
                          {step === 2 && (locale === 'id' ? '2. Profil Pasien' : '2. Patient Profile')}
                          {step === 3 && (locale === 'id' ? '3. Jadwal & Dokter' : '3. Slot & Dentist')}
                        </button>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setPatientType('returning')}
                        className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                          patientType === 'returning'
                            ? 'bg-white border-[#903595] ring-2 ring-[#903595]/20 shadow-xs'
                            : 'bg-white/70 border-[#EAE4F2]'
                        }`}
                      >
                        <div className="text-sm font-bold text-[#381B37]">
                          {locale === 'id' ? 'Pasien Lama (Terdaftar)' : 'Returning Patient'}
                        </div>
                        <div className="mt-1 text-xs text-[#666666]">
                          {locale === 'id'
                            ? 'Cari profil pasien terdaftar untuk memuat riwayat rekam medis.'
                            : 'Lookup registered patient profile to load chronological records.'}
                        </div>
                      </button>
                      <button
                        type="button"
                        onClick={() => setPatientType('new')}
                        className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                          patientType === 'new'
                            ? 'bg-white border-[#EE498E] ring-2 ring-[#EE498E]/20 shadow-xs'
                            : 'bg-white/70 border-[#EAE4F2]'
                        }`}
                      >
                        <div className="text-sm font-bold text-[#381B37]">
                          {locale === 'id' ? 'Pasien Baru' : 'New Patient'}
                        </div>
                        <div className="mt-1 text-xs text-[#666666]">
                          {locale === 'id'
                            ? 'Buat profil rekam medis baru terstruktur pada sistem klinik.'
                            : 'Create a structured new patient record profile in the clinic system.'}
                        </div>
                      </button>
                    </div>

                    <div className="bg-white border border-[#D9CEE6] rounded-xl p-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <div className="text-[11px] font-medium text-[#666666]">
                          {locale === 'id' ? 'Profil Simulasi' : 'Synthetic Profile'}
                        </div>
                        <div className="text-sm font-bold text-[#381B37] mt-0.5">
                          {patientType === 'returning'
                            ? locale === 'id'
                              ? 'Pasien Demo A (SIM-001)'
                              : 'Demo Patient A (SIM-001)'
                            : locale === 'id'
                            ? 'Profil Pasien Baru (Simulasi)'
                            : 'New Patient Profile (Demo)'}
                        </div>
                      </div>
                      <div>
                        <div className="text-[11px] font-medium text-[#666666]">
                          {locale === 'id' ? 'Dokter Gigi (Simulasi)' : 'Assigned Dentist (Demo)'}
                        </div>
                        <div className="text-sm font-bold text-[#381B37] mt-0.5">
                          {locale === 'id' ? 'drg. Praktisi Simulasi A' : 'Dr. Demo Practitioner A'}
                        </div>
                      </div>
                      <div>
                        <div className="text-[11px] font-medium text-[#666666]">
                          {locale === 'id' ? 'Slot & Ruangan' : 'Slot & Room'}
                        </div>
                        <div className="text-sm font-mono font-bold text-[#903595] mt-0.5 tabular-nums">
                          09:30 · Chair 01
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeModule.id === 'jadwal' && (
                  <div className="space-y-4 my-auto">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-semibold text-[#381B37]">
                        {locale === 'id'
                          ? 'Filter Status Antrean (Data Simulasi):'
                          : 'Filter Queue Status (Synthetic Demo Data):'}
                      </span>
                      <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-[#EAE4F2]">
                        {(
                          [
                            { id: 'all', label: locale === 'id' ? 'Semua (3)' : 'All (3)' },
                            { id: 'confirmed', label: locale === 'id' ? 'Terjadwal' : 'Scheduled' },
                            { id: 'waiting', label: locale === 'id' ? 'Menunggu' : 'Waiting' },
                            { id: 'done', label: locale === 'id' ? 'Selesai' : 'Completed' },
                          ] as const
                        ).map((tab) => (
                          <button
                            key={tab.id}
                            type="button"
                            onClick={() => setQueueFilter(tab.id)}
                            className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                              queueFilter === tab.id
                                ? 'bg-[#342077] text-white'
                                : 'text-[#666666] hover:text-[#381B37]'
                            }`}
                          >
                            {tab.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2.5">
                      {filteredAppointments.map((apt) => (
                        <div
                          key={apt.name}
                          className="bg-white border border-[#EAE4F2] hover:border-[#C9B0E6] transition-colors rounded-xl p-3.5 flex items-center justify-between gap-4"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#EE498E] to-[#342077] text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
                              {apt.initials}
                            </div>
                            <div>
                              <div className="text-sm font-bold text-[#381B37]">{apt.name}</div>
                              <div className="text-xs text-[#666666]">
                                {apt.treatment} · {apt.dentist}
                              </div>
                            </div>
                          </div>
                          <div className="text-right shrink-0">
                            <div className="font-mono text-sm font-bold text-[#381B37] tabular-nums">
                              {apt.time}
                            </div>
                            <div className="text-xs text-[#903595] font-semibold">
                              {apt.statusText}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeModule.id === 'klinis' && (
                  <div className="space-y-3.5 my-auto">
                    {/* Patient Clinical Context Strip */}
                    <div className="bg-white border border-[#EAE4F2] rounded-xl p-3.5 flex flex-wrap items-center justify-between gap-2 text-xs">
                      <div>
                        <span className="text-[#666666]">
                          {locale === 'id' ? 'Profil Simulasi: ' : 'Synthetic Demo Patient: '}
                        </span>
                        <strong className="text-[#381B37]">
                          {locale === 'id' ? 'Pasien Demo A (SIM-001)' : 'Demo Patient A (SIM-001)'}
                        </strong>
                      </div>
                      <span className="font-mono font-semibold text-[#342077] tabular-nums">
                        Odontogram FDI · Concept UI
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="text-xs font-semibold text-[#381B37]">
                        {locale === 'id'
                          ? 'Klik nomor gigi untuk simulasi pencatatan kondisi:'
                          : 'Click any tooth number to simulate clinical charting:'}
                      </div>
                      <span className="text-xs font-mono font-bold text-[#EE498E] tabular-nums">
                        {locale === 'id'
                          ? `Gigi Terpilih: #${selectedTooth}`
                          : `Selected Tooth: #${selectedTooth}`}
                      </span>
                    </div>

                    {/* Interactive FDI Tooth Grid (18..11 | 21..28) */}
                    <div className="grid grid-cols-8 sm:grid-cols-16 gap-1.5 bg-white p-3.5 rounded-xl border border-[#D9CEE6]">
                      {[18, 17, 16, 15, 14, 13, 12, 11, 21, 22, 23, 24, 25, 26, 27, 28].map(
                        (tooth) => {
                          const cond = teethState[tooth] || 'normal';
                          const style = conditionLabels[cond];
                          const isSelected = selectedTooth === tooth;
                          return (
                            <button
                              key={tooth}
                              type="button"
                              onClick={() => handleToggleTooth(tooth)}
                              aria-label={`Tooth ${tooth} ${style.label}`}
                              className={`py-2 px-1 rounded-lg border text-center transition-all cursor-pointer ${
                                style.bg
                              } ${
                                isSelected
                                  ? 'ring-2 ring-[#EE498E] scale-105 shadow-xs'
                                  : 'hover:border-[#903595]'
                              }`}
                            >
                              <div className={`font-mono text-xs font-bold tabular-nums ${style.color}`}>
                                {tooth}
                              </div>
                              <div className="flex justify-center my-1">
                                <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
                              </div>
                              <div className="text-[9px] uppercase tracking-tighter text-[#666666] truncate">
                                {cond === 'normal' ? 'OK' : cond.toUpperCase()}
                              </div>
                            </button>
                          );
                        }
                      )}
                    </div>

                    {/* Legend & Selected Tooth Detail */}
                    <div className="bg-white border border-[#D9CEE6] rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <div className="text-xs text-[#666666]">
                          {locale === 'id'
                            ? `Status Simulasi Gigi #${selectedTooth} (FDI):`
                            : `Simulated Status for Tooth #${selectedTooth} (FDI):`}
                        </div>
                        <div className="text-sm font-bold text-[#381B37] mt-0.5">
                          {conditionLabels[teethState[selectedTooth] || 'normal'].label}
                        </div>
                      </div>
                      <div className="text-xs font-mono text-[#342077] tabular-nums">
                        Concept UI · Synthetic Demo Record
                      </div>
                    </div>
                  </div>
                )}

                {activeModule.id === 'riwayat' && (
                  <div className="space-y-3 my-auto">
                    {[
                      {
                        date: locale === 'id' ? 'Kunjungan Simulasi 02' : 'Simulated Visit 02',
                        proc:
                          locale === 'id'
                            ? 'Obturasi Saluran Akar & Restorasi Komposit (Gigi #16)'
                            : 'Root Canal Obturation & Composite Restoration (Tooth #16)',
                        doc: locale === 'id' ? 'drg. Praktisi Simulasi A' : 'Dr. Demo Practitioner A',
                        note:
                          locale === 'id'
                            ? 'Data simulasi sintetis: Evaluasi tindak lanjut dijadwalkan.'
                            : 'Synthetic demo record: Follow-up evaluation scheduled.',
                      },
                      {
                        date: locale === 'id' ? 'Kunjungan Simulasi 01' : 'Simulated Visit 01',
                        proc:
                          locale === 'id'
                            ? 'Pemeriksaan Awal & Pemetaan Odontogram'
                            : 'Initial Examination & Odontogram Charting',
                        doc: locale === 'id' ? 'drg. Praktisi Simulasi A' : 'Dr. Demo Practitioner A',
                        note:
                          locale === 'id'
                            ? 'Data simulasi sintetis: Rencana perawatan bertahap tercatat.'
                            : 'Synthetic demo record: Staged treatment plan documented.',
                      },
                    ].map((item) => (
                      <div
                        key={item.date}
                        className="bg-white border border-[#EAE4F2] rounded-xl p-4"
                      >
                        <div className="flex items-center justify-between text-xs text-[#666666] mb-1">
                          <span className="font-mono font-semibold text-[#903595]">{item.date}</span>
                          <span>{item.doc}</span>
                        </div>
                        <div className="text-sm font-bold text-[#381B37]">{item.proc}</div>
                        <p className="text-xs text-[#666666] mt-1">{item.note}</p>
                      </div>
                    ))}
                  </div>
                )}

                {activeModule.id === 'inventaris' && (
                  <div className="space-y-2.5 my-auto">
                    {[
                      {
                        sku: 'SIM-CMP-A2',
                        name: 'Universal Nano-Hybrid Composite A2 (Demo SKU)',
                        stock: '42 Unit',
                        exp: 'Batch Demo',
                        status: locale === 'id' ? 'Stok Cukup' : 'Safe Stock',
                        tone: 'text-[#027A48]',
                      },
                      {
                        sku: 'NEO-SN-1000',
                        name: 'Neolyte SN Hand & Body Sanitizer 60ppm (1000ml)',
                        stock: '18 Botol',
                        exp: 'PKD 20501023189',
                        status: locale === 'id' ? 'Stok Cukup' : 'Safe Stock',
                        tone: 'text-[#027A48]',
                      },
                      {
                        sku: 'SIM-ANS-01',
                        name: 'Dental Anesthetic Cartridges (Demo SKU)',
                        stock: '5 Box',
                        exp: 'Batch Demo',
                        status: locale === 'id' ? 'Stok Menipis · Reorder' : 'Low Stock · Reorder',
                        tone: 'text-[#B54708]',
                      },
                    ].map((row) => (
                      <div
                        key={row.sku}
                        className="bg-white border border-[#EAE4F2] rounded-xl p-3.5 flex items-center justify-between gap-4"
                      >
                        <div>
                          <div className="text-xs font-mono text-[#666666] tabular-nums">
                            {row.sku} · {row.exp}
                          </div>
                          <div className="text-sm font-bold text-[#381B37]">{row.name}</div>
                        </div>
                        <div className="text-right shrink-0">
                          <div className="font-mono text-sm font-bold text-[#381B37] tabular-nums">
                            {row.stock}
                          </div>
                          <div className={`text-xs font-semibold ${row.tone}`}>{row.status}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeModule.id === 'analitik' && (
                  <div className="space-y-4 my-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="bg-white border border-[#EAE4F2] rounded-xl p-3.5">
                        <div className="text-xs text-[#666666]">
                          {locale === 'id' ? 'Kategori Tindakan (Demo)' : 'Procedures (Demo)'}
                        </div>
                        <div className="font-mono text-base font-bold text-[#342077] mt-1">
                          {locale === 'id' ? 'Rekapitulasi' : 'Summary View'}
                        </div>
                        <div className="text-[11px] text-[#666666] mt-0.5">
                          {locale === 'id' ? 'Data simulasi sintetis' : 'Synthetic demo data'}
                        </div>
                      </div>
                      <div className="bg-white border border-[#EAE4F2] rounded-xl p-3.5">
                        <div className="text-xs text-[#666666]">
                          {locale === 'id' ? 'Kategori Produk (Demo)' : 'Products (Demo)'}
                        </div>
                        <div className="font-mono text-base font-bold text-[#342077] mt-1">
                          {locale === 'id' ? 'Terintegrasi' : 'Connected'}
                        </div>
                        <div className="text-[11px] text-[#666666] mt-0.5">
                          {locale === 'id' ? 'Tautan stok & kasir' : 'Stock & billing link'}
                        </div>
                      </div>
                      <div className="bg-white border border-[#EAE4F2] rounded-xl p-3.5">
                        <div className="text-xs text-[#666666]">
                          {locale === 'id' ? 'Laporan Kunjungan' : 'Visit Reports'}
                        </div>
                        <div className="font-mono text-base font-bold text-[#903595] mt-1">
                          {locale === 'id' ? 'Terpusat' : 'Centralised'}
                        </div>
                        <div className="text-[11px] text-[#666666] mt-0.5">
                          {locale === 'id' ? 'Evaluasi manajemen' : 'Management review'}
                        </div>
                      </div>
                    </div>
                    <div className="bg-white border border-[#EAE4F2] rounded-xl p-4 text-xs text-[#666666] flex items-center justify-between">
                      <span>
                        {locale === 'id'
                          ? 'Ilustrasi Konsep Antarmuka Pelaporan Operasional KHAYR'
                          : 'KHAYR Operational Reporting Concept UI Illustration'}
                      </span>
                      <span className="font-mono font-semibold text-[#342077]">
                        Concept UI
                      </span>
                    </div>
                  </div>
                )}

                <div className="pt-4 mt-5 border-t border-[#EAE4F2] flex flex-wrap items-center justify-between gap-2 text-xs text-[#666666]">
                  <span>{content.conceptUiBadge}</span>
                  <button
                    type="button"
                    onClick={() =>
                      onSelectEnquiry('KHAYR Product Information', 'KHAYR Digital Dental Platform')
                    }
                    className="font-semibold text-[#903595] hover:text-[#EE498E] transition-colors cursor-pointer whitespace-nowrap"
                  >
                    {content.enquireCta} →
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Proposed Digital Voucher Distribution Ecosystem Block (Page 04 Spec) */}
        <div className="mt-14 bg-gradient-to-br from-[#342077] via-[#342077] to-[#903595] text-white rounded-3xl p-7 sm:p-10 shadow-md relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -bottom-16 w-80 h-80 rounded-full bg-[#EE498E]/20 blur-3xl neo-aura"
          />
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="text-xs font-semibold tracking-wide text-[#EE498E] uppercase mb-2">
                {content.voucherSystem.kicker}
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight text-balance">
                {content.voucherSystem.heading}
              </h3>
              <p className="mt-3 text-sm sm:text-base text-white/85 leading-relaxed">
                {content.voucherSystem.lead}
              </p>

              {/* Planned Partner Channel Categories */}
              <div className="mt-6 pt-5 border-t border-white/15">
                <div className="text-xs text-white/75 mb-2.5">
                  {content.voucherSystem.partnerAppsLabel}:
                </div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-sm font-semibold text-white">
                  {content.voucherSystem.partnerApps.map((app, i) => (
                    <React.Fragment key={app}>
                      <span>{app}</span>
                      {i < content.voucherSystem.partnerApps.length - 1 && (
                        <span aria-hidden="true" className="text-[#EE498E]">
                          ·
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* 3 Benefits */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {content.voucherSystem.benefits.map((b) => (
                  <div
                    key={b.title}
                    className="bg-white/10 backdrop-blur-xs border border-white/20 rounded-xl p-4 hover:bg-white/15 transition-colors"
                  >
                    <div className="text-xs font-mono text-[#EE498E] font-semibold">
                      {b.step}
                    </div>
                    <div className="text-sm font-bold text-white mt-1">{b.title}</div>
                    <p className="text-xs text-white/80 mt-1.5 leading-relaxed">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Voucher Concept UI Card */}
            <div className="lg:col-span-5 bg-white text-[#381B37] rounded-2xl p-6 shadow-lg">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-[#EAE4F2]">
                <span className="text-xs font-bold text-[#342077]">
                  {locale === 'id'
                    ? 'Concept UI · Simulasi Voucher'
                    : 'Concept UI · Voucher Preview'}
                </span>
                <div className="flex items-center gap-1 bg-[#FAF8FC] p-1 rounded-lg border border-[#EAE4F2]">
                  <button
                    type="button"
                    onClick={() => setVoucherExample('A')}
                    className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                      voucherExample === 'A'
                        ? 'bg-gradient-to-r from-[#EE498E] to-[#903595] text-white'
                        : 'text-[#666666] hover:text-[#381B37]'
                    }`}
                  >
                    {locale === 'id' ? 'Contoh A' : 'Example A'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setVoucherExample('B')}
                    className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                      voucherExample === 'B'
                        ? 'bg-gradient-to-r from-[#EE498E] to-[#903595] text-white'
                        : 'text-[#666666] hover:text-[#381B37]'
                    }`}
                  >
                    {locale === 'id' ? 'Contoh B' : 'Example B'}
                  </button>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-br from-[#FAF8FC] to-[#F4F0FA] border border-[#D9CEE6]">
                <div className="flex items-center justify-between text-xs text-[#666666]">
                  <span>CONCEPT UI PREVIEW</span>
                  <span className="font-mono font-semibold text-[#342077]">ILLUSTRATIVE</span>
                </div>
                <div className="mt-2 font-display text-lg font-bold text-[#381B37]">
                  {voucherExample === 'A'
                    ? locale === 'id'
                      ? 'Program Promosi Pembersihan Karang Gigi (Scaling)'
                      : 'Dental Scaling & Polishing Promotional Offer'
                    : locale === 'id'
                    ? 'Paket Konsultasi & Pemeriksaan Gigi Berkala'
                    : 'Routine Dental Checkup & Consultation Package'}
                </div>
                <div className="mt-1 font-mono text-xl font-extrabold text-[#EE498E] tabular-nums">
                  {voucherExample === 'A'
                    ? locale === 'id'
                      ? 'ILUSTRASI VOUCHER DISKON LAYANAN'
                      : 'ILLUSTRATIVE SERVICE DISCOUNT VOUCHER'
                    : locale === 'id'
                    ? 'ILUSTRASI PAKET LAYANAN KLINIK'
                    : 'ILLUSTRATIVE CLINIC PACKAGE VOUCHER'}
                </div>
                <div className="mt-3 pt-3 border-t border-[#EAE4F2] space-y-1.5 text-xs">
                  <div className="flex justify-between">
                    <span className="text-[#666666]">
                      {locale === 'id' ? 'Kode Simulasi:' : 'Demo Code:'}
                    </span>
                    <span className="font-mono font-bold text-[#342077]">
                      {voucherExample === 'A' ? 'DEMO-SCALE-01' : 'DEMO-CHECK-02'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#666666]">
                      {locale === 'id' ? 'Kanal Distribusi:' : 'Distribution Channel:'}
                    </span>
                    <span className="font-semibold text-[#381B37]">
                      {locale === 'id'
                        ? 'Kanal Digital Mitra Terkonfirmasi'
                        : 'Confirmed Partner Digital Channels'}
                    </span>
                  </div>
                </div>
              </div>

              {/* 4-Step Workflow */}
              <div className="mt-4 space-y-2">
                {content.voucherSystem.workflowSteps.map((ws) => (
                  <div key={ws.num} className="flex items-start gap-2.5 text-xs">
                    <span className="font-mono font-bold text-[#903595] tabular-nums shrink-0">
                      {ws.num}.
                    </span>
                    <div>
                      <span className="font-semibold text-[#381B37]">{ws.title}: </span>
                      <span className="text-[#666666]">{ws.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative mt-6 pt-5 border-t border-white/15 text-xs text-white/80 leading-relaxed">
            {content.voucherSystem.disclosure}
          </div>
        </div>

        {/* Product Status Disclosure */}
        <div className="mt-8 p-5 rounded-2xl bg-white border border-[#D9CEE6] text-xs text-[#666666] leading-relaxed">
          {content.governanceFootnote}
        </div>
      </div>
    </section>
  );
}
