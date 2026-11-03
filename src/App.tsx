/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  ShieldCheck,
  Layers,
  BookOpen,
  Handshake,
  X,
  FileText,
} from 'lucide-react';
import { CONTENT, type ArticleItem } from './data/content';
import type { Locale } from './utils/neomedikaLogic';
import { NeomedikaLogo } from './components/NeomedikaLogo';
import { KhayrShowcase } from './components/KhayrShowcase';
import { NeolyteShowcase } from './components/NeolyteShowcase';
import { ContactWorkspaceSection } from './components/ContactWorkspaceSection';

export default function App() {
  const [locale, setLocale] = useState<Locale>('id');
  const [activePage, setActivePage] = useState<
    'about' | 'business' | 'products' | 'technology' | 'insights'
  >('about');
  const [insightFilter, setInsightFilter] = useState<string>('ALL');
  const [activeArticle, setActiveArticle] = useState<ArticleItem | null>(null);
  const [activeLegalModal, setActiveLegalModal] = useState<
    'privacy' | 'terms' | 'cookies' | 'brand' | null
  >(null);

  // Contextual prefill state for the Contact NEO form
  const [prefilledCategory, setPrefilledCategory] = useState<string>('Healthcare Solutions');
  const [prefilledProduct, setPrefilledProduct] = useState<string>(
    'KHAYR Digital Dental Platform'
  );

  const t = CONTENT[locale];

  const handleSelectMenuPage = (
    page: 'about' | 'business' | 'products' | 'technology' | 'insights',
    scrollTargetId?: string
  ) => {
    setActivePage(page);
    setTimeout(() => {
      if (scrollTargetId && scrollTargetId !== 'top') {
        const el = document.getElementById(scrollTargetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          return;
        }
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 40);
  };

  const handleRouteToContact = (category: string, productInterest: string) => {
    setPrefilledCategory(category);
    setPrefilledProduct(productInterest);
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const filteredArticles =
    insightFilter === 'ALL'
      ? t.insights.articles
      : t.insights.articles.filter((a) => a.category === insightFilter);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#381B37]">
      {/* Strict 3-Zone Top Bar Contract (Zone 1: Brand Wordmark | Zone 2: 5 Nav Links | Zone 3: 1 Primary CTA) */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#EAE4F2]">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 px-6 lg:px-8 py-3.5">
          {/* Zone 1: Single Brand Lockup */}
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              handleSelectMenuPage('about', 'top');
            }}
            aria-label="neomedika home"
            className="whitespace-nowrap shrink-0 focus:outline-none"
          >
            <NeomedikaLogo variant="compact" />
          </a>

          {/* Zone 2: 5 Concise Single-Line Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="flex items-center gap-4 sm:gap-7 text-xs sm:text-sm font-medium text-[#666666] overflow-x-auto"
          >
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                handleSelectMenuPage('about', 'top');
              }}
              className={`transition-colors whitespace-nowrap shrink-0 ${
                activePage === 'about'
                  ? 'text-[#903595] font-bold'
                  : 'hover:text-[#381B37]'
              }`}
            >
              {t.nav.about}
            </a>
            <a
              href="#business"
              onClick={(e) => {
                e.preventDefault();
                handleSelectMenuPage('business', 'top');
              }}
              className={`transition-colors whitespace-nowrap shrink-0 ${
                activePage === 'business'
                  ? 'text-[#903595] font-bold'
                  : 'hover:text-[#381B37]'
              }`}
            >
              {t.nav.business}
            </a>
            <a
              href="#khayr"
              onClick={(e) => {
                e.preventDefault();
                handleSelectMenuPage('products', 'top');
              }}
              className={`transition-colors whitespace-nowrap shrink-0 ${
                activePage === 'products'
                  ? 'text-[#903595] font-bold'
                  : 'hover:text-[#381B37]'
              }`}
            >
              {t.nav.products}
            </a>
            <a
              href="#technology"
              onClick={(e) => {
                e.preventDefault();
                handleSelectMenuPage('technology', 'top');
              }}
              className={`transition-colors whitespace-nowrap shrink-0 ${
                activePage === 'technology'
                  ? 'text-[#903595] font-bold'
                  : 'hover:text-[#381B37]'
              }`}
            >
              {t.nav.technology}
            </a>
            <a
              href="#insights"
              onClick={(e) => {
                e.preventDefault();
                handleSelectMenuPage('insights', 'top');
              }}
              className={`transition-colors whitespace-nowrap shrink-0 ${
                activePage === 'insights'
                  ? 'text-[#903595] font-bold'
                  : 'hover:text-[#381B37]'
              }`}
            >
              {t.nav.insights}
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="flex items-center shrink-0">
            <a
              href="#contact"
              className="px-4 py-2 text-xs sm:text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-[#EE498E] via-[#903595] to-[#342077] hover:opacity-95 transition-opacity whitespace-nowrap shrink-0"
            >
              {t.nav.cta}
            </a>
          </div>
        </div>
      </header>

      <main id="top" className="flex-1">
        {activePage === 'about' && (
          <>
            {/* SECTION 1: HERO & BILINGUAL WORKSPACE TOOLBAR */}
            <section
              aria-labelledby="hero-headline"
              className="pt-8 pb-20 lg:pt-12 lg:pb-24 bg-white"
            >
              <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Hero Top Utility Bar: Corporate Descriptor + Bilingual Switcher */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-10 border-b border-[#EAE4F2]">
                  <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-[#666666]">
                    <strong className="font-bold text-[#381B37]">{t.utility.legalEntity}</strong>
                    <span aria-hidden="true">·</span>
                    <span className="text-[#903595] font-medium">{t.utility.descriptor}</span>
                    <span aria-hidden="true" className="hidden sm:inline">
                      ·
                    </span>
                    <span className="hidden sm:inline italic text-[#666666]">
                      “{t.utility.tagline}”
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    {/* Bilingual Segmented Control (ID / EN) */}
                    <div
                      role="group"
                      aria-label={t.utility.langLabel}
                      className="inline-flex items-center gap-1 p-1 bg-[#FAF8FC] border border-[#D9CEE6] rounded-xl"
                    >
                      <Globe className="w-3.5 h-3.5 text-[#903595] ml-1.5" />
                      <button
                        type="button"
                        onClick={() => setLocale('id')}
                        aria-pressed={locale === 'id'}
                        className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                          locale === 'id'
                            ? 'bg-[#342077] text-white'
                            : 'text-[#666666] hover:text-[#381B37]'
                        }`}
                      >
                        ID · Indonesia
                      </button>
                      <button
                        type="button"
                        onClick={() => setLocale('en')}
                        aria-pressed={locale === 'en'}
                        className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                          locale === 'en'
                            ? 'bg-[#342077] text-white'
                            : 'text-[#666666] hover:text-[#381B37]'
                        }`}
                      >
                        EN · English
                      </button>
                    </div>
                  </div>
                </div>

                {/* 2-Column Editorial Hero Split */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
                  {/* Left 7 Columns: Editorial Headline & Value Proposition */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      <div className="text-xs sm:text-sm font-semibold text-[#903595] mb-3">
                        {t.hero.kicker}
                      </div>
                      <h1
                        id="hero-headline"
                        className="font-display text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-[#381B37] leading-[1.1] text-balance"
                      >
                        {t.hero.headline}
                      </h1>
                      <p className="mt-5 text-base sm:text-lg text-[#666666] leading-relaxed max-w-[62ch]">
                        {t.hero.subheadline}
                      </p>
                      <p className="mt-4 text-sm text-[#381B37] leading-relaxed max-w-[62ch]">
                        {t.hero.corporateNote}
                      </p>
                      <div className="mt-5 w-full max-w-[62ch] rounded-2xl overflow-hidden border border-[#EAE4F2] bg-white p-2 sm:p-2.5 flex items-center justify-center">
                        <img
                          src="/assets/aistudio/Helath_Care_Mgn_Picture_3_69cc486c.jfif"
                          alt="PT Neomedika Elektra Optima Integrated Healthcare Ecosystem"
                          className="w-full max-h-[200px] sm:max-h-[225px] object-contain rounded-xl select-none"
                        />
                      </div>
                    </div>

                    {/* Hero Action Buttons */}
                    <div className="mt-6 pt-5 border-t border-[#EAE4F2]">
                      <div className="flex flex-wrap items-center gap-3.5">
                        <a
                          href="#about"
                          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white rounded-xl bg-gradient-to-r from-[#EE498E] via-[#903595] to-[#342077] hover:opacity-95 transition-opacity whitespace-nowrap shrink-0"
                        >
                          <span>{t.hero.primaryCta}</span>
                          <ArrowRight className="w-4 h-4" />
                        </a>
                        <button
                          type="button"
                          onClick={() =>
                            handleRouteToContact(
                              'Business & Strategic Partnerships',
                              'Corporate & Ecosystem Partnership'
                            )
                          }
                          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-[#342077] bg-[#FAF8FC] border border-[#D9CEE6] rounded-xl hover:border-[#903595] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                        >
                          <span>{t.hero.secondaryCta}</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Right 5 Columns: Official Neomedika Brand Identity & Corporate Governance Architecture */}
                  <div className="lg:col-span-5 bg-[#FAF8FC] border border-[#D9CEE6] rounded-3xl p-6 sm:p-7 flex flex-col justify-start gap-4">
                    {/* Official Vertical Logo Lockup on Pure White Safe-Space Surface (Brand Guideline v0.9 Page 3 & 4) */}
                    <div className="bg-white border border-[#EAE4F2] rounded-2xl p-5 sm:p-6 flex flex-col items-center justify-center">
                      <NeomedikaLogo variant="vertical" />
                    </div>

                    {/* Corporate Mandate & Architecture Summary Cards */}
                    <div className="flex-1 flex flex-col justify-start gap-3.5">
                      <div className="text-xs sm:text-[13px] font-bold text-[#381B37] uppercase tracking-wider pt-0.5">
                        {locale === 'id'
                          ? 'Mandat & Fokus Korporat PT Neomedika Elektra Optima'
                          : 'PT Neomedika Elektra Optima Corporate Mandate'}
                      </div>

                      <div className="flex-1 p-5 sm:p-6 rounded-2xl bg-white border border-[#EAE4F2] flex flex-col justify-center">
                        <div className="flex items-center justify-between text-xs text-[#666666] mb-1.5">
                          <span className="font-semibold text-[#903595]">
                            {locale === 'id'
                              ? '01 · Transformasi Kesehatan Digital'
                              : '01 · Digital Healthcare Transformation'}
                          </span>
                          <span className="font-mono font-semibold text-[#342077]">NEO ARCHITECTURE</span>
                        </div>
                        <div className="font-display text-base sm:text-lg font-bold text-[#381B37] leading-snug">
                          {locale === 'id'
                            ? 'Sistem Operasional & Interoperabilitas Fasilitas Kesehatan'
                            : 'Healthcare Facility Operations & Interoperability'}
                        </div>
                        <p className="text-xs sm:text-sm text-[#666666] mt-1.5 leading-relaxed">
                          {locale === 'id'
                            ? 'Menghubungkan alur kerja klinis, administrasi, dan pertukaran informasi yang bertanggung jawab.'
                            : 'Connecting clinical workflows, facility administration, and responsible information exchange.'}
                        </p>
                      </div>

                      <div className="flex-1 p-5 sm:p-6 rounded-2xl bg-white border border-[#EAE4F2] flex flex-col justify-center">
                        <div className="flex items-center justify-between text-xs text-[#666666] mb-1.5">
                          <span className="font-semibold text-[#342077]">
                            {locale === 'id'
                              ? '02 · Ekosistem & Standar Medis'
                              : '02 · Medical Ecosystem & Standards'}
                          </span>
                          <span className="font-mono font-semibold text-[#903595]">NEO GOVERNANCE</span>
                        </div>
                        <div className="font-display text-base sm:text-lg font-bold text-[#381B37] leading-snug">
                          {locale === 'id'
                            ? 'Kemitraan Strategis & Tata Kelola Kesehatan Terpadu'
                            : 'Strategic Partnerships & Integrated Healthcare Governance'}
                        </div>
                        <p className="text-xs sm:text-sm text-[#666666] mt-1.5 leading-relaxed">
                          {locale === 'id'
                            ? 'Berkolaborasi bersama klinik, rumah sakit, institusi, dan jaringan distribusi nasional.'
                            : 'Collaborating with clinics, hospitals, institutions, and national healthcare networks.'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

            {/* Full-Width 4-Column Corporate Snapshot Bar Below Hero Split */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {t.hero.snapshotItems.map((snap, idx) => (
                <div
                  key={snap.label}
                  className="bg-[#FAF8FC] border border-[#EAE4F2] rounded-2xl p-5 overflow-hidden"
                >
                  <div className="text-xs text-[#666666]">{snap.label}</div>
                  {idx === 1 && (
                    <div className="relative w-[105px] h-[30px] max-w-full overflow-hidden mt-2 mb-1 select-none">
                      <img
                        src="/assets/aistudio/KHAYR_Logo_Name_Transparant_cddcce1f.png"
                        alt="KHAYR — intelligent dentistry solutions"
                        className="absolute max-w-none w-[105.47%] h-[123.21%] -left-[4.1%] -top-[6.48%] pointer-events-none select-none"
                      />
                    </div>
                  )}
                  {idx === 2 && (
                    <div className="relative w-[118px] h-[30px] max-w-full overflow-hidden mt-2 mb-1 select-none">
                      <img
                        src="/assets/aistudio/Neollyte_logo_2K_379f6785.png"
                        alt="Neolyte™ logo"
                        className="absolute max-w-none w-[124.5%] h-[177%] -left-[6.57%] -top-[37.89%] mix-blend-multiply pointer-events-none select-none"
                      />
                    </div>
                  )}
                  <div className="font-display text-base font-bold text-[#381B37] mt-1">
                    {snap.value}
                  </div>
                  <div className="text-xs text-[#903595] font-medium mt-1">{snap.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 2: WHO WE ARE / ABOUT NEO (Vision, Mission, Values, 4-Phase Growth Roadmap) */}
        <section
          id="about"
          aria-labelledby="about-heading"
          className="py-24 bg-[#FAF8FC] border-t border-[#EAE4F2]"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-14 border-b border-[#EAE4F2]">
              <div className="lg:col-span-6">
                <div className="flex items-center gap-2 text-xs font-medium text-[#666666] mb-3">
                  <span className="text-[#903595] font-semibold">{t.about.sectionNumber}</span>
                  <span aria-hidden="true">·</span>
                  <span>{t.about.kicker}</span>
                </div>
                <h2
                  id="about-heading"
                  className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#381B37] leading-tight text-balance"
                >
                  {t.about.heading}
                </h2>
              </div>
              <div className="lg:col-span-6 space-y-4">
                <p className="text-base font-medium text-[#381B37] leading-relaxed">
                  {t.about.lead}
                </p>
                <p className="text-sm text-[#666666] leading-relaxed">{t.about.body}</p>
              </div>
            </div>

            {/* Vision & 5 Missions Split */}
            <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              <div className="lg:col-span-5 bg-[#342077] text-white rounded-3xl p-8 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold text-[#EE498E] uppercase tracking-wider mb-3">
                    {t.about.visionTitle}
                  </div>
                  <p className="font-display text-2xl sm:text-3xl font-bold leading-snug text-balance">
                    “{t.about.visionText}”
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-white/15 text-xs text-white/80">
                  PT Neomedika Elektra Optima (NEO) · Connecting Healthcare. Empowering Better Lives.
                </div>
              </div>

              <div className="lg:col-span-7 bg-white border border-[#EAE4F2] rounded-3xl p-7 sm:p-8">
                <h3 className="font-display text-xl font-bold text-[#381B37] mb-5">
                  {t.about.missionTitle}
                </h3>
                <div className="space-y-4">
                  {t.about.missions.map((m) => (
                    <div
                      key={m.code}
                      className="flex items-start gap-4 pb-4 border-b border-[#EAE4F2] last:border-none last:pb-0"
                    >
                      <span className="font-mono text-sm font-bold text-[#903595] tabular-nums shrink-0 mt-0.5">
                        {m.code}.
                      </span>
                      <div>
                        <div className="text-sm font-bold text-[#381B37]">{m.title}</div>
                        <p className="text-xs sm:text-sm text-[#666666] mt-0.5">{m.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 6 Corporate Values */}
            <div className="mt-14">
              <h3 className="font-display text-xl font-bold text-[#381B37] mb-6">
                {t.about.valuesTitle}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {t.about.values.map((val, idx) => (
                  <div
                    key={val.title}
                    className="bg-white border border-[#EAE4F2] rounded-2xl p-6"
                  >
                    <div className="font-mono text-xs font-semibold text-[#903595] mb-2 tabular-nums">
                      0{idx + 1}
                    </div>
                    <h4 className="font-display text-base font-bold text-[#381B37] mb-1.5">
                      {val.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 4-Phase Growth Roadmap */}
            <div className="mt-14 bg-white border border-[#EAE4F2] rounded-3xl p-7 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
                <h3 className="font-display text-xl font-bold text-[#381B37]">
                  {t.about.roadmapTitle}
                </h3>
                <span className="text-xs text-[#666666]">{t.about.roadmapNote}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {t.about.phases.map((p) => (
                  <div
                    key={p.phase}
                    className="p-5 rounded-2xl bg-[#FAF8FC] border border-[#EAE4F2]"
                  >
                    <div className="font-mono text-xs font-bold text-[#903595]">{p.phase}</div>
                    <h4 className="font-display text-base font-bold text-[#381B37] mt-1.5">
                      {p.title}
                    </h4>
                    <p className="text-xs text-[#666666] mt-2 leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Partnership Tracks in Tentang NEO */}
            <div className="mt-14 bg-[#342077] text-white rounded-3xl p-8 sm:p-12">
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-white/15">
                <div className="max-w-2xl">
                  <div className="text-xs font-semibold text-[#EE498E] uppercase tracking-wider mb-2">
                    {t.partnerships.sectionNumber} · {t.partnerships.kicker}
                  </div>
                  <h2
                    id="partnerships-heading"
                    className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight text-balance"
                  >
                    {t.partnerships.heading}
                  </h2>
                  <p className="mt-3 text-sm sm:text-base text-white/80 leading-relaxed">
                    {t.partnerships.lead}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    handleRouteToContact(
                      'Business & Strategic Partnerships',
                      'Corporate & Ecosystem Partnership'
                    )
                  }
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white rounded-xl bg-gradient-to-r from-[#EE498E] to-[#903595] hover:opacity-95 transition-opacity whitespace-nowrap shrink-0 cursor-pointer self-start lg:self-auto"
                >
                  <span>{t.partnerships.ctaButton}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {t.partnerships.tracks.map((tr) => (
                  <div
                    key={tr.title}
                    className="bg-white/10 border border-white/15 rounded-2xl p-6 flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-xs font-medium text-[#EE498E] mb-1.5">
                        {tr.audience}
                      </div>
                      <h3 className="font-display text-lg font-bold text-white mb-2">
                        {tr.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                        {tr.desc}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        handleRouteToContact(
                          tr.category,
                          'Corporate & Ecosystem Partnership'
                        )
                      }
                      className="mt-5 pt-3 border-t border-white/15 text-left text-xs font-semibold text-white hover:text-[#EE498E] transition-colors inline-flex items-center justify-between cursor-pointer whitespace-nowrap"
                    >
                      <span>{t.nav.cta}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
          </>
        )}

        {/* DEDICATED PILAR BISNIS VIEW (Only accessible via 'Pilar Bisnis' in the Menu Bar) */}
        {activePage === 'business' && (
          <>
            <section className="pt-8 pb-6 bg-white border-b border-[#EAE4F2]">
              <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[#666666]">
                    <button
                      type="button"
                      onClick={() => handleSelectMenuPage('about', 'top')}
                      className="font-semibold text-[#903595] hover:text-[#342077] transition-colors cursor-pointer"
                    >
                      {locale === 'id' ? '← Kembali ke Tentang NEO' : '← Back to About NEO'}
                    </button>
                    <span aria-hidden="true">·</span>
                    <strong className="font-bold text-[#381B37]">
                      {t.nav.business} · PT Neomedika Elektra Optima
                    </strong>
                  </div>

                  <div
                    role="group"
                    aria-label={t.utility.langLabel}
                    className="inline-flex items-center gap-1 p-1 bg-[#FAF8FC] border border-[#D9CEE6] rounded-xl"
                  >
                    <Globe className="w-3.5 h-3.5 text-[#903595] ml-1.5" />
                    <button
                      type="button"
                      onClick={() => setLocale('id')}
                      aria-pressed={locale === 'id'}
                      className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                        locale === 'id'
                          ? 'bg-[#342077] text-white'
                          : 'text-[#666666] hover:text-[#381B37]'
                      }`}
                    >
                      ID · Indonesia
                    </button>
                    <button
                      type="button"
                      onClick={() => setLocale('en')}
                      aria-pressed={locale === 'en'}
                      className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                        locale === 'en'
                          ? 'bg-[#342077] text-white'
                          : 'text-[#666666] hover:text-[#381B37]'
                      }`}
                    >
                      EN · English
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <section
              id="business"
              aria-labelledby="business-heading"
              className="py-20 bg-white"
            >
              <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="max-w-3xl mb-12">
                  <div className="flex items-center gap-2 text-xs font-medium text-[#666666] mb-3">
                    <span className="text-[#903595] font-semibold">{t.business.sectionNumber}</span>
                    <span aria-hidden="true">·</span>
                    <span>{t.business.kicker}</span>
                  </div>
                  <h2
                    id="business-heading"
                    className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#381B37] leading-tight text-balance"
                  >
                    {t.business.heading}
                  </h2>
                  <p className="mt-4 text-base text-[#666666] leading-relaxed">{t.business.lead}</p>
                </div>

                {/* Asymmetric Bento Grid for the 5 Strategic Business Pillars */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {t.business.pillars.map((pillar) => (
                    <div
                      key={pillar.index}
                      className={`bg-[#FAF8FC] border border-[#EAE4F2] rounded-3xl p-7 sm:p-8 flex flex-col justify-between ${
                        pillar.spanWide ? 'lg:col-span-2' : 'lg:col-span-1'
                      }`}
                    >
                      <div>
                        <div className="font-mono text-sm font-bold text-[#903595] tabular-nums mb-2">
                          {pillar.index}. Strategic Business Pillar
                        </div>
                        <h3 className="font-display text-2xl font-bold text-[#381B37]">
                          {pillar.title}
                        </h3>
                        <p className="mt-2.5 text-sm text-[#666666] leading-relaxed">
                          {pillar.summary}
                        </p>
                        {pillar.index === '01' && (
                          <div className="mt-5 w-full rounded-2xl overflow-hidden border border-[#EAE4F2] bg-white p-2 sm:p-3 flex items-center justify-center">
                            <img
                              src="/assets/aistudio/Helath_Care_Mgn_Picture_4_0f2992d0.jfif"
                              alt={pillar.title}
                              className="w-full max-h-[220px] sm:max-h-[260px] object-contain rounded-xl select-none"
                            />
                          </div>
                        )}
                      </div>

                      <ul className="mt-6 pt-5 border-t border-[#EAE4F2] grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {pillar.capabilities.map((cap) => (
                          <li
                            key={cap}
                            className="flex items-start gap-2 text-xs sm:text-sm text-[#381B37]"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#903595] shrink-0 mt-0.5" />
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <p className="mt-4 text-xs text-[#666666]">{t.business.governanceNote}</p>

                {/* Solutions by Audience / Use Case */}
                <div className="mt-16 pt-14 border-t border-[#EAE4F2]">
                  <div className="max-w-3xl mb-8">
                    <h3 className="font-display text-2xl font-bold text-[#381B37]">
                      {t.business.solutionsHeading}
                    </h3>
                    <p className="mt-2 text-sm text-[#666666]">{t.business.solutionsSub}</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {t.business.audiences.map((aud) => (
                      <div
                        key={aud.audience}
                        className="bg-white border border-[#D9CEE6] rounded-2xl p-6 flex flex-col justify-between"
                      >
                        <div>
                          <div className="text-xs font-semibold text-[#903595] mb-1.5">
                            {aud.focus}
                          </div>
                          <h4 className="font-display text-lg font-bold text-[#381B37]">
                            {aud.audience}
                          </h4>
                          <p className="mt-2.5 text-xs sm:text-sm text-[#666666] leading-relaxed">
                            {aud.description}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() =>
                            handleRouteToContact(aud.enquiryCategory, aud.productInterest)
                          }
                          className="mt-5 pt-4 border-t border-[#EAE4F2] text-left text-xs font-bold text-[#342077] hover:text-[#EE498E] transition-colors inline-flex items-center justify-between w-full cursor-pointer whitespace-nowrap"
                        >
                          <span>{aud.ctaLabel}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {/* DEDICATED PRODUK UTAMA VIEW (Only accessible via 'Produk Utama' in the Menu Bar) */}
        {activePage === 'products' && (
          <>
            <section className="pt-8 pb-6 bg-white border-b border-[#EAE4F2]">
              <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[#666666]">
                    <button
                      type="button"
                      onClick={() => handleSelectMenuPage('about', 'top')}
                      className="font-semibold text-[#903595] hover:text-[#342077] transition-colors cursor-pointer"
                    >
                      {locale === 'id' ? '← Kembali ke Tentang NEO' : '← Back to About NEO'}
                    </button>
                    <span aria-hidden="true">·</span>
                    <strong className="font-bold text-[#381B37]">
                      {locale === 'id'
                        ? 'Produk Utama PT Neomedika Elektra Optima'
                        : 'PT Neomedika Elektra Optima Flagship Products'}
                    </strong>
                    <span aria-hidden="true" className="hidden sm:inline">
                      ·
                    </span>
                    <a
                      href="#khayr"
                      className="font-semibold text-[#342077] hover:text-[#EE498E] transition-colors"
                    >
                      01 · KHAYR Dental OS
                    </a>
                    <span aria-hidden="true">·</span>
                    <a
                      href="#neolyte"
                      className="font-semibold text-[#189AB4] hover:text-[#342077] transition-colors"
                    >
                      02 · Neolyte™ SN & DS
                    </a>
                  </div>

                  {/* Bilingual Segmented Control (ID / EN) */}
                  <div
                    role="group"
                    aria-label={t.utility.langLabel}
                    className="inline-flex items-center gap-1 p-1 bg-[#FAF8FC] border border-[#D9CEE6] rounded-xl"
                  >
                    <Globe className="w-3.5 h-3.5 text-[#903595] ml-1.5" />
                    <button
                      type="button"
                      onClick={() => setLocale('id')}
                      aria-pressed={locale === 'id'}
                      className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                        locale === 'id'
                          ? 'bg-[#342077] text-white'
                          : 'text-[#666666] hover:text-[#381B37]'
                      }`}
                    >
                      ID · Indonesia
                    </button>
                    <button
                      type="button"
                      onClick={() => setLocale('en')}
                      aria-pressed={locale === 'en'}
                      className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                        locale === 'en'
                          ? 'bg-[#342077] text-white'
                          : 'text-[#666666] hover:text-[#381B37]'
                      }`}
                    >
                      EN · English
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 4: FLAGSHIP DIGITAL PRODUCT — KHAYR */}
            <KhayrShowcase
              content={t.khayr}
              locale={locale}
              onSelectEnquiry={handleRouteToContact}
            />

            {/* SECTION 5: HEALTHCARE HYGIENE LINE — NEOLYTE */}
            <NeolyteShowcase
              content={t.neolyte}
              locale={locale}
              onSelectEnquiry={handleRouteToContact}
            />
          </>
        )}

        {/* DEDICATED TEKNOLOGI VIEW (Only accessible via 'Teknologi' in the Menu Bar) */}
        {activePage === 'technology' && (
          <>
            <section className="pt-8 pb-6 bg-white border-b border-[#EAE4F2]">
              <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[#666666]">
                    <button
                      type="button"
                      onClick={() => handleSelectMenuPage('about', 'top')}
                      className="font-semibold text-[#903595] hover:text-[#342077] transition-colors cursor-pointer"
                    >
                      {locale === 'id' ? '← Kembali ke Tentang NEO' : '← Back to About NEO'}
                    </button>
                    <span aria-hidden="true">·</span>
                    <strong className="font-bold text-[#381B37]">
                      {t.nav.technology} · PT Neomedika Elektra Optima
                    </strong>
                  </div>

                  <div
                    role="group"
                    aria-label={t.utility.langLabel}
                    className="inline-flex items-center gap-1 p-1 bg-[#FAF8FC] border border-[#D9CEE6] rounded-xl"
                  >
                    <Globe className="w-3.5 h-3.5 text-[#903595] ml-1.5" />
                    <button
                      type="button"
                      onClick={() => setLocale('id')}
                      aria-pressed={locale === 'id'}
                      className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                        locale === 'id'
                          ? 'bg-[#342077] text-white'
                          : 'text-[#666666] hover:text-[#381B37]'
                      }`}
                    >
                      ID · Indonesia
                    </button>
                    <button
                      type="button"
                      onClick={() => setLocale('en')}
                      aria-pressed={locale === 'en'}
                      className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                        locale === 'en'
                          ? 'bg-[#342077] text-white'
                          : 'text-[#666666] hover:text-[#381B37]'
                      }`}
                    >
                      EN · English
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <section
              id="technology"
              aria-labelledby="tech-heading"
              className="py-20 bg-[#FAF8FC]"
            >
              <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="max-w-3xl mb-12">
                  <div className="flex items-center gap-2 text-xs font-medium text-[#666666] mb-3">
                    <span className="text-[#903595] font-semibold">{t.technology.sectionNumber}</span>
                    <span aria-hidden="true">·</span>
                    <span>{t.technology.kicker}</span>
                  </div>
                  <h2
                    id="tech-heading"
                    className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#381B37] leading-tight text-balance"
                  >
                    {t.technology.heading}
                  </h2>
                  <p className="mt-4 text-base text-[#666666] leading-relaxed">{t.technology.lead}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {t.technology.principles.map((pr) => (
                    <div
                      key={pr.index}
                      className="bg-white border border-[#EAE4F2] rounded-2xl p-6"
                    >
                      <div className="font-mono text-xs font-bold text-[#903595] mb-2 tabular-nums">
                        {pr.index}
                      </div>
                      <h3 className="font-display text-lg font-bold text-[#381B37] mb-2">
                        {pr.title}
                      </h3>
                      <p className="text-sm text-[#666666] leading-relaxed">{pr.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Our Approach & Governance */}
                <div className="mt-16 bg-white border border-[#EAE4F2] rounded-3xl p-7 sm:p-10">
                  <div className="max-w-3xl mb-8">
                    <h3 className="font-display text-2xl font-bold text-[#381B37]">
                      {t.technology.approachHeading}
                    </h3>
                    <p className="mt-2 text-sm text-[#666666] leading-relaxed">
                      {t.technology.approachLead}
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {t.technology.governanceBlocks.map((gb) => (
                      <div
                        key={gb.title}
                        className="p-5 rounded-2xl bg-[#FAF8FC] border border-[#EAE4F2]"
                      >
                        <h4 className="font-display text-base font-bold text-[#381B37] mb-2">
                          {gb.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">{gb.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {/* DEDICATED WAWASAN VIEW (Only accessible via 'Wawasan' in the Menu Bar) */}
        {activePage === 'insights' && (
          <>
            <section className="pt-8 pb-6 bg-white border-b border-[#EAE4F2]">
              <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[#666666]">
                    <button
                      type="button"
                      onClick={() => handleSelectMenuPage('about', 'top')}
                      className="font-semibold text-[#903595] hover:text-[#342077] transition-colors cursor-pointer"
                    >
                      {locale === 'id' ? '← Kembali ke Tentang NEO' : '← Back to About NEO'}
                    </button>
                    <span aria-hidden="true">·</span>
                    <strong className="font-bold text-[#381B37]">
                      {t.nav.insights} · PT Neomedika Elektra Optima
                    </strong>
                  </div>

                  <div
                    role="group"
                    aria-label={t.utility.langLabel}
                    className="inline-flex items-center gap-1 p-1 bg-[#FAF8FC] border border-[#D9CEE6] rounded-xl"
                  >
                    <Globe className="w-3.5 h-3.5 text-[#903595] ml-1.5" />
                    <button
                      type="button"
                      onClick={() => setLocale('id')}
                      aria-pressed={locale === 'id'}
                      className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                        locale === 'id'
                          ? 'bg-[#342077] text-white'
                          : 'text-[#666666] hover:text-[#381B37]'
                      }`}
                    >
                      ID · Indonesia
                    </button>
                    <button
                      type="button"
                      onClick={() => setLocale('en')}
                      aria-pressed={locale === 'en'}
                      className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                        locale === 'en'
                          ? 'bg-[#342077] text-white'
                          : 'text-[#666666] hover:text-[#381B37]'
                      }`}
                    >
                      EN · English
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <section id="insights" className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-2 text-xs font-medium text-[#666666] mb-3">
                      <span className="text-[#903595] font-semibold">
                        {t.insights.sectionNumber}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{t.insights.kicker}</span>
                    </div>
                    <h2 className="font-display text-3xl font-bold text-[#381B37] text-balance">
                      {t.insights.heading}
                    </h2>
                    <p className="mt-2 text-sm sm:text-base text-[#666666]">{t.insights.lead}</p>
                  </div>

                  {/* Interactive Category Filter Tabs */}
                  <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#FAF8FC] border border-[#EAE4F2] rounded-xl">
                    {t.insights.categories.map((cat, idx) => {
                      const filterValue = idx === 0 ? 'ALL' : cat;
                      const isActive = insightFilter === filterValue;
                      return (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => setInsightFilter(filterValue)}
                          className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                            isActive
                              ? 'bg-[#342077] text-white'
                              : 'text-[#666666] hover:text-[#381B37]'
                          }`}
                        >
                          {cat}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredArticles.map((article) => (
                    <article
                      key={article.slug}
                      className="bg-[#FAF8FC] border border-[#EAE4F2] rounded-2xl p-7 flex flex-col justify-between"
                    >
                      <div>
                        {/* Zero-Pill Metadata Discipline: Clean Unboxed Text with · Separators */}
                        <div className="flex items-center gap-2 text-xs text-[#666666] mb-3">
                          <span className="font-semibold text-[#903595]">{article.category}</span>
                          <span aria-hidden="true">·</span>
                          <span>{article.date}</span>
                          <span aria-hidden="true">·</span>
                          <span>{article.readTime}</span>
                        </div>
                        <h3 className="font-display text-xl font-bold text-[#381B37] leading-snug">
                          {article.title}
                        </h3>
                        <p className="mt-2.5 text-sm text-[#666666] leading-relaxed">
                          {article.summary}
                        </p>
                      </div>
                      <div className="mt-6 pt-4 border-t border-[#EAE4F2]">
                        <button
                          type="button"
                          onClick={() => setActiveArticle(article)}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#342077] hover:text-[#EE498E] transition-colors cursor-pointer whitespace-nowrap"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>{t.insights.readArticleLabel}</span>
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        {/* SECTION 8: CONTACT NEO & GOOGLE WORKSPACE AUTO-INTEGRATION */}
        <ContactWorkspaceSection
          content={t.contact}
          locale={locale}
          prefilledCategory={prefilledCategory}
          prefilledProduct={prefilledProduct}
        />
      </main>

      {/* SECTION 9: DEEP PURPLE CORPORATE FOOTER (With Official White-Panel Logo Lockup per Brand Guideline v0.9) */}
      <footer className="bg-[#342077] text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-white/15">
            <div className="lg:col-span-5">
              {/* Brand Guideline v0.9 Section 08: Provide a white safe-space panel when placed on a colored surface */}
              <NeomedikaLogo variant="vertical" onDarkBackground />
              <div className="mt-5 text-xs font-semibold text-[#EE498E]">
                {t.footer.corporateDescriptor}
              </div>
              <p className="mt-2 text-sm text-white/80 leading-relaxed max-w-md">
                {t.footer.statement}
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div>
                <h4 className="font-display text-sm font-bold text-white mb-3">
                  {locale === 'id' ? 'Identitas Korporat' : 'Corporate Identity'}
                </h4>
                <ul className="space-y-2 text-xs text-white/80">
                  <li>PT Neomedika Elektra Optima</li>
                  <li>Merek Korporat: NEO · neomedika</li>
                  <li>“Trusted Healthcare Solutions”</li>
                  <li>Indonesia & Visi Ekosistem Global</li>
                </ul>
              </div>

              <div>
                <h4 className="font-display text-sm font-bold text-white mb-3">
                  {locale === 'id' ? 'Kontak Resmi' : 'Official Contact'}
                </h4>
                <ul className="space-y-2 text-xs text-white/80">
                  <li>Email: helas.m@gmail.com</li>
                  <li>WhatsApp: +62 819-3241-5455</li>
                  <li>Jakarta, Bandung, Semarang, Yogyakarta</li>
                </ul>
              </div>

              <div>
                <h4 className="font-display text-sm font-bold text-white mb-3">
                  {locale === 'id' ? 'Tata Kelola & Dokumen' : 'Governance & Legal'}
                </h4>
                <ul className="space-y-2 text-xs text-white/80">
                  <li>
                    <button
                      type="button"
                      onClick={() => setActiveLegalModal('privacy')}
                      className="hover:text-white transition-colors cursor-pointer text-left"
                    >
                      {locale === 'id' ? 'Kebijakan Privasi' : 'Privacy Notice'}
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => setActiveLegalModal('terms')}
                      className="hover:text-white transition-colors cursor-pointer text-left"
                    >
                      {locale === 'id' ? 'Ketentuan Penggunaan' : 'Terms of Use'}
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => setActiveLegalModal('cookies')}
                      className="hover:text-white transition-colors cursor-pointer text-left"
                    >
                      {locale === 'id' ? 'Kebijakan Cookie' : 'Cookie Policy'}
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => setActiveLegalModal('brand')}
                      className="hover:text-white transition-colors cursor-pointer text-left"
                    >
                      Neomedika Brand Guideline v0.9
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Mandatory Corporate Disclaimer Block */}
          <div className="mt-8 p-5 rounded-2xl bg-white/5 border border-white/10 text-xs text-white/75 leading-relaxed">
            <strong className="text-white block mb-1">{t.footer.disclaimerTitle}</strong>
            {t.footer.disclaimerText}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/70">
            <div>{t.footer.copyright}</div>
            <div>
              PT Neomedika Elektra Optima · Magenta #EE498E · Purple #903595 · Deep Purple #342077
            </div>
          </div>
        </div>
      </footer>

      {/* INSIGHTS ARTICLE READER MODAL */}
      {activeArticle && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="article-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
        >
          <div className="bg-white border border-[#D9CEE6] rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-xl max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between gap-4 pb-4 border-b border-[#EAE4F2]">
              <div className="flex items-center gap-2 text-xs text-[#666666]">
                <span className="font-semibold text-[#903595]">{activeArticle.category}</span>
                <span aria-hidden="true">·</span>
                <span>{activeArticle.date}</span>
                <span aria-hidden="true">·</span>
                <span>{activeArticle.readTime}</span>
              </div>
              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                aria-label={t.insights.closeArticleLabel}
                className="p-1.5 rounded-lg text-[#666666] hover:text-[#381B37] hover:bg-[#FAF8FC] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <h3
              id="article-modal-title"
              className="mt-5 font-display text-2xl font-bold text-[#381B37] leading-snug"
            >
              {activeArticle.title}
            </h3>
            <div className="mt-4 space-y-4 text-sm text-[#381B37] leading-relaxed">
              {activeArticle.body.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
            <div className="mt-8 pt-5 border-t border-[#EAE4F2] flex items-center justify-between">
              <span className="text-xs text-[#666666]">
                PT Neomedika Elektra Optima · Editorial Insights
              </span>
              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                className="px-4 py-2 rounded-xl bg-[#342077] text-white text-xs font-bold cursor-pointer"
              >
                {t.insights.closeArticleLabel}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* LEGAL & BRAND GUIDELINE MODAL */}
      {activeLegalModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="legal-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
        >
          <div className="bg-white border border-[#D9CEE6] rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-xl">
            <div className="flex items-center justify-between pb-4 border-b border-[#EAE4F2]">
              <span className="text-xs font-bold text-[#903595] uppercase tracking-wider">
                PT Neomedika Elektra Optima
              </span>
              <button
                type="button"
                onClick={() => setActiveLegalModal(null)}
                aria-label="Close modal"
                className="p-1.5 rounded-lg text-[#666666] hover:text-[#381B37] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <h3
              id="legal-modal-title"
              className="mt-4 font-display text-xl font-bold text-[#381B37]"
            >
              {activeLegalModal === 'privacy' &&
                (locale === 'id'
                  ? 'Kebijakan Privasi & Pelindungan Data'
                  : 'Privacy & Data Protection Notice')}
              {activeLegalModal === 'terms' &&
                (locale === 'id'
                  ? 'Ketentuan Penggunaan Situs Korporat'
                  : 'Corporate Website Terms of Use')}
              {activeLegalModal === 'cookies' &&
                (locale === 'id' ? 'Kebijakan Cookie & Analitik' : 'Cookies & Analytics Policy')}
              {activeLegalModal === 'brand' &&
                'Neomedika Brand Guideline v0.9 — Spesifikasi Identitas'}
            </h3>

            <div className="mt-3 space-y-3 text-xs sm:text-sm text-[#666666] leading-relaxed">
              {activeLegalModal === 'privacy' && (
                <>
                  <p>
                    {locale === 'id'
                      ? 'PT Neomedika Elektra Optima hanya mengumpulkan informasi kontak bisnis yang diperlukan (Nama, Email Bisnis, Organisasi, Telepon, Kategori, dan Pesan) untuk menindaklanjuti pertanyaan produk KHAYR, Neolyte, atau peluang kemitraan.'
                      : 'PT Neomedika Elektra Optima collects only necessary business contact information (Name, Business Email, Organisation, Phone, Category, and Message) to respond to KHAYR, Neolyte, or partnership enquiries.'}
                  </p>
                  <p>
                    {locale === 'id'
                      ? 'Situs korporat ini terpisah dari infrastruktur aplikasi klinis KHAYR dan tidak mengumpulkan rekam medis pasien.'
                      : 'This corporate website is strictly separated from KHAYR clinical infrastructure and does not collect patient health records.'}
                  </p>
                </>
              )}
              {activeLegalModal === 'terms' && (
                <p>
                  {locale === 'id'
                    ? 'Seluruh konten pada situs ini menjelaskan kerangka bisnis dan portofolio produk PT Neomedika Elektra Optima. Klaim ketersediaan fitur KHAYR tunduk pada validasi pengembangan, sedangkan produk Neolyte SN & DS mengacu pada izin edar resmi Kemenkes RI PKD.'
                    : 'All content on this site describes PT Neomedika Elektra Optima’s corporate framework and product portfolio. KHAYR capabilities are subject to development validation, while Neolyte SN & DS follow official KEMENKES RI PKD registrations.'}
                </p>
              )}
              {activeLegalModal === 'cookies' && (
                <p>
                  {locale === 'id'
                    ? 'Situs ini hanya menggunakan penyimpanan sesi esensial untuk preferensi bahasa (ID/EN) serta autentikasi Google Workspace OAuth di memori peramban bagi administrator.'
                    : 'This website uses only essential session state for language preference (ID/EN) and in-memory Google Workspace OAuth tokens for administrators.'}
                </p>
              )}
              {activeLegalModal === 'brand' && (
                <div className="space-y-2">
                  <p>
                    {locale === 'id'
                      ? 'Situs ini menerapkan spesifikasi resmi Neomedika Brand Guideline v0.9:'
                      : 'This website implements the official Neomedika Brand Guideline v0.9 specifications:'}
                  </p>
                  <ul className="list-disc pl-5 space-y-1 font-mono text-xs text-[#381B37]">
                    <li>Magenta: #EE498E (RGB 238 / 73 / 142)</li>
                    <li>Ungu (Purple): #903595 (RGB 144 / 53 / 149)</li>
                    <li>Ungu Tua (Deep Purple): #342077 (RGB 52 / 32 / 119)</li>
                    <li>Plum Teks: #381B37 (RGB 56 / 27 / 55)</li>
                    <li>Abu Tagline: #666666 (RGB 102 / 102 / 102)</li>
                    <li>Safe Space: Unit X = 1/4 visible symbol width on white surface</li>
                  </ul>
                </div>
              )}
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setActiveLegalModal(null)}
                className="px-4 py-2 rounded-xl bg-[#342077] text-white text-xs font-bold cursor-pointer"
              >
                {locale === 'id' ? 'Tutup' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
