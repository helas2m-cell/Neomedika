import type { Locale } from '../utils/neomedikaLogic';

export interface ArticleItem {
  slug: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  summary: string;
  body: string[];
}

export interface KhayrModuleItem {
  id: string;
  tabLabel: string;
  title: string;
  subtitle: string;
  highlights: { title: string; desc: string }[];
  metrics: { label: string; value: string; delta: string }[];
}

export interface SiteContent {
  nav: {
    home: string;
    about: string;
    business: string;
    products: string;
    technology: string;
    partnerships: string;
    insights: string;
    contact: string;
    cta: string;
  };
  utility: {
    legalEntity: string;
    descriptor: string;
    tagline: string;
    workspaceSyncBtn: string;
    langLabel: string;
  };
  hero: {
    kicker: string;
    headline: string;
    subheadline: string;
    corporateNote: string;
    primaryCta: string;
    secondaryCta: string;
    snapshotItems: { label: string; value: string; detail: string }[];
  };
  homeSummary: {
    whoWeAreKicker: string;
    whoWeAreTitle: string;
    whoWeAreText: string;
    whoWeAreCta: string;
    pillarsKicker: string;
    pillarsTitle: string;
    pillarsSub: string;
    pillarsCta: string;
    featuredProductsKicker: string;
    featuredProductsTitle: string;
    featuredProductsSub: string;
    khayrCardDesc: string;
    khayrCardCta: string;
    neolyteCardDesc: string;
    neolyteCardCta: string;
    techKicker: string;
    techTitle: string;
    techText: string;
    techCta: string;
    partnerKicker: string;
    partnerTitle: string;
    partnerText: string;
    partnerCta: string;
    insightsKicker: string;
    insightsTitle: string;
    insightsCta: string;
    closingKicker: string;
    closingTitle: string;
    closingText: string;
    closingPrimaryCta: string;
    closingSecondaryCta: string;
  };
  about: {
    sectionNumber: string;
    kicker: string;
    heading: string;
    lead: string;
    body: string;
    visionTitle: string;
    visionText: string;
    missionTitle: string;
    missions: { code: string; title: string; desc: string }[];
    valuesTitle: string;
    values: { title: string; desc: string }[];
    roadmapTitle: string;
    roadmapNote: string;
    phases: { phase: string; title: string; desc: string }[];
  };
  business: {
    sectionNumber: string;
    kicker: string;
    heading: string;
    lead: string;
    governanceNote: string;
    pillars: {
      index: string;
      title: string;
      summary: string;
      scopeLabel: string;
      scope: string;
      focusLabel: string;
      focus: string;
      capabilities: string[];
      spanWide?: boolean;
    }[];
    solutionsHeading: string;
    solutionsSub: string;
    audiences: {
      audience: string;
      focus: string;
      description: string;
      ctaLabel: string;
      enquiryCategory: string;
      productInterest: string;
    }[];
  };
  khayr: {
    sectionNumber: string;
    kicker: string;
    statusDisclosure: string;
    heading: string;
    tagline: string;
    lead: string;
    subscriptionNote: string;
    registerInterestCta: string;
    enquireCta: string;
    plannedModulesTitle: string;
    plannedModulesSub: string;
    plannedModules: { code: string; title: string; desc: string }[];
    devPrinciplesTitle: string;
    devPrinciplesSub: string;
    devPrinciples: { code: string; title: string; desc: string }[];
    interoperabilityRoadmap: {
      badge: string;
      title: string;
      description: string;
    };
    rolesTitle: string;
    roles: { role: string; badge: string; desc: string }[];
    threePillarsTitle: string;
    threePillars: {
      name: string;
      subtitle: string;
      items: { name: string; desc: string }[];
    }[];
    conceptUiBadge: string;
    modulesTitle: string;
    modulesSub: string;
    modules: KhayrModuleItem[];
    voucherSystem: {
      kicker: string;
      heading: string;
      lead: string;
      partnerAppsLabel: string;
      partnerApps: string[];
      benefits: { step: string; title: string; desc: string }[];
      workflowSteps: { num: string; title: string; desc: string }[];
      disclosure: string;
    };
    governanceFootnote: string;
  };
  neolyte: {
    sectionNumber: string;
    kicker: string;
    heading: string;
    tagline: string;
    lead: string;
    scienceQuote: string;
    scienceSource: string;
    enquireCta: string;
    documentationCta: string;
    safetyPillars: { title: string; sub: string }[];
    coreAdvantages: { title: string; subtitle: string; desc: string }[];
    variants: {
      code: 'SN' | 'DS';
      name: string;
      category: string;
      ph: string;
      ppm: string;
      kemenkesNo: string;
      colorHex: string;
      description: string;
      useCases: string[];
      sizes: string[];
    }[];
    certifications: {
      title: string;
      subtitle: string;
      items: { badge: string; title: string; reference: string; detail: string }[];
    };
    comparisonTitle: string;
    comparisonSub: string;
    comparisons: {
      agent: string;
      efficacy: string;
      safetyProfile: string;
      scorePercent: number;
      isNeolyte?: boolean;
    }[];
    dilutionCalculatorTitle: string;
    dilutionCalculatorSub: string;
    dilutionOfficialNotice: string;
    devicesTitle: string;
    devicesSub: string;
    devices: { name: string; method: string; useCase: string }[];
    productDisclosure: string;
  };
  technology: {
    sectionNumber: string;
    kicker: string;
    heading: string;
    lead: string;
    principles: { index: string; title: string; desc: string }[];
    approachHeading: string;
    approachLead: string;
    governanceBlocks: { title: string; desc: string }[];
  };
  partnerships: {
    sectionNumber: string;
    kicker: string;
    heading: string;
    lead: string;
    tracks: { title: string; audience: string; desc: string; category: string }[];
    ctaButton: string;
  };
  insights: {
    sectionNumber: string;
    kicker: string;
    heading: string;
    lead: string;
    categories: string[];
    readArticleLabel: string;
    closeArticleLabel: string;
    articles: ArticleItem[];
  };
  contact: {
    sectionNumber: string;
    kicker: string;
    heading: string;
    lead: string;
    formTitle: string;
    formSubtitle: string;
    patientDataNoticeTitle: string;
    patientDataNoticeText: string;
    fields: {
      fullName: string;
      fullNamePlaceholder: string;
      roleTitle: string;
      roleTitlePlaceholder: string;
      businessEmail: string;
      businessEmailPlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      organisation: string;
      organisationPlaceholder: string;
      countryCity: string;
      countryCityPlaceholder: string;
      category: string;
      productInterest: string;
      message: string;
      messagePlaceholder: string;
      privacyConsent: string;
      privacyNoticeLinkLabel: string;
      submitBtn: string;
      submittingBtn: string;
    };
    categories: string[];
    productInterests: string[];
    workspaceBox: {
      title: string;
      subtitle: string;
      connectedAs: string;
      signInBtn: string;
      signOutBtn: string;
      createSheetBtn: string;
      syncAllBtn: string;
      sendGmailBtn: string;
      exportCsvBtn: string;
      recipientLabel: string;
      sheetIdLabel: string;
    };
  };
  footer: {
    corporateDescriptor: string;
    statement: string;
    officialEmail: string;
    partnershipsEmail: string;
    locationSummary: string;
    disclaimerTitle: string;
    disclaimerText: string;
    copyright: string;
  };
}

export const CONTENT: Record<Locale, SiteContent> = {
  id: {
    nav: {
      home: 'Beranda',
      about: 'Tentang NEO',
      business: 'Bisnis Kami',
      products: 'Produk Kami',
      technology: 'Teknologi',
      partnerships: 'Kemitraan',
      insights: 'Wawasan',
      contact: 'Kontak',
      cta: 'Hubungi NEO',
    },
    utility: {
      legalEntity: 'PT Neomedika Elektra Optima',
      descriptor: 'Integrated Healthcare Technology',
      tagline: 'Connecting Healthcare. Empowering Better Lives.',
      workspaceSyncBtn: 'Integrasi Gmail & Sheets',
      langLabel: 'Bahasa',
    },
    hero: {
      kicker: 'PT Neomedika Elektra Optima · NEO — Integrated Healthcare Technology',
      headline: 'Connecting Healthcare. Empowering Better Lives.',
      subheadline:
        'PT Neomedika Elektra Optima (NEO) adalah perusahaan teknologi kesehatan terintegrasi yang mengembangkan platform manajemen fasilitas kesehatan, solusi kedokteran gigi digital, serta inovasi higienitas layanan kesehatan.',
      corporateNote:
        'Sebagai merek korporat induk, NEO menyatukan pengembangan teknologi perangkat lunak klinis (KHAYR) dan lini produk sanitasi fasilitas kesehatan berbasis HOCl (Neolyte) untuk mendukung ekosistem kesehatan yang lebih terhubung.',
      primaryCta: 'Jelajahi Solusi Kami',
      secondaryCta: 'Bermitra Bersama NEO',
      snapshotItems: [
        {
          label: 'Identitas Korporat',
          value: 'PT Neomedika Elektra Optima',
          detail: 'Merek Korporat: NEO · Integrated Healthcare Technology',
        },
        {
          label: 'Platform Kedokteran Gigi Digital',
          value: 'KHAYR Dental Platform',
          detail: 'Manajemen Klinik Gigi & Rekam Medis Elektronik (Tahap Pengembangan)',
        },
        {
          label: 'Solusi Higienitas Layanan Kesehatan',
          value: 'Neolyte™ SN & DS',
          detail: 'Sanitizer & Disinfektan Berbasis HOCl · KEMENKES RI PKD',
        },
        {
          label: 'Fokus Ekosistem & Kemitraan',
          value: 'Layanan Kesehatan Terhubung',
          detail: 'Penyedia Layanan Kesehatan, Mitra Teknologi, Distribusi & Institusi',
        },
      ],
    },
    homeSummary: {
      whoWeAreKicker: '01 · Siapa Kami',
      whoWeAreTitle: 'Membangun Teknologi Kesehatan Terintegrasi untuk Layanan Kesehatan Modern.',
      whoWeAreText:
        'PT Neomedika Elektra Optima (NEO) berfokus pada pengembangan kapabilitas teknologi kesehatan terpadu yang menjembatani manajemen klinik, perangkat medis cerdas, standar higienitas, serta integrasi ekosistem digital.',
      whoWeAreCta: 'Pelajari Tentang NEO',
      pillarsKicker: '02 · Lima Pilar Bisnis Strategis',
      pillarsTitle: 'Kerangka Bisnis Jangka Panjang untuk Ekosistem Kesehatan.',
      pillarsSub:
        'Portofolio NEO dibangun di atas lima pilar strategis yang saling mendukung transformasi operasional dan klinis.',
      pillarsCta: 'Lihat Detail 5 Pilar Bisnis',
      featuredProductsKicker: '03 · Portofolio Produk Unggulan',
      featuredProductsTitle: 'Inovasi Perangkat Lunak Klinis & Higienitas Layanan Kesehatan.',
      featuredProductsSub:
        'Dua inisiatif utama di bawah naungan PT Neomedika Elektra Optima yang dirancang untuk menjawab kebutuhan fasilitas kesehatan.',
      khayrCardDesc:
        'Platform Manajemen Klinik Gigi & Rekam Medis Elektronik (EMR) yang dirancang untuk menyatukan alur kerja klinis, odontogram digital, penjadwalan, inventaris, dan pelaporan praktik.',
      khayrCardCta: 'Jelajahi Platform KHAYR',
      neolyteCardDesc:
        'Lini produk sanitizer tangan/tubuh (Neolyte SN) dan disinfektan permukaan/peralatan (Neolyte DS) berbasis Hypochlorous Acid (HOCl) untuk lingkungan medis, dental, dan fasilitas umum.',
      neolyteCardCta: 'Jelajahi Solusi Neolyte',
      techKicker: '04 · Prinsip Teknologi & Pengembangan Produk',
      techTitle: 'Dirancang dengan Fokus pada Integrasi, Keamanan, dan Alur Kerja Klinis.',
      techText:
        'Pendekatan rekayasa kami mengedepankan arsitektur terukur, pengelolaan data yang bertanggung jawab, kesiapan interoperabilitas standar kesehatan, serta validasi bersama praktisi.',
      techCta: 'Pelajari Prinsip Teknologi NEO',
      partnerKicker: '05 · Ekosistem Kemitraan',
      partnerTitle: 'Berkolaborasi Bersama Penyedia Layanan Kesehatan & Mitra Industri.',
      partnerText:
        'NEO membuka peluang kolaborasi strategis dengan klinik, rumah sakit, mitra teknologi, jaringan distribusi, serta institusi akademik.',
      partnerCta: 'Diskusikan Peluang Kemitraan',
      insightsKicker: '06 · Wawasan & Perspektif',
      insightsTitle: 'Pemikiran Seputar Transformasi Kesehatan Digital & Higienitas Medis.',
      insightsCta: 'Lihat Seluruh Wawasan',
      closingKicker: 'Mari Terhubung',
      closingTitle: 'Mulai Percakapan Bersama PT Neomedika Elektra Optima.',
      closingText:
        'Hubungi tim korporat kami untuk informasi produk KHAYR, pengadaan lini higienitas Neolyte, atau penjajakan kemitraan strategis.',
      closingPrimaryCta: 'Buka Formulir Pertanyaan Korporat',
      closingSecondaryCta: 'Tinjau Peluang Kemitraan',
    },
    about: {
      sectionNumber: 'Halaman 02 · Tentang NEO',
      kicker: 'Siapa Kami · PT Neomedika Elektra Optima',
      heading: 'Membangun Teknologi Kesehatan Terintegrasi untuk Layanan Kesehatan Modern.',
      lead: 'PT Neomedika Elektra Optima (NEO) adalah perusahaan teknologi kesehatan Indonesia yang berfokus pada pengembangan sistem manajemen kesehatan digital, solusi peralatan dan higienitas medis, serta inovasi layanan kesehatan terhubung.',
      body: 'Kami meyakini bahwa masa depan layanan kesehatan membutuhkan keterhubungan yang harmonis antara alur kerja klinis, manajemen operasional fasilitas, tata kelola informasi yang bertanggung jawab, serta perlindungan higienitas lingkungan perawatan. Sebagai merek korporat induk, NEO mengembangkan dan mengelola portofolio solusi kesehatan terarah—termasuk platform kedokteran gigi digital KHAYR dan lini higienitas layanan kesehatan Neolyte.',
      visionTitle: 'Visi Korporat',
      visionText:
        'Menjadi perusahaan teknologi kesehatan terintegrasi yang tepercaya dalam mendukung layanan kesehatan yang lebih terkoneksi, efisien, dan berorientasi pada kualitas hidup pasien.',
      missionTitle: 'Misi Korporat (5 Pilar Misi)',
      missions: [
        {
          code: '01',
          title: 'Solusi Teknologi Kesehatan Praktis',
          desc: 'Mengembangkan solusi teknologi kesehatan yang praktis, relevan, dan menjawab kebutuhan nyata fasilitas layanan kesehatan.',
        },
        {
          code: '02',
          title: 'Efisiensi Alur Kerja Klinis & Operasional',
          desc: 'Mendukung tenaga medis dan pengelola fasilitas melalui sistem yang meningkatkan keteraturan dokumentasi serta efisiensi operasional.',
        },
        {
          code: '03',
          title: 'Standar Higienitas & Lingkungan Perawatan',
          desc: 'Menghadirkan solusi higienitas dan sanitasi fasilitas kesehatan yang mendukung keselamatan lingkungan klinis maupun publik.',
        },
        {
          code: '04',
          title: 'Interoperabilitas & Tata Kelola Data',
          desc: 'Mendorong pengelolaan informasi yang bertanggung jawab, keamanan sistem, serta kesiapan interoperabilitas standar kesehatan.',
        },
        {
          code: '05',
          title: 'Kolaborasi Ekosistem Jangka Panjang',
          desc: 'Membangun kemitraan jangka panjang bersama penyedia layanan kesehatan, mitra teknologi, distributor, dan institusi.',
        },
      ],
      valuesTitle: 'Nilai-Nilai Korporat (Corporate Values)',
      values: [
        {
          title: 'Inovasi (Innovation)',
          desc: 'Mengembangkan solusi terarah yang memecahkan tantangan operasional dan klinis secara praktis.',
        },
        {
          title: 'Integritas (Integrity)',
          desc: 'Menjalankan tata kelola perusahaan, komunikasi produk, dan kepatuhan dengan jujur serta transparan.',
        },
        {
          title: 'Kolaborasi (Collaboration)',
          desc: 'Bekerja berdampingan dengan dokter, pengelola klinik, mitra teknologi, dan pemangku kepentingan kesehatan.',
        },
        {
          title: 'Tanggung Jawab (Responsibility)',
          desc: 'Mengutamakan keselamatan, perlindungan privasi data, serta kejelasan informasi pada setiap inisiatif produk.',
        },
        {
          title: 'Pemikiran Jangka Panjang (Long-Term Thinking)',
          desc: 'Membangun fondasi arsitektur teknologi dan kemitraan yang berkelanjutan lintas fase pertumbuhan.',
        },
      ],
      roadmapTitle: 'Pendekatan Pengembangan Kami (Our Development Approach)',
      roadmapNote:
        'Setiap solusi di bawah naungan NEO dikembangkan melalui lima tahapan terstruktur untuk memastikan kesesuaian klinis dan kesiapan operasional.',
      phases: [
        {
          phase: 'Langkah 01',
          title: 'Memahami Kebutuhan Layanan Kesehatan',
          desc: 'Memetakan tantangan nyata yang dihadapi klinisi, staf administrasi, pengelola fasilitas, dan pasien.',
        },
        {
          phase: 'Langkah 02',
          title: 'Merancang Solusi yang Praktis',
          desc: 'Menyusun arsitektur produk yang intuitif dan selaras dengan alur kerja layanan kesehatan sehari-hari.',
        },
        {
          phase: 'Langkah 03',
          title: 'Mengembangkan Platform Teknologi',
          desc: 'Membangun sistem perangkat lunak dan solusi produk dengan standar keamanan serta skalabilitas yang terukur.',
        },
        {
          phase: 'Langkah 04',
          title: 'Memvalidasi Alur Kerja Klinis & Operasional',
          desc: 'Melakukan pengujian fungsional, evaluasi pengguna, dan penyempurnaan berkelanjutan bersama praktisi.',
        },
        {
          phase: 'Langkah 05',
          title: 'Membangun Kemitraan Strategis & Skalabilitas',
          desc: 'Memperluas adopsi solusi secara bertahap melalui kolaborasi ekosistem, distribusi, dan kepatuhan regulasi.',
        },
      ],
    },
    business: {
      sectionNumber: 'Halaman 03 · Bisnis Kami',
      kicker: 'Lima Pilar Bisnis Strategis · PT Neomedika Elektra Optima',
      heading: 'Kerangka Bisnis Strategis untuk Layanan Kesehatan Terintegrasi.',
      lead: 'Aktivitas bisnis dan pengembangan portofolio PT Neomedika Elektra Optima (NEO) disusun ke dalam lima pilar strategis yang saling melengkapi.',
      governanceNote:
        'Pernyataan Korporat (Required Disclaimer): Pilar bisnis NEO merepresentasikan arah strategis dan kerangka pengembangan teknologi perusahaan. Produk serta layanan spesifik diperkenalkan secara bertahap sesuai dengan proses pengembangan, validasi, kemitraan, dan persyaratan regulasi yang berlaku.',
      pillars: [
        {
          index: '01',
          title: 'Healthcare Management Systems',
          summary:
            'Pengembangan platform perangkat lunak untuk mendukung pengelolaan operasional, klinis, dan administratif fasilitas layanan kesehatan.',
          scopeLabel: 'Cakupan (Scope)',
          scope:
            'Sistem manajemen klinik, rekam medis elektronik (EMR), penjadwalan janji temu, penagihan (billing), inventaris, dan pelaporan operasional.',
          focusLabel: 'Fokus Strategis (Strategic Focus)',
          focus:
            'Meningkatkan efisiensi alur kerja fasilitas kesehatan dan keteraturan dokumentasi klinis, dimulai dari platform klinik gigi KHAYR.',
          capabilities: [
            'Manajemen praktik & fasilitas klinik',
            'Rekam medis elektronik (EMR) & alur administrasi',
            'Penjadwalan dokter, penagihan, & manajemen inventaris',
            'Administrasi terpusat untuk klinik multi-cabang',
          ],
          spanWide: true,
        },
        {
          index: '02',
          title: 'Smart Medical Devices',
          summary:
            'Eksplorasi dan pengembangan perangkat pendukung medis serta peralatan sanitasi terintegrasi untuk lingkungan fasilitas kesehatan.',
          scopeLabel: 'Cakupan (Scope)',
          scope:
            'Perangkat aplikasi sanitasi otomatis, sistem sterilisasi ruang/bilik (seperti Neogate), serta eksplorasi perangkat medis terhubung.',
          focusLabel: 'Fokus Strategis (Strategic Focus)',
          focus:
            'Mendukung keandalan operasional klinis dan pengendalian higienitas lingkungan secara praktis.',
          capabilities: [
            'Perangkat pendukung sanitasi & sterilisasi fasilitas',
            'Integrasi perangkat keras dengan prosedur operasional klinik',
            'Pengembangan solusi perangkat medis tepat guna',
          ],
        },
        {
          index: '03',
          title: 'Consumer Health & Hygiene',
          summary:
            'Penyediaan produk higienitas dan sanitasi berbasis sains untuk fasilitas kesehatan, ruang publik, maupun penggunaan harian.',
          scopeLabel: 'Cakupan (Scope)',
          scope:
            'Lini produk sanitizer tangan/tubuh (Neolyte SN) dan disinfektan permukaan/peralatan (Neolyte DS) berbahan aktif Hypochlorous Acid (HOCl).',
          focusLabel: 'Fokus Strategis (Strategic Focus)',
          focus:
            'Menghadirkan solusi higienitas bebas alkohol yang praktis bagi klinik, rumah sakit, institusi, dan masyarakat.',
          capabilities: [
            'Neolyte SN — Hand & Body Sanitizer (KEMENKES RI PKD)',
            'Neolyte DS — Surface & Equipment Disinfectant (KEMENKES RI PKD)',
            'Dukungan pengadaan untuk klinik, rumah sakit, & ruang publik',
          ],
        },
        {
          index: '04',
          title: 'Healthcare Infrastructure & Consulting',
          summary:
            'Pendampingan kesiapan transformasi digital, perancangan alur kerja fasilitas kesehatan, serta tata kelola operasional.',
          scopeLabel: 'Cakupan (Scope)',
          scope:
            'Konsultasi implementasi sistem klinik, optimalisasi alur layanan pasien, serta kesiapan infrastruktur teknologi fasilitas kesehatan.',
          focusLabel: 'Fokus Strategis (Strategic Focus)',
          focus:
            'Membantu fasilitas kesehatan mengadopsi teknologi secara terstruktur sesuai skala operasionalnya.',
          capabilities: [
            'Pemetaan & standarisasi alur kerja operasional klinik',
            'Pendampingan onboarding & pelatihan tim fasilitas kesehatan',
            'Perencanaan kesiapan infrastruktur digital multi-cabang',
          ],
        },
        {
          index: '05',
          title: 'Digital Health Ecosystem Integration',
          summary:
            'Pengembangan konektivitas lintas sistem untuk menghubungkan penyedia layanan kesehatan, pasien, dan mitra ekosistem.',
          scopeLabel: 'Cakupan (Scope)',
          scope:
            'Arsitektur konektivitas API, peta jalan interoperabilitas standar kesehatan, serta konsep ekosistem distribusi promosi digital.',
          focusLabel: 'Fokus Strategis (Strategic Focus)',
          focus:
            'Membangun fondasi pertukaran informasi yang aman dan kolaborasi bernilai tambah di masa depan.',
          capabilities: [
            'Arsitektur berbasis API & kesiapan standar interoperabilitas',
            'Peta jalan penyelarasan standar kesehatan nasional',
            'Eksplorasi integrasi mitra layanan & ekosistem komersial',
          ],
          spanWide: true,
        },
      ],
      solutionsHeading: 'Fokus Solusi Berdasarkan Segmen Ekosistem',
      solutionsSub:
        'Kerangka bisnis NEO dirancang untuk mendukung kebutuhan spesifik berbagai pemangku kepentingan di sektor kesehatan.',
      audiences: [
        {
          audience: 'Praktik & Klinik Gigi',
          focus: 'Platform KHAYR & Solusi Higienitas Neolyte',
          description:
            'Dukungan transformasi digital praktik dokter gigi melalui modul klinis, odontogram, penjadwalan, dan inventaris, dilengkapi sanitasi klinik menggunakan Neolyte.',
          ctaLabel: 'Minta Informasi Solusi Klinik',
          enquiryCategory: 'KHAYR Product Information',
          productInterest: 'KHAYR Digital Dental Platform',
        },
        {
          audience: 'Rumah Sakit & Fasilitas Kesehatan',
          focus: 'Lini Higienitas Neolyte & Eksplorasi Sistem',
          description:
            'Pengadaan produk sanitizer dan disinfektan Neolyte SN & DS untuk lingkungan fasilitas medis, poliklinik, dan ruang tunggu.',
          ctaLabel: 'Hubungi Tim Produk Neolyte',
          enquiryCategory: 'Neolyte Product Enquiry',
          productInterest: 'Neolyte SN / DS Hygiene Line',
        },
        {
          audience: 'Mitra Teknologi & Integrasi',
          focus: 'Kolaborasi Platform & Interoperabilitas',
          description:
            'Penjajakan kerja sama teknis terkait infrastruktur cloud, konektivitas sistem informasi kesehatan, dan integrasi layanan.',
          ctaLabel: 'Bahas Kemitraan Teknologi',
          enquiryCategory: 'Technology & Integration Partnership',
          productInterest: 'Corporate & Ecosystem Partnership',
        },
        {
          audience: 'Mitra Distribusi & Strategis',
          focus: 'Distribusi Produk & Kolaborasi Korporat',
          description:
            'Peluang kemitraan distribusi regional untuk lini produk Neolyte serta kolaborasi strategis pengembangan ekosistem NEO.',
          ctaLabel: 'Diskusikan Kemitraan Distribusi',
          enquiryCategory: 'Distribution Partnership',
          productInterest: 'Corporate & Ecosystem Partnership',
        },
      ],
    },
    khayr: {
      sectionNumber: 'Halaman 04 · Produk Kami: KHAYR',
      kicker: 'Dental Clinic Management & Electronic Medical Record Platform',
      statusDisclosure: 'Status Produk: Dalam Tahap Pengembangan & Validasi',
      heading: 'KHAYR — Building a More Connected Dental Practice.',
      tagline: 'Platform Manajemen Klinik Gigi & Rekam Medis Elektronik Terpadu.',
      lead: 'KHAYR adalah platform perangkat lunak manajemen klinik gigi dan rekam medis elektronik (EMR) yang dikembangkan oleh PT Neomedika Elektra Optima (NEO). KHAYR dirancang untuk membantu praktik dokter gigi mengelola dokumentasi klinis, alur pasien, jadwal perawatan, penagihan, inventaris, serta pelaporan operasional dalam satu sistem yang terstruktur.',
      subscriptionNote:
        'Arsitektur Modular yang Dapat Diskalakan — dirancang untuk mendukung kebutuhan praktik dokter gigi mandiri hingga jaringan klinik gigi multi-cabang.',
      registerInterestCta: 'Daftarkan Minat Anda (Register Your Interest)',
      enquireCta: 'Minta Informasi Produk (Request Product Information)',
      plannedModulesTitle: '8 Modul Produk yang Direncanakan (Planned Product Modules)',
      plannedModulesSub:
        'Cakupan kapabilitas KHAYR disusun ke dalam delapan modul inti untuk mendukung operasional klinik gigi secara menyeluruh.',
      plannedModules: [
        {
          code: '01',
          title: 'Clinical Management & Dental EMR',
          desc: 'Pencatatan anamnesis, pemeriksaan klinis, diagnosis, dan riwayat rekam medis elektronik pasien secara kronologis.',
        },
        {
          code: '02',
          title: 'Digital Odontogram & Treatment Planning',
          desc: 'Pemetaan kondisi gigi secara visual (Odontogram) untuk mendukung pencatatan tindakan dan perencanaan perawatan bertahap.',
        },
        {
          code: '03',
          title: 'Patient Relationship Management',
          desc: 'Pengelolaan profil pasien terpusat, riwayat kunjungan, komunikasi pengingat jadwal, dan kesinambungan layanan.',
        },
        {
          code: '04',
          title: 'Appointment & Scheduling Management',
          desc: 'Pengaturan jadwal praktik dokter gigi, alokasi ruang tindakan (dental chair), dan pemantauan status antrean harian.',
        },
        {
          code: '05',
          title: 'Billing & Financial Management',
          desc: 'Penyusunan tagihan pasien yang terhubung dari pencatatan tindakan klinis, pengelolaan metode pembayaran, dan rekapitulasi kasir.',
        },
        {
          code: '06',
          title: 'Inventory & Procurement',
          desc: 'Pemantauan stok bahan habis pakai dental dan obat-obatan, termasuk pencatatan batch serta peringatan masa kedaluwarsa.',
        },
        {
          code: '07',
          title: 'Clinic & Multi-Branch Management',
          desc: 'Konfigurasi katalog layanan, tarif, personel medis, serta pengelolaan operasional untuk klinik tunggal maupun multi-cabang.',
        },
        {
          code: '08',
          title: 'Operational Reporting & Analytics',
          desc: 'Ringkasan laporan operasional, tren kunjungan pasien, dan visibilitas kinerja keuangan klinik untuk mendukung evaluasi manajemen.',
        },
      ],
      devPrinciplesTitle: '7 Prinsip Pengembangan Produk KHAYR',
      devPrinciplesSub:
        'Pengembangan KHAYR berpedoman pada tujuh prinsip utama agar menghasilkan sistem yang andal dan sesuai dengan praktik kedokteran gigi.',
      devPrinciples: [
        {
          code: '01',
          title: 'Rekam Pasien Terstruktur (Structured Patient Records)',
          desc: 'Menyajikan format data demografis dan riwayat klinis yang rapi untuk meminimalkan duplikasi pencatatan.',
        },
        {
          code: '02',
          title: 'Konsistensi Alur Kerja Klinis (Clinical Workflow Consistency)',
          desc: 'Menyelaraskan tahapan dari registrasi resepsionis, ruang tindakan dokter gigi, hingga penyelesaian administrasi kasir.',
        },
        {
          code: '03',
          title: 'Konteks Pasien & Kunjungan yang Jelas (Clear Patient & Encounter Context)',
          desc: 'Memudahkan tenaga medis melihat riwayat alergi, catatan medis sebelumnya, dan rencana perawatan saat melayani pasien.',
        },
        {
          code: '04',
          title: 'Pengelolaan Data yang Bertanggung Jawab (Responsible Data Management)',
          desc: 'Memisahkan lingkungan data operasional klinik dari situs publik serta menerapkan praktik perlindungan informasi.',
        },
        {
          code: '05',
          title: 'Hak Akses Pengguna & Jejak Audit (User Permissions & Auditability)',
          desc: 'Mendukung pembagian peran akses bagi dokter gigi, perawat, staf administrasi, dan manajer klinik.',
        },
        {
          code: '06',
          title: 'Alur Kerja Praktik Gigi yang Praktis (Practical Dental Practice Workflows)',
          desc: 'Merancang antarmuka yang berfokus pada kemudahan penggunaan sehari-hari di lingkungan klinik gigi.',
        },
        {
          code: '07',
          title: 'Arsitektur yang Dapat Diskalakan (Scalable Architecture)',
          desc: 'Menyiapkan fondasi sistem yang dapat berkembang seiring penambahan pengguna, kursi perawatan, maupun cabang klinik.',
        },
      ],
      interoperabilityRoadmap: {
        badge: 'Peta Jalan Pengembangan Interoperabilitas',
        title: 'Interoperability Development Roadmap',
        description:
          'Peta jalan pengembangan KHAYR mempertimbangkan kesiapan interoperabilitas data kesehatan dan standar layanan kesehatan Indonesia yang relevan (termasuk ekosistem SATUSEHAT). Implementasi integrasi spesifik tetap tunduk pada tahapan pengembangan teknis, pengujian validasi, serta persyaratan persetujuan dan regulasi yang berlaku.',
      },
      rolesTitle: 'Dirancang untuk Mendukung Peran Utama di Klinik Gigi',
      roles: [
        {
          role: 'Dokter Gigi & Perawat',
          badge: 'Alur Klinis',
          desc: 'Mendokumentasikan pemeriksaan pada Odontogram digital, mencatat anamnesis, diagnosis, dan rencana perawatan secara terstruktur.',
        },
        {
          role: 'Staf Administrasi & Resepsionis',
          badge: 'Alur Operasional',
          desc: 'Mengelola registrasi pasien, mengatur jadwal janji temu harian, memantau stok inventaris, dan memproses tagihan.',
        },
        {
          role: 'Pasien Klinik',
          badge: 'Pengalaman Layanan',
          desc: 'Mendapatkan alur penjadwalan dan administrasi kunjungan yang lebih terkoordinasi di klinik.',
        },
        {
          role: 'Pemilik & Manajer Klinik',
          badge: 'Manajemen Praktik',
          desc: 'Meninjau laporan operasional, ketersediaan inventaris, dan ringkasan kinerja klinik secara terpusat.',
        },
      ],
      threePillarsTitle: 'Kerangka Fungsional KHAYR: Pengaturan, Operasional, dan Pelaporan',
      threePillars: [
        {
          name: '1. Fondasi Pengaturan Klinik',
          subtitle: 'Konfigurasi · Standarisasi Layanan & Sumber Daya',
          items: [
            { name: 'Katalog Layanan & Tindakan', desc: 'Pengelolaan daftar prosedur gigi dan struktur biaya.' },
            { name: 'Ruangan & Cabang', desc: 'Pengaturan lokasi klinik dan ruang perawatan (dental chair).' },
            { name: 'Katalog Produk & Bahan', desc: 'Pendataan obat serta bahan habis pakai dental.' },
            { name: 'Profil Tenaga Medis & Staf', desc: 'Pengelolaan data dokter gigi, jadwal praktik, dan peran pengguna.' },
          ],
        },
        {
          name: '2. Alur Kunjungan Pasien',
          subtitle: 'Operasional Harian · Dari Registrasi hingga Kasir',
          items: [
            { name: 'Penjadwalan & Registrasi', desc: 'Pencarian profil pasien dan pengaturan slot janji temu.' },
            { name: 'Antrean Jadwal Harian', desc: 'Pemantauan status kehadiran pasien per dokter dan ruangan.' },
            { name: 'Pencatatan Klinis & Odontogram', desc: 'Dokumentasi hasil pemeriksaan gigi dan tindakan medis.' },
            { name: 'Penagihan Terintegrasi', desc: 'Penerusan data tindakan klinis ke rincian tagihan kasir.' },
          ],
        },
        {
          name: '3. Visibilitas & Manajemen Praktik',
          subtitle: 'Pelaporan · Pemantauan Operasional & Inventaris',
          items: [
            { name: 'Ringkasan Operasional', desc: 'Laporan aktivitas kunjungan dan rekapitulasi transaksi klinik.' },
            { name: 'Pemantauan Inventaris', desc: 'Indikator ketersediaan stok bahan dan pengingat masa kedaluwarsa.' },
            { name: 'Pengelolaan Multi-Cabang', desc: 'Dukungan visibilitas terpusat bagi jaringan klinik gigi.' },
          ],
        },
      ],
      conceptUiBadge: 'Concept UI — Illustrative Product Preview',
      modulesTitle: 'Pratinjau Konsep Antarmuka Modul KHAYR (Concept UI Preview)',
      modulesSub:
        'Pratinjau di bawah ini merupakan ilustrasi konsep antarmuka pengguna (Concept UI) menggunakan data simulasi sintetis untuk menggambarkan alur kerja yang sedang dikembangkan.',
      modules: [
        {
          id: 'reservasi',
          tabLabel: 'Penjadwalan & Registrasi',
          title: 'Alur Registrasi & Penjadwalan Pasien yang Terstruktur',
          subtitle:
            'Mendukung staf administrasi dalam mencatat janji temu pasien lama maupun baru serta menghubungkannya dengan jadwal dokter gigi.',
          highlights: [
            {
              title: '1. Pencatatan Janji Temu Bertahap',
              desc: 'Pilih kategori kunjungan → Cari profil pasien atau buat profil baru → Tetapkan dokter gigi, ruangan, dan waktu kunjungan.',
            },
            {
              title: '2. Pencarian Profil Pasien Terpusat',
              desc: 'Memudahkan pencarian data pasien terdaftar untuk menjaga kesinambungan riwayat kunjungan.',
            },
            {
              title: '3. Koordinasi Resepsionis & Ruang Tindakan',
              desc: 'Informasi janji temu yang tercatat langsung terhubung ke daftar antrean harian klinik.',
            },
          ],
          metrics: [
            {
              label: 'Structured Clinical Documentation',
              value: 'Terstruktur',
              delta: 'Standarisasi data registrasi',
            },
            {
              label: 'Connected Patient Workflows',
              value: 'Terhubung',
              delta: 'Alur resepsionis ke poli',
            },
            {
              label: 'Centralised Practice Management',
              value: 'Terpusat',
              delta: 'Pengelolaan profil pasien',
            },
          ],
        },
        {
          id: 'jadwal',
          tabLabel: 'Antrean Jadwal Harian',
          title: 'Pemantauan Jadwal Dokter & Ruang Perawatan',
          subtitle:
            'Menampilkan daftar janji temu harian berdasarkan dokter gigi, ruang perawatan, dan tahapan status kunjungan pasien.',
          highlights: [
            {
              title: 'Penyaringan Jadwal Harian',
              desc: 'Tinjau daftar kunjungan berdasarkan tanggal, dokter gigi, maupun status kehadiran pasien.',
            },
            {
              title: 'Pembaruan Status Kunjungan',
              desc: 'Pantau alur pasien mulai dari Terjadwal, Menunggu di Klinik, Sedang Tindakan, hingga Selesai.',
            },
            {
              title: 'Pengaturan Kursi Perawatan',
              desc: 'Membantu koordinasi penggunaan ruang tindakan (dental chair) antar jadwal dokter.',
            },
          ],
          metrics: [
            {
              label: 'Structured Clinical Documentation',
              value: 'Terjadwal',
              delta: 'Visibilitas antrean harian',
            },
            {
              label: 'Connected Patient Workflows',
              value: 'Koordinasi',
              delta: 'Status kunjungan jelas',
            },
            {
              label: 'Centralised Practice Management',
              value: 'Multi-Poli',
              delta: 'Manajemen jadwal dokter',
            },
          ],
        },
        {
          id: 'klinis',
          tabLabel: 'EMR Klinis & Odontogram',
          title: 'Dokumentasi Klinis & Pemetaan Odontogram Digital',
          subtitle:
            'Antarmuka pencatatan medis dokter gigi dengan visualisasi Odontogram FDI, catatan anamnesis, dan rencana tindakan.',
          highlights: [
            {
              title: 'Odontogram Visual Interaktif',
              desc: 'Pilih elemen gigi untuk mencatat kondisi klinis, restorasi, perawatan saluran akar, atau rencana tindakan.',
            },
            {
              title: 'Keterhubungan Tindakan & Tagihan',
              desc: 'Tindakan medis yang dicatat pada sesi kunjungan dapat diteruskan sebagai dasar rincian tagihan di kasir.',
            },
            {
              title: 'Peta Jalan Standar Data Kesehatan',
              desc: 'Struktur pencatatan dirancang dengan mempertimbangkan kesiapan standar pertukaran data kesehatan.',
            },
          ],
          metrics: [
            {
              label: 'Structured Clinical Documentation',
              value: 'FDI Chart',
              delta: 'Odontogram & catatan medis',
            },
            {
              label: 'Connected Patient Workflows',
              value: 'Terintegrasi',
              delta: 'Tindakan ke draf kasir',
            },
            {
              label: 'Centralised Practice Management',
              value: 'Berbasis Peran',
              delta: 'Kontrol akses pengguna',
            },
          ],
        },
        {
          id: 'riwayat',
          tabLabel: 'Riwayat Medis (EMR)',
          title: 'Catatan Riwayat Kunjungan Pasien Kronologis',
          subtitle:
            'Menyusun histori pemeriksaan, tindakan sebelumnya, serta catatan perhatian medis dalam satu tampilan lini masa.',
          highlights: [
            {
              title: 'Kesinambungan Catatan Perawatan',
              desc: 'Memudahkan dokter gigi meninjau riwayat kunjungan dan tahapan perawatan pasien dari waktu ke waktu.',
            },
            {
              title: 'Penanda Informasi Medis Penting',
              desc: 'Menampilkan catatan riwayat alergi atau kondisi medis khusus yang perlu diperhatikan sebelum tindakan.',
            },
            {
              title: 'Pengelolaan Hak Akses',
              desc: 'Dirancang dengan pembatasan akses berdasarkan peran pengguna di lingkungan klinik.',
            },
          ],
          metrics: [
            {
              label: 'Structured Clinical Documentation',
              value: 'Kronologis',
              delta: 'Lini masa kunjungan pasien',
            },
            {
              label: 'Connected Patient Workflows',
              value: 'Kontekstual',
              delta: 'Riwayat medis terpadu',
            },
            {
              label: 'Centralised Practice Management',
              value: 'Terkelola',
              delta: 'Otorisasi berbasis peran',
            },
          ],
        },
        {
          id: 'inventaris',
          tabLabel: 'Inventaris & Pengadaan',
          title: 'Pemantauan Stok Bahan Habis Pakai & Obat Klinik',
          subtitle:
            'Membantu pengelola klinik memantau ketersediaan bahan dental, nomor batch, serta masa kedaluwarsa.',
          highlights: [
            {
              title: 'Klasifikasi Status Ketersediaan Stok',
              desc: 'Memberikan visibilitas atas item dengan stok cukup, stok menipis, habis, atau mendekati tanggal kedaluwarsa.',
            },
            {
              title: 'Pencatatan Batch & Masa Berlaku',
              desc: 'Mendukung ketertiban administrasi penyimpanan bahan medis dan dental di klinik.',
            },
            {
              title: 'Perencanaan Pengadaan Ulang',
              desc: 'Membantu tim pengadaan mengidentifikasi kebutuhan pembelian kembali bahan habis pakai.',
            },
          ],
          metrics: [
            {
              label: 'Structured Clinical Documentation',
              value: 'Katalog SKU',
              delta: 'Pendataan bahan & obat',
            },
            {
              label: 'Connected Patient Workflows',
              value: 'Terpantau',
              delta: 'Indikator stok & kedaluwarsa',
            },
            {
              label: 'Centralised Practice Management',
              value: 'Terencana',
              delta: 'Kontrol pengadaan klinik',
            },
          ],
        },
        {
          id: 'analitik',
          tabLabel: 'Pelaporan & Keuangan',
          title: 'Pelaporan Operasional & Ringkasan Keuangan Klinik',
          subtitle:
            'Menyediakan ringkasan data transaksi, tren kunjungan, dan laporan operasional untuk membantu evaluasi manajemen klinik.',
          highlights: [
            {
              title: 'Ringkasan Transaksi & Tagihan',
              desc: 'Menampilkan rekapitulasi penagihan berdasarkan kategori layanan tindakan maupun produk.',
            },
            {
              title: 'Laporan Aktivitas Kunjungan',
              desc: 'Memantau jumlah kunjungan pasien baru dan pasien lama dalam periode waktu tertentu.',
            },
            {
              title: 'Visibilitas Manajemen Praktik',
              desc: 'Mendukung pemilik dan manajer klinik dalam meninjau kinerja operasional secara terstruktur.',
            },
          ],
          metrics: [
            {
              label: 'Structured Clinical Documentation',
              value: 'Rekapitulasi',
              delta: 'Data transaksi terstruktur',
            },
            {
              label: 'Connected Patient Workflows',
              value: 'Pelaporan',
              delta: 'Ringkasan aktivitas klinik',
            },
            {
              label: 'Centralised Practice Management',
              value: 'Manajerial',
              delta: 'Evaluasi operasional praktik',
            },
          ],
        },
      ],
      voucherSystem: {
        kicker: 'KONSEP EKOSISTEM PROMOSI DIGITAL · KHAYR',
        heading: 'Proposed Digital Voucher Distribution Ecosystem',
        lead: 'Sebagai bagian dari peta jalan pengembangan ekosistemnya, KHAYR merancang konsep distribusi voucher promosi digital yang bertujuan membantu klinik gigi memperkenalkan layanan perawatan terpilih melalui kanal kemitraan digital.',
        partnerAppsLabel: 'Kategori Kanal Distribusi Ekosistem yang Direncanakan',
        partnerApps: [
          'Platform Aplikasi Telekomunikasi Digital',
          'Ekosistem Dompet Digital & Pembayaran',
          'Program Loyalitas & Keanggotaan Korporat',
          'Kanal Direktori Kesehatan Mitra',
        ],
        benefits: [
          {
            step: 'Konsep 01',
            title: 'Pengelolaan Kampanye Promosi Terstruktur',
            desc: 'Dirancang agar klinik dapat menyiapkan program penawaran layanan gigi langsung melalui modul manajemen promosi.',
          },
          {
            step: 'Konsep 02',
            title: 'Perluasan Jangkauan Edukasi & Akuisisi Pasien',
            desc: 'Bertujuan menjembatani penawaran layanan klinik gigi dengan calon pasien melalui kanal ekosistem digital yang relevan.',
          },
          {
            step: 'Konsep 03',
            title: 'Pencatatan Klaim Terhubung ke Kasir',
            desc: 'Setiap penggunaan voucher yang terverifikasi di klinik dirancang agar tercatat secara rapi pada laporan administrasi.',
          },
        ],
        workflowSteps: [
          {
            num: '01',
            title: 'Konfigurasi Program Voucher',
            desc: 'Klinik menentukan jenis layanan gigi, kuota, dan periode berlakunya penawaran di dalam konsep modul KHAYR.',
          },
          {
            num: '02',
            title: 'Distribusi ke Kanal Mitra Terkonfirmasi',
            desc: 'Penawaran disalurkan melalui kanal distribusi digital sesuai perjanjian kemitraan yang telah berlaku.',
          },
          {
            num: '03',
            title: 'Reservasi & Kunjungan Pasien',
            desc: 'Pasien melakukan penjadwalan kunjungan dan menunjukkan kode voucher saat registrasi di klinik.',
          },
          {
            num: '04',
            title: 'Verifikasi & Pencatatan Transaksi',
            desc: 'Penggunaan voucher dicatat pada sistem kasir klinik untuk transparansi pelaporan.',
          },
        ],
        disclosure:
          'Pernyataan Ekosistem Voucher (Required Disclosure): Konsep ekosistem distribusi voucher digital menggambarkan kapabilitas komersial dan kemitraan yang sedang dikembangkan. Integrasi dengan saluran distribusi pihak ketiga tunduk pada perjanjian kemitraan resmi, kesiapan teknis, serta persyaratan komersial yang berlaku.',
      },
      governanceFootnote:
        'Pernyataan Status Produk (Product Status Disclosure): KHAYR adalah platform perangkat lunak yang sedang dalam tahap pengembangan dan validasi oleh PT Neomedika Elektra Optima (NEO). Seluruh tampilan layar pada halaman ini merupakan ilustrasi konsep antarmuka (Concept UI — Illustrative Product Preview) dengan data simulasi sintetis. Ketersediaan modul, spesifikasi fitur, serta integrasi pihak ketiga tunduk pada penyelesaian pengembangan dan validasi.',
    },
    neolyte: {
      sectionNumber: 'Halaman 05 · Produk Kami: Neolyte',
      kicker: 'HOCl-Based Sanitizer & Disinfectant Product Line',
      heading: 'Neolyte Healthcare Hygiene Solutions',
      tagline: 'Lini Produk Sanitizer & Disinfektan Berbasis Hypochlorous Acid (HOCl) untuk Kebutuhan Medis, Dental, dan Higienitas Harian.',
      lead: 'Neolyte adalah lini produk higienitas dan sanitasi dari PT Neomedika Elektra Optima (NEO) yang diformulasikan dengan bahan aktif Hypochlorous Acid (HOCl) berbasis air dan bebas alkohol (0%). Lini Neolyte dirancang untuk mendukung kebutuhan kebersihan tangan serta disinfeksi permukaan dan peralatan di fasilitas layanan kesehatan, klinik gigi, maupun lingkungan umum.',
      scienceQuote:
        'Hypochlorous Acid (HOCl) adalah senyawa antimikroba berbasis air yang digunakan dalam formulasi higienitas modern untuk membantu sanitasi tangan serta disinfeksi permukaan keras dan peralatan non-kritis tanpa kandungan alkohol.',
      scienceSource:
        'Informasi Produk: Terdaftar sebagai Perbekalan Kesehatan Rumah Tangga (PKRT) Kementerian Kesehatan RI serta didukung pengujian laboratorium terhadap bakteri uji standar.',
      enquireCta: 'Pertanyaan Produk (Product Enquiry)',
      documentationCta: 'Minta Dokumentasi Produk (Request Product Documentation)',
      safetyPillars: [
        { title: 'HOCl FORMULATION', sub: 'Berbahan Aktif Hypochlorous Acid' },
        { title: '0% ALCOHOL', sub: 'Formula Berbasis Air Bebas Alkohol' },
        { title: 'KEMENKES RI PKD', sub: 'Izin Edar PKRT Terdaftar' },
        { title: 'MULTI-ENVIRONMENT', sub: 'Klinik, Rumah Sakit & Ruang Publik' },
      ],
      coreAdvantages: [
        {
          title: 'Formula Berbasis Air (0% Alkohol)',
          subtitle: 'Teknologi Hypochlorous Acid (HOCl)',
          desc: 'Menggunakan bahan aktif HOCl berbasis air yang tidak mudah terbakar dan nyaman digunakan untuk rutinitas sanitasi harian.',
        },
        {
          title: 'Dua Varian Terarah (SN & DS)',
          subtitle: 'Sanitasi Tangan vs. Disinfeksi Permukaan',
          desc: 'Tersedia dalam varian khusus antiseptik tangan/tubuh (Neolyte SN) dan varian disinfektan permukaan/peralatan (Neolyte DS).',
        },
        {
          title: 'Praktis & Siap Diaplikasikan',
          subtitle: 'Berbagai Ukuran Kemasan & Metode Semprot',
          desc: 'Dapat diaplikasikan melalui botol semprot, dispenser nirsentuh, maupun perangkat pengabutan/penyemprotan ruangan sesuai petunjuk label.',
        },
        {
          title: 'Mendukung Higienitas Fasilitas Kesehatan',
          subtitle: 'Klinik Gigi, Rumah Sakit & Area Umum',
          desc: 'Dirancang untuk melengkapi protokol kebersihan rutin di ruang praktik dokter gigi, ruang tunggu, perkantoran, dan rumah tangga.',
        },
      ],
      variants: [
        {
          code: 'SN',
          name: 'Neolyte SN — Hand & Body Sanitizer',
          category: 'Antiseptik Tangan & Tubuh Berbasis Air',
          ph: 'pH 4,5 – 5,5',
          ppm: '60 ppm HOCl',
          kemenkesNo: 'KEMENKES RI PKD 20501023189',
          colorHex: '#65B741',
          description:
            'Cairan sanitizer tangan dan tubuh berbasis air (0% alkohol) dengan kandungan Hypochlorous Acid (HOCl) untuk membantu menjaga kebersihan tangan tenaga kesehatan, pasien, dan pengguna harian di fasilitas medis maupun ruang publik.',
          useCases: [
            'Sanitasi tangan rutin bagi tenaga medis, staf klinik gigi, dan pengunjung',
            'Alternatif hand sanitizer bebas alkohol untuk penggunaan sehari-hari',
            'Pengisian unit dispenser sanitizer tangan otomatis di lobi klinik, rumah sakit, dan perkantoran',
          ],
          sizes: ['60 ml', '100 ml', '250 ml', '500 ml', '1000 ml', '5000 ml'],
        },
        {
          code: 'DS',
          name: 'Neolyte DS — Surface & Equipment Disinfectant',
          category: 'Disinfektan Permukaan & Peralatan Fasilitas',
          ph: 'pH 6,0 – 7,0',
          ppm: '160 – 220 ppm HOCl',
          kemenkesNo: 'KEMENKES RI PKD 20502023190',
          colorHex: '#189AB4',
          description:
            'Larutan disinfektan berbasis Hypochlorous Acid (HOCl) yang dirancang untuk membantu disinfeksi permukaan keras, perabot fasilitas kesehatan, kursi perawatan dental (dental unit), serta peralatan non-kritis. Dapat digunakan sesuai petunjuk pengenceran pada label resmi.',
          useCases: [
            'Disinfeksi permukaan kerja di klinik gigi, rumah sakit, puskesmas, dan laboratorium',
            'Pembersihan permukaan ruang tunggu, meja kerja, gagang pintu, dan fasilitas umum',
            'Penggunaan pada perangkat penyemprotan permukaan dan bilik disinfeksi Neogate sesuai petunjuk penggunaan',
          ],
          sizes: ['250 ml', '500 ml', '1000 ml', '5000 ml'],
        },
      ],
      certifications: {
        title: 'Registrasi Izin Edar & Dokumentasi Pengujian Produk',
        subtitle:
          'Lini produk Neolyte didukung oleh izin edar Perbekalan Kesehatan Rumah Tangga (PKRT) Kementerian Kesehatan RI serta dokumentasi pengujian laboratorium.',
        items: [
          {
            badge: 'Izin Edar PKRT',
            title: 'KEMENKES RI PKD 20501023189',
            reference: 'Neolyte SN — Hand & Body Sanitizer',
            detail:
              'Terdaftar pada Kementerian Kesehatan Republik Indonesia untuk kategori sediaan antiseptika/sanitizer tangan dan tubuh.',
          },
          {
            badge: 'Izin Edar PKRT',
            title: 'KEMENKES RI PKD 20502023190',
            reference: 'Neolyte DS — Surface & Equipment Disinfectant',
            detail:
              'Terdaftar pada Kementerian Kesehatan Republik Indonesia untuk kategori sediaan disinfektan permukaan dan fasilitas.',
          },
          {
            badge: 'Dokumentasi Laboratorium',
            title: 'Uji Aktivitas Antimikroba Laboratorium',
            reference: 'Pengujian terhadap Bakteri Uji Standar',
            detail:
              'Didukung laporan pengujian laboratorium terhadap mikroorganisme uji standar. Dokumentasi teknis lengkap tersedia berdasarkan permintaan resmi.',
          },
          {
            badge: 'Kepatuhan Produk',
            title: 'Sertifikasi Halal & Standar Produksi',
            reference: 'Kepatuhan Mutu & Label Resmi',
            detail:
              'Diproduksi dengan pengawasan mutu terstandar untuk memenuhi kebutuhan pengadaan fasilitas kesehatan dan institusi.',
          },
        ],
      },
      comparisonTitle: 'Karakteristik Formulasi HOCl Dibandingkan Agen Pembersih Umum',
      comparisonSub:
        'Perbandingan karakteristik umum antara larutan berbasis Hypochlorous Acid (HOCl) dan agen sanitasi konvensional dalam penggunaan rutin.',
      comparisons: [
        {
          agent: 'Hypochlorous Acid / HOCl (Neolyte™)',
          efficacy: 'Disinfeksi & Sanitasi Berbasis Air',
          safetyProfile:
            'Bebas alkohol (0%), tidak mudah terbakar, dan dirancang untuk penggunaan pada tangan (SN) maupun permukaan fasilitas (DS) sesuai label.',
          scorePercent: 95,
          isNeolyte: true,
        },
        {
          agent: 'Alkohol (70%–90%)',
          efficacy: 'Antiseptik & Disinfektan Cepat Menguap',
          safetyProfile:
            'Mudah terbakar (flammable) dan penggunaan berulang dapat menyebabkan kulit terasa kering pada sebagian pengguna.',
          scorePercent: 68,
        },
        {
          agent: 'Natrium Hipoklorit / Pemutih (NaOCl)',
          efficacy: 'Disinfektan Permukaan Keras',
          safetyProfile:
            'Memiliki bau menyengat, bersifat korosif terhadap logam tertentu, dan memerlukan penanganan khusus.',
          scorePercent: 55,
        },
        {
          agent: 'Povidone Iodine',
          efficacy: 'Antiseptik Kulit / Luka Luar',
          safetyProfile:
            'Meninggalkan warna pada permukaan dan tidak ditujukan untuk penyemprotan sanitasi permukaan luas.',
          scorePercent: 50,
        },
        {
          agent: 'Sabun & Air Mengalir',
          efficacy: 'Pembersihan Fisik Dasar',
          safetyProfile:
            'Efektif untuk mencuci tangan namun memerlukan sarana air mengalir dan pembilasan.',
          scorePercent: 40,
        },
      ],
      dilutionCalculatorTitle:
        'Kalkulator Ilustrasi Pengenceran Neolyte DS (220 ppm)',
      dilutionCalculatorSub:
        'Pilih rasio pengenceran dan volume target untuk menghitung estimasi campuran Neolyte DS dan Aquades / Air RO.',
      dilutionOfficialNotice:
        'Penting — Panduan Label Resmi: Kalkulator pengenceran ini disediakan sebagai alat bantu ilustrasi. Pengguna wajib selalu membaca dan mengikuti petunjuk penggunaan, rasio pengenceran, serta peringatan keselamatan yang tertera pada label produk resmi dan dokumentasi teknis yang disetujui.',
      devicesTitle: 'Kompatibilitas Perangkat Aplikasi Sanitasi',
      devicesSub:
        'Neolyte dapat diaplikasikan menggunakan berbagai perangkat pendukung kebersihan di lingkungan fasilitas kesehatan maupun ruang publik.',
      devices: [
        {
          name: 'Ultrasonic Diffuser / Humidifier',
          method: 'Aplikasi Ruangan Indoor (Rasio Ilustrasi 1:4)',
          useCase:
            'Digunakan untuk membantu menjaga kesegaran dan sanitasi udara di ruang tunggu maupun ruang kerja sesuai petunjuk perangkat.',
        },
        {
          name: 'Semprot Elektrik (Electric Sprayer 5L)',
          method: 'Penyemprotan Permukaan Luas (Rasio Ilustrasi 1:1 – 1:3)',
          useCase:
            'Mendukung disinfeksi permukaan rutin di poliklinik, ruang tindakan, perkantoran, dan fasilitas pendidikan.',
        },
        {
          name: 'Automatic Hand Sanitizer Dispenser',
          method: 'Dispenser Tanpa Sentuh (Neolyte SN 60 ppm)',
          useCase:
            'Penyediaan sanitizer tangan bebas alkohol secara praktis di pintu masuk klinik, rumah sakit, dan gedung.',
        },
        {
          name: 'Cold Fogger / Mist Sprayer',
          method: 'Penyemprotan Kabut Halus (Rasio Ilustrasi 1:1 – 1:2)',
          useCase:
            'Mendukung prosedur disinfeksi terjadwal pada ruangan fasilitas kesehatan dan aula gedung.',
        },
        {
          name: 'Neogate™ Disinfection Chamber',
          method: 'Bilik Sanitasi Fasilitas (Rasio Ilustrasi 1:3)',
          useCase:
            'Unit bilik sanitasi produksi Neomedika untuk mendukung protokol kebersihan pada akses masuk fasilitas.',
        },
        {
          name: 'Spray Mop & Pembersih Permukaan',
          method: 'Sanitasi Lantai & Perabot Harian (Rasio Ilustrasi 1:2 – 1:3)',
          useCase:
            'Pembersihan rutin permukaan lantai klinik dan area kerja sehari-hari.',
        },
      ],
      productDisclosure:
        'Pernyataan Spesifikasi Produk (Product Specification Disclosure): Gunakan produk Neolyte SN dan Neolyte DS sesuai dengan peruntukan dan petunjuk yang tercantum pada label kemasan resmi (KEMENKES RI PKD 20501023189 & KEMENKES RI PKD 20502023190). Informasi pada halaman ini bersifat informatif korporat dan tidak menggantikan petunjuk penggunaan resmi atau standar pengendalian infeksi fasilitas kesehatan.',
    },
    technology: {
      sectionNumber: 'Halaman 06 · Teknologi',
      kicker: 'Prinsip Teknologi & Pengembangan Produk · PT Neomedika Elektra Optima',
      heading: 'Enam Prinsip Rekayasa Teknologi untuk Layanan Kesehatan.',
      lead: 'Pengembangan teknologi di PT Neomedika Elektra Optima (NEO) berlandaskan pada enam prinsip arsitektur utama yang memastikan setiap solusi dirancang secara bertanggung jawab, aman, dan relevan bagi fasilitas kesehatan.',
      principles: [
        {
          index: '01',
          title: 'Integration by Design (Integrasi Sejak Perancangan)',
          desc: 'Sistem kami dirancang sejak awal untuk menghubungkan alur kerja klinis, administrasi, penagihan, dan inventaris agar mengurangi fragmentasi operasional di fasilitas kesehatan.',
        },
        {
          index: '02',
          title: 'Scalable Architecture (Arsitektur yang Dapat Diskalakan)',
          desc: 'Menggunakan fondasi perangkat lunak modular berbasis cloud yang dapat berkembang mengikuti skala klinik tunggal hingga jaringan fasilitas multi-cabang.',
        },
        {
          index: '03',
          title: 'Security by Design (Keamanan Sejak Perancangan)',
          desc: 'Menerapkan prinsip keamanan berlapis, pemisahan lingkungan sistem operasional dari situs web publik, serta kontrol akses berbasis peran (Role-Based Access Control).',
        },
        {
          index: '04',
          title: 'Responsible Data Management (Pengelolaan Data Bertanggung Jawab)',
          desc: 'Menjaga kerahasiaan, keutuhan, dan tata kelola data bisnis maupun operasional klinik selaras dengan prinsip pelindungan data yang berlaku.',
        },
        {
          index: '05',
          title: 'Standards-Aware Interoperability (Interoperabilitas Sadar Standar)',
          desc: 'Menyusun struktur data dan antarmuka pemrograman (API) yang mempertimbangkan standar pertukaran informasi kesehatan nasional di Indonesia.',
        },
        {
          index: '06',
          title: 'Human-Centred Product Validation (Validasi Produk Berpusat pada Manusia)',
          desc: 'Melibatkan masukan dokter gigi, tenaga kesehatan, dan staf administrasi dalam proses perancangan serta pengujian fungsional agar teknologi mudah diadopsi.',
        },
      ],
      approachHeading: 'Tata Kelola Pengembangan & Kepatuhan Teknis',
      approachLead:
        'Kami membedakan secara jelas antara fitur yang telah tersedia, kapabilitas yang sedang dalam tahap validasi, serta peta jalan pengembangan jangka panjang.',
      governanceBlocks: [
        {
          title: 'Pemisahan Infrastruktur Publik & Aplikasi',
          desc: 'Situs web korporat NEO berfungsi sebagai kanal informasi resmi dan terpisah sepenuhnya dari basis data rekam medis atau operasional klinik.',
        },
        {
          title: 'Pelindungan Privasi & Data',
          desc: 'Pengelolaan informasi kontak bisnis dilakukan secara transparan berdasarkan persetujuan pengguna dan Pemberitahuan Privasi korporat.',
        },
        {
          title: 'Validasi Bertahap & Transparansi',
          desc: 'Setiap modul perangkat lunak dan integrasi pihak ketiga melalui proses pengujian kelayakan teknis sebelum dirilis secara komersial.',
        },
        {
          title: 'Kepatuhan Regulasi Sektor Kesehatan',
          desc: 'Pengembangan produk senantiasa memperhatikan ketentuan regulasi kesehatan, izin edar, dan standar tata kelola yang berlaku di Indonesia.',
        },
      ],
    },
    partnerships: {
      sectionNumber: 'Halaman 07 · Kemitraan',
      kicker: 'Kolaborasi Ekosistem Kesehatan · PT Neomedika Elektra Optima',
      heading: 'Membangun Ekosistem Layanan Kesehatan Melalui Kemitraan Strategis.',
      lead: 'PT Neomedika Elektra Optima (NEO) bekerja sama dengan berbagai organisasi di sektor kesehatan dan teknologi untuk memperluas manfaat solusi digital maupun produk higienitas medis.',
      tracks: [
        {
          title: 'Healthcare Providers (Penyedia Layanan Kesehatan)',
          audience: 'Klinik Gigi, Klinik Pratama, Rumah Sakit & Grup Medis',
          desc: 'Kolaborasi adopsi awal dan validasi alur kerja platform manajemen klinik gigi KHAYR, serta penyediaan lini higienitas Neolyte untuk kebutuhan sanitasi fasilitas.',
          category: 'KHAYR Product Information',
        },
        {
          title: 'Technology Partners (Mitra Teknologi)',
          audience: 'Penyedia Infrastruktur Cloud, Sistem Kesehatan & Platform Digital',
          desc: 'Kerja sama teknis dalam pengembangan integrasi API, kesiapan interoperabilitas sistem, keamanan infrastruktur, dan konektivitas ekosistem digital.',
          category: 'Technology & Integration Partnership',
        },
        {
          title: 'Distribution Partners (Mitra Distribusi)',
          audience: 'Distributor Alat Kesehatan, Jaringan Suplai Medis & Mitra Regional',
          desc: 'Kemitraan komersial dan distribusi untuk memperluas ketersediaan produk Neolyte SN, Neolyte DS, serta perangkat pendukung sanitasi di berbagai wilayah.',
          category: 'Distribution Partnership',
        },
        {
          title: 'Clinical & Institutional Partners (Mitra Klinis & Institusi)',
          audience: 'Asosiasi Profesi, Institusi Pendidikan, Penasihat Klinis & Investor',
          desc: 'Kolaborasi dalam bentuk kajian alur kerja klinis, edukasi teknologi kesehatan, pengujian produk, serta kemitraan investasi strategis jangka panjang.',
          category: 'Investor & Strategic Collaboration',
        },
      ],
      ctaButton: 'Diskusikan Peluang Kemitraan (Discuss Partnership Opportunities)',
    },
    insights: {
      sectionNumber: 'Halaman 08 · Wawasan',
      kicker: 'Perspektif & Edukasi Industri · PT Neomedika Elektra Optima',
      heading: 'Wawasan Seputar Teknologi Kesehatan Digital & Standar Higienitas.',
      lead: 'Kumpulan artikel edukatif dan perspektif korporat NEO mengenai transformasi digital fasilitas kesehatan, manajemen praktik kedokteran gigi, interoperabilitas, serta higienitas lingkungan medis.',
      categories: [
        'Semua Topik',
        'Digital Healthcare',
        'Dental Technology',
        'Healthcare Hygiene',
        'Interoperability & Integration',
        'Corporate & Industry Perspectives',
      ],
      readArticleLabel: 'Baca Artikel Lengkap',
      closeArticleLabel: 'Tutup Artikel',
      articles: [
        {
          slug: 'why-healthcare-needs-connected-digital-systems',
          category: 'Digital Healthcare',
          date: '02 November 2026',
          readTime: '4 menit baca',
          title: 'Pentingnya Sistem Digital yang Terhubung bagi Operasional Fasilitas Kesehatan',
          summary:
            'Bagaimana penyatuan alur registrasi, dokumentasi klinis, inventaris, dan penagihan membantu fasilitas kesehatan bekerja lebih terstruktur.',
          body: [
            'Di banyak fasilitas layanan kesehatan, proses operasional harian sering kali masih berjalan secara terpisah: penjadwalan pasien dicatat secara manual, dokumentasi medis berada di berkas tersendiri, sementara pemantauan stok bahan baru dilakukan secara berkala.',
            'Pendekatan sistem manajemen yang terintegrasi bertujuan menjembatani tahapan-tahapan tersebut. Ketika pencatatan tindakan klinis terhubung secara langsung dengan administrasi kasir dan pemantauan inventaris, risiko kesalahan input berulang dapat dikurangi.',
            'Bagi tenaga medis dan staf administrasi, keterhubungan sistem ini memberikan kejelasan alur kerja sehingga perhatian utama dapat tetap difokuskan pada kualitas pelayanan pasien.',
          ],
        },
        {
          slug: 'modern-dental-practice-management-khayr',
          category: 'Dental Technology',
          date: '28 Oktober 2026',
          readTime: '5 menit baca',
          title: 'Merancang Alur Kerja Praktik Kedokteran Gigi Modern dengan Odontogram Digital',
          summary:
            'Meninjau peran dokumentasi klinis terstruktur dan pemetaan Odontogram digital dalam mendukung kesinambungan perawatan pasien gigi.',
          body: [
            'Praktik kedokteran gigi memiliki karakteristik pencatatan klinis yang khas, di mana setiap elemen dan permukaan gigi memerlukan histori diagnosis serta rencana perawatan yang detail dari waktu ke waktu.',
            'Melalui pengembangan platform KHAYR, PT Neomedika Elektra Optima merancang modul Clinical Management & Digital Odontogram yang terhubung langsung dengan penjadwalan kursi perawatan, riwayat kunjungan pasien, serta pengelolaan bahan habis pakai dental.',
            'Pendekatan pengembangan yang berpusat pada alur kerja klinisi ini bertujuan menghadirkan sistem yang praktis digunakan baik oleh praktik mandiri maupun jaringan klinik multi-cabang.',
          ],
        },
        {
          slug: 'hocl-role-in-healthcare-hygiene-neolyte',
          category: 'Healthcare Hygiene',
          date: '19 Oktober 2026',
          readTime: '4 menit baca',
          title: 'Peran Hypochlorous Acid (HOCl) dalam Protokol Higienitas Fasilitas Kesehatan',
          summary:
            'Mengenal karakteristik larutan sanitasi berbasis air dan bebas alkohol untuk kebutuhan kebersihan tangan serta disinfeksi permukaan klinik.',
          body: [
            'Kebersihan tangan dan sanitasi permukaan kerja merupakan bagian mendasar dari tata kelola lingkungan fasilitas kesehatan, poliklinik, maupun ruang praktik dokter gigi.',
            'Formulasi berbasis Hypochlorous Acid (HOCl) pada lini produk Neolyte menawarkan alternatif sanitasi berbasis air yang bebas alkohol (0%). Dengan pemisahan varian yang jelas antara Neolyte SN (Hand & Body Sanitizer) dan Neolyte DS (Surface & Equipment Disinfectant), fasilitas kesehatan dapat menyesuaikan penggunaan produk sesuai peruntukannya.',
            'Seluruh penggunaan produk disinfektan dan sanitizer di lingkungan fasilitas kesehatan harus senantiasa mengacu pada petunjuk label resmi serta prosedur pengendalian kebersihan yang berlaku.',
          ],
        },
        {
          slug: 'interoperability-and-standards-in-indonesian-healthcare',
          category: 'Interoperability & Integration',
          date: '12 Oktober 2026',
          readTime: '4 menit baca',
          title: 'Kesiapan Interoperabilitas dalam Pengembangan Perangkat Lunak Kesehatan',
          summary:
            'Mengapa perancangan skema data yang terstruktur menjadi fondasi penting dalam mendukung peta jalan pertukaran informasi kesehatan.',
          body: [
            'Perkembangan ekosistem kesehatan digital di Indonesia mendorong pentingnya standarisasi format data klinis dan administratif agar sistem informasi dapat saling berkomunikasi secara aman.',
            'Dalam merancang arsitektur teknologinya, PT Neomedika Elektra Optima menerapkan prinsip Standards-Aware Interoperability dan Security by Design. Setiap integrasi ekosistem dikembangkan secara bertahap dengan memperhatikan kesiapan teknis, pengujian validasi, serta kepatuhan terhadap regulasi yang berlaku.',
          ],
        },
        {
          slug: 'building-sustainable-healthcare-technology-portfolio',
          category: 'Corporate & Industry Perspectives',
          date: '05 Oktober 2026',
          readTime: '4 menit baca',
          title: 'Membangun Portofolio Teknologi Kesehatan Melalui Validasi dan Kemitraan',
          summary:
            'Perspektif korporat PT Neomedika Elektra Optima dalam menggabungkan inovasi perangkat lunak, solusi higienitas, dan kolaborasi ekosistem.',
          body: [
            'Inovasi di sektor kesehatan menuntut keseimbangan antara visi teknologi jangka panjang dan disiplin eksekusi yang bertanggung jawab. Solusi yang berkelanjutan tidak dibangun secara instan, melainkan melalui pemahaman mendalam terhadap kebutuhan praktisi di lapangan.',
            'Melalui lima pilar bisnis strategisnya, PT Neomedika Elektra Optima (NEO) berkomitmen untuk terus berkolaborasi bersama penyedia layanan kesehatan, mitra teknologi, dan jaringan distribusi guna menghadirkan solusi yang memberikan nilai nyata.',
          ],
        },
      ],
    },
    contact: {
      sectionNumber: 'Halaman 09 · Kontak',
      kicker: 'Corporate Enquiry & Partnership · PT Neomedika Elektra Optima',
      heading: 'Hubungi PT Neomedika Elektra Optima (NEO).',
      lead: 'Silakan gunakan formulir resmi di bawah ini untuk mengajukan pertanyaan korporat, meminta informasi produk KHAYR, berkonsultasi mengenai pengadaan lini higienitas Neolyte, atau mendiskusikan peluang kemitraan strategis.',
      formTitle: 'Corporate Enquiry & Partnership Form',
      formSubtitle:
        'Formulir ini ditujukan untuk komunikasi bisnis, institusi, dan kemitraan resmi PT Neomedika Elektra Optima.',
      patientDataNoticeTitle: 'Pemberitahuan Pelindungan Data Pasien (Patient Data Protection Notice)',
      patientDataNoticeText:
        'Mohon tidak mengirimkan rekam medis pasien atau informasi kesehatan sensitif melalui formulir pertanyaan korporat ini. (Please do not submit patient medical records or sensitive health information through this corporate enquiry form.)',
      fields: {
        fullName: 'Nama Lengkap (Full Name) *',
        fullNamePlaceholder: 'Contoh: drg. Budi Santoso / Ibu Rina Wijaya',
        roleTitle: 'Jabatan / Peran (Role / Title)',
        roleTitlePlaceholder: 'Contoh: Pemilik Klinik / Manajer Pengadaan / Direktur',
        businessEmail: 'Alamat Email Bisnis / Institusi (Email Address) *',
        businessEmailPlaceholder: 'nama@institusianda.co.id',
        phone: 'Nomor Telepon / WhatsApp (Phone / WhatsApp Number)',
        phonePlaceholder: '+62 812 XXXX XXXX',
        organisation: 'Nama Perusahaan / Institusi / Klinik *',
        organisationPlaceholder: 'Contoh: Klinik Gigi Senyum Optima / RS Medika',
        countryCity: 'Kota / Wilayah',
        countryCityPlaceholder: 'Contoh: Jakarta, Indonesia',
        category: 'Kategori Pertanyaan (Enquiry Category) *',
        productInterest: 'Fokus Produk / Inisiatif',
        message: 'Pesan / Rincian Pertanyaan (Message / Enquiry Details) *',
        messagePlaceholder:
          'Tuliskan rincian pertanyaan korporat, kebutuhan informasi produk KHAYR / Neolyte, atau proposal kemitraan Anda...',
        privacyConsent:
          'Saya menyatakan dan menyetujui bahwa PT Neomedika Elektra Optima dapat mengumpulkan serta memproses informasi kontak bisnis yang dikirimkan melalui formulir ini untuk menanggapi pertanyaan saya, sesuai dengan Pemberitahuan Privasi (Privacy Notice) perusahaan.',
        privacyNoticeLinkLabel: 'Lihat Pemberitahuan Privasi (Privacy Notice)',
        submitBtn: 'Kirim Pertanyaan Korporat',
        submittingBtn: 'Mengirim Pesan...',
      },
      categories: [
        'Corporate & General Enquiry',
        'KHAYR Product Information',
        'Neolyte Product Enquiry',
        'Technology & Integration Partnership',
        'Distribution Partnership',
        'Investor & Strategic Collaboration',
      ],
      productInterests: [
        'KHAYR Digital Dental Platform',
        'Neolyte SN / DS Hygiene Line',
        'KHAYR + Neolyte Integrated Healthcare Package',
        'Corporate & Ecosystem Partnership',
        'General NEO Enquiry',
      ],
      workspaceBox: {
        title: 'Integrasi Email & Spreadsheet Internal',
        subtitle: 'Konfigurasi internal pengiriman notifikasi korporat.',
        connectedAs: 'Terhubung sebagai:',
        signInBtn: 'Sign in with Google',
        signOutBtn: 'Putuskan Akun',
        createSheetBtn: 'Buat Google Sheet Baru',
        syncAllBtn: 'Sinkronkan ke Google Sheet',
        sendGmailBtn: 'Kirim Email Notifikasi',
        exportCsvBtn: 'Unduh CSV',
        recipientLabel: 'Email Korporat Tujuan:',
        sheetIdLabel: 'ID Spreadsheet:',
      },
    },
    footer: {
      corporateDescriptor: 'NEO — Integrated Healthcare Technology',
      statement:
        'Connecting Healthcare. Empowering Better Lives. PT Neomedika Elektra Optima mengembangkan solusi teknologi kesehatan terintegrasi melalui platform kedokteran gigi digital KHAYR dan lini higienitas layanan kesehatan Neolyte.',
      officialEmail: 'info@neomedika.com',
      partnershipsEmail: 'partnerships@neomedika.com',
      locationSummary: 'Jakarta, Indonesia',
      disclaimerTitle: 'Pernyataan Korporat (Corporate Disclaimer)',
      disclaimerText:
        'Informasi pada situs web ini disediakan untuk tujuan informasi umum dan korporat PT Neomedika Elektra Optima (NEO) serta bukan merupakan saran medis, penawaran mengikat, atau jaminan ketersediaan komersial di setiap yurisdiksi. Platform KHAYR saat ini sedang dalam tahap pengembangan dan validasi; pratinjau antarmuka merupakan ilustrasi konsep (Concept UI). Produk Neolyte SN (KEMENKES RI PKD 20501023189) dan Neolyte DS (KEMENKES RI PKD 20502023190) harus digunakan sesuai petunjuk pada label resmi yang disetujui.',
      copyright: '© 2026 PT Neomedika Elektra Optima (NEO). All rights reserved.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About NEO',
      business: 'Our Business',
      products: 'Our Products',
      technology: 'Technology',
      partnerships: 'Partnerships',
      insights: 'Insights',
      contact: 'Contact',
      cta: 'Contact NEO',
    },
    utility: {
      legalEntity: 'PT Neomedika Elektra Optima',
      descriptor: 'Integrated Healthcare Technology',
      tagline: 'Connecting Healthcare. Empowering Better Lives.',
      workspaceSyncBtn: 'Gmail & Sheets Integration',
      langLabel: 'Language',
    },
    hero: {
      kicker: 'PT Neomedika Elektra Optima · NEO — Integrated Healthcare Technology',
      headline: 'Connecting Healthcare. Empowering Better Lives.',
      subheadline:
        'PT Neomedika Elektra Optima (NEO) is an integrated healthcare technology company developing healthcare management platforms, digital dental solutions, and healthcare hygiene innovations.',
      corporateNote:
        'As the corporate parent brand, NEO unites clinical software platform development (KHAYR) and HOCl-based healthcare hygiene solutions (Neolyte) to support a more connected healthcare ecosystem.',
      primaryCta: 'Explore Our Solutions',
      secondaryCta: 'Partner With NEO',
      snapshotItems: [
        {
          label: 'Corporate Identity',
          value: 'PT Neomedika Elektra Optima',
          detail: 'Corporate Brand: NEO · Integrated Healthcare Technology',
        },
        {
          label: 'Digital Dental Platform',
          value: 'KHAYR Dental Platform',
          detail: 'Dental Clinic Management & EMR Platform (Under Development)',
        },
        {
          label: 'Healthcare Hygiene Solutions',
          value: 'Neolyte™ SN & DS',
          detail: 'HOCl-Based Sanitizer & Disinfectant · KEMENKES RI PKD',
        },
        {
          label: 'Ecosystem & Partnership Focus',
          value: 'Connected Healthcare',
          detail: 'Healthcare Providers, Technology, Distribution & Institutions',
        },
      ],
    },
    homeSummary: {
      whoWeAreKicker: '01 · Who We Are',
      whoWeAreTitle: 'Building Integrated Healthcare Technology for Modern Healthcare Delivery.',
      whoWeAreText:
        'PT Neomedika Elektra Optima (NEO) focuses on developing connected healthcare capabilities spanning healthcare management systems, smart medical devices, hygiene solutions, and ecosystem integration.',
      whoWeAreCta: 'Learn More About NEO',
      pillarsKicker: '02 · Our Five Business Pillars',
      pillarsTitle: 'A Structured Strategic Framework for Connected Healthcare.',
      pillarsSub:
        'NEO’s portfolio is organised around five complementary business pillars supporting clinical and operational progress.',
      pillarsCta: 'Explore Our 5 Business Pillars',
      featuredProductsKicker: '03 · Featured Portfolio',
      featuredProductsTitle: 'Clinical Software Innovation & Healthcare Hygiene Solutions.',
      featuredProductsSub:
        'Two core portfolio initiatives under PT Neomedika Elektra Optima designed to support modern healthcare environments.',
      khayrCardDesc:
        'A Dental Clinic Management & Electronic Medical Record (EMR) platform designed to connect clinical charting, digital odontograms, scheduling, billing, inventory, and reporting.',
      khayrCardCta: 'Explore KHAYR Platform',
      neolyteCardDesc:
        'Hypochlorous Acid (HOCl) water-based hand & body sanitizer (Neolyte SN) and surface & equipment disinfectant (Neolyte DS) for medical, dental, and everyday environments.',
      neolyteCardCta: 'Explore Neolyte Solutions',
      techKicker: '04 · Technology & Product Approach',
      techTitle: 'Engineered Around Integration, Security, and Real Clinical Workflows.',
      techText:
        'Our technology principles prioritise scalable architecture, responsible data management, standards-aware interoperability, and human-centred validation.',
      techCta: 'View Our Technology Principles',
      partnerKicker: '05 · Partnership Ecosystem',
      partnerTitle: 'Collaborating With Healthcare Providers & Industry Partners.',
      partnerText:
        'NEO welcomes strategic collaborations with clinics, hospitals, technology partners, distribution networks, and clinical institutions.',
      partnerCta: 'Discuss Partnership Opportunities',
      insightsKicker: '06 · Featured Insights',
      insightsTitle: 'Perspectives on Digital Healthcare & Healthcare Hygiene.',
      insightsCta: 'View All Insights',
      closingKicker: 'Get in Touch',
      closingTitle: 'Start a Conversation With PT Neomedika Elektra Optima.',
      closingText:
        'Connect with our corporate team for KHAYR product information, Neolyte hygiene enquiries, or strategic partnership discussions.',
      closingPrimaryCta: 'Open Corporate Enquiry Form',
      closingSecondaryCta: 'Explore Partnership Tracks',
    },
    about: {
      sectionNumber: 'Page 02 · About NEO',
      kicker: 'Who We Are · PT Neomedika Elektra Optima',
      heading: 'Building Integrated Healthcare Technology for Modern Healthcare Delivery.',
      lead: 'PT Neomedika Elektra Optima (NEO) is an Indonesian healthcare technology company focused on developing digital healthcare management systems, medical equipment and hygiene solutions, and connected healthcare innovations.',
      body: 'We believe modern healthcare delivery requires thoughtful connection across clinical workflows, facility operations, responsible information management, and environmental hygiene. Operating under the corporate brand NEO, PT Neomedika Elektra Optima develops and manages a structured portfolio of healthcare solutions—including the KHAYR digital dental platform and the Neolyte healthcare hygiene line.',
      visionTitle: 'Corporate Vision',
      visionText:
        'To become a trusted integrated healthcare technology company enabling a more connected, efficient, and patient-focused healthcare ecosystem.',
      missionTitle: 'Corporate Mission (5 Core Missions)',
      missions: [
        {
          code: '01',
          title: 'Practical Healthcare Technology Solutions',
          desc: 'Develop practical, relevant healthcare technology solutions that address real operational and clinical needs.',
        },
        {
          code: '02',
          title: 'Clinical & Operational Workflow Efficiency',
          desc: 'Support healthcare professionals and administrators with structured documentation and efficient daily workflows.',
        },
        {
          code: '03',
          title: 'Healthcare Hygiene & Care Environments',
          desc: 'Provide dependable healthcare hygiene and sanitization solutions that support safe clinical and public environments.',
        },
        {
          code: '04',
          title: 'Interoperability & Responsible Data Governance',
          desc: 'Advance responsible information management, security by design, and standards-aware healthcare interoperability.',
        },
        {
          code: '05',
          title: 'Long-Term Ecosystem Partnerships',
          desc: 'Build enduring collaborations with healthcare providers, technology partners, distributors, and institutions.',
        },
      ],
      valuesTitle: 'Corporate Values',
      values: [
        {
          title: 'Innovation',
          desc: 'Developing purposeful solutions that address real operational and clinical challenges.',
        },
        {
          title: 'Integrity',
          desc: 'Operating with honesty, transparency, and accountability in governance and product communication.',
        },
        {
          title: 'Collaboration',
          desc: 'Working closely with clinicians, healthcare administrators, technology partners, and industry stakeholders.',
        },
        {
          title: 'Responsibility',
          desc: 'Prioritising safety, responsible data handling, and accurate disclosure across every initiative.',
        },
        {
          title: 'Long-Term Thinking',
          desc: 'Building sustainable technology architectures and partnerships designed for long-term growth.',
        },
      ],
      roadmapTitle: 'Our Development Approach (5 Steps)',
      roadmapNote:
        'Every initiative under NEO follows a structured five-step development approach to ensure practical usability and operational alignment.',
      phases: [
        {
          phase: 'Step 01',
          title: 'Understand Healthcare Needs',
          desc: 'Identify real-world challenges faced by clinicians, administrative staff, facility operators, and patients.',
        },
        {
          phase: 'Step 02',
          title: 'Design Practical Solutions',
          desc: 'Architect intuitive systems and products aligned with day-to-day healthcare delivery workflows.',
        },
        {
          phase: 'Step 03',
          title: 'Develop Technology Platforms',
          desc: 'Engineer modular software and healthcare solutions with security, reliability, and scalability in mind.',
        },
        {
          phase: 'Step 04',
          title: 'Validate Clinical and Operational Workflows',
          desc: 'Conduct functional testing, workflow evaluation, and iterative refinement with healthcare practitioners.',
        },
        {
          phase: 'Step 05',
          title: 'Build Strategic Partnerships and Scale',
          desc: 'Expand adoption progressively through ecosystem partnerships, distribution networks, and regulatory alignment.',
        },
      ],
    },
    business: {
      sectionNumber: 'Page 03 · Our Business',
      kicker: 'Five Strategic Business Pillars · PT Neomedika Elektra Optima',
      heading: 'A Strategic Business Framework for Integrated Healthcare.',
      lead: 'PT Neomedika Elektra Optima (NEO) organises its business and long-term portfolio development around five complementary strategic pillars.',
      governanceNote:
        'Required Disclaimer: NEO’s business pillars represent the company’s strategic direction and technology development framework. Specific products and services are introduced progressively subject to development, validation, partnerships, and regulatory requirements.',
      pillars: [
        {
          index: '01',
          title: 'Healthcare Management Systems',
          summary:
            'Software platforms engineered to support the structured operational, clinical, and administrative management of healthcare facilities.',
          scopeLabel: 'Scope',
          scope:
            'Clinic management systems, electronic medical records (EMR), appointment scheduling, billing, inventory management, and operational reporting.',
          focusLabel: 'Strategic Focus',
          focus:
            'Improving healthcare facility workflow efficiency and structured clinical documentation, beginning with the KHAYR dental platform.',
          capabilities: [
            'Practice & clinical facility management',
            'Electronic medical records (EMR) & administrative workflows',
            'Appointment scheduling, billing, & inventory control',
            'Centralised multi-branch clinic administration',
          ],
          spanWide: true,
        },
        {
          index: '02',
          title: 'Smart Medical Devices',
          summary:
            'Exploration and development of medical support equipment and integrated sanitization devices for healthcare environments.',
          scopeLabel: 'Scope',
          scope:
            'Automated sanitization application equipment, facility disinfection chambers (such as Neogate), and connected medical device initiatives.',
          focusLabel: 'Strategic Focus',
          focus:
            'Supporting practical clinical operations and environmental hygiene control across healthcare facilities.',
          capabilities: [
            'Automated facility sanitization & disinfection equipment',
            'Hardware alignment with clinical operational routines',
            'Practical medical support device development',
          ],
        },
        {
          index: '03',
          title: 'Consumer Health & Hygiene',
          summary:
            'Science-backed hygiene and sanitization products for medical facilities, dental clinics, public spaces, and everyday use.',
          scopeLabel: 'Scope',
          scope:
            'Hypochlorous Acid (HOCl) hand & body sanitizer (Neolyte SN) and surface & equipment disinfectant (Neolyte DS) product lines.',
          focusLabel: 'Strategic Focus',
          focus:
            'Delivering alcohol-free, water-based hygiene solutions for clinics, hospitals, institutions, and households.',
          capabilities: [
            'Neolyte SN — Hand & Body Sanitizer (KEMENKES RI PKD)',
            'Neolyte DS — Surface & Equipment Disinfectant (KEMENKES RI PKD)',
            'Institutional supply for clinics, hospitals, & public spaces',
          ],
        },
        {
          index: '04',
          title: 'Healthcare Infrastructure & Consulting',
          summary:
            'Advisory and implementation support for healthcare digital readiness, workflow design, and operational governance.',
          scopeLabel: 'Scope',
          scope:
            'Clinic system implementation consulting, patient journey workflow optimisation, and healthcare IT infrastructure readiness.',
          focusLabel: 'Strategic Focus',
          focus:
            'Helping healthcare providers adopt digital systems smoothly in accordance with their operational scale.',
          capabilities: [
            'Clinical & administrative workflow mapping',
            'Healthcare facility onboarding & staff readiness',
            'Multi-branch digital infrastructure planning',
          ],
        },
        {
          index: '05',
          title: 'Digital Health Ecosystem Integration',
          summary:
            'Cross-system connectivity designed to link healthcare providers, patients, and strategic ecosystem partners.',
          scopeLabel: 'Scope',
          scope:
            'API connectivity architecture, healthcare interoperability roadmap alignment, and digital promotional distribution concepts.',
          focusLabel: 'Strategic Focus',
          focus:
            'Building the foundation for responsible information exchange and collaborative ecosystem growth.',
          capabilities: [
            'API-based connectivity & interoperability architecture',
            'Alignment roadmap for national healthcare data standards',
            'Partner ecosystem & digital service integration',
          ],
          spanWide: true,
        },
      ],
      solutionsHeading: 'Solutions Tailored by Ecosystem Segment',
      solutionsSub:
        'NEO’s business framework supports distinct requirements across healthcare providers and industry partners.',
      audiences: [
        {
          audience: 'For Dental Practices & Clinics',
          focus: 'KHAYR Platform & Neolyte Hygiene Solutions',
          description:
            'Digital dental practice management connecting clinical odontograms, scheduling, billing, and inventory, complemented by Neolyte clinic hygiene.',
          ctaLabel: 'Request KHAYR Product Information',
          enquiryCategory: 'KHAYR Product Information',
          productInterest: 'KHAYR Digital Dental Platform',
        },
        {
          audience: 'For Hospitals & Healthcare Facilities',
          focus: 'Neolyte Hygiene Line & System Exploration',
          description:
            'Supply of KEMENKES-registered Neolyte SN & DS sanitizer and disinfectant solutions for clinical surfaces, wards, and facility entrances.',
          ctaLabel: 'Enquire About Neolyte Products',
          enquiryCategory: 'Neolyte Product Enquiry',
          productInterest: 'Neolyte SN / DS Hygiene Line',
        },
        {
          audience: 'For Technology & Integration Partners',
          focus: 'Platform Collaboration & Interoperability',
          description:
            'Technical collaboration opportunities across cloud infrastructure, healthcare information systems, and ecosystem connectivity.',
          ctaLabel: 'Discuss Technology Partnership',
          enquiryCategory: 'Technology & Integration Partnership',
          productInterest: 'Corporate & Ecosystem Partnership',
        },
        {
          audience: 'For Distribution & Strategic Partners',
          focus: 'Product Distribution & Strategic Collaboration',
          description:
            'Regional distribution partnerships for the Neolyte product line and long-term strategic collaboration with NEO.',
          ctaLabel: 'Discuss Distribution Partnership',
          enquiryCategory: 'Distribution Partnership',
          productInterest: 'Corporate & Ecosystem Partnership',
        },
      ],
    },
    khayr: {
      sectionNumber: 'Page 04 · Our Products: KHAYR',
      kicker: 'Dental Clinic Management & Electronic Medical Record Platform',
      statusDisclosure: 'Product Status: Under Development & Validation',
      heading: 'KHAYR — Building a More Connected Dental Practice.',
      tagline: 'Integrated Dental Clinic Management & Electronic Medical Record Platform.',
      lead: 'KHAYR is PT Neomedika Elektra Optima’s (NEO) digital dental platform in development, designed to help dental clinics manage clinical documentation, patient workflows, appointment scheduling, billing, inventory, and operational reporting within one connected environment.',
      subscriptionNote:
        'Modular, Scalable Architecture — designed to support single-chair dental practices through to multi-branch dental clinic networks.',
      registerInterestCta: 'Register Your Interest',
      enquireCta: 'Request Product Information',
      plannedModulesTitle: '8 Planned Product Modules',
      plannedModulesSub:
        'KHAYR’s planned product architecture is structured across eight core modules supporting end-to-end dental clinic operations.',
      plannedModules: [
        {
          code: '01',
          title: 'Clinical Management & Dental EMR',
          desc: 'Structured recording of patient anamnesis, clinical examinations, diagnoses, and chronological electronic medical records.',
        },
        {
          code: '02',
          title: 'Digital Odontogram & Treatment Planning',
          desc: 'Visual tooth charting (Odontogram) designed to support clinical documentation and staged treatment planning.',
        },
        {
          code: '03',
          title: 'Patient Relationship Management',
          desc: 'Centralised patient profiles, visit history, appointment communication, and longitudinal continuity of care.',
        },
        {
          code: '04',
          title: 'Appointment & Scheduling Management',
          desc: 'Dentist schedule configuration, treatment room (dental chair) allocation, and daily appointment queue tracking.',
        },
        {
          code: '05',
          title: 'Billing & Financial Management',
          desc: 'Invoicing workflows connected to recorded clinical procedures, payment tracking, and cashier reconciliation.',
        },
        {
          code: '06',
          title: 'Inventory & Procurement',
          desc: 'Tracking of dental consumables and medications, including batch records, stock status indicators, and expiry alerts.',
        },
        {
          code: '07',
          title: 'Clinic & Multi-Branch Management',
          desc: 'Configuration of service catalogues, pricing, clinical staff credentials, and multi-location clinic administration.',
        },
        {
          code: '08',
          title: 'Operational Reporting & Analytics',
          desc: 'Operational summaries, patient visit trends, and financial visibility dashboards to support clinic management.',
        },
      ],
      devPrinciplesTitle: '7 Product Development Principles',
      devPrinciplesSub:
        'KHAYR is being engineered around seven core principles to support reliable, practical dental clinic operations.',
      devPrinciples: [
        {
          code: '01',
          title: 'Structured Patient Records',
          desc: 'Consistent demographic and clinical record structures designed to reduce fragmented documentation.',
        },
        {
          code: '02',
          title: 'Clinical Workflow Consistency',
          desc: 'Connected transitions from front-desk registration to chairside treatment charting and cashier billing.',
        },
        {
          code: '03',
          title: 'Clear Patient & Encounter Context',
          desc: 'Presenting relevant medical alerts, prior visit notes, and treatment plans clearly during consultations.',
        },
        {
          code: '04',
          title: 'Responsible Data Management',
          desc: 'Strict separation of clinical application environments from public websites alongside structured data stewardship.',
        },
        {
          code: '05',
          title: 'User Permissions & Auditability',
          desc: 'Role-based access controls tailored for dentists, nurses, receptionists, and clinic managers.',
        },
        {
          code: '06',
          title: 'Practical Dental Practice Workflows',
          desc: 'Interfaces designed around real-world dental clinic routines rather than complex administrative overhead.',
        },
        {
          code: '07',
          title: 'Scalable Architecture',
          desc: 'A cloud-ready foundation built to grow alongside additional practitioners, dental chairs, and clinic branches.',
        },
      ],
      interoperabilityRoadmap: {
        badge: 'Healthcare Standards Alignment',
        title: 'Interoperability Development Roadmap',
        description:
          'KHAYR’s development roadmap considers healthcare data interoperability and relevant Indonesian healthcare standards (including the SATUSEHAT ecosystem). Specific integrations remain subject to technical development, validation testing, and applicable regulatory approval requirements.',
      },
      rolesTitle: 'Designed for Key Roles Across the Dental Practice',
      roles: [
        {
          role: 'Dentists & Clinical Nurses',
          badge: 'Clinical Workflow',
          desc: 'Chart clinical findings on the Digital Odontogram, record anamnesis and diagnoses, and review chronological patient EMR.',
        },
        {
          role: 'Administrative & Front-Desk Staff',
          badge: 'Operational Workflow',
          desc: 'Manage patient registration, coordinate daily appointment queues, monitor consumable inventory, and process billing.',
        },
        {
          role: 'Patients',
          badge: 'Care Experience',
          desc: 'Benefit from coordinated appointment scheduling and structured continuity of dental care.',
        },
        {
          role: 'Clinic Owners & Managers',
          badge: 'Practice Management',
          desc: 'Review operational summaries, inventory status, and multi-branch clinic performance from a centralised view.',
        },
      ],
      threePillarsTitle: 'KHAYR Functional Architecture: Configuration, Operations, and Reporting',
      threePillars: [
        {
          name: '1. Practice Foundation',
          subtitle: 'Configuration · Standardised Services & Resources',
          items: [
            { name: 'Service & Procedure Catalogue', desc: 'Manage dental procedures and standardized pricing structures.' },
            { name: 'Rooms & Branches', desc: 'Configure clinic locations and treatment rooms (dental chairs).' },
            { name: 'Products & Consumables', desc: 'Catalogue medications and dental supplies for stock tracking.' },
            { name: 'Staff & Dentist Profiles', desc: 'Manage practitioner schedules, credentials, and user roles.' },
          ],
        },
        {
          name: '2. Patient Visit Workflow',
          subtitle: 'Daily Operations · From Registration to Billing',
          items: [
            { name: 'Scheduling & Registration', desc: 'Lookup patient profiles and assign appointment slots.' },
            { name: 'Daily Appointment Queue', desc: 'Monitor patient arrival status by dentist and treatment room.' },
            { name: 'Clinical EMR & Odontogram', desc: 'Document dental examinations, diagnoses, and procedures.' },
            { name: 'Connected Billing', desc: 'Link completed clinical procedures to cashier invoicing.' },
          ],
        },
        {
          name: '3. Practice Visibility & Reporting',
          subtitle: 'Management · Operational & Inventory Oversight',
          items: [
            { name: 'Operational Summaries', desc: 'Review visit activity and transaction summaries across periods.' },
            { name: 'Inventory Monitoring', desc: 'Track stock availability indicators and expiry date alerts.' },
            { name: 'Multi-Branch Administration', desc: 'Support centralised visibility across dental clinic locations.' },
          ],
        },
      ],
      conceptUiBadge: 'Concept UI — Illustrative Product Preview',
      modulesTitle: 'KHAYR Interactive Concept UI Preview',
      modulesSub:
        'The interactive screens below are illustrative Concept UI previews using synthetic demonstration data to showcase planned workflows.',
      modules: [
        {
          id: 'reservasi',
          tabLabel: 'Registration & Scheduling',
          title: 'Structured Patient Registration & Appointment Booking',
          subtitle:
            'Supports administrative staff in booking returning or new patients and assigning dentist schedules.',
          highlights: [
            {
              title: '1. Step-by-Step Appointment Booking',
              desc: 'Select visit type → Lookup returning patient profile or register new profile → Assign dentist, room, and time slot.',
            },
            {
              title: '2. Centralised Patient Profile Lookup',
              desc: 'Retrieve registered patient profiles quickly to maintain consistent visit records.',
            },
            {
              title: '3. Front-Desk to Operatory Coordination',
              desc: 'Booked appointments connect directly with the clinic’s daily schedule queue.',
            },
          ],
          metrics: [
            {
              label: 'Structured Clinical Documentation',
              value: 'Structured',
              delta: 'Consistent registration data',
            },
            {
              label: 'Connected Patient Workflows',
              value: 'Connected',
              delta: 'Front-desk to operatory flow',
            },
            {
              label: 'Centralised Practice Management',
              value: 'Centralised',
              delta: 'Unified patient profiles',
            },
          ],
        },
        {
          id: 'jadwal',
          tabLabel: 'Daily Appointment Queue',
          title: 'Dentist Schedule & Treatment Room Queue Visibility',
          subtitle:
            'Displays daily appointments filterable by dentist, treatment room, and patient visit status.',
          highlights: [
            {
              title: 'Multi-View Schedule Filtering',
              desc: 'Filter daily appointments by date, practitioner, or visit confirmation status.',
            },
            {
              title: 'Clear Visit Status Transitions',
              desc: 'Follow patient progress from Scheduled to Waiting, In Treatment, and Completed.',
            },
            {
              title: 'Treatment Room Coordination',
              desc: 'Helps coordinate dental chair allocation across practitioners.',
            },
          ],
          metrics: [
            {
              label: 'Structured Clinical Documentation',
              value: 'Scheduled',
              delta: 'Daily queue visibility',
            },
            {
              label: 'Connected Patient Workflows',
              value: 'Coordinated',
              delta: 'Clear visit status tracking',
            },
            {
              label: 'Centralised Practice Management',
              value: 'Multi-Room',
              delta: 'Dentist schedule management',
            },
          ],
        },
        {
          id: 'klinis',
          tabLabel: 'Clinical EMR & Odontogram',
          title: 'Clinical Documentation & Interactive Digital Odontogram',
          subtitle:
            'Dentist charting interface featuring an interactive FDI Odontogram, structured anamnesis, and treatment recording.',
          highlights: [
            {
              title: 'Interactive Visual Odontogram',
              desc: 'Select individual tooth numbers to record clinical status, restorations, root canal therapy, or planned procedures.',
            },
            {
              title: 'Procedure-to-Billing Handoff',
              desc: 'Recorded clinical procedures can be forwarded to assist cashier invoice preparation.',
            },
            {
              title: 'Standards-Aware Data Structure',
              desc: 'Clinical fields are structured with healthcare interoperability standards in mind.',
            },
          ],
          metrics: [
            {
              label: 'Structured Clinical Documentation',
              value: 'FDI Chart',
              delta: 'Odontogram & clinical notes',
            },
            {
              label: 'Connected Patient Workflows',
              value: 'Integrated',
              delta: 'Procedure to billing draft',
            },
            {
              label: 'Centralised Practice Management',
              value: 'Role-Based',
              delta: 'User access permissions',
            },
          ],
        },
        {
          id: 'riwayat',
          tabLabel: 'Medical History (EMR)',
          title: 'Chronological Patient Electronic Medical Record Timeline',
          subtitle:
            'Organises prior consultations, recorded procedures, and important medical alerts in a longitudinal view.',
          highlights: [
            {
              title: 'Longitudinal Care Continuity',
              desc: 'Enables dentists to review prior visit notes and multi-stage dental treatments across consultations.',
            },
            {
              title: 'Medical & Allergy Context Alerts',
              desc: 'Highlights recorded patient allergies or medical conditions prior to treatment.',
            },
            {
              title: 'Permission-Controlled Access',
              desc: 'Designed with role-based permissions for authorised clinical personnel.',
            },
          ],
          metrics: [
            {
              label: 'Structured Clinical Documentation',
              value: 'Chronological',
              delta: 'Longitudinal visit timeline',
            },
            {
              label: 'Connected Patient Workflows',
              value: 'Contextual',
              delta: 'Integrated medical history',
            },
            {
              label: 'Centralised Practice Management',
              value: 'Governed',
              delta: 'Role-based authorisation',
            },
          ],
        },
        {
          id: 'inventaris',
          tabLabel: 'Inventory & Procurement',
          title: 'Dental Consumables & Medication Stock Monitoring',
          subtitle:
            'Helps clinic administrators monitor dental supply levels, batch numbers, and approaching expiry dates.',
          highlights: [
            {
              title: 'Stock Availability Indicators',
              desc: 'Provides visibility into Safe Stock, Low Stock, Out of Stock, and Approaching Expiry items.',
            },
            {
              title: 'Batch & Expiry Date Records',
              desc: 'Supports organised storage and tracking of clinical consumables.',
            },
            {
              title: 'Procurement Planning Support',
              desc: 'Helps staff identify items requiring replenishment.',
            },
          ],
          metrics: [
            {
              label: 'Structured Clinical Documentation',
              value: 'SKU Catalogue',
              delta: 'Consumable & item records',
            },
            {
              label: 'Connected Patient Workflows',
              value: 'Monitored',
              delta: 'Stock & expiry indicators',
            },
            {
              label: 'Centralised Practice Management',
              value: 'Planned',
              delta: 'Clinic procurement visibility',
            },
          ],
        },
        {
          id: 'analitik',
          tabLabel: 'Reporting & Finance',
          title: 'Operational Reporting & Clinic Financial Summaries',
          subtitle:
            'Provides transaction summaries, visit trends, and operational reports to support clinic management review.',
          highlights: [
            {
              title: 'Billing & Revenue Summaries',
              desc: 'View transaction breakdowns across dental procedures and dispensed products.',
            },
            {
              title: 'Patient Visit Activity Reports',
              desc: 'Monitor new and returning patient visit activity over selected periods.',
            },
            {
              title: 'Practice Management Visibility',
              desc: 'Supports clinic owners and managers in reviewing operational performance.',
            },
          ],
          metrics: [
            {
              label: 'Structured Clinical Documentation',
              value: 'Summarised',
              delta: 'Structured billing records',
            },
            {
              label: 'Connected Patient Workflows',
              value: 'Reporting',
              delta: 'Clinic activity overview',
            },
            {
              label: 'Centralised Practice Management',
              value: 'Managerial',
              delta: 'Practice operations review',
            },
          ],
        },
      ],
      voucherSystem: {
        kicker: 'PROPOSED DIGITAL PROMOTION ECOSYSTEM · KHAYR',
        heading: 'Proposed Digital Voucher Distribution Ecosystem',
        lead: 'As part of its ecosystem roadmap, KHAYR includes a proposed digital voucher distribution concept designed to help dental clinics manage promotional service packages and connect with prospective patients through digital partner channels.',
        partnerAppsLabel: 'Planned Digital Distribution Channel Categories',
        partnerApps: [
          'Digital Telecommunications Platforms',
          'Digital Wallet & Payment Ecosystems',
          'Corporate Loyalty & Membership Programs',
          'Partner Healthcare Directories',
        ],
        benefits: [
          {
            step: 'Concept 01',
            title: 'Structured Promotional Campaign Setup',
            desc: 'Designed to allow clinics to configure service vouchers and promotional packages within the platform.',
          },
          {
            step: 'Concept 02',
            title: 'Patient Outreach via Digital Channels',
            desc: 'Aims to connect clinic promotional offers with prospective patients across digital partner channels.',
          },
          {
            step: 'Concept 03',
            title: 'Redemption Tracking Linked to Billing',
            desc: 'Designed so redeemed clinic vouchers are recorded clearly within administrative billing reports.',
          },
        ],
        workflowSteps: [
          {
            num: '01',
            title: 'Configure Voucher Offer',
            desc: 'Clinic defines the dental service package, quota, and validity period in the proposed module.',
          },
          {
            num: '02',
            title: 'Distribute via Confirmed Channels',
            desc: 'Offers are published through digital partner channels subject to active partnership agreements.',
          },
          {
            num: '03',
            title: 'Patient Booking & Clinic Visit',
            desc: 'Prospective patient schedules an appointment and presents the voucher code at the clinic.',
          },
          {
            num: '04',
            title: 'Verification & Billing Record',
            desc: 'Redemption is verified and logged within the clinic’s billing summary.',
          },
        ],
        disclosure:
          'Required Disclosure: The Proposed Digital Voucher Distribution Ecosystem represents a planned commercial and partnership capability under development. Third-party distribution channels are subject to formal partnership agreements, technical integration, and commercial readiness.',
      },
      governanceFootnote:
        'Product Status Disclosure: KHAYR is a software platform currently under development and validation by PT Neomedika Elektra Optima (NEO). All interface previews shown on this page are illustrative Concept UI previews (Concept UI — Illustrative Product Preview) using synthetic demonstration data. Module availability, feature specifications, and third-party integrations remain subject to ongoing development and validation.',
    },
    neolyte: {
      sectionNumber: 'Page 05 · Our Products: Neolyte',
      kicker: 'HOCl-Based Sanitizer & Disinfectant Product Line',
      heading: 'Neolyte Healthcare Hygiene Solutions',
      tagline: 'Hypochlorous Acid (HOCl) Sanitizer and Disinfectant Product Line for Medical, Dental, and Everyday Hygiene Needs.',
      lead: 'Neolyte is PT Neomedika Elektra Optima’s (NEO) healthcare hygiene product line formulated with water-based, alcohol-free (0%) Hypochlorous Acid (HOCl). Neolyte is designed to support hand hygiene as well as surface and equipment disinfection across healthcare facilities, dental clinics, and public environments.',
      scienceQuote:
        'Hypochlorous Acid (HOCl) is a water-based antimicrobial compound used in modern hygiene formulations to support alcohol-free hand sanitization as well as hard-surface and non-critical equipment disinfection.',
      scienceSource:
        'Product Registration & Testing: Registered under Indonesian Ministry of Health (KEMENKES RI PKD) household health supplies regulations and supported by laboratory testing documentation.',
      enquireCta: 'Product Enquiry',
      documentationCta: 'Request Product Documentation',
      safetyPillars: [
        { title: 'HOCl FORMULATION', sub: 'Hypochlorous Acid Active Ingredient' },
        { title: '0% ALCOHOL', sub: 'Alcohol-Free Water-Based Formula' },
        { title: 'KEMENKES RI PKD', sub: 'Registered PKRT Marketing Authorisation' },
        { title: 'MULTI-ENVIRONMENT', sub: 'Clinics, Hospitals & Public Spaces' },
      ],
      coreAdvantages: [
        {
          title: 'Water-Based Formula (0% Alcohol)',
          subtitle: 'Hypochlorous Acid (HOCl) Technology',
          desc: 'Formulated with water-based HOCl that is non-flammable and suitable for routine hygiene protocols.',
        },
        {
          title: 'Two Purpose-Built Variants (SN & DS)',
          subtitle: 'Hand Sanitization vs. Surface Disinfection',
          desc: 'Available in dedicated formulations for hand and body sanitization (Neolyte SN) and surface and equipment disinfection (Neolyte DS).',
        },
        {
          title: 'Practical Application Formats',
          subtitle: 'Multiple Packaging Sizes & Dispensers',
          desc: 'Can be applied via spray bottles, touchless dispensers, or compatible facility spraying equipment in accordance with label directions.',
        },
        {
          title: 'Supports Healthcare Facility Hygiene',
          subtitle: 'Dental Clinics, Hospitals & Public Facilities',
          desc: 'Designed to complement routine environmental cleaning and hand hygiene in dental operatories, waiting areas, offices, and homes.',
        },
      ],
      variants: [
        {
          code: 'SN',
          name: 'Neolyte SN — Hand & Body Sanitizer',
          category: 'Water-Based Hand & Body Sanitizer',
          ph: 'pH 4.5 – 5.5',
          ppm: '60 ppm HOCl',
          kemenkesNo: 'KEMENKES RI PKD 20501023189',
          colorHex: '#65B741',
          description:
            'An alcohol-free (0%), water-based hand and body sanitizer formulated with Hypochlorous Acid (HOCl) to support routine hand hygiene for healthcare personnel, patients, and visitors across clinical and everyday settings.',
          useCases: [
            'Routine hand sanitization for clinicians, dental staff, patients, and visitors',
            'Alcohol-free hand hygiene option for frequent daily use',
            'Refill solution for automatic touchless hand sanitizer dispensers in clinics and buildings',
          ],
          sizes: ['60 ml', '100 ml', '250 ml', '500 ml', '1000 ml', '5000 ml'],
        },
        {
          code: 'DS',
          name: 'Neolyte DS — Surface & Equipment Disinfectant',
          category: 'Facility Surface & Equipment Disinfectant',
          ph: 'pH 6.0 – 7.0',
          ppm: '160 – 220 ppm HOCl',
          kemenkesNo: 'KEMENKES RI PKD 20502023190',
          colorHex: '#189AB4',
          description:
            'A Hypochlorous Acid (HOCl) disinfectant solution designed for hard surfaces, healthcare facility furniture, dental chair units, and non-critical equipment. Can be applied directly or diluted with Aquades / RO Water in accordance with official label instructions.',
          useCases: [
            'Surface disinfection in dental clinics, hospitals, outpatient clinics, and laboratories',
            'Routine sanitization of waiting lounges, worktables, door handles, and public spaces',
            'Application in surface sprayers and Neogate disinfection chambers per usage guidelines',
          ],
          sizes: ['250 ml', '500 ml', '1000 ml', '5000 ml'],
        },
      ],
      certifications: {
        title: 'Marketing Authorisations & Laboratory Testing Documentation',
        subtitle:
          'Neolyte products are supported by Indonesian Ministry of Health (KEMENKES RI PKD) registrations and laboratory testing reports.',
        items: [
          {
            badge: 'KEMENKES RI Registration',
            title: 'KEMENKES RI PKD 20501023189',
            reference: 'Neolyte SN — Hand & Body Sanitizer',
            detail:
              'Registered with the Ministry of Health of the Republic of Indonesia under household health supplies (PKRT) antiseptic/sanitizer classification.',
          },
          {
            badge: 'KEMENKES RI Registration',
            title: 'KEMENKES RI PKD 20502023190',
            reference: 'Neolyte DS — Surface & Equipment Disinfectant',
            detail:
              'Registered with the Ministry of Health of the Republic of Indonesia under household health supplies (PKRT) disinfectant classification.',
          },
          {
            badge: 'Laboratory Testing',
            title: 'Antimicrobial Laboratory Test Reports',
            reference: 'Tested Against Standard Reference Bacteria',
            detail:
              'Supported by accredited laboratory testing reports evaluating bactericidal activity. Official documentation is available upon request.',
          },
          {
            badge: 'Quality & Compliance',
            title: 'Halal Certification & Labelling Standards',
            reference: 'Verified Production & Labelling Governance',
            detail:
              'Manufactured under structured quality controls to support institutional and healthcare facility procurement.',
          },
        ],
      },
      comparisonTitle: 'Characteristics of HOCl Formulations vs. Common Cleaning Agents',
      comparisonSub:
        'An overview of general handling and application characteristics comparing water-based Hypochlorous Acid (HOCl) with conventional agents.',
      comparisons: [
        {
          agent: 'Hypochlorous Acid / HOCl (Neolyte™)',
          efficacy: 'Water-Based Sanitization & Disinfection',
          safetyProfile:
            'Alcohol-free (0%), non-flammable, and formulated for hand sanitization (SN) and facility surface disinfection (DS) per label instructions.',
          scorePercent: 95,
          isNeolyte: true,
        },
        {
          agent: 'Alcohol (70%–90%)',
          efficacy: 'Rapid-Evaporating Antiseptic & Surface Wipe',
          safetyProfile:
            'Flammable liquid; frequent repeated use may cause skin dryness for some users.',
          scorePercent: 68,
        },
        {
          agent: 'Sodium Hypochlorite / Bleach (NaOCl)',
          efficacy: 'Heavy-Duty Hard Surface Disinfectant',
          safetyProfile:
            'Strong odour, potentially corrosive to certain metals, and requires careful ventilation and handling.',
          scorePercent: 55,
        },
        {
          agent: 'Povidone Iodine',
          efficacy: 'Topical Antiseptic Solution',
          safetyProfile:
            'Leaves visible staining on surfaces and is not intended for broad environmental surface spraying.',
          scorePercent: 50,
        },
        {
          agent: 'Soap & Running Water',
          efficacy: 'Basic Physical Cleaning',
          safetyProfile:
            'Essential for handwashing but requires sink access and water rinsing.',
          scorePercent: 40,
        },
      ],
      dilutionCalculatorTitle:
        'Illustrative Neolyte DS (220 ppm) Dilution Calculator',
      dilutionCalculatorSub:
        'Select an illustrative dilution ratio and target volume to estimate Neolyte DS and Aquades / RO Water quantities.',
      dilutionOfficialNotice:
        'Important — Official Label Guidance: This dilution calculator is provided for illustrative reference only. Users must always read and follow the approved product label, official dilution instructions, and safety guidance accompanying the product.',
      devicesTitle: 'Compatible Sanitization Application Equipment',
      devicesSub:
        'Neolyte solutions can be applied using compatible dispensing and spraying equipment across healthcare and public facilities.',
      devices: [
        {
          name: 'Ultrasonic Diffuser / Humidifier',
          method: 'Indoor Room Application (Illustrative 1:4 Ratio)',
          useCase:
            'Used to support indoor room sanitization in waiting areas and offices in accordance with equipment instructions.',
        },
        {
          name: 'Electric Surface Sprayer (5L)',
          method: 'Broad Surface Spraying (Illustrative 1:1 – 1:3 Ratio)',
          useCase:
            'Supports routine surface disinfection across outpatient clinics, treatment rooms, offices, and schools.',
        },
        {
          name: 'Automatic Hand Sanitizer Dispenser',
          method: 'Touchless Dispensing (Neolyte SN 60 ppm)',
          useCase:
            'Provides convenient alcohol-free hand sanitization at clinic entrances, hospital lobbies, and offices.',
        },
        {
          name: 'Cold Fogger / Mist Sprayer',
          method: 'Fine Mist Application (Illustrative 1:1 – 1:2 Ratio)',
          useCase:
            'Supports scheduled room disinfection protocols in healthcare facilities and building halls.',
        },
        {
          name: 'Neogate™ Disinfection Chamber',
          method: 'Facility Entrance Chamber (Illustrative 1:3 Ratio)',
          useCase:
            'Neomedika-engineered sanitization chamber supporting entrance hygiene protocols for buildings and facilities.',
        },
        {
          name: 'Spray Mop & Surface Cleaning Tools',
          method: 'Routine Floor & Surface Cleaning (Illustrative 1:2 – 1:3 Ratio)',
          useCase:
            'Practical daily floor and hard-surface cleaning in clinics and workplaces.',
        },
      ],
      productDisclosure:
        'Product Specification Disclosure: Always use Neolyte SN (KEMENKES RI PKD 20501023189) and Neolyte DS (KEMENKES RI PKD 20502023190) strictly in accordance with their approved product labels and official instructions. Information on this website is provided for corporate overview purposes and does not replace official product labelling or facility infection-control protocols.',
    },
    technology: {
      sectionNumber: 'Page 06 · Technology',
      kicker: 'Technology & Product Development Principles · PT Neomedika Elektra Optima',
      heading: 'Six Engineering Principles for Connected Healthcare.',
      lead: 'Technology development at PT Neomedika Elektra Optima (NEO) is guided by six core architectural principles to ensure our platforms are practical, secure, and aligned with healthcare operational realities.',
      principles: [
        {
          index: '01',
          title: 'Integration by Design',
          desc: 'Our platforms are architected from the ground up to connect clinical documentation, scheduling, billing, and inventory—reducing workflow fragmentation across healthcare facilities.',
        },
        {
          index: '02',
          title: 'Scalable Architecture',
          desc: 'We build modular, cloud-ready software foundations capable of scaling smoothly from single-practitioner clinics to multi-branch healthcare networks.',
        },
        {
          index: '03',
          title: 'Security by Design',
          desc: 'We apply layered security principles, strict separation between public corporate websites and clinical application environments, and role-based access controls.',
        },
        {
          index: '04',
          title: 'Responsible Data Management',
          desc: 'We prioritise data confidentiality, integrity, and structured stewardship in alignment with applicable Indonesian data protection principles.',
        },
        {
          index: '05',
          title: 'Standards-Aware Interoperability',
          desc: 'Our data models and API architectures are designed with healthcare data exchange standards and national interoperability roadmaps in mind.',
        },
        {
          index: '06',
          title: 'Human-Centred Product Validation',
          desc: 'We validate product workflows iteratively with dentists, clinicians, and administrative staff so technology remains intuitive and practical in daily use.',
        },
      ],
      approachHeading: 'Development Governance & Technical Transparency',
      approachLead:
        'We maintain clear distinction between commercially available products, capabilities under active validation, and long-term roadmap initiatives.',
      governanceBlocks: [
        {
          title: 'Public Website vs. Application Separation',
          desc: 'This corporate website serves strictly as an informational and business enquiry channel, isolated from clinical or patient databases.',
        },
        {
          title: 'Privacy & Business Data Protection',
          desc: 'Business contact enquiries are collected transparently with user acknowledgement in accordance with our corporate Privacy Notice.',
        },
        {
          title: 'Staged Validation & Release Discipline',
          desc: 'Software modules and external integrations undergo technical testing and workflow validation prior to commercial release.',
        },
        {
          title: 'Regulatory & Standards Alignment',
          desc: 'Product development and communications follow applicable Indonesian healthcare regulations and marketing authorisation requirements.',
        },
      ],
    },
    partnerships: {
      sectionNumber: 'Page 07 · Partnerships',
      kicker: 'Healthcare Ecosystem Collaboration · PT Neomedika Elektra Optima',
      heading: 'Building Connected Healthcare Through Strategic Partnerships.',
      lead: 'PT Neomedika Elektra Optima (NEO) collaborates with healthcare providers, technology specialists, distributors, and institutions to expand the impact of our digital platforms and hygiene solutions.',
      tracks: [
        {
          title: 'Healthcare Providers',
          audience: 'Dental Clinics, Outpatient Clinics, Hospitals & Medical Groups',
          desc: 'Collaborate on early adoption and workflow validation of the KHAYR dental platform, as well as institutional supply of Neolyte healthcare hygiene products.',
          category: 'KHAYR Product Information',
        },
        {
          title: 'Technology Partners',
          audience: 'Cloud Infrastructure, Health IT Systems & Digital Platforms',
          desc: 'Technical partnerships focused on API integration, healthcare interoperability readiness, infrastructure security, and digital ecosystem connectivity.',
          category: 'Technology & Integration Partnership',
        },
        {
          title: 'Distribution Partners',
          audience: 'Medical Supply Distributors & Regional Commercial Partners',
          desc: 'Commercial and regional distribution partnerships to expand availability of Neolyte SN, Neolyte DS, and sanitization equipment across Indonesia.',
          category: 'Distribution Partnership',
        },
        {
          title: 'Clinical & Institutional Partners',
          audience: 'Professional Associations, Universities, Clinical Advisors & Investors',
          desc: 'Collaboration on clinical workflow research, healthcare technology education, product evaluation, and long-term strategic investment.',
          category: 'Investor & Strategic Collaboration',
        },
      ],
      ctaButton: 'Discuss Partnership Opportunities',
    },
    insights: {
      sectionNumber: 'Page 08 · Insights',
      kicker: 'Industry Perspectives & Educational Articles · PT Neomedika Elektra Optima',
      heading: 'Insights on Digital Healthcare & Healthcare Hygiene.',
      lead: 'Explore educational articles and corporate perspectives from PT Neomedika Elektra Optima covering digital healthcare workflows, dental technology, healthcare hygiene, and interoperability.',
      categories: [
        'All Topics',
        'Digital Healthcare',
        'Dental Technology',
        'Healthcare Hygiene',
        'Interoperability & Integration',
        'Corporate & Industry Perspectives',
      ],
      readArticleLabel: 'Read Full Article',
      closeArticleLabel: 'Close Article',
      articles: [
        {
          slug: 'why-healthcare-needs-connected-digital-systems',
          category: 'Digital Healthcare',
          date: '02 November 2026',
          readTime: '4 min read',
          title: 'Why Healthcare Facilities Benefit From Connected Digital Workflows',
          summary:
            'How connecting front-desk registration, clinical charting, inventory tracking, and billing helps clinics operate more cohesively.',
          body: [
            'Across many healthcare facilities, daily operational tasks still take place in disconnected silos: patient appointments are managed in one tool, clinical notes are recorded separately, and consumable stock levels are checked manually.',
            'An integrated healthcare management approach connects these touchpoints. When clinical procedure charting links directly with cashier billing drafts and inventory tracking, administrative duplication is reduced.',
            'For clinicians and administrative teams alike, connected workflows provide clearer operational visibility so staff can focus on patient care.',
          ],
        },
        {
          slug: 'modern-dental-practice-management-khayr',
          category: 'Dental Technology',
          date: '28 October 2026',
          readTime: '5 min read',
          title: 'Designing Modern Dental Practice Workflows Around Digital Odontograms',
          summary:
            'Exploring the role of structured dental EMR and visual Odontogram charting in supporting longitudinal patient care.',
          body: [
            'Dental practices have unique clinical documentation requirements, where individual tooth surfaces require clear diagnostic records and multi-visit treatment plans over time.',
            'Through the development of the KHAYR platform, PT Neomedika Elektra Optima is designing Clinical Management and Digital Odontogram modules that connect with chair scheduling, patient visit history, and dental consumable management.',
            'By validating workflows with dental practitioners, our goal is to deliver practical software suited for both single clinics and multi-branch dental networks.',
          ],
        },
        {
          slug: 'hocl-role-in-healthcare-hygiene-neolyte',
          category: 'Healthcare Hygiene',
          date: '19 October 2026',
          readTime: '4 min read',
          title: 'The Role of Hypochlorous Acid (HOCl) in Healthcare Facility Hygiene',
          summary:
            'Understanding water-based, alcohol-free sanitization solutions for routine hand hygiene and clinical surface disinfection.',
          body: [
            'Consistent hand hygiene and environmental surface disinfection are foundational elements of healthcare facility management across hospitals, outpatient clinics, and dental operatories.',
            'Hypochlorous Acid (HOCl) formulations in the Neolyte product line provide a water-based, alcohol-free (0%) option. With distinct variants for hand and body sanitization (Neolyte SN) and surface and equipment disinfection (Neolyte DS), facilities can align product selection with specific hygiene protocols.',
            'All sanitizer and disinfectant applications in healthcare settings should always follow official product label instructions and established facility hygiene guidelines.',
          ],
        },
        {
          slug: 'interoperability-and-standards-in-indonesian-healthcare',
          category: 'Interoperability & Integration',
          date: '12 October 2026',
          readTime: '4 min read',
          title: 'Standards-Aware Interoperability in Healthcare Software Architecture',
          summary:
            'Why structured clinical data models are essential for future healthcare information exchange roadmaps.',
          body: [
            'As Indonesia’s digital health landscape evolves, structured data schemas and standards-aware architecture play an increasingly important role in enabling secure information exchange.',
            'At PT Neomedika Elektra Optima, our engineering roadmap follows principles of Integration by Design and Standards-Aware Interoperability—ensuring that future integrations are developed responsibly subject to technical validation and regulatory requirements.',
          ],
        },
        {
          slug: 'building-sustainable-healthcare-technology-portfolio',
          category: 'Corporate & Industry Perspectives',
          date: '05 October 2026',
          readTime: '4 min read',
          title: 'Building an Integrated Healthcare Portfolio Through Validation and Partnerships',
          summary:
            'PT Neomedika Elektra Optima’s corporate perspective on uniting clinical software, hygiene solutions, and ecosystem collaboration.',
          body: [
            'Meaningful progress in healthcare technology requires balancing long-term architectural vision with practical, responsible execution.',
            'Structured around five strategic business pillars, PT Neomedika Elektra Optima (NEO) works alongside healthcare providers, technology specialists, and distribution partners to deliver solutions grounded in real operational needs.',
          ],
        },
      ],
    },
    contact: {
      sectionNumber: 'Page 09 · Contact',
      kicker: 'Corporate Enquiry & Partnership · PT Neomedika Elektra Optima',
      heading: 'Contact PT Neomedika Elektra Optima (NEO).',
      lead: 'Use the official form below to submit corporate enquiries, request KHAYR product information, enquire about Neolyte hygiene products, or discuss strategic partnership opportunities.',
      formTitle: 'Corporate Enquiry & Partnership Form',
      formSubtitle:
        'This form is intended for business, institutional, and partnership enquiries directed to PT Neomedika Elektra Optima.',
      patientDataNoticeTitle: 'Patient Data Protection Notice',
      patientDataNoticeText:
        'Please do not submit patient medical records or sensitive health information through this corporate enquiry form.',
      fields: {
        fullName: 'Full Name *',
        fullNamePlaceholder: 'e.g., Dr. Budi Santoso / Ms. Rina Wijaya',
        roleTitle: 'Role / Title',
        roleTitlePlaceholder: 'e.g., Clinic Owner / Procurement Manager / Director',
        businessEmail: 'Email Address *',
        businessEmailPlaceholder: 'name@yourorganisation.com',
        phone: 'Phone / WhatsApp Number',
        phonePlaceholder: '+62 812 XXXX XXXX',
        organisation: 'Company / Institution / Clinic Name *',
        organisationPlaceholder: 'e.g., Senyum Optima Dental Clinic / Medika Hospital',
        countryCity: 'City / Region',
        countryCityPlaceholder: 'e.g., Jakarta, Indonesia',
        category: 'Enquiry Category *',
        productInterest: 'Product / Initiative Focus',
        message: 'Message / Enquiry Details *',
        messagePlaceholder:
          'Please describe your corporate enquiry, KHAYR or Neolyte information request, or partnership proposal...',
        privacyConsent:
          'I acknowledge that PT Neomedika Elektra Optima may collect and process the business contact information submitted through this form to respond to my enquiry, in accordance with its Privacy Notice.',
        privacyNoticeLinkLabel: 'View Privacy Notice',
        submitBtn: 'Submit Corporate Enquiry',
        submittingBtn: 'Submitting Enquiry...',
      },
      categories: [
        'Corporate & General Enquiry',
        'KHAYR Product Information',
        'Neolyte Product Enquiry',
        'Technology & Integration Partnership',
        'Distribution Partnership',
        'Investor & Strategic Collaboration',
      ],
      productInterests: [
        'KHAYR Digital Dental Platform',
        'Neolyte SN / DS Hygiene Line',
        'KHAYR + Neolyte Integrated Healthcare Package',
        'Corporate & Ecosystem Partnership',
        'General NEO Enquiry',
      ],
      workspaceBox: {
        title: 'Internal Email & Spreadsheet Integration',
        subtitle: 'Internal configuration for corporate enquiry notifications.',
        connectedAs: 'Connected as:',
        signInBtn: 'Sign in with Google',
        signOutBtn: 'Disconnect',
        createSheetBtn: 'Create New Google Sheet',
        syncAllBtn: 'Sync to Google Sheet',
        sendGmailBtn: 'Send Notification Email',
        exportCsvBtn: 'Download CSV',
        recipientLabel: 'Corporate Recipient Email:',
        sheetIdLabel: 'Spreadsheet ID:',
      },
    },
    footer: {
      corporateDescriptor: 'NEO — Integrated Healthcare Technology',
      statement:
        'Connecting Healthcare. Empowering Better Lives. PT Neomedika Elektra Optima develops integrated healthcare technology solutions across the KHAYR digital dental platform and the Neolyte healthcare hygiene line.',
      officialEmail: 'info@neomedika.com',
      partnershipsEmail: 'partnerships@neomedika.com',
      locationSummary: 'Jakarta, Indonesia',
      disclaimerTitle: 'Corporate Disclaimer',
      disclaimerText:
        'Information on this website is provided for general corporate and informational purposes by PT Neomedika Elektra Optima (NEO) and does not constitute medical advice, a binding commercial offer, or a guarantee of commercial availability in every jurisdiction. The KHAYR platform is currently under development and validation; interface previews are illustrative (Concept UI). Neolyte SN (KEMENKES RI PKD 20501023189) and Neolyte DS (KEMENKES RI PKD 20502023190) must be used strictly in accordance with their approved product labels.',
      copyright: '© 2026 PT Neomedika Elektra Optima (NEO). All rights reserved.',
    },
  },
};
