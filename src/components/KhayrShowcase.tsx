import React, { useState } from 'react';
import {
  Calendar,
  ClipboardCheck,
  FileText,
  Package,
  BarChart3,
  UserCheck,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  TicketPercent,
  ShieldCheck,
} from 'lucide-react';
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

  const conditionLabels: Record<ToothCondition, { label: string; color: string; bg: string }> = {
    normal: {
      label: locale === 'id' ? 'Sehat / Normal' : 'Healthy / Normal',
      color: 'text-[#381B37]',
      bg: 'bg-white border-[#D9CEE6]',
    },
    caries: {
      label: locale === 'id' ? 'Karies (D1/D2)' : 'Caries (D1/D2)',
      color: 'text-[#B42318]',
      bg: 'bg-[#FEF3F2] border-[#FECDCA]',
    },
    filling: {
      label: locale === 'id' ? 'Restorasi Komposit' : 'Composite Filling',
      color: 'text-[#342077]',
      bg: 'bg-[#F4F0FA] border-[#C9B8E8]',
    },
    rct: {
      label: locale === 'id' ? 'Perawatan Saluran Akar' : 'Root Canal Therapy',
      color: 'text-[#903595]',
      bg: 'bg-[#FDF2FA] border-[#F6D0FE]',
    },
    crown: {
      label: locale === 'id' ? 'Mahkota / Crown PFM' : 'Porcelain Crown',
      color: 'text-[#027A48]',
      bg: 'bg-[#ECFDF3] border-[#ABEFC6]',
    },
  };

  const sampleAppointments = [
    {
      initials: 'SH',
      name: 'Sofyan Hadi',
      treatment: locale === 'id' ? 'Perawatan Saluran Akar (Gigi 16)' : 'Root Canal Therapy (Tooth 16)',
      dentist: 'drg. Omar Husen, Sp.KG',
      time: '09:30',
      statusKey: 'confirmed' as const,
      statusText: locale === 'id' ? 'Terkonfirmasi' : 'Confirmed',
    },
    {
      initials: 'MK',
      name: 'Marwah Kurniawan',
      treatment: locale === 'id' ? 'Pembersihan Karang Gigi (Scaling)' : 'Scaling & Polishing',
      dentist: 'drg. Rina Kusuma',
      time: '10:15',
      statusKey: 'waiting' as const,
      statusText: locale === 'id' ? 'Menunggu di Ruang Tunggu' : 'Waiting in Lobby',
    },
    {
      initials: 'LA',
      name: 'Lusi Amran',
      treatment: locale === 'id' ? 'Kontrol Ortodontik Bulanan' : 'Monthly Orthodontic Check',
      dentist: 'drg. Nadia Pratama, Sp.Ort',
      time: '11:00',
      statusKey: 'done' as const,
      statusText: locale === 'id' ? 'Selesai · Siap Billing' : 'Completed · Ready for Billing',
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
      className="py-24 bg-[#FAF8FC] border-t border-[#EAE4F2]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Editorial Header */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 pb-12 border-b border-[#EAE4F2]">
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
            <p className="mt-3 text-lg font-semibold text-[#903595]">{content.tagline}</p>
            <p className="mt-4 text-base text-[#666666] leading-relaxed max-w-[68ch]">
              {content.lead}
            </p>
            <p className="mt-3 text-sm text-[#381B37] font-medium">
              {content.subscriptionNote}
            </p>
          </div>

          <div className="flex flex-col items-start lg:items-end justify-between lg:self-stretch gap-6 shrink-0">
            <div className="flex flex-col items-start lg:items-end gap-2.5">
              <img
                src="/assets/aistudio/KHAYR_Logo_Name_Transparant_cddcce1f.png"
                alt="KHAYR Intelligent Dentistry Solutions"
                className="h-14 sm:h-16 lg:h-[68px] w-auto max-w-[220px] sm:max-w-[250px] object-contain object-left lg:object-right select-none"
              />
              <img
                src="/assets/aistudio/Logo_Satusehat_965283aa.png"
                alt="SATUSEHAT"
                className="h-10 sm:h-11 lg:h-12 w-auto max-w-[165px] sm:max-w-[185px] object-contain object-left lg:object-right mix-blend-multiply select-none"
              />
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={() =>
                  onSelectEnquiry('Healthcare Solutions', 'KHAYR Digital Dental Platform')
                }
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-[#EE498E] via-[#903595] to-[#342077] hover:opacity-95 transition-opacity whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>{content.enquireCta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="https://khayr-brown.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#342077] bg-white border border-[#D9CEE6] rounded-xl hover:bg-[#F4F0FA] transition-colors whitespace-nowrap shrink-0"
              >
                <span>{content.externalPreviewCta}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* 4 Clinic Ecosystem Roles */}
        <div className="mt-14">
          <h3 className="font-display text-xl font-bold text-[#381B37] mb-6">
            {content.rolesTitle}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {content.roles.map((item, idx) => (
              <div
                key={item.role}
                className="bg-white border border-[#EAE4F2] rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-[#666666] mb-3">
                    <span className="font-mono font-semibold text-[#903595] tabular-nums">
                      0{idx + 1}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="font-medium text-[#342077]">{item.badge}</span>
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
            {content.threePillars.map((pillar) => (
              <div
                key={pillar.name}
                className="bg-white border border-[#EAE4F2] rounded-2xl p-7 flex flex-col"
              >
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
                      <span className="text-[#666666]"> — </span>
                      <dd className="text-[#666666] inline">{sub.desc}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive 6-Module Dental OS Simulator */}
        <div className="mt-16 bg-white border border-[#EAE4F2] rounded-3xl p-6 sm:p-8 lg:p-10">
          <div className="max-w-3xl mb-6">
            <h3 className="font-display text-2xl font-bold text-[#381B37]">
              {content.modulesTitle}
            </h3>
            <p className="mt-1.5 text-sm text-[#666666]">{content.modulesSub}</p>
          </div>

          {/* Interactive Module Selector Bar */}
          <div
            role="tablist"
            aria-label="KHAYR Operating System Modules"
            className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#FAF8FC] border border-[#EAE4F2] rounded-xl mb-8"
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
                  className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isSelected
                      ? 'bg-[#342077] text-white shadow-xs'
                      : 'text-[#381B37] hover:bg-[#EAE4F2]/60'
                  }`}
                >
                  {mod.tabLabel}
                </button>
              );
            })}
          </div>

          {/* Module Split Content: Left Explanation + Metrics, Right Interactive Concept UI */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="text-xs font-medium text-[#903595] mb-2">
                  KHAYR Dental OS · Concept UI Preview
                </div>
                <h4 className="font-display text-2xl font-bold text-[#381B37] leading-snug">
                  {activeModule.title}
                </h4>
                <p className="mt-3 text-sm text-[#666666] leading-relaxed">
                  {activeModule.subtitle}
                </p>

                <div className="mt-6 space-y-4">
                  {activeModule.highlights.map((hl) => (
                    <div
                      key={hl.title}
                      className="p-4 rounded-xl bg-[#FAF8FC] border border-[#EAE4F2]"
                    >
                      <div className="text-sm font-bold text-[#381B37]">{hl.title}</div>
                      <p className="mt-1 text-xs text-[#666666] leading-relaxed">{hl.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tabular Metrics Strip */}
              <div className="mt-6 pt-6 border-t border-[#EAE4F2] grid grid-cols-3 gap-4">
                {activeModule.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="font-mono text-xl sm:text-2xl font-bold text-[#342077] tabular-nums">
                      {m.value}
                    </div>
                    <div className="mt-0.5 text-xs font-semibold text-[#381B37]">
                      {m.label}
                    </div>
                    <div className="text-[11px] text-[#666666]">{m.delta}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Interactive UI Workspace */}
            <div className="lg:col-span-7 bg-[#FAF8FC] border border-[#D9CEE6] rounded-2xl p-5 sm:p-6 flex flex-col justify-between">
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#EAE4F2]">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#381B37]">
                  <span>KHAYR OS</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-[#903595]">{activeModule.tabLabel}</span>
                </div>
                <div className="text-xs text-[#666666] font-mono tabular-nums">
                  SATUSEHAT-Ready Schema · 256-bit TLS
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
                        className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold border transition-colors cursor-pointer whitespace-nowrap ${
                          reservationStep === step
                            ? 'bg-[#342077] text-white border-[#342077]'
                            : 'bg-white text-[#666666] border-[#EAE4F2] hover:border-[#903595]'
                        }`}
                      >
                        {step === 1 && (locale === 'id' ? '1. Tipe Pasien' : '1. Patient Type')}
                        {step === 2 && (locale === 'id' ? '2. Data Pasien' : '2. Patient Lookup')}
                        {step === 3 && (locale === 'id' ? '3. Jadwal & Dokter' : '3. Slot & Dentist')}
                      </button>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setPatientType('returning')}
                      className={`p-4 rounded-xl border text-left transition-colors cursor-pointer ${
                        patientType === 'returning'
                          ? 'bg-white border-[#903595] ring-2 ring-[#903595]/15'
                          : 'bg-white/70 border-[#EAE4F2]'
                      }`}
                    >
                      <div className="text-sm font-bold text-[#381B37]">
                        {locale === 'id' ? 'Pasien Lama (Terdaftar)' : 'Returning Patient'}
                      </div>
                      <div className="mt-1 text-xs text-[#666666]">
                        {locale === 'id'
                          ? 'Cari instan via Nama, No. WhatsApp, atau NIK untuk memuat EMR kronologis.'
                          : 'Instant search by Name, WhatsApp, or NIK to load chronological EMR.'}
                      </div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPatientType('new')}
                      className={`p-4 rounded-xl border text-left transition-colors cursor-pointer ${
                        patientType === 'new'
                          ? 'bg-white border-[#903595] ring-2 ring-[#903595]/15'
                          : 'bg-white/70 border-[#EAE4F2]'
                      }`}
                    >
                      <div className="text-sm font-bold text-[#381B37]">
                        {locale === 'id' ? 'Pasien Baru' : 'New Patient'}
                      </div>
                      <div className="mt-1 text-xs text-[#666666]">
                        {locale === 'id'
                          ? 'Buat profil rekam medis baru terstandar dengan validasi identitas.'
                          : 'Create a standardized new medical record profile with ID verification.'}
                      </div>
                    </button>
                  </div>

                  <div className="bg-white border border-[#EAE4F2] rounded-xl p-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <div className="text-[11px] font-medium text-[#666666]">
                        {locale === 'id' ? 'Pasien Terpilih' : 'Selected Patient'}
                      </div>
                      <div className="text-sm font-bold text-[#381B37] mt-0.5">
                        {patientType === 'returning'
                          ? 'Sofyan Hadi (RM-00419)'
                          : locale === 'id'
                          ? 'Registrasi Pasien Baru'
                          : 'New Patient Profile'}
                      </div>
                    </div>
                    <div>
                      <div className="text-[11px] font-medium text-[#666666]">
                        {locale === 'id' ? 'Dokter Gigi & Poli' : 'Assigned Dentist'}
                      </div>
                      <div className="text-sm font-bold text-[#381B37] mt-0.5">
                        drg. Omar Husen, Sp.KG
                      </div>
                    </div>
                    <div>
                      <div className="text-[11px] font-medium text-[#666666]">
                        {locale === 'id' ? 'Waktu Reservasi' : 'Appointment Slot'}
                      </div>
                      <div className="text-sm font-mono font-bold text-[#903595] mt-0.5 tabular-nums">
                        09:30 WIB · Chair 01
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
                        ? 'Filter Status Antrean Harian:'
                        : 'Filter Daily Queue Status:'}
                    </span>
                    <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-[#EAE4F2]">
                      {(
                        [
                          { id: 'all', label: locale === 'id' ? 'Semua (3)' : 'All (3)' },
                          { id: 'confirmed', label: locale === 'id' ? 'Terkonfirmasi' : 'Confirmed' },
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
                        className="bg-white border border-[#EAE4F2] rounded-xl p-3.5 flex items-center justify-between gap-4"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-lg bg-[#F4F0FA] text-[#342077] font-mono text-xs font-bold flex items-center justify-center shrink-0">
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
                          <div className="text-xs text-[#903595] font-medium">
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
                        {locale === 'id' ? 'Pasien Aktif: ' : 'Active Patient: '}
                      </span>
                      <strong className="text-[#381B37]">Sofyan Hadi (RM-00419)</strong>
                      <span className="text-[#666666]"> · drg. Omar Husen, Sp.KG</span>
                    </div>
                    <span className="font-mono font-semibold text-[#342077] tabular-nums">
                      Odontogram FDI · Rahang Atas & Bawah
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="text-xs font-semibold text-[#381B37]">
                      {locale === 'id'
                        ? 'Klik nomor gigi untuk memperbarui diagnosis & tindakan:'
                        : 'Click any tooth number to cycle clinical status:'}
                    </div>
                    <span className="text-xs font-mono font-bold text-[#903595] tabular-nums">
                      {locale === 'id' ? `Gigi Terpilih: #${selectedTooth}` : `Selected Tooth: #${selectedTooth}`}
                    </span>
                  </div>

                  {/* Interactive FDI Tooth Grid (18..11 | 21..28) */}
                  <div className="grid grid-cols-8 sm:grid-cols-16 gap-1.5 bg-white p-3.5 rounded-xl border border-[#EAE4F2]">
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
                            } ${isSelected ? 'ring-2 ring-[#EE498E]' : ''}`}
                          >
                            <div className={`font-mono text-xs font-bold tabular-nums ${style.color}`}>
                              {tooth}
                            </div>
                            <div className="text-[9px] uppercase tracking-tighter text-[#666666] mt-0.5 truncate">
                              {cond === 'normal' ? 'OK' : cond.toUpperCase()}
                            </div>
                          </button>
                        );
                      }
                    )}
                  </div>

                  {/* Legend & Selected Tooth Detail */}
                  <div className="bg-white border border-[#EAE4F2] rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <div className="text-xs text-[#666666]">
                        {locale === 'id'
                          ? `Status Elemen Gigi #${selectedTooth} (FDI):`
                          : `Clinical Status for Tooth #${selectedTooth} (FDI):`}
                      </div>
                      <div className="text-sm font-bold text-[#381B37] mt-0.5">
                        {conditionLabels[teethState[selectedTooth] || 'normal'].label}
                      </div>
                    </div>
                    <div className="text-xs font-mono text-[#342077] tabular-nums">
                      ICD-10: K02.1 / K04.0 · Auto-Billing Linked
                    </div>
                  </div>
                </div>
              )}

              {activeModule.id === 'riwayat' && (
                <div className="space-y-3 my-auto">
                  {[
                    {
                      date: '02 Nov 2026',
                      proc:
                        locale === 'id'
                          ? 'Obturasi Saluran Akar & Restorasi Komposit (Gigi #16)'
                          : 'Root Canal Obturation & Composite Restoration (Tooth #16)',
                      doc: 'drg. Omar Husen, Sp.KG',
                      note:
                        locale === 'id'
                          ? 'Pasien bebas keluhan nyeri perkusi. Rencana kontrol 1 bulan.'
                          : 'Asymptomatic on percussion. Follow-up scheduled in 1 month.',
                    },
                    {
                      date: '18 Okt 2026',
                      proc:
                        locale === 'id'
                          ? 'Preparasi Biomekanis Saluran Akar & Medikasi Intrakoronal'
                          : 'Biomechanical Canal Preparation & Intracanal Medication',
                      doc: 'drg. Omar Husen, Sp.KG',
                      note:
                        locale === 'id'
                          ? 'Irigasi NaOCl & sterilisasi ruang perawatan dengan Neolyte DS.'
                          : 'Canal irrigation & operatory sanitization with Neolyte DS.',
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
                      sku: 'DNT-CMP-A2',
                      name: 'Universal Nano-Hybrid Composite A2 Syringe',
                      stock: '42 Unit',
                      exp: 'Exp: Agu 2027',
                      status: locale === 'id' ? 'Stok Aman' : 'Safe Stock',
                      tone: 'text-[#027A48]',
                    },
                    {
                      sku: 'NEO-SN-1000',
                      name: 'Neolyte SN Hand & Body Sanitizer 60ppm (1000ml)',
                      stock: '18 Botol',
                      exp: 'Exp: Des 2027',
                      status: locale === 'id' ? 'Stok Aman' : 'Safe Stock',
                      tone: 'text-[#027A48]',
                    },
                    {
                      sku: 'DNT-ANS-01',
                      name: 'Articaine HCl 4% Dental Anesthetic Cartridges',
                      stock: '5 Box',
                      exp: 'Exp: Jan 2027',
                      status: locale === 'id' ? 'Hampir Habis · Reorder' : 'Low Stock · Reorder',
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
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-white border border-[#EAE4F2] rounded-xl p-3.5">
                      <div className="text-xs text-[#666666]">
                        {locale === 'id' ? 'Pendapatan Tindakan' : 'Procedure Revenue'}
                      </div>
                      <div className="font-mono text-lg font-bold text-[#342077] mt-1 tabular-nums">
                        Rp38,4 Jt
                      </div>
                      <div className="text-[11px] text-[#027A48] mt-0.5">80% porsi omset</div>
                    </div>
                    <div className="bg-white border border-[#EAE4F2] rounded-xl p-3.5">
                      <div className="text-xs text-[#666666]">
                        {locale === 'id' ? 'Farmasi & Produk' : 'Pharmacy & Products'}
                      </div>
                      <div className="font-mono text-lg font-bold text-[#342077] mt-1 tabular-nums">
                        Rp9,6 Jt
                      </div>
                      <div className="text-[11px] text-[#666666] mt-0.5">20% porsi omset</div>
                    </div>
                    <div className="bg-white border border-[#EAE4F2] rounded-xl p-3.5">
                      <div className="text-xs text-[#666666]">
                        {locale === 'id' ? 'Pasien Baru (Voucher)' : 'Voucher New Patients'}
                      </div>
                      <div className="font-mono text-lg font-bold text-[#EE498E] mt-1 tabular-nums">
                        +34 Pasien
                      </div>
                      <div className="text-[11px] text-[#903595] mt-0.5">5 Aplikasi Mitra</div>
                    </div>
                  </div>
                  <div className="bg-white border border-[#EAE4F2] rounded-xl p-4 text-xs text-[#666666] flex items-center justify-between">
                    <span>
                      {locale === 'id'
                        ? 'Status Rekonsiliasi Kasir & Saldo Kredit Promosi KHAYR'
                        : 'Billing Ledger & KHAYR Promotional Credit Balance Status'}
                    </span>
                    <span className="font-mono font-semibold text-[#027A48]">
                      100% Terverifikasi
                    </span>
                  </div>
                </div>
              )}

              <div className="pt-4 mt-5 border-t border-[#EAE4F2] flex items-center justify-between text-xs text-[#666666]">
                <span>
                  {locale === 'id'
                    ? 'Antarmuka dirancang khusus untuk kecepatan operasional klinik gigi.'
                    : 'Interface purpose-built for clinical speed and zero administrative friction.'}
                </span>
                <button
                  type="button"
                  onClick={() =>
                    onSelectEnquiry('Healthcare Solutions', 'KHAYR Digital Dental Platform')
                  }
                  className="font-semibold text-[#903595] hover:text-[#342077] transition-colors cursor-pointer whitespace-nowrap"
                >
                  {locale === 'id' ? 'Jadwalkan Demo →' : 'Schedule Live Demo →'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* KHAYR Voucher Promotion System Block */}
        <div className="mt-14 bg-[#342077] text-white rounded-3xl p-7 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
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

              {/* Partner Apps Text List */}
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
                    className="bg-white/10 border border-white/15 rounded-xl p-4"
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

            {/* Interactive Voucher Simulation Card */}
            <div className="lg:col-span-5 bg-white text-[#381B37] rounded-2xl p-6 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-[#EAE4F2]">
                <span className="text-xs font-bold text-[#342077]">
                  {locale === 'id' ? 'Simulasi Voucher Klinik' : 'Clinic Voucher Simulator'}
                </span>
                <div className="flex items-center gap-1 bg-[#FAF8FC] p-1 rounded-lg border border-[#EAE4F2]">
                  <button
                    type="button"
                    onClick={() => setVoucherExample('A')}
                    className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                      voucherExample === 'A'
                        ? 'bg-[#903595] text-white'
                        : 'text-[#666666] hover:text-[#381B37]'
                    }`}
                  >
                    {locale === 'id' ? 'Contoh A: Diskon %' : 'Example A: % Off'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setVoucherExample('B')}
                    className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                      voucherExample === 'B'
                        ? 'bg-[#903595] text-white'
                        : 'text-[#666666] hover:text-[#381B37]'
                    }`}
                  >
                    {locale === 'id' ? 'Contoh B: Paket' : 'Example B: Bundle'}
                  </button>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF8FC] border border-[#D9CEE6]">
                <div className="flex items-center justify-between text-xs text-[#666666]">
                  <span>KHAYR VOUCHER PROMOTION</span>
                  <span className="font-mono font-semibold text-[#027A48]">ACTIVE</span>
                </div>
                <div className="mt-2 font-display text-lg font-bold text-[#381B37]">
                  {voucherExample === 'A'
                    ? locale === 'id'
                      ? 'Layanan Pembersihan Karang Gigi (Scaling)'
                      : 'Ultrasonic Dental Scaling & Polishing'
                    : locale === 'id'
                    ? 'Paket Konsultasi Ortodontik + Foto Intraoral'
                    : 'Orthodontic Consultation + Intraoral Scan'}
                </div>
                <div className="mt-1 font-mono text-2xl font-extrabold text-[#EE498E] tabular-nums">
                  {voucherExample === 'A'
                    ? locale === 'id'
                      ? 'POTONGAN HARGA 30%'
                      : '30% TREATMENT DISCOUNT'
                    : locale === 'id'
                    ? 'HARGA SPESIAL Rp199.000'
                    : 'SPECIAL PACKAGE Rp199,000'}
                </div>
                <div className="mt-3 pt-3 border-t border-[#EAE4F2] space-y-1.5 text-xs">
                  <div className="flex justify-between">
                    <span className="text-[#666666]">
                      {locale === 'id' ? 'Kode Voucher:' : 'Voucher Code:'}
                    </span>
                    <span className="font-mono font-bold text-[#342077]">
                      {voucherExample === 'A' ? 'KHAYR-SCALE-30' : 'KHAYR-ORTHO-199'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#666666]">
                      {locale === 'id' ? 'Klaim Melalui:' : 'Redeemable On:'}
                    </span>
                    <span className="font-semibold text-[#381B37]">
                      Telkomsel, Indosat, XL, AXIS, AstraPay
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#666666]">
                      {locale === 'id' ? 'Biaya Pembuatan Awal:' : 'Upfront Creation Fee:'}
                    </span>
                    <span className="font-mono font-bold text-[#027A48]">
                      Rp0 (Pay Per Redemption)
                    </span>
                  </div>
                </div>
              </div>

              {/* 4 Workflow Steps */}
              <div className="mt-5 grid grid-cols-2 gap-2.5">
                {content.voucherSystem.workflowSteps.map((ws) => (
                  <div
                    key={ws.num}
                    className="p-3 rounded-lg bg-[#FAF8FC] border border-[#EAE4F2]"
                  >
                    <div className="font-mono text-xs font-bold text-[#903595] tabular-nums">
                      {ws.num}. {ws.title}
                    </div>
                    <p className="text-[11px] text-[#666666] mt-1 leading-snug">{ws.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Development Stage Governance Note */}
        <p className="mt-6 text-xs text-[#666666] leading-relaxed">
          {content.governanceFootnote}
        </p>
      </div>
    </section>
  );
}
