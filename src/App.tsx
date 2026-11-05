/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  BookOpen,
  X,
  Menu,
  Stethoscope,
  Cpu,
  Droplets,
  Building2,
  Network,
  ShieldCheck,
  Layers,
  Lock,
  Database,
  Share2,
  Users,
  Sparkles,
  Handshake,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CONTENT, type ArticleItem } from './data/content';
import type { Locale } from './utils/neomedikaLogic';
import { NeomedikaLogo } from './components/NeomedikaLogo';
import { KhayrShowcase } from './components/KhayrShowcase';
import { NeolyteShowcase } from './components/NeolyteShowcase';
import { ContactWorkspaceSection } from './components/ContactWorkspaceSection';

type PageKey =
  | 'home'
  | 'about'
  | 'business'
  | 'products'
  | 'technology'
  | 'partnerships'
  | 'insights'
  | 'contact';

const PILLAR_ICONS = [Stethoscope, Cpu, Droplets, Building2, Network];
const TECH_ICONS = [Layers, Cpu, Lock, Database, Share2, Users];

export default function App() {
  const [locale, setLocale] = useState<Locale>('id');
  const [activePage, setActivePage] = useState<PageKey>('home');
  const [productSubView, setProductSubView] = useState<'all' | 'khayr' | 'neolyte'>('all');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [insightFilter, setInsightFilter] = useState<string>('ALL');
  const [activeArticle, setActiveArticle] = useState<ArticleItem | null>(null);
  const [activeLegalModal, setActiveLegalModal] = useState<
    'privacy' | 'terms' | 'cookies' | 'brand' | null
  >(null);

  // Contextual prefill state for the Corporate Enquiry & Partnership Form
  const [prefilledCategory, setPrefilledCategory] = useState<string>(
    'Corporate & General Enquiry'
  );
  const [prefilledProduct, setPrefilledProduct] = useState<string>(
    'KHAYR Digital Dental Platform'
  );

  const t = CONTENT[locale];

  const navItems: {
    key: PageKey;
    href: string;
    label: string;
  }[] = [
    { key: 'home', href: '#home', label: t.nav.home },
    { key: 'about', href: '#about', label: t.nav.about },
    { key: 'business', href: '#business', label: t.nav.business },
    { key: 'products', href: '#products', label: t.nav.products },
    { key: 'technology', href: '#technology', label: t.nav.technology },
    { key: 'partnerships', href: '#partnerships', label: t.nav.partnerships },
    { key: 'insights', href: '#insights', label: t.nav.insights },
    { key: 'contact', href: '#contact', label: t.nav.contact },
  ];

  const handleSelectMenuPage = (
    page: PageKey,
    scrollTargetId?: string,
    subProduct?: 'all' | 'khayr' | 'neolyte'
  ) => {
    setActivePage(page);
    if (subProduct) {
      setProductSubView(subProduct);
    } else if (page === 'products') {
      setProductSubView('all');
    }
    setMobileMenuOpen(false);
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
    setActivePage('contact');
    setMobileMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById('contact');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 40);
  };

  const filteredArticles =
    insightFilter === 'ALL'
      ? t.insights.articles
      : t.insights.articles.filter((a) => a.category === insightFilter);

  const renderPageUtilityBar = (pageTitle: string) => (
    <section className="pt-8 pb-6 bg-gradient-to-r from-white via-[#FAF8FC] to-white border-b border-[#EAE4F2]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[#666666]">
            <button
              type="button"
              onClick={() => handleSelectMenuPage('home', 'top')}
              className="font-semibold text-[#903595] hover:text-[#EE498E] transition-colors cursor-pointer"
            >
              {locale === 'id' ? '← Kembali ke Beranda' : '← Back to Home'}
            </button>
            <span aria-hidden="true">·</span>
            <strong className="font-bold text-[#381B37]">
              {pageTitle} · PT Neomedika Elektra Optima
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
                  ? 'bg-gradient-to-r from-[#903595] to-[#342077] text-white'
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
                  ? 'bg-gradient-to-r from-[#903595] to-[#342077] text-white'
                  : 'text-[#666666] hover:text-[#381B37]'
              }`}
            >
              EN · English
            </button>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#381B37]">
      {/* Top Bar with 8 Main Navigation Items (Desktop) + Full Mobile Pop-Up & Quick-Access Menu */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#EAE4F2] shadow-2xs">
        {/* Official Brand Gradient Top Hairline */}
        <div className="h-1 w-full bg-gradient-to-r from-[#EE498E] via-[#903595] to-[#342077]" />

        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 sm:gap-5 px-4 sm:px-6 lg:px-8 py-3">
          {/* Zone 1: Single Brand Lockup */}
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              handleSelectMenuPage('home', 'top');
            }}
            aria-label="neomedika home"
            className="whitespace-nowrap shrink-0 focus:outline-none"
          >
            <NeomedikaLogo variant="compact" />
          </a>

          {/* Zone 2 (Desktop): 8 Main Navigation Links per Section 3 of Revision Master Doc */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-4 xl:gap-6 text-xs xl:text-sm font-medium text-[#666666]"
          >
            {navItems.map((item) => {
              const isActive = activePage === item.key;
              return (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSelectMenuPage(item.key, 'top');
                  }}
                  className={`relative py-1 transition-colors whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'text-[#903595] font-bold'
                      : 'hover:text-[#381B37]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="neo-nav-underline"
                      className="absolute bottom-0 inset-x-0 h-0.5 rounded-full bg-gradient-to-r from-[#EE498E] via-[#903595] to-[#342077]"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action + Mobile/Tablet Pop-Up Menu Toggle Button */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleSelectMenuPage('contact', 'top');
              }}
              className="px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-[#EE498E] via-[#903595] to-[#342077] hover:opacity-95 shadow-sm shadow-[#903595]/20 transition-all whitespace-nowrap shrink-0"
            >
              {t.nav.cta}
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="lg:hidden inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl border border-[#D9CEE6] bg-[#FAF8FC] text-[#381B37] hover:border-[#903595] transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? (
                <X className="w-4 h-4 text-[#903595]" />
              ) : (
                <Menu className="w-4 h-4 text-[#903595]" />
              )}
              <span className="text-xs font-bold">Menu</span>
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Quick-Access Menu Strip */}
        <nav
          aria-label="Mobile Quick Navigation"
          className="lg:hidden border-t border-[#EAE4F2] bg-[#FAF8FC] px-3 py-2 flex items-center gap-1.5 overflow-x-auto"
        >
          {navItems.map((item) => {
            const isActive = activePage === item.key;
            return (
              <a
                key={item.key}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleSelectMenuPage(item.key, 'top');
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#EE498E] via-[#903595] to-[#342077] text-white shadow-xs'
                    : 'bg-white text-[#381B37] border border-[#EAE4F2] hover:border-[#903595]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Expandable Mobile Pop-Up Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden border-t border-[#D9CEE6] bg-white px-4 pt-3 pb-5 shadow-lg overflow-hidden"
            >
              <div className="flex flex-col gap-1.5">
                {navItems.map((item) => {
                  const isActive = activePage === item.key;
                  return (
                    <a
                      key={item.key}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleSelectMenuPage(item.key, 'top');
                      }}
                      className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                        isActive
                          ? 'bg-gradient-to-r from-[#FAF8FC] to-[#F4F0FA] text-[#903595] border border-[#D9CEE6]'
                          : 'text-[#381B37] hover:bg-[#FAF8FC]'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ArrowRight className="w-4 h-4 text-[#903595]" />
                    </a>
                  );
                })}
              </div>

              <div className="mt-4 pt-3 border-t border-[#EAE4F2] flex items-center justify-between gap-3">
                <span className="text-xs font-semibold text-[#666666]">{t.utility.langLabel}:</span>
                <div className="inline-flex items-center gap-1 p-1 bg-[#FAF8FC] border border-[#D9CEE6] rounded-xl">
                  <button
                    type="button"
                    onClick={() => setLocale('id')}
                    className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                      locale === 'id' ? 'bg-[#342077] text-white' : 'text-[#666666]'
                    }`}
                  >
                    ID · Indonesia
                  </button>
                  <button
                    type="button"
                    onClick={() => setLocale('en')}
                    className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                      locale === 'en' ? 'bg-[#342077] text-white' : 'text-[#666666]'
                    }`}
                  >
                    EN · English
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main id="top" className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
          >
            {/* ================================================================= */}
            {/* PAGE 01 — HOME (HERO + CORPORATE ECOSYSTEM SUMMARY)               */}
            {/* ================================================================= */}
            {activePage === 'home' && (
              <>
                {/* SECTION 1: HERO & BILINGUAL WORKSPACE TOOLBAR */}
                <section
                  aria-labelledby="hero-headline"
                  className="relative pt-8 pb-20 lg:pt-12 lg:pb-24 bg-white neo-hero-mesh overflow-hidden"
                >
                  {/* Ambient Brand Glows */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-20 -left-20 w-96 h-96 rounded-full bg-gradient-to-br from-[#EE498E]/12 via-[#903595]/10 to-transparent blur-3xl neo-aura"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute bottom-0 right-10 w-96 h-96 rounded-full bg-gradient-to-tl from-[#342077]/10 via-[#903595]/10 to-transparent blur-3xl neo-aura"
                  />

                  <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                    {/* Hero Top Utility Bar: Corporate Descriptor + Bilingual Switcher */}
                    <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-10 border-b border-[#EAE4F2]">
                      <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-[#666666]">
                        <strong className="font-bold text-[#381B37]">
                          {t.utility.legalEntity}
                        </strong>
                        <span aria-hidden="true">·</span>
                        <span className="text-[#903595] font-semibold">
                          {t.utility.descriptor}
                        </span>
                        <span aria-hidden="true" className="hidden sm:inline">
                          ·
                        </span>
                        <span className="hidden sm:inline italic text-[#666666]">
                          “{t.utility.tagline}”
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
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
                                ? 'bg-gradient-to-r from-[#903595] to-[#342077] text-white'
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
                                ? 'bg-gradient-to-r from-[#903595] to-[#342077] text-white'
                                : 'text-[#666666] hover:text-[#381B37]'
                            }`}
                          >
                            EN · English
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* 2-Column Editorial Hero Split (Preserving Exact Layout & Image Proportions) */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
                      {/* Left 7 Columns: Editorial Headline & Value Proposition */}
                      <div className="lg:col-span-7 flex flex-col justify-between">
                        <div className="flex-1 flex flex-col">
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
                          {/* Hero Illustration Container with Gentle Floating Effect & Gradient Border Accent */}
                          <div className="mt-6 flex-1 relative w-full rounded-2xl overflow-hidden border border-[#D9CEE6] bg-gradient-to-br from-white via-[#FAF8FC] to-[#F4F0FA] p-3 sm:p-4 flex items-center justify-center shadow-sm">
                            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#EE498E] via-[#903595] to-[#342077]" />
                            <img
                              src="/assets/aistudio/Helath_Care_Mgn_Picture_3_69cc486c.jfif"
                              alt="PT Neomedika Elektra Optima Integrated Healthcare Ecosystem"
                              className="neo-float w-full max-h-[290px] sm:max-h-[326px] object-contain rounded-xl select-none"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Right 5 Columns: Official Neomedika Brand Identity & Corporate Governance Architecture */}
                      <div className="lg:col-span-5 relative bg-gradient-to-b from-[#FAF8FC] to-[#F4F0FA] border border-[#D9CEE6] rounded-3xl p-6 sm:p-7 flex flex-col justify-start gap-4 overflow-hidden shadow-xs">
                        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#EE498E] via-[#903595] to-[#342077]" />
                        <div className="bg-white border border-[#EAE4F2] rounded-2xl p-5 sm:p-6 flex flex-col items-center justify-center shadow-2xs">
                          <NeomedikaLogo variant="vertical" />
                        </div>

                        <div className="flex-1 flex flex-col justify-start gap-3.5">
                          <div className="text-xs sm:text-[13px] font-bold text-[#381B37] uppercase tracking-wider pt-0.5">
                            {locale === 'id'
                              ? 'Mandat & Fokus Korporat PT Neomedika Elektra Optima'
                              : 'PT Neomedika Elektra Optima Corporate Mandate'}
                          </div>

                          <div className="neo-card-interactive flex-1 p-5 sm:p-6 rounded-2xl bg-white border border-[#EAE4F2] flex flex-col justify-center relative overflow-hidden">
                            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#EE498E] to-[#903595]" />
                            <div className="flex items-center justify-between text-xs text-[#666666] mb-1.5">
                              <span className="font-semibold text-[#903595]">
                                {locale === 'id'
                                  ? '01 · Transformasi Kesehatan Digital'
                                  : '01 · Digital Healthcare Transformation'}
                              </span>
                              <span className="font-mono font-semibold text-[#342077]">
                                NEO ARCHITECTURE
                              </span>
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

                          <div className="neo-card-interactive flex-1 p-5 sm:p-6 rounded-2xl bg-white border border-[#EAE4F2] flex flex-col justify-center relative overflow-hidden">
                            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#903595] to-[#342077]" />
                            <div className="flex items-center justify-between text-xs text-[#666666] mb-1.5">
                              <span className="font-semibold text-[#342077]">
                                {locale === 'id'
                                  ? '02 · Ekosistem & Standar Medis'
                                  : '02 · Medical Ecosystem & Standards'}
                              </span>
                              <span className="font-mono font-semibold text-[#903595]">
                                NEO GOVERNANCE
                              </span>
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

                    {/* Full-Width 4-Column Corporate Snapshot Bar Below Hero Split (Preserving Original Logos) */}
                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {t.hero.snapshotItems.map((snap, idx) => (
                        <motion.div
                          key={snap.label}
                          initial={{ opacity: 0, y: 14 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.35, delay: idx * 0.05 }}
                          className="neo-card-interactive relative bg-gradient-to-b from-[#FAF8FC] to-white border border-[#D9CEE6] rounded-2xl p-5 overflow-hidden"
                        >
                          <div
                            className={`absolute top-0 inset-x-0 h-1 ${
                              idx === 2
                                ? 'bg-gradient-to-r from-[#189AB4] to-[#65B741]'
                                : 'bg-gradient-to-r from-[#EE498E] via-[#903595] to-[#342077]'
                            }`}
                          />
                          <div className="text-xs text-[#666666]">{snap.label}</div>
                          {idx === 1 && (
                            <div className="relative w-[139px] h-[40px] max-w-full overflow-hidden mt-2 mb-1 select-none">
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
                          <div
                            className={`text-xs font-medium mt-1 ${
                              idx === 2 ? 'text-[#189AB4]' : 'text-[#903595]'
                            }`}
                          >
                            {snap.detail}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* HOME SECTION 2: WHO WE ARE SUMMARY & 5 BUSINESS PILLARS SUMMARY */}
                <section className="py-20 bg-[#FAF8FC] neo-section-mesh border-t border-[#EAE4F2]">
                  <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">
                    {/* Who We Are Summary Card */}
                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.4 }}
                      className="relative bg-white border border-[#D9CEE6] rounded-3xl p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center overflow-hidden shadow-xs"
                    >
                      <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#EE498E] via-[#903595] to-[#342077]" />
                      <div className="lg:col-span-8">
                        <div className="text-xs font-semibold text-[#EE498E] uppercase tracking-wider mb-2">
                          {t.homeSummary.whoWeAreKicker}
                        </div>
                        <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#381B37] leading-tight text-balance">
                          {t.homeSummary.whoWeAreTitle}
                        </h2>
                        <p className="mt-3 text-sm sm:text-base text-[#666666] leading-relaxed">
                          {t.homeSummary.whoWeAreText}
                        </p>
                      </div>
                      <div className="lg:col-span-4 flex lg:justify-end">
                        <button
                          type="button"
                          onClick={() => handleSelectMenuPage('about', 'top')}
                          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#EE498E] via-[#903595] to-[#342077] hover:opacity-95 shadow-md shadow-[#903595]/20 transition-all cursor-pointer"
                        >
                          <span>{t.homeSummary.whoWeAreCta}</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>

                    {/* 5 Business Pillars Summary with Interactive Icons & Brand Gradient Accents */}
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
                        <div className="max-w-2xl">
                          <div className="text-xs font-semibold text-[#903595] uppercase tracking-wider mb-2">
                            {t.homeSummary.pillarsKicker}
                          </div>
                          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#381B37]">
                            {t.homeSummary.pillarsTitle}
                          </h2>
                          <p className="mt-2 text-sm text-[#666666]">{t.homeSummary.pillarsSub}</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleSelectMenuPage('business', 'top')}
                          className="inline-flex items-center gap-2 text-sm font-bold text-[#342077] hover:text-[#EE498E] transition-colors cursor-pointer shrink-0"
                        >
                          <span>{t.homeSummary.pillarsCta}</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                        {t.business.pillars.map((pillar, idx) => {
                          const PillarIcon = PILLAR_ICONS[idx % PILLAR_ICONS.length];
                          const isHygiene = idx === 2;
                          return (
                            <motion.div
                              key={pillar.index}
                              initial={{ opacity: 0, y: 14 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true, amount: 0.15 }}
                              transition={{ duration: 0.35, delay: idx * 0.05 }}
                              className={`${
                                isHygiene ? 'neo-card-teal-interactive' : 'neo-card-interactive'
                              } relative bg-white border border-[#EAE4F2] rounded-2xl p-5 flex flex-col justify-between overflow-hidden group`}
                            >
                              <div
                                className={`absolute top-0 inset-x-0 h-1.5 ${
                                  isHygiene
                                    ? 'bg-gradient-to-r from-[#189AB4] to-[#65B741]'
                                    : 'bg-gradient-to-r from-[#EE498E] via-[#903595] to-[#342077]'
                                }`}
                              />
                              <div>
                                <div className="flex items-center justify-between gap-2 mb-3 pt-1">
                                  <span className="font-mono text-xs font-bold text-[#903595]">
                                    {pillar.index}
                                  </span>
                                  <div
                                    className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                                      isHygiene
                                        ? 'bg-[#F0F9FB] text-[#189AB4] group-hover:bg-[#189AB4] group-hover:text-white'
                                        : 'bg-[#FAF8FC] text-[#903595] group-hover:bg-[#903595] group-hover:text-white'
                                    }`}
                                  >
                                    <PillarIcon className="w-4 h-4" />
                                  </div>
                                </div>
                                <h3 className="font-display text-base font-bold text-[#381B37] leading-snug">
                                  {pillar.title}
                                </h3>
                                <p className="mt-2 text-xs text-[#666666] leading-relaxed">
                                  {pillar.summary}
                                </p>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </section>

                {/* HOME SECTION 3: FEATURED PRODUCTS (KHAYR & NEOLYTE WITH ORIGINAL LOGOS) */}
                <section className="py-20 bg-white border-t border-[#EAE4F2]">
                  <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="max-w-3xl mb-10">
                      <div className="text-xs font-semibold text-[#EE498E] uppercase tracking-wider mb-2">
                        {t.homeSummary.featuredProductsKicker}
                      </div>
                      <h2 className="font-display text-3xl font-bold text-[#381B37]">
                        {t.homeSummary.featuredProductsTitle}
                      </h2>
                      <p className="mt-2 text-sm sm:text-base text-[#666666]">
                        {t.homeSummary.featuredProductsSub}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Featured Card 1: KHAYR */}
                      <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.4 }}
                        className="neo-card-interactive relative bg-gradient-to-b from-[#FAF8FC] via-white to-[#F4F0FA] border border-[#D9CEE6] rounded-3xl p-7 sm:p-9 flex flex-col justify-between overflow-hidden shadow-xs"
                      >
                        <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-[#EE498E] via-[#903595] to-[#342077]" />
                        <div>
                          <div className="flex flex-wrap items-center justify-between gap-4 pb-5 mb-6 border-b border-[#EAE4F2] pt-1">
                            <img
                              src="/assets/aistudio/KHAYR_Logo_Name_Transparant_cddcce1f.png"
                              alt="KHAYR Intelligent Dentistry Solutions"
                              className="neo-float h-14 sm:h-16 w-auto object-contain select-none"
                            />
                            <span className="text-xs font-semibold text-[#342077]">
                              {t.khayr.statusDisclosure}
                            </span>
                          </div>
                          <h3 className="font-display text-2xl font-bold text-[#381B37]">
                            {t.khayr.heading}
                          </h3>
                          <p className="mt-3 text-sm text-[#666666] leading-relaxed">
                            {t.homeSummary.khayrCardDesc}
                          </p>
                          <div className="mt-5 flex items-center gap-4 p-3 rounded-2xl bg-white border border-[#EAE4F2]">
                            <img
                              src="/assets/aistudio/Logo_Satusehat_965283aa.png"
                              alt="SATUSEHAT"
                              className="h-9 w-auto object-contain mix-blend-multiply select-none"
                            />
                            <span className="text-xs font-medium text-[#381B37]">
                              {t.khayr.interoperabilityRoadmap.title}
                            </span>
                          </div>
                        </div>

                        <div className="mt-7 pt-5 border-t border-[#EAE4F2] flex flex-wrap items-center justify-between gap-3">
                          <button
                            type="button"
                            onClick={() => handleSelectMenuPage('products', 'khayr', 'khayr')}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#EE498E] via-[#903595] to-[#342077] hover:opacity-95 shadow-sm transition-opacity cursor-pointer"
                          >
                            <span>{t.homeSummary.khayrCardCta}</span>
                            <ArrowRight className="w-4 h-4" />
                          </button>
                          <button
                            type="button"
                            onClick={() =>
                              handleRouteToContact(
                                'KHAYR Product Information',
                                'KHAYR Digital Dental Platform'
                              )
                            }
                            className="text-xs font-bold text-[#342077] hover:text-[#EE498E] transition-colors cursor-pointer"
                          >
                            {t.khayr.registerInterestCta} →
                          </button>
                        </div>
                      </motion.div>

                      {/* Featured Card 2: Neolyte */}
                      <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.4, delay: 0.08 }}
                        className="neo-card-teal-interactive relative bg-gradient-to-b from-[#FAF8FC] via-white to-[#F0F9FB] border border-[#D9CEE6] rounded-3xl p-7 sm:p-9 flex flex-col justify-between overflow-hidden shadow-xs"
                      >
                        <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-[#189AB4] via-[#65B741] to-[#342077]" />
                        <div>
                          <div className="flex flex-wrap items-center justify-between gap-4 pb-5 mb-6 border-b border-[#EAE4F2] pt-1">
                            <img
                              src="/assets/aistudio/Neollyte_logo_2K_379f6785.png"
                              alt="Neolyte™"
                              className="neo-float-delayed h-14 sm:h-16 w-auto object-contain mix-blend-multiply select-none"
                            />
                            <span className="font-mono text-xs font-bold text-[#189AB4]">
                              KEMENKES RI PKD
                            </span>
                          </div>
                          <h3 className="font-display text-2xl font-bold text-[#381B37]">
                            {t.neolyte.heading}
                          </h3>
                          <p className="mt-3 text-sm text-[#666666] leading-relaxed">
                            {t.homeSummary.neolyteCardDesc}
                          </p>
                          <div className="mt-5 flex items-center gap-4 p-3 rounded-2xl bg-white border border-[#EAE4F2]">
                            <div className="w-16 h-16 rounded-xl bg-[#FAF8FC] border border-[#65B741]/35 p-1.5 flex items-center justify-center">
                              <img
                                src="/assets/aistudio/Neolyte_SN_69407702.png"
                                alt="Neolyte SN"
                                className="neo-float w-full h-full object-contain select-none"
                              />
                            </div>
                            <div className="w-16 h-16 rounded-xl bg-[#FAF8FC] border border-[#189AB4]/35 p-1.5 flex items-center justify-center">
                              <img
                                src="/assets/aistudio/Neolyte_DS_bcf3a6e4.png"
                                alt="Neolyte DS"
                                className="neo-float-delayed w-full h-full object-contain select-none"
                              />
                            </div>
                            <div className="text-xs text-[#381B37]">
                              <div className="font-bold">Neolyte SN & Neolyte DS</div>
                              <div className="font-mono text-[#189AB4] font-semibold">
                                PKD 20501023189 & 20502023190
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="mt-7 pt-5 border-t border-[#EAE4F2] flex flex-wrap items-center justify-between gap-3">
                          <button
                            type="button"
                            onClick={() => handleSelectMenuPage('products', 'neolyte', 'neolyte')}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#189AB4] via-[#903595] to-[#342077] hover:opacity-95 shadow-sm transition-opacity cursor-pointer"
                          >
                            <span>{t.homeSummary.neolyteCardCta}</span>
                            <ArrowRight className="w-4 h-4" />
                          </button>
                          <button
                            type="button"
                            onClick={() =>
                              handleRouteToContact(
                                'Neolyte Product Enquiry',
                                'Neolyte SN / DS Hygiene Line'
                              )
                            }
                            className="text-xs font-bold text-[#189AB4] hover:text-[#342077] transition-colors cursor-pointer"
                          >
                            {t.neolyte.enquireCta} →
                          </button>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </section>

                {/* HOME SECTION 4: TECHNOLOGY & PARTNERSHIPS SUMMARY */}
                <section className="py-20 bg-[#FAF8FC] neo-section-mesh border-t border-[#EAE4F2]">
                  <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="neo-card-interactive relative bg-white border border-[#D9CEE6] rounded-3xl p-8 flex flex-col justify-between overflow-hidden">
                      <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#EE498E] via-[#903595] to-[#342077]" />
                      <div>
                        <div className="text-xs font-semibold text-[#903595] uppercase tracking-wider mb-2">
                          {t.homeSummary.techKicker}
                        </div>
                        <h3 className="font-display text-2xl font-bold text-[#381B37]">
                          {t.homeSummary.techTitle}
                        </h3>
                        <p className="mt-3 text-sm text-[#666666] leading-relaxed">
                          {t.homeSummary.techText}
                        </p>
                      </div>
                      <div className="mt-6 pt-5 border-t border-[#EAE4F2]">
                        <button
                          type="button"
                          onClick={() => handleSelectMenuPage('technology', 'top')}
                          className="inline-flex items-center gap-2 text-sm font-bold text-[#342077] hover:text-[#EE498E] transition-colors cursor-pointer"
                        >
                          <span>{t.homeSummary.techCta}</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="relative bg-gradient-to-br from-[#342077] via-[#342077] to-[#903595] text-white rounded-3xl p-8 flex flex-col justify-between overflow-hidden shadow-md">
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-12 -top-12 w-56 h-56 rounded-full bg-[#EE498E]/20 blur-2xl neo-aura"
                      />
                      <div className="relative">
                        <div className="text-xs font-semibold text-[#EE498E] uppercase tracking-wider mb-2">
                          {t.homeSummary.partnerKicker}
                        </div>
                        <h3 className="font-display text-2xl font-bold text-white">
                          {t.homeSummary.partnerTitle}
                        </h3>
                        <p className="mt-3 text-sm text-white/85 leading-relaxed">
                          {t.homeSummary.partnerText}
                        </p>
                      </div>
                      <div className="relative mt-6 pt-5 border-t border-white/15">
                        <button
                          type="button"
                          onClick={() => handleSelectMenuPage('partnerships', 'top')}
                          className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-[#EE498E] transition-colors cursor-pointer"
                        >
                          <span>{t.homeSummary.partnerCta}</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </section>

                {/* HOME SECTION 5: FEATURED INSIGHTS (MAX 3 ITEMS) & CLOSING CTA */}
                <section className="py-20 bg-white border-t border-[#EAE4F2]">
                  <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
                        <div>
                          <div className="text-xs font-semibold text-[#903595] uppercase tracking-wider mb-2">
                            {t.homeSummary.insightsKicker}
                          </div>
                          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#381B37]">
                            {t.homeSummary.insightsTitle}
                          </h2>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleSelectMenuPage('insights', 'top')}
                          className="inline-flex items-center gap-2 text-sm font-bold text-[#342077] hover:text-[#EE498E] transition-colors cursor-pointer"
                        >
                          <span>{t.homeSummary.insightsCta}</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {t.insights.articles.slice(0, 3).map((article, idx) => (
                          <article
                            key={article.slug}
                            className="neo-card-interactive relative bg-gradient-to-b from-[#FAF8FC] to-white border border-[#EAE4F2] rounded-2xl p-6 flex flex-col justify-between overflow-hidden"
                          >
                            <div
                              className={`absolute top-0 inset-x-0 h-1 ${
                                idx === 2
                                  ? 'bg-gradient-to-r from-[#189AB4] to-[#65B741]'
                                  : 'bg-gradient-to-r from-[#EE498E] via-[#903595] to-[#342077]'
                              }`}
                            />
                            <div>
                              <div className="flex items-center gap-2 text-xs text-[#666666] mb-3 pt-1">
                                <span className="font-semibold text-[#903595]">
                                  {article.category}
                                </span>
                                <span aria-hidden="true">·</span>
                                <span>{article.readTime}</span>
                              </div>
                              <h3 className="font-display text-lg font-bold text-[#381B37] leading-snug">
                                {article.title}
                              </h3>
                              <p className="mt-2.5 text-xs sm:text-sm text-[#666666] leading-relaxed">
                                {article.summary}
                              </p>
                            </div>
                            <div className="mt-5 pt-4 border-t border-[#EAE4F2]">
                              <button
                                type="button"
                                onClick={() => setActiveArticle(article)}
                                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#342077] hover:text-[#EE498E] transition-colors cursor-pointer"
                              >
                                <BookOpen className="w-3.5 h-3.5" />
                                <span>{t.insights.readArticleLabel}</span>
                              </button>
                            </div>
                          </article>
                        ))}
                      </div>
                    </div>

                    {/* Closing Corporate CTA */}
                    <div className="relative bg-gradient-to-r from-[#FAF8FC] via-white to-[#F4F0FA] border border-[#D9CEE6] rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row lg:items-center justify-between gap-8 overflow-hidden shadow-xs">
                      <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#EE498E] via-[#903595] to-[#342077]" />
                      <div className="max-w-2xl">
                        <div className="text-xs font-semibold text-[#EE498E] uppercase tracking-wider mb-2">
                          {t.homeSummary.closingKicker}
                        </div>
                        <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#381B37]">
                          {t.homeSummary.closingTitle}
                        </h2>
                        <p className="mt-2 text-sm sm:text-base text-[#666666] leading-relaxed">
                          {t.homeSummary.closingText}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-3 shrink-0">
                        <button
                          type="button"
                          onClick={() => handleSelectMenuPage('contact', 'top')}
                          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#EE498E] via-[#903595] to-[#342077] hover:opacity-95 shadow-md shadow-[#903595]/20 transition-all cursor-pointer"
                        >
                          <span>{t.homeSummary.closingPrimaryCta}</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleSelectMenuPage('partnerships', 'top')}
                          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-[#342077] bg-white border border-[#D9CEE6] hover:bg-[#F4F0FA] transition-colors cursor-pointer"
                        >
                          <span>{t.homeSummary.closingSecondaryCta}</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </section>
              </>
            )}

            {/* ================================================================= */}
            {/* PAGE 02 — ABOUT NEO (WHO WE ARE, VISION, MISSION, 5 VALUES, 5 STEPS) */}
            {/* ================================================================= */}
            {activePage === 'about' && (
              <>
                {renderPageUtilityBar(t.nav.about)}
                <section
                  id="about"
                  aria-labelledby="about-heading"
                  className="py-20 bg-[#FAF8FC] neo-section-mesh"
                >
                  <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-14 border-b border-[#EAE4F2]">
                      <div className="lg:col-span-6">
                        <div className="flex items-center gap-2 text-xs font-medium text-[#666666] mb-3">
                          <span className="text-[#903595] font-semibold">
                            {t.about.sectionNumber}
                          </span>
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
                      <div className="lg:col-span-5 relative bg-gradient-to-br from-[#342077] via-[#342077] to-[#903595] text-white rounded-3xl p-8 flex flex-col justify-between overflow-hidden shadow-md">
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute -right-12 -bottom-12 w-60 h-60 rounded-full bg-[#EE498E]/20 blur-2xl neo-aura"
                        />
                        <div className="relative">
                          <div className="text-xs font-semibold text-[#EE498E] uppercase tracking-wider mb-3">
                            {t.about.visionTitle}
                          </div>
                          <p className="font-display text-2xl sm:text-3xl font-bold leading-snug text-balance">
                            “{t.about.visionText}”
                          </p>
                        </div>
                        <div className="relative mt-8 pt-6 border-t border-white/15 text-xs text-white/80">
                          PT Neomedika Elektra Optima (NEO) · Connecting Healthcare. Empowering
                          Better Lives.
                        </div>
                      </div>

                      <div className="lg:col-span-7 relative bg-white border border-[#D9CEE6] rounded-3xl p-7 sm:p-8 overflow-hidden shadow-xs">
                        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#EE498E] via-[#903595] to-[#342077]" />
                        <h3 className="font-display text-xl font-bold text-[#381B37] mb-5">
                          {t.about.missionTitle}
                        </h3>
                        <div className="space-y-4">
                          {t.about.missions.map((m) => (
                            <div
                              key={m.code}
                              className="flex items-start gap-4 pb-4 border-b border-[#EAE4F2] last:border-none last:pb-0"
                            >
                              <span className="font-mono text-xs font-bold text-white px-2.5 py-1 rounded-lg bg-gradient-to-r from-[#EE498E] to-[#903595] tabular-nums shrink-0 mt-0.5">
                                {m.code}
                              </span>
                              <div>
                                <div className="text-sm font-bold text-[#381B37]">{m.title}</div>
                                <p className="text-xs sm:text-sm text-[#666666] mt-0.5">
                                  {m.desc}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* 5 Corporate Values */}
                    <div className="mt-14">
                      <h3 className="font-display text-xl font-bold text-[#381B37] mb-6">
                        {t.about.valuesTitle}
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
                        {t.about.values.map((val, idx) => (
                          <div
                            key={val.title}
                            className="neo-card-interactive relative bg-white border border-[#EAE4F2] rounded-2xl p-6 overflow-hidden"
                          >
                            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#EE498E] via-[#903595] to-[#342077]" />
                            <div className="font-mono text-xs font-bold text-[#EE498E] mb-2 tabular-nums">
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

                    {/* 5-Step Our Development Approach */}
                    <div className="mt-14 relative bg-white border border-[#D9CEE6] rounded-3xl p-7 sm:p-8 overflow-hidden shadow-xs">
                      <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#342077] via-[#903595] to-[#EE498E]" />
                      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
                        <h3 className="font-display text-xl font-bold text-[#381B37]">
                          {t.about.roadmapTitle}
                        </h3>
                        <span className="text-xs text-[#666666]">{t.about.roadmapNote}</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                        {t.about.phases.map((p) => (
                          <div
                            key={p.phase}
                            className="neo-card-interactive p-5 rounded-2xl bg-gradient-to-br from-[#FAF8FC] to-white border border-[#EAE4F2]"
                          >
                            <div className="font-mono text-xs font-bold text-[#903595]">
                              {p.phase}
                            </div>
                            <h4 className="font-display text-sm font-bold text-[#381B37] mt-1.5">
                              {p.title}
                            </h4>
                            <p className="text-xs text-[#666666] mt-2 leading-relaxed">
                              {p.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              </>
            )}

            {/* ================================================================= */}
            {/* PAGE 03 — OUR BUSINESS (5 STRATEGIC PILLARS + REQUIRED DISCLAIMER) */}
            {/* ================================================================= */}
            {activePage === 'business' && (
              <>
                {renderPageUtilityBar(t.nav.business)}
                <section
                  id="business"
                  aria-labelledby="business-heading"
                  className="py-20 bg-white neo-section-mesh"
                >
                  <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="max-w-3xl mb-12">
                      <div className="flex items-center gap-2 text-xs font-medium text-[#666666] mb-3">
                        <span className="text-[#903595] font-semibold">
                          {t.business.sectionNumber}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{t.business.kicker}</span>
                      </div>
                      <h2
                        id="business-heading"
                        className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#381B37] leading-tight text-balance"
                      >
                        {t.business.heading}
                      </h2>
                      <p className="mt-4 text-base text-[#666666] leading-relaxed">
                        {t.business.lead}
                      </p>
                    </div>

                    {/* Asymmetric Bento Grid for the 5 Strategic Business Pillars */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      {t.business.pillars.map((pillar, idx) => {
                        const PillarIcon = PILLAR_ICONS[idx % PILLAR_ICONS.length];
                        const isHygiene = pillar.index === '03';
                        return (
                          <motion.div
                            key={pillar.index}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{ duration: 0.35, delay: idx * 0.05 }}
                            className={`${
                              isHygiene ? 'neo-card-teal-interactive' : 'neo-card-interactive'
                            } relative bg-gradient-to-b from-[#FAF8FC] to-white border border-[#D9CEE6] rounded-3xl p-7 sm:p-8 flex flex-col justify-between overflow-hidden ${
                              pillar.spanWide ? 'lg:col-span-2' : 'lg:col-span-1'
                            }`}
                          >
                            <div
                              className={`absolute top-0 inset-x-0 h-1.5 ${
                                isHygiene
                                  ? 'bg-gradient-to-r from-[#189AB4] to-[#65B741]'
                                  : 'bg-gradient-to-r from-[#EE498E] via-[#903595] to-[#342077]'
                              }`}
                            />
                            <div>
                              <div className="flex items-center justify-between gap-3 mb-2 pt-1">
                                <div className="font-mono text-sm font-bold text-[#903595] tabular-nums">
                                  Pillar {pillar.index}
                                </div>
                                <div
                                  className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                                    isHygiene
                                      ? 'bg-[#F0F9FB] border border-[#189AB4]/30 text-[#189AB4]'
                                      : 'bg-gradient-to-br from-[#EE498E]/12 to-[#342077]/12 border border-[#D9CEE6] text-[#903595]'
                                  }`}
                                >
                                  <PillarIcon className="w-4 h-4" />
                                </div>
                              </div>
                              <h3 className="font-display text-2xl font-bold text-[#381B37]">
                                {pillar.title}
                              </h3>
                              <p className="mt-2.5 text-sm text-[#666666] leading-relaxed">
                                {pillar.summary}
                              </p>

                              {/* Scope & Strategic Focus Boxes (Page 03 Spec) */}
                              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div className="p-3.5 rounded-xl bg-white border border-[#EAE4F2]">
                                  <div className="text-xs font-bold text-[#342077]">
                                    {pillar.scopeLabel}
                                  </div>
                                  <p className="text-xs text-[#666666] mt-1 leading-relaxed">
                                    {pillar.scope}
                                  </p>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white border border-[#EAE4F2]">
                                  <div className="text-xs font-bold text-[#903595]">
                                    {pillar.focusLabel}
                                  </div>
                                  <p className="text-xs text-[#666666] mt-1 leading-relaxed">
                                    {pillar.focus}
                                  </p>
                                </div>
                              </div>

                              {pillar.index === '01' && (
                                <div className="mt-5 w-full rounded-2xl overflow-hidden border border-[#EAE4F2] bg-white p-2 sm:p-3 flex items-center justify-center">
                                  <img
                                    src="/assets/aistudio/Helath_Care_Mgn_Picture_4_0f2992d0.jfif"
                                    alt={pillar.title}
                                    className="neo-float w-full max-h-[220px] sm:max-h-[260px] object-contain rounded-xl select-none"
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
                                  <CheckCircle2
                                    className={`w-4 h-4 shrink-0 mt-0.5 ${
                                      isHygiene ? 'text-[#189AB4]' : 'text-[#903595]'
                                    }`}
                                  />
                                  <span>{cap}</span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        );
                      })}
                    </div>

                    {/* Required Disclaimer Box (Page 03 Spec) */}
                    <div className="mt-8 p-5 rounded-2xl bg-[#FAF8FC] border border-[#D9CEE6] text-xs text-[#666666] leading-relaxed">
                      {t.business.governanceNote}
                    </div>

                    {/* Solutions by Audience / Use Case */}
                    <div className="mt-16 pt-14 border-t border-[#EAE4F2]">
                      <div className="max-w-3xl mb-8">
                        <h3 className="font-display text-2xl font-bold text-[#381B37]">
                          {t.business.solutionsHeading}
                        </h3>
                        <p className="mt-2 text-sm text-[#666666]">{t.business.solutionsSub}</p>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {t.business.audiences.map((aud, idx) => (
                          <div
                            key={aud.audience}
                            className="neo-card-interactive relative bg-white border border-[#D9CEE6] rounded-2xl p-6 flex flex-col justify-between overflow-hidden"
                          >
                            <div
                              className={`absolute top-0 inset-x-0 h-1 ${
                                idx === 1
                                  ? 'bg-gradient-to-r from-[#189AB4] to-[#65B741]'
                                  : 'bg-gradient-to-r from-[#EE498E] via-[#903595] to-[#342077]'
                              }`}
                            />
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

            {/* ================================================================= */}
            {/* PAGE 04 & 05 — OUR PRODUCTS (KHAYR & NEOLYTE)                     */}
            {/* ================================================================= */}
            {activePage === 'products' && (
              <>
                <section className="pt-8 pb-6 bg-gradient-to-r from-white via-[#FAF8FC] to-white border-b border-[#EAE4F2]">
                  <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[#666666]">
                        <button
                          type="button"
                          onClick={() => handleSelectMenuPage('home', 'top')}
                          className="font-semibold text-[#903595] hover:text-[#342077] transition-colors cursor-pointer"
                        >
                          {locale === 'id' ? '← Kembali ke Beranda' : '← Back to Home'}
                        </button>
                        <span aria-hidden="true">·</span>
                        <div className="inline-flex items-center gap-1.5 p-1 bg-[#FAF8FC] border border-[#D9CEE6] rounded-xl">
                          <button
                            type="button"
                            onClick={() => setProductSubView('all')}
                            className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                              productSubView === 'all'
                                ? 'bg-gradient-to-r from-[#EE498E] via-[#903595] to-[#342077] text-white'
                                : 'text-[#381B37] hover:text-[#903595]'
                            }`}
                          >
                            {locale === 'id' ? 'Semua Produk' : 'All Products'}
                          </button>
                          <button
                            type="button"
                            onClick={() => setProductSubView('khayr')}
                            className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                              productSubView === 'khayr'
                                ? 'bg-gradient-to-r from-[#EE498E] to-[#903595] text-white'
                                : 'text-[#381B37] hover:text-[#903595]'
                            }`}
                          >
                            01 · KHAYR
                          </button>
                          <button
                            type="button"
                            onClick={() => setProductSubView('neolyte')}
                            className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                              productSubView === 'neolyte'
                                ? 'bg-gradient-to-r from-[#189AB4] to-[#65B741] text-white'
                                : 'text-[#381B37] hover:text-[#189AB4]'
                            }`}
                          >
                            02 · Neolyte™
                          </button>
                        </div>
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

                {(productSubView === 'all' || productSubView === 'khayr') && (
                  <KhayrShowcase
                    content={t.khayr}
                    locale={locale}
                    onSelectEnquiry={handleRouteToContact}
                  />
                )}

                {(productSubView === 'all' || productSubView === 'neolyte') && (
                  <NeolyteShowcase
                    content={t.neolyte}
                    locale={locale}
                    onSelectEnquiry={handleRouteToContact}
                  />
                )}
              </>
            )}

            {/* ================================================================= */}
            {/* PAGE 06 — TECHNOLOGY (6 PRINCIPLES + GOVERNANCE)                  */}
            {/* ================================================================= */}
            {activePage === 'technology' && (
              <>
                {renderPageUtilityBar(t.nav.technology)}
                <section
                  id="technology"
                  aria-labelledby="tech-heading"
                  className="py-20 bg-[#FAF8FC] neo-section-mesh"
                >
                  <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="max-w-3xl mb-12">
                      <div className="flex items-center gap-2 text-xs font-medium text-[#666666] mb-3">
                        <span className="text-[#903595] font-semibold">
                          {t.technology.sectionNumber}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{t.technology.kicker}</span>
                      </div>
                      <h2
                        id="tech-heading"
                        className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#381B37] leading-tight text-balance"
                      >
                        {t.technology.heading}
                      </h2>
                      <p className="mt-4 text-base text-[#666666] leading-relaxed">
                        {t.technology.lead}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {t.technology.principles.map((pr, idx) => {
                        const TechIcon = TECH_ICONS[idx % TECH_ICONS.length];
                        return (
                          <motion.div
                            key={pr.index}
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{ duration: 0.35, delay: idx * 0.05 }}
                            className="neo-card-interactive relative bg-white border border-[#EAE4F2] rounded-2xl p-6 overflow-hidden group"
                          >
                            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#EE498E] via-[#903595] to-[#342077]" />
                            <div className="flex items-center justify-between mb-3 pt-1">
                              <div className="font-mono text-xs font-bold text-[#903595] tabular-nums">
                                {pr.index}
                              </div>
                              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#EE498E]/12 to-[#342077]/12 border border-[#EAE4F2] flex items-center justify-center text-[#903595] group-hover:bg-gradient-to-br group-hover:from-[#EE498E] group-hover:to-[#342077] group-hover:text-white transition-all">
                                <TechIcon className="w-4 h-4" />
                              </div>
                            </div>
                            <h3 className="font-display text-lg font-bold text-[#381B37] mb-2">
                              {pr.title}
                            </h3>
                            <p className="text-sm text-[#666666] leading-relaxed">{pr.desc}</p>
                          </motion.div>
                        );
                      })}
                    </div>

                    {/* Our Approach & Governance */}
                    <div className="mt-16 relative bg-white border border-[#D9CEE6] rounded-3xl p-7 sm:p-10 overflow-hidden shadow-xs">
                      <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#342077] via-[#903595] to-[#EE498E]" />
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
                            className="neo-card-interactive p-5 rounded-2xl bg-gradient-to-br from-[#FAF8FC] to-white border border-[#EAE4F2]"
                          >
                            <div className="w-7 h-7 rounded-lg bg-[#F4F0FA] text-[#903595] flex items-center justify-center mb-2.5">
                              <ShieldCheck className="w-4 h-4" />
                            </div>
                            <h4 className="font-display text-base font-bold text-[#381B37] mb-2">
                              {gb.title}
                            </h4>
                            <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                              {gb.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              </>
            )}

            {/* ================================================================= */}
            {/* PAGE 07 — PARTNERSHIPS (4 PARTNERSHIP CATEGORIES)                 */}
            {/* ================================================================= */}
            {activePage === 'partnerships' && (
              <>
                {renderPageUtilityBar(t.nav.partnerships)}
                <section
                  id="partnerships"
                  aria-labelledby="partnerships-heading"
                  className="py-20 bg-white neo-section-mesh"
                >
                  <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="relative bg-gradient-to-br from-[#342077] via-[#342077] to-[#903595] text-white rounded-3xl p-8 sm:p-12 overflow-hidden shadow-lg">
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-20 -top-20 w-96 h-96 rounded-full bg-[#EE498E]/20 blur-3xl neo-aura"
                      />
                      <div className="relative flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-white/15">
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
                          <p className="mt-3 text-sm sm:text-base text-white/85 leading-relaxed">
                            {t.partnerships.lead}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() =>
                            handleRouteToContact(
                              'Investor & Strategic Collaboration',
                              'Corporate & Ecosystem Partnership'
                            )
                          }
                          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white rounded-xl bg-gradient-to-r from-[#EE498E] to-[#903595] hover:opacity-95 shadow-md transition-opacity whitespace-nowrap shrink-0 cursor-pointer self-start lg:self-auto"
                        >
                          <span>{t.partnerships.ctaButton}</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="relative mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {t.partnerships.tracks.map((tr, idx) => (
                          <div
                            key={tr.title}
                            className="bg-white/10 backdrop-blur-xs border border-white/20 hover:border-[#EE498E] hover:bg-white/15 transition-all rounded-2xl p-6 flex flex-col justify-between"
                          >
                            <div>
                              <div className="flex items-center justify-between gap-2 mb-2">
                                <span className="font-mono text-xs font-bold text-[#EE498E]">
                                  0{idx + 1} · {tr.audience}
                                </span>
                                <Handshake className="w-4 h-4 text-[#EE498E] shrink-0" />
                              </div>
                              <h3 className="font-display text-lg font-bold text-white mb-2">
                                {tr.title}
                              </h3>
                              <p className="text-xs sm:text-sm text-white/85 leading-relaxed">
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

            {/* ================================================================= */}
            {/* PAGE 08 — INSIGHTS (5 CATEGORIES & EDUCATIONAL ARTICLES)          */}
            {/* ================================================================= */}
            {activePage === 'insights' && (
              <>
                {renderPageUtilityBar(t.nav.insights)}
                <section id="insights" className="py-20 bg-white neo-section-mesh">
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
                        <p className="mt-2 text-sm sm:text-base text-[#666666]">
                          {t.insights.lead}
                        </p>
                      </div>

                      {/* Interactive Category Filter Tabs */}
                      <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#FAF8FC] border border-[#D9CEE6] rounded-xl">
                        {t.insights.categories.map((cat, idx) => {
                          const filterValue = idx === 0 ? 'ALL' : cat;
                          const isActive = insightFilter === filterValue;
                          return (
                            <button
                              key={cat}
                              type="button"
                              onClick={() => setInsightFilter(filterValue)}
                              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                                isActive
                                  ? 'bg-gradient-to-r from-[#EE498E] via-[#903595] to-[#342077] text-white shadow-xs'
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
                      {filteredArticles.map((article) => {
                        const isHygieneArticle = article.category === 'Healthcare Hygiene';
                        return (
                          <article
                            key={article.slug}
                            className={`${
                              isHygieneArticle
                                ? 'neo-card-teal-interactive'
                                : 'neo-card-interactive'
                            } relative bg-gradient-to-b from-[#FAF8FC] to-white border border-[#D9CEE6] rounded-2xl p-7 flex flex-col justify-between overflow-hidden`}
                          >
                            <div
                              className={`absolute top-0 inset-x-0 h-1.5 ${
                                isHygieneArticle
                                  ? 'bg-gradient-to-r from-[#189AB4] to-[#65B741]'
                                  : 'bg-gradient-to-r from-[#EE498E] via-[#903595] to-[#342077]'
                              }`}
                            />
                            <div>
                              <div className="flex items-center gap-2 text-xs text-[#666666] mb-3 pt-1">
                                <span
                                  className={`font-semibold ${
                                    isHygieneArticle ? 'text-[#189AB4]' : 'text-[#903595]'
                                  }`}
                                >
                                  {article.category}
                                </span>
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
                        );
                      })}
                    </div>
                  </div>
                </section>
              </>
            )}

            {/* ================================================================= */}
            {/* PAGE 09 — CONTACT (CORPORATE ENQUIRY & PARTNERSHIP FORM)          */}
            {/* ================================================================= */}
            {activePage === 'contact' && renderPageUtilityBar(t.nav.contact)}
          </motion.div>
        </AnimatePresence>

        <ContactWorkspaceSection
          content={t.contact}
          locale={locale}
          prefilledCategory={prefilledCategory}
          prefilledProduct={prefilledProduct}
          onOpenPrivacyNotice={() => setActiveLegalModal('privacy')}
        />
      </main>

      {/* SECTION 9: DEEP PURPLE CORPORATE FOOTER (Section 6 of Revision Master Doc) */}
      <footer className="relative bg-[#342077] text-white border-t border-white/10 overflow-hidden">
        <div className="h-1.5 w-full bg-gradient-to-r from-[#EE498E] via-[#903595] to-[#189AB4]" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-white/15">
            <div className="lg:col-span-5">
              <NeomedikaLogo variant="vertical" onDarkBackground />
              <div className="mt-5 text-xs font-semibold text-[#EE498E]">
                PT Neomedika Elektra Optima | {t.footer.corporateDescriptor}
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
                  <li>NEO — Integrated Healthcare Technology</li>
                  <li>“Connecting Healthcare. Empowering Better Lives.”</li>
                  <li>Portfolio: KHAYR & Neolyte™</li>
                </ul>
              </div>

              <div>
                <h4 className="font-display text-sm font-bold text-white mb-3">
                  {locale === 'id' ? 'Kontak Korporat Resmi' : 'Official Corporate Contact'}
                </h4>
                <ul className="space-y-2 text-xs text-white/80">
                  <li>Email: {t.footer.officialEmail}</li>
                  <li>Partnerships: {t.footer.partnershipsEmail}</li>
                  <li>{t.footer.locationSummary}</li>
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
                      {locale === 'id'
                        ? 'Pemberitahuan Privasi (Privacy Notice)'
                        : 'Privacy Notice'}
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
              PT Neomedika Elektra Optima · Magenta #EE498E · Purple #903595 · Deep Purple
              #342077
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
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#903595] to-[#342077] text-white text-xs font-bold cursor-pointer"
              >
                {t.insights.closeArticleLabel}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* LEGAL & PRIVACY NOTICE MODAL (Section 5.2 of Revision Master Doc) */}
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
                PT Neomedika Elektra Optima (NEO)
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
                  ? 'Pemberitahuan Privasi (Privacy Notice)'
                  : 'Privacy Notice — PT Neomedika Elektra Optima')}
              {activeLegalModal === 'terms' &&
                (locale === 'id'
                  ? 'Ketentuan Penggunaan Situs Korporat'
                  : 'Corporate Website Terms of Use')}
              {activeLegalModal === 'cookies' &&
                (locale === 'id' ? 'Kebijakan Cookie & Sesi' : 'Cookie & Session Notice')}
              {activeLegalModal === 'brand' &&
                'Neomedika Brand Guideline v0.9 — Spesifikasi Identitas'}
            </h3>

            <div className="mt-3 space-y-3 text-xs sm:text-sm text-[#666666] leading-relaxed">
              {activeLegalModal === 'privacy' && (
                <>
                  <p>
                    {locale === 'id'
                      ? 'PT Neomedika Elektra Optima (NEO) mengumpulkan informasi kontak bisnis yang Anda kirimkan secara sukarela melalui Corporate Enquiry & Partnership Form (meliputi Nama Lengkap, Jabatan, Nama Institusi/Klinik, Email Bisnis, Nomor Telepon, Kategori Pertanyaan, dan Rincian Pesan) semata-mata untuk menanggapi pertanyaan korporat, permintaan informasi produk KHAYR/Neolyte, atau penjajakan kemitraan.'
                      : 'PT Neomedika Elektra Optima (NEO) collects the business contact information you voluntarily submit through the Corporate Enquiry & Partnership Form (including Full Name, Role/Title, Company/Institution/Clinic Name, Email Address, Phone Number, Enquiry Category, and Message) solely to respond to your corporate, product, or partnership enquiry.'}
                  </p>
                  <p>
                    {locale === 'id'
                      ? 'Situs web korporat ini terpisah sepenuhnya dari aplikasi rekam medis klinis dan tidak ditujukan untuk menerima data kesehatan pribadi atau rekam medis pasien. Untuk pertanyaan terkait pengelolaan data kontak bisnis Anda, silakan hubungi info@neomedika.com.'
                      : 'This corporate website is strictly separated from clinical medical record applications and is not intended to collect personal health information or patient medical records. For questions regarding your business contact data, please contact info@neomedika.com.'}
                  </p>
                </>
              )}
              {activeLegalModal === 'terms' && (
                <p>
                  {locale === 'id'
                    ? 'Seluruh konten pada situs ini menjelaskan kerangka bisnis dan portofolio produk PT Neomedika Elektra Optima (NEO). Ketersediaan fitur platform KHAYR tunduk pada proses pengembangan dan validasi, sedangkan produk Neolyte SN & DS mengacu pada izin edar resmi Kemenkes RI PKD dan petunjuk label kemasan.'
                    : 'All content on this site describes PT Neomedika Elektra Optima’s (NEO) corporate framework and product portfolio. KHAYR platform capabilities are subject to development and validation, while Neolyte SN & DS follow official KEMENKES RI PKD registrations and approved product labels.'}
                </p>
              )}
              {activeLegalModal === 'cookies' && (
                <p>
                  {locale === 'id'
                    ? 'Situs ini hanya menggunakan penyimpanan sesi esensial untuk preferensi tampilan bahasa (ID/EN) serta fungsionalitas navigasi halaman.'
                    : 'This website uses only essential session state for language preference (ID/EN) and page navigation functionality.'}
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
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#903595] to-[#342077] text-white text-xs font-bold cursor-pointer"
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
