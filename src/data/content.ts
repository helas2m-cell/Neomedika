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
    about: string;
    business: string;
    products: string;
    technology: string;
    insights: string;
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
    externalPreviewCta: string;
    enquireCta: string;
    rolesTitle: string;
    roles: { role: string; badge: string; desc: string }[];
    threePillarsTitle: string;
    threePillars: {
      name: string;
      subtitle: string;
      items: { name: string; desc: string }[];
    }[];
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
    devicesTitle: string;
    devicesSub: string;
    devices: { name: string; method: string; useCase: string }[];
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
    fields: {
      fullName: string;
      fullNamePlaceholder: string;
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
    disclaimerTitle: string;
    disclaimerText: string;
    copyright: string;
  };
}

export const CONTENT: Record<Locale, SiteContent> = {
  id: {
    nav: {
      about: 'Tentang NEO',
      business: 'Pilar Bisnis',
      products: 'Produk Utama',
      technology: 'Teknologi',
      insights: 'Wawasan',
      cta: 'Hubungi NEO',
    },
    utility: {
      legalEntity: 'PT Neomedika Elektra Optima',
      descriptor: 'Integrated Healthcare Technology',
      tagline: 'Trusted Healthcare Solutions',
      workspaceSyncBtn: 'Integrasi Gmail & Sheets',
      langLabel: 'Bahasa',
    },
    hero: {
      kicker: 'PT Neomedika Elektra Optima · Ekosistem Teknologi & Higienitas Kesehatan',
      headline: 'Menghubungkan Layanan Kesehatan. Memberdayakan Kehidupan yang Lebih Baik.',
      subheadline:
        'Kami menyatukan layanan kesehatan, teknologi perangkat lunak cerdas, dan inovasi higienitas medis untuk menciptakan operasional fasilitas kesehatan yang lebih terkoneksi, efisien, dan tepercaya.',
      corporateNote:
        'PT Neomedika Elektra Optima (NEO) membangun fondasi teknologi kesehatan jangka panjang melalui platform manajemen klinik gigi digital KHAYR serta lini sanitasi medis berbahan aktif HOCl Neolyte.',
      primaryCta: 'Jelajahi Produk & Solusi',
      secondaryCta: 'Bermitra Bersama NEO',
      snapshotItems: [
        {
          label: 'Entitas Resmi',
          value: 'PT Neomedika Elektra Optima',
          detail: 'Merek Korporat: NEO · neomedika',
        },
        {
          label: 'Produk Digital Unggulan',
          value: 'KHAYR Dental OS',
          detail: 'Sistem Operasi Klinik Gigi Terpadu (Tahap Pengembangan)',
        },
        {
          label: 'Lini Higienitas Medis',
          value: 'Neolyte™ SN & DS',
          detail: 'KEMENKES RI PKD 20501023189 & 20502023190 · Halal MUI',
        },
        {
          label: 'Fokus Pasar & Ekosistem',
          value: 'Indonesia & Visi Global',
          detail: 'Klinik Gigi, Rumah Sakit, Institusi & Mitra Teknologi',
        },
      ],
    },
    about: {
      sectionNumber: '01. Profil Korporat',
      kicker: 'Siapa Kami · Tentang PT Neomedika Elektra Optima',
      heading: 'Teknologi dengan Tujuan. Inovasi untuk Layanan Kesehatan yang Lebih Baik.',
      lead: 'Layanan kesehatan terus berkembang menuju ekosistem yang terhubung dan berbasis data. Organisasi kesehatan membutuhkan teknologi yang mampu menjembatani proses klinis, operasional, administratif, serta standar higienitas lingkungan.',
      body: 'PT Neomedika Elektra Optima (NEO) didirikan dengan komitmen jangka panjang untuk berkontribusi pada transformasi sektor kesehatan. Pendekatan kami melampaui produk tunggal: kami mengembangkan portofolio kapabilitas terintegrasi yang mendukung operasional fasilitas kesehatan, pengalaman pasien, pertukaran informasi yang bertanggung jawab, serta perlindungan sanitasi klinis.',
      visionTitle: 'Visi Korporat',
      visionText:
        'Menjadi perusahaan teknologi kesehatan berstandar internasional yang tepercaya, menghadirkan ekosistem kesehatan yang lebih terkoneksi, cerdas, dan mudah diakses.',
      missionTitle: 'Misi Strategis',
      missions: [
        {
          code: '01',
          title: 'Mengembangkan Solusi Tepat Guna',
          desc: 'Membangun solusi kesehatan digital dan medis yang menjawab kebutuhan nyata operasional maupun klinis.',
        },
        {
          code: '02',
          title: 'Menghubungkan Ekosistem',
          desc: 'Menyatukan sistem kesehatan, tenaga medis, pengelola fasilitas, dan pasien melalui teknologi terpadu.',
        },
        {
          code: '03',
          title: 'Inovasi & Interoperabilitas',
          desc: 'Mendorong inovasi yang bertanggung jawab, keamanan data, dan kesiapan interoperabilitas standar kesehatan.',
        },
        {
          code: '04',
          title: 'Kemitraan Jangka Panjang',
          desc: 'Membangun kolaborasi strategis lintas institusi layanan kesehatan, mitra teknologi, dan jaringan distribusi.',
        },
        {
          code: '05',
          title: 'Arsitektur Berkelanjutan',
          desc: 'Mengembangkan platform yang dapat bertumbuh mengikuti perkembangan skala klinik dan regulasi pasar.',
        },
      ],
      valuesTitle: 'Nilai-Nilai Utama Neomedika',
      values: [
        {
          title: 'Inovasi Bertujuan (Purpose)',
          desc: 'Fokus pada teknologi yang menciptakan nilai praktis dan dampak nyata bagi tenaga medis serta pasien.',
        },
        {
          title: 'Integritas & Akuntabilitas',
          desc: 'Beroperasi dengan transparansi, tanggung jawab, dan penghormatan terhadap kepercayaan di sektor kesehatan.',
        },
        {
          title: 'Desain Berpusat pada Manusia',
          desc: 'Teknologi harus mempermudah kerja dokter, staf administrasi, dan pasien—bukan memperumit alur kerja.',
        },
        {
          title: 'Kolaborasi Ekosistem',
          desc: 'Kemajuan terbaik dicapai melalui kemitraan erat bersama praktisi klinis, institusi, dan spesialis teknologi.',
        },
        {
          title: 'Keamanan & Keunggulan Mutu',
          desc: 'Menjaga kualitas produk, perlindungan informasi sensitif, serta kepatuhan standar pengujian.',
        },
        {
          title: 'Adaptabilitas Berkelanjutan',
          desc: 'Merancang sistem yang siap beradaptasi terhadap dinamika kebutuhan klinis dan perkembangan regulasi.',
        },
      ],
      roadmapTitle: 'Peta Jalan Pertumbuhan Bertahap (4 Fase)',
      roadmapNote:
        'Peta jalan ini merepresentasikan arah strategis korporat dan disesuaikan dengan validasi produk, kesiapan pasar, serta pemenuhan regulasi.',
      phases: [
        {
          phase: 'Fase 1 · Fondasi Digital',
          title: 'Fondasi Klinik Gigi Digital',
          desc: 'Mengembangkan dan memvalidasi alur kerja inti klinik gigi serta platform operasional melalui KHAYR.',
        },
        {
          phase: 'Fase 2 · Ekspansi Platform',
          title: 'Perluasan Kapabilitas & Multi-Cabang',
          desc: 'Meningkatkan pengalaman pasien, manajemen multi-klinik, analitik operasional, dan integrasi strategis.',
        },
        {
          phase: 'Fase 3 · Lintas Segmen',
          title: 'Ekspansi Segmen Layanan Kesehatan',
          desc: 'Mengeksplorasi solusi klinik umum, klinik spesialis, kapabilitas EMR yang lebih luas, dan layanan terhubung.',
        },
        {
          phase: 'Fase 4 · Ekosistem Internasional',
          title: 'Pengembangan Ekosistem Regional & Global',
          desc: 'Mengevaluasi peluang pasar internasional terpilih, lokalisasi sistem, dan kemitraan strategis lintas negara.',
        },
      ],
    },
    business: {
      sectionNumber: '02. Arsitektur Bisnis',
      kicker: 'Lima Pilar Strategis · Satu Visi Kesehatan Terkoneksi',
      heading: 'Membangun Fondasi Layanan Kesehatan yang Terintegrasi.',
      lead: 'Bisnis PT Neomedika Elektra Optima disusun di sekitar lima pilar strategis yang saling melengkapi sebagai fondasi portofolio teknologi kesehatan jangka panjang.',
      governanceNote:
        'Catatan Korporat: Kelima pilar ini menjelaskan kerangka kerja bisnis strategis NEO dan arah pengembangan portofolio jangka panjang.',
      pillars: [
        {
          index: '01',
          title: 'Healthcare Management Systems',
          summary:
            'Teknologi yang dirancang untuk mendukung manajemen dan operasional harian fasilitas kesehatan secara terstruktur.',
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
          title: 'Digital Healthcare Platforms',
          summary:
            'Platform digital yang menjembatani interaksi antara penyedia layanan kesehatan, tenaga profesional, dan pasien.',
          capabilities: [
            'Perjalanan reservasi & pengingat janji temu pasien',
            'Dukungan alur kerja klinis & dokumentasi perawatan',
            'Program keterlibatan pasien & promosi terukur',
          ],
        },
        {
          index: '03',
          title: 'Integration & Interoperability',
          summary:
            'Pendekatan arsitektur yang memungkinkan sistem kesehatan dan informasi berkomunikasi secara aman dan terstandar.',
          capabilities: [
            'Konektivitas berbasis API & pertukaran data terstruktur',
            'Pengembangan integrasi ekosistem nasional (termasuk kesiapan SATUSEHAT)',
            'Integrasi dengan jaringan aplikasi mitra & asuransi',
          ],
        },
        {
          index: '04',
          title: 'Healthcare Intelligence & Automation',
          summary:
            'Kapabilitas analitik data dan otomatisasi alur kerja untuk mendukung visibilitas operasional serta pengambilan keputusan.',
          capabilities: [
            'Dashboard kinerja klinik & analitik pendapatan real-time',
            'Pemantauan retensi pasien & peringatan stok otomatis',
            'Eksplorasi kecerdasan data dengan tata kelola & pengawasan manusia',
          ],
        },
        {
          index: '05',
          title: 'Healthcare Ecosystem & Connectivity',
          summary:
            'Pendekatan berorientasi ekosistem yang menghubungkan klinik, rumah sakit, laboratorium, mitra teknologi, dan standar higienitas.',
          capabilities: [
            'Kolaborasi jaringan penyedia layanan & mitra distribusi',
            'Standarisasi higienitas fasilitas medis melalui lini Neolyte',
            'Solusi lintas organisasi untuk pertumbuhan berkelanjutan',
          ],
          spanWide: true,
        },
      ],
      solutionsHeading: 'Solusi Berdasarkan Kebutuhan Ekosistem',
      solutionsSub:
        'Strategi solusi NEO menjawab tantangan operasional, digitalisasi, higienitas klinis, dan konektivitas di berbagai segmen.',
      audiences: [
        {
          audience: 'Untuk Praktik & Klinik Gigi',
          focus: 'Platform Unggulan: KHAYR & Sanitasi Klinik Neolyte',
          description:
            'Manajemen praktik gigi digital yang menghubungkan rekam medis odontogram, penjadwalan, keuangan, inventaris, promosi voucher, serta sterilisasi ruang tindakan.',
          ctaLabel: 'Diskusikan Solusi Klinik Gigi',
          enquiryCategory: 'Healthcare Solutions',
          productInterest: 'KHAYR Digital Dental Platform',
        },
        {
          audience: 'Untuk Rumah Sakit & Fasilitas Medis',
          focus: 'Standar Higienitas HOCl & Koordinasi Operasional',
          description:
            'Penyediaan disinfektan & sanitizer Neolyte berizin Kemenkes RI PKD untuk sterilisasi ruang tindakan, poliklinik, dan bilik Neogate, beserta eksplorasi sistem digital.',
          ctaLabel: 'Hubungi Tim Solusi Medis',
          enquiryCategory: 'Healthcare Solutions',
          productInterest: 'Neolyte SN / DS Hygiene Line',
        },
        {
          audience: 'Untuk Grup Layanan Kesehatan',
          focus: 'Visibilitas Multi-Cabang & Standarisasi Alur Kerja',
          description:
            'Fondasi teknologi yang dirancang untuk mendukung administrasi skala besar, pelaporan terpusat lintas cabang, dan efisiensi rantai pasok inventaris.',
          ctaLabel: 'Jadwalkan Konsultasi Korporat',
          enquiryCategory: 'Business & Strategic Partnerships',
          productInterest: 'KHAYR Digital Dental Platform',
        },
        {
          audience: 'Untuk Mitra Teknologi & Distribusi',
          focus: 'Integrasi API, Kemitraan Ekosistem & Distribusi',
          description:
            'Peluang kolaborasi pengembangan integrasi sistem, konektivitas platform mitra promosi, serta kemitraan distribusi produk kesehatan Neomedika.',
          ctaLabel: 'Bahas Peluang Kemitraan',
          enquiryCategory: 'Technology & Integration',
          productInterest: 'Corporate & Ecosystem Partnership',
        },
      ],
    },
    khayr: {
      sectionNumber: '03. Produk Utama Digital · KHAYR',
      kicker: 'Produk Digital Unggulan NEO · Sistem Operasi Praktik Kedokteran Gigi',
      statusDisclosure: 'Status Produk: Dalam Tahap Pengembangan & Validasi',
      heading: 'KHAYR — Sistem Operasi Cerdas untuk Klinik Gigi Modern.',
      tagline: 'Kelola Lebih Mudah, Promosikan Lebih Luas, Tumbuh Lebih Cepat.',
      lead: 'KHAYR adalah platform kesehatan gigi digital unggulan PT Neomedika Elektra Optima yang dirancang sebagai pusat data terpadu untuk menyatukan alur kerja klinis, rekam medis odontogram, administrasi klinik, keuangan, manajemen inventaris, hingga promosi akuisisi pasien dalam satu lingkungan cloud yang terhubung.',
      subscriptionNote:
        'Model Berlangganan Fleksibel "Pay as You Grow" — dirancang agar klinik dapat bertumbuh secara terukur sesuai skala praktik dan jumlah cabang.',
      externalPreviewCta: 'Buka Portal Produk KHAYR',
      enquireCta: 'Minta Demo / Informasi KHAYR',
      rolesTitle: 'Dirancang untuk Setiap Peran di Ekosistem Klinik Gigi',
      roles: [
        {
          role: 'Dokter Gigi & Perawat',
          badge: 'Mesin Klinis',
          desc: 'Mengakses rekam medis elektronik (EMR) kronologis, mengisi Odontogram digital interaktif, mencatat anamnesis, diagnosis, rencana perawatan, serta memantau jadwal praktik.',
        },
        {
          role: 'Staf Administrasi',
          badge: 'Inti Operasional',
          desc: 'Mengelola reservasi 3-langkah untuk pasien baru maupun lama, mengatur antrean harian, memantau stok inventaris, dan memproses tagihan kasir dengan cepat.',
        },
        {
          role: 'Pasien Klinik',
          badge: 'Pusat Perawatan',
          desc: 'Mendapatkan pengalaman registrasi yang bebas antrean berulang, pengingat janji temu terjadwal, serta riwayat perawatan yang terdokumentasi secara rapi.',
        },
        {
          role: 'Pemilik & Manajer Klinik',
          badge: 'Pusat Komando',
          desc: 'Memantau kinerja pendapatan klinik secara real-time, rasio pasien baru vs. lama, peringatan obat kedaluwarsa, serta efektivitas kampanye KHAYR Voucher Promotion.',
        },
      ],
      threePillarsTitle: 'Tiga Pilar Arsitektur KHAYR: Setiap Fungsi dalam Satu Sistem',
      threePillars: [
        {
          name: '1. Fondasi',
          subtitle: 'Pengaturan · Konsistensi & Kendali Operasional',
          items: [
            { name: 'Layanan & Tindakan', desc: 'Katalog lengkap prosedur medis gigi beserta struktur tarifnya.' },
            { name: 'Infrastruktur Fisik', desc: 'Pemetaan lokasi klinik, cabang, dan ruang perawatan (dental chair).' },
            { name: 'Produk & Inventaris', desc: 'Katalog bahan habis pakai, obat, dan alat dengan pelacakan stok.' },
            { name: 'Kemitraan Asuransi', desc: 'Pengelolaan penyedia asuransi dan mitra penjamin secara terpusat.' },
            { name: 'Personel & Kredensial', desc: 'Database dokter dan staf lengkap dengan masa berlaku STR/SIP.' },
            { name: 'Penjadwalan Cerdas', desc: 'Pengaturan jadwal praktik dokter per ruangan, hari, dan jam.' },
          ],
        },
        {
          name: '2. Perjalanan Pasien',
          subtitle: 'Operasi · Efisiensi & Kualitas Perawatan Klinis',
          items: [
            { name: 'Reservasi Cerdas 3-Langkah', desc: 'Pencarian instan via Nama, Telepon, atau NIK untuk cegah duplikasi data.' },
            { name: 'Tampilan Jadwal Harian', desc: 'Daftar janji temu real-time dengan filter tanggal, dokter, dan status.' },
            { name: 'Kokpit Digital Dokter', desc: 'Odontogram interaktif, input anamnesis, pencatatan diagnosis & tindakan.' },
            { name: 'Riwayat Medis Lengkap', desc: 'EMR kronologis yang menyimpan seluruh riwayat kunjungan pasien.' },
            { name: 'Pembayaran & Tagihan', desc: 'Pelacakan invoice terpusat yang terhubung langsung dari tindakan klinis.' },
          ],
        },
        {
          name: '3. Pusat Komando',
          subtitle: 'Wawasan · Pertumbuhan & Optimasi Bisnis Klinik',
          items: [
            { name: 'Dashboard Kinerja', desc: 'Analisis pendapatan per kategori (Tindakan vs. Obat) dan tren kunjungan.' },
            { name: 'Analitik Pelanggan Aktif', desc: 'Pemantauan rasio akuisisi pasien baru dibandingkan retensi pasien lama.' },
            { name: 'Manajemen Inventaris', desc: 'Indikator stok real-time: Aman, Hampir Habis, Habis, & Peringatan Kedaluwarsa.' },
            { name: 'Laporan Keuangan', desc: 'Rekapitulasi omset harian/bulanan untuk identifikasi pertumbuhan klinik.' },
            { name: 'KHAYR Voucher Promotion', desc: 'Pembuatan voucher promosi layanan gigi ke jaringan aplikasi mitra.' },
          ],
        },
      ],
      modulesTitle: 'Simulasi Interaktif Modul Operasional KHAYR',
      modulesSub:
        'Pilih modul di bawah ini untuk meninjau bagaimana KHAYR menyederhanakan alur kerja klinik gigi dari reservasi hingga laporan analitik.',
      modules: [
        {
          id: 'reservasi',
          tabLabel: 'Reservasi 3-Langkah',
          title: 'Langkah Pertama yang Menyenangkan untuk Setiap Janji Pasien',
          subtitle:
            'Sistem reservasi KHAYR menyederhanakan pemesanan untuk pasien baru maupun lama, mengurangi waktu check-in dan mencegah duplikasi rekam medis.',
          highlights: [
            {
              title: '1. Alur Pemesanan 3 Langkah Terstruktur',
              desc: 'Pilih tipe pasien (Pasien Lama / Baru) → Temukan data atau registrasi NIK → Tetapkan dokter gigi, ruangan, dan waktu tindakan.',
            },
            {
              title: '2. Pencarian Pasien Instan',
              desc: 'Cari berdasarkan nama, nomor WhatsApp, atau NIK untuk membuka rekam medis kronologis dalam hitungan detik.',
            },
            {
              title: '3. Akurasi Data Sejak Interaksi Pertama',
              desc: 'Sinkronisasi otomatis antara meja resepsionis dan layar ruang tindakan dokter gigi.',
            },
          ],
          metrics: [
            { label: 'Efisiensi Waktu Check-In', value: '40%', delta: 'Lebih hemat waktu admin' },
            { label: 'Penurunan No-Show', value: '3×', delta: 'Pengingat otomatis' },
            { label: 'Akurasi Rekam Pasien', value: '99.4%', delta: 'Bebas duplikasi EMR' },
          ],
        },
        {
          id: 'jadwal',
          tabLabel: 'Daftar Janji Harian',
          title: 'Visibilitas Antrean & Ruangan Dental Chair Secara Real-Time',
          subtitle:
            'Pantau seluruh jadwal dokter gigi lintas poli dan ruangan dengan indikator status kedatangan pasien yang jelas.',
          highlights: [
            {
              title: 'Filter Multi-Dimensi',
              desc: 'Saring daftar janji temu berdasarkan tanggal, dokter spesialis, ruang tindakan, maupun status konfirmasi.',
            },
            {
              title: 'Status Transisi Langsung',
              desc: 'Perbarui status dari Terkonfirmasi → Menunggu di Klinik → Sedang Tindakan → Selesai & Siap Billing.',
            },
            {
              title: 'Alokasi Dental Chair Optimal',
              desc: 'Hindari benturan jadwal antar dokter dan maksimalkan utilisasi kursi perawatan.',
            },
          ],
          metrics: [
            { label: 'Janji Temu Hari Ini', value: '28', delta: '↑ 4 dari kemarin' },
            { label: 'Tingkat Kehadiran', value: '94%', delta: '↑ 8% vs bulan lalu' },
            { label: 'Waktu Tunggu Rata-Rata', value: '< 9 mnt', delta: 'Alur terkoordinasi' },
          ],
        },
        {
          id: 'klinis',
          tabLabel: 'Pencatatan Klinis & Odontogram',
          title: 'Kokpit Digital Dokter Gigi dengan Odontogram Interaktif',
          subtitle:
            'Dokumentasi klinis berstandar kedokteran gigi dengan peta gigi (Odontogram FDI) interaktif, anamnesis terstruktur, dan kode ICD-10.',
          highlights: [
            {
              title: 'Odontogram Digital Visual',
              desc: 'Klik elemen gigi dewasa/anak untuk menandai karies, tumpatan, perawatan saluran akar, crown, atau ekstraksi.',
            },
            {
              title: 'Rencana Perawatan & Estimasi Biaya Otomatis',
              desc: 'Setiap tindakan yang dipilih dokter langsung menghitung pemakaian bahan habis pakai dan meneruskan draf tagihan ke kasir.',
            },
            {
              title: 'Kesiapan Standar Interoperabilitas',
              desc: 'Struktur data klinis dirancang selaras dengan standar pertukaran data kesehatan nasional (SATUSEHAT).',
            },
          ],
          metrics: [
            { label: 'Standar Penomoran Gigi', value: 'FDI 32/20', delta: 'Odontogram Interaktif' },
            { label: 'Sinkronisasi Kasir & Stok', value: 'Otomatis', delta: 'Tanpa input ulang' },
            { label: 'Keamanan Rekam Medis', value: '256-bit', delta: 'Akses berbasis peran' },
          ],
        },
        {
          id: 'riwayat',
          tabLabel: 'Riwayat Medis (EMR)',
          title: 'Rekam Medis Elektronik Kronologis yang Lengkap & Terlindungi',
          subtitle:
            'Seluruh histori kunjungan, foto klinis sebelum/sesudah tindakan, alergi obat, dan resep tersimpan rapi dalam satu lini masa pasien.',
          highlights: [
            {
              title: 'Lini Masa Perawatan Berkelanjutan',
              desc: 'Memudahkan dokter meninjau riwayat perawatan saluran akar atau kontrol ortodontik lintas kunjungan.',
            },
            {
              title: 'Peringatan Alergi & Kondisi Medis',
              desc: 'Penanda riwayat hipertensi, diabetes, atau alergi antibiotik tampil jelas sebelum tindakan dimulai.',
            },
            {
              title: 'Kontrol Hak Akses Ketat',
              desc: 'Hanya tenaga medis berwenang yang dapat membuka dan memperbarui catatan klinis pasien.',
            },
          ],
          metrics: [
            { label: 'Akses Histori Pasien', value: '< 2 dtk', delta: 'Pencarian terindeks' },
            { label: 'Jejak Audit Sistem', value: '100%', delta: 'Tercatat per pengguna' },
            { label: 'Pencadangan Data', value: 'Harian', delta: 'Cloud terenkripsi' },
          ],
        },
        {
          id: 'inventaris',
          tabLabel: 'Manajemen Inventaris',
          title: 'Kendali Stok Bahan Dental & Peringatan Kedaluwarsa Real-Time',
          subtitle:
            'Cegah kekosongan bahan komposit, anestesi, maupun alat sterilisasi dengan pemantauan status stok otomatis.',
          highlights: [
            {
              title: '4 Indikator Status Stok',
              desc: 'Klasifikasi real-time: Stok Aman, Hampir Habis (Low Stock), Habis, dan Peringatan Mendekati Kedaluwarsa.',
            },
            {
              title: 'Pelacakan Batch & Tanggal Kedaluwarsa',
              desc: 'Prioritaskan penggunaan bahan dengan prinsip FEFO (First Expired, First Out) untuk keamanan pasien.',
            },
            {
              title: 'Rekonsiliasi Pengadaan & Pemakaian',
              desc: 'Pantau korelasi antara jumlah tindakan klinis dan konsumsi bahan medis.',
            },
          ],
          metrics: [
            { label: 'Item Katalog Terpantau', value: '340+ SKU', delta: 'Obat & Bahan Dental' },
            { label: 'Peringatan Dini Expired', value: 'H-60', delta: 'Notifikasi otomatis' },
            { label: 'Efisiensi Pengadaan', value: '+28%', delta: 'Cegah stok terbuang' },
          ],
        },
        {
          id: 'analitik',
          tabLabel: 'Analitik & Keuangan',
          title: 'Pusat Komando Kinerja Klinik & Laporan Keuangan Transparan',
          subtitle:
            'Ambil keputusan bisnis berbasis data akurat: lacak omset tindakan vs. obat, produktivitas dokter, dan performa voucher promosi.',
          highlights: [
            {
              title: 'Dashboard Pendapatan & Pertumbuhan',
              desc: 'Visualisasi pendapatan harian, mingguan, dan bulanan beserta rincian metode pembayaran dan klaim asuransi.',
            },
            {
              title: 'Analitik Akuisisi & Retensi Pasien',
              desc: 'Pantau perbandingan pasien baru dari program promosi dibandingkan kunjungan ulang pasien setia.',
            },
            {
              title: 'Laporan Komisi & Saldo Kredit Promosi',
              desc: 'Transparansi penuh atas pemakaian saldo kredit KHAYR untuk setiap transaksi voucher yang berhasil.',
            },
          ],
          metrics: [
            { label: 'Ilustrasi Omset Mingguan', value: 'Rp48 Jt', delta: '↑ 12% minggu ini' },
            { label: 'Rasio Retensi Pasien', value: '76%', delta: 'Pasien aktif bulanan' },
            { label: 'Pelaporan Keuangan', value: 'Real-Time', delta: 'Siap ekspor manajemen' },
          ],
        },
      ],
      voucherSystem: {
        kicker: 'FITUR UNGGULAN PERTUMBUHAN KLINIK · KHAYR VOUCHER PROMOTION',
        heading: 'Promosi Klinik Gigi Lebih Mudah, Biaya Berdasarkan Hasil Transaksi Nyata',
        lead: 'KHAYR Voucher Promotion membantu klinik gigi membuat voucher promosi layanan spesifik (seperti Scaling, Bleaching, atau Pemeriksaan Gigi) secara gratis langsung dari aplikasi KHAYR dan mendistribusikannya melalui jaringan aplikasi mitra terkemuka.',
        partnerAppsLabel: 'Jaringan Distribusi 5 Aplikasi Mitra Terkemuka',
        partnerApps: ['Telkomsel (MyTelkomsel)', 'Indosat (myIM3)', 'AXISNET', 'XL (myXL)', 'AstraPay'],
        benefits: [
          {
            step: 'Keunggulan 01',
            title: 'Gratis Membuat Voucher (Rp0 Biaya Awal)',
            desc: 'Klinik bebas merancang paket penawaran dan menerbitkan voucher promosi langsung dari KHAYR tanpa biaya registrasi atau biaya pembuatan di awal.',
          },
          {
            step: 'Keunggulan 02',
            title: 'Jangkauan Jutaan Pengguna Aplikasi Mitra',
            desc: 'Voucher promosi klinik ditampilkan pada jaringan aplikasi mitra (Telkomsel, Indosat, AXISNET, XL, AstraPay) untuk menjangkau calon pasien baru di sekitar lokasi klinik.',
          },
          {
            step: 'Keunggulan 03',
            title: 'Biaya Berbasis Penggunaan Aktual',
            desc: 'Biaya promosi hanya dikenakan ketika voucher berhasil digunakan oleh pasien untuk transaksi layanan nyata di klinik gigi Anda, dipotong otomatis dari saldo kredit KHAYR.',
          },
        ],
        workflowSteps: [
          {
            num: '01',
            title: 'Klinik Membuat Voucher di KHAYR',
            desc: 'Tentukan layanan gigi (mis. Scaling Potongan 30%), kuota, dan masa berlaku voucher tanpa biaya awal.',
          },
          {
            num: '02',
            title: 'Tayang di 5 Aplikasi Mitra',
            desc: 'Voucher didistribusikan ke aplikasi mitra sehingga pengguna dapat menukarkan poin atau mengklaim voucher.',
          },
          {
            num: '03',
            title: 'Pasien Datang ke Klinik',
            desc: 'Pasien melakukan reservasi, datang ke klinik, dan menunjukkan kode voucher aktif saat perawatan.',
          },
          {
            num: '04',
            title: 'Transaksi & Potong Saldo Otomatis',
            desc: 'Saat transaksi selesai di kasir, komisi promosi dipotong otomatis dari saldo prabayar KHAYR dan tercatat di laporan billing.',
          },
        ],
      },
      governanceFootnote:
        'Pernyataan Status Pengembangan: KHAYR saat ini sedang dalam tahap pengembangan dan validasi oleh PT Neomedika Elektra Optima. Cakupan fitur, simulasi antarmuka, skema voucher mitra, serta integrasi ekosistem tunduk pada jadwal validasi teknis dan komersial.',
    },
    neolyte: {
      sectionNumber: '04. Lini Higienitas Medis · Neolyte™',
      kicker: 'Produk Higienitas Kesehatan Neomedika · Hypochlorous Acid (HOCl) Water-Based Technology',
      heading: 'Neolyte™ — Antiseptik & Disinfektan Berbasis Air yang Aman, Efektif, dan Ramah Lingkungan.',
      tagline: 'Safe and Effective Disinfectant & Sanitizer — Bebas Alkohol (0%), Non-Toksik, Teruji Laboratorium.',
      lead: 'Neolyte merupakan cairan antiseptik dan disinfektan non-toksik yang memiliki efektivitas tinggi dalam membunuh virus, kuman, bakteri, dan jamur karena mengandung bahan aktif Hypochlorous Acid (HOCl) — molekul alami yang juga diproduksi oleh sel darah putih manusia (neutrofil) untuk melawan infeksi.',
      scienceQuote:
        '“Disinfektan anolyte (HOCl) terbukti secara klinis hingga 100 kali lebih efektif dibanding pembersihan dengan pemutih biasa (NaOCl) dan mampu membunuh 99,99% bakteri, virus, kuman, serta patogen berbahaya dengan tetap 100% aman bagi manusia, hewan peliharaan, dan lingkungan.”',
      scienceSource: 'Referensi Ilmiah & Verifikasi: Uji Laboratorium Institut Pertanian Bogor (IPB) & Rekomendasi Bahan Aktif HOCl oleh EPA / CDC.',
      enquireCta: 'Pesan / Konsultasi Pengadaan Neolyte',
      coreAdvantages: [
        {
          title: 'Effective (Membunuh 99,99% Kuman)',
          subtitle: 'Replikasi Sistem Imun Alami Manusia',
          desc: 'Diformulasikan dengan mereplika cara kerja sistem kekebalan tubuh manusia berbasis asam hipoklorit (HOCl) yang efektif terhadap virus, bakteri, dan jamur.',
        },
        {
          title: 'Gentle (0% Alkohol & Bebas Iritasi)',
          subtitle: 'Baby Safe · Food Grade · Non-Toxic',
          desc: 'Bebas alkohol (0%), tidak korosif, tidak kaustik, dan tidak menyebabkan kulit kering atau dehidrasi. Sangat aman untuk kulit sensitif dan area anak-anak.',
        },
        {
          title: 'Convenient (Cepat Kering & Tanpa Residu)',
          subtitle: 'Siap Pakai untuk Tangan & Permukaan',
          desc: 'Cairan semprot berbasis air yang cepat kering, mudah diaplikasikan menggunakan berbagai perangkat, serta tidak meninggalkan residu lengket.',
        },
        {
          title: 'Multi-Purpose (Medis hingga Publik)',
          subtitle: 'Rumah Sakit, Klinik Gigi, Pangan & Rumah Tangga',
          desc: 'Digunakan secara luas dalam perawatan kesehatan, sterilisasi klinik gigi, keamanan pangan, pengolahan air, hingga sanitasi fasilitas publik.',
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
            'Larutan antiseptik unik bebas alkohol yang lembut di kulit untuk membunuh virus, kuman, bakteri, dan jamur pada tangan dan tubuh. Cocok digunakan secara rutin di Rumah Sakit, Klinik Gigi, Perkantoran, Sekolah, dan Rumah Tangga.',
          useCases: [
            'Antiseptik tangan tenaga medis, dokter gigi, dan pasien sebelum/sesudah tindakan',
            'Sanitasi tangan anak-anak dan pemilik kulit sensitif (0% alkohol, tidak perih)',
            'Pengisian unit Automatic Hand Sanitizer Dispenser di lobi klinik & gedung',
          ],
          sizes: ['60 ml', '100 ml', '250 ml', '500 ml', '1000 ml', '5000 ml'],
        },
        {
          code: 'DS',
          name: 'Neolyte DS — Safe & Effective Disinfectant',
          category: 'Disinfektan Permukaan, Udara & Instrumen Fasilitas',
          ph: 'pH 6,0 – 7,0',
          ppm: '160 – 220 ppm HOCl',
          kemenkesNo: 'KEMENKES RI PKD 20502023190',
          colorHex: '#189AB4',
          description:
            'Larutan disinfektan berdaya oksidasi kuat untuk sterilisasi permukaan, peralatan medis/klinik, udara ruangan, hingga bahan pangan. Dapat digunakan langsung atau diencerkan dengan Aquades / Air RO sesuai tabel aplikasi.',
          useCases: [
            'Disinfeksi kursi dental (dental unit), ruang tindakan rumah sakit, klinik, dan puskesmas',
            'Purifikasi udara (Diffuser/Humidifier), mesin fogging, dan bilik sterilisasi Neogate',
            'Sterilisasi perlengkapan bayi, alat makan, serta bahan makanan segar',
          ],
          sizes: ['250 ml', '500 ml', '1000 ml', '5000 ml'],
        },
      ],
      certifications: {
        title: 'Sertifikasi Resmi, Izin Edar Kemenkes RI & Verifikasi Laboratorium',
        subtitle:
          'Setiap varian Neolyte didukung oleh izin edar resmi Kementerian Kesehatan Republik Indonesia, sertifikasi Halal MUI, serta pengujian laboratorium terakreditasi.',
        items: [
          {
            badge: 'Izin Edar Resmi',
            title: 'KEMENKES RI PKD 20501023189',
            reference: 'Neolyte SN (Hand & Body Sanitizer)',
            detail: 'Terdaftar resmi pada Direktorat Jenderal Kefarmasian dan Alat Kesehatan Kemenkes RI sebagai Perbekalan Kesehatan Rumah Tangga (Antiseptika).',
          },
          {
            badge: 'Izin Edar Resmi',
            title: 'KEMENKES RI PKD 20502023190',
            reference: 'Neolyte DS (Safe & Effective Disinfectant)',
            detail: 'Terdaftar resmi pada Direktorat Jenderal Kefarmasian dan Alat Kesehatan Kemenkes RI sebagai Perbekalan Kesehatan Rumah Tangga (Desinfektan).',
          },
          {
            badge: 'Uji Laboratorium IPB',
            title: 'Efektivitas Bakterisidal > 99,999%',
            reference: 'Unit Laboratorium Jasa Pengujian, Kalibrasi & Sertifikasi IPB',
            detail: 'Terverifikasi efektif membunuh Escherichia coli, Staphylococcus aureus, Pseudomonas aeruginosa, dan Enterococcus hirae sesuai metode standar EN 1276.',
          },
          {
            badge: 'Kepatuhan & Keamanan',
            title: 'Sertifikasi Halal MUI & Standar EPA/CDC',
            reference: 'Majelis Ulama Indonesia & Referensi HOCl Internasional',
            detail: 'Bahan aktif Hypochlorous Acid (HOCl) diakui oleh EPA & CDC sebagai disinfektan efektif serta aman (Baby Safe, Food Grade, Alcohol Free, Non-Toxic).',
          },
        ],
      },
      comparisonTitle: 'Komparasi Bahan Aktif HOCl Neolyte vs. Pembersih Lainnya',
      comparisonSub:
        'Neolyte berada pada Area Ideal: tingkat kekuatan disinfeksi tinggi terhadap patogen (termasuk bakteri, jamur, dan virus) namun tetap tidak beracun dan ramah bagi jaringan tubuh.',
      comparisons: [
        {
          agent: 'HOCl (Neolyte™)',
          efficacy: 'Sangat Kuat (Bakteri, Virus, Jamur, Spora)',
          safetyProfile: 'Area Ideal: Efektif, Ramah Lingkungan, Tidak Beracun & Tidak Iritasi',
          scorePercent: 98,
          isNeolyte: true,
        },
        {
          agent: 'Alkohol (70%–90%)',
          efficacy: 'Menengah (Tidak efektif terhadap spora tertentu)',
          safetyProfile: 'Menyebabkan iritasi kulit, dehidrasi/dermatitis, dan mudah terbakar',
          scorePercent: 62,
        },
        {
          agent: 'Klorin / Pemutih (NaClO)',
          efficacy: 'Kuat terhadap kuman & bakteri',
          safetyProfile: 'Beracun, korosif terhadap logam, dan berisiko iritasi saluran napas/kulit',
          scorePercent: 55,
        },
        {
          agent: 'Yodium / Povidone',
          efficacy: 'Menengah–Kuat',
          safetyProfile: 'Meninggalkan noda warna dan dapat membuat luka/kulit terasa perih',
          scorePercent: 50,
        },
        {
          agent: 'Sabun Biasa',
          efficacy: 'Efek antimikroba minim',
          safetyProfile: 'Aman namun memerlukan pembilasan air dan tidak mensterilkan permukaan medis',
          scorePercent: 30,
        },
      ],
      dilutionCalculatorTitle: 'Kalkulator Interaktif Pengenceran & Panduan Aplikasi Neolyte DS (220 ppm)',
      dilutionCalculatorSub:
        'Pilih rasio pengenceran dan masukkan target volume larutan yang ingin Anda siapkan. Encerkan Neolyte DS menggunakan Aquades atau Air RO sesuai petunjuk resmi.',
      devicesTitle: 'Ekosistem Perangkat Aplikasi Neolyte',
      devicesSub:
        'Neolyte dapat diaplikasikan menggunakan berbagai perangkat sanitasi modern untuk perlindungan menyeluruh di fasilitas medis maupun ruang publik.',
      devices: [
        {
          name: 'Ultrasonic Diffuser / Humidifier',
          method: 'Purifikasi Udara Ruangan (Rasio 1:4)',
          useCase: 'Mensterilkan udara di ruang praktik dokter gigi, ruang tunggu pasien, kabin mobil, dan ruang keluarga.',
        },
        {
          name: 'Semprot Elektrik (Electric Sprayer 5L)',
          method: 'Penyemprotan Permukaan Luas (Rasio 1:1 – 1:3)',
          useCase: 'Disinfeksi rutin ruang tindakan rumah sakit, poliklinik, perkantoran, dan fasilitas pendidikan.',
        },
        {
          name: 'Automatic Hand Sanitizer Dispenser',
          method: 'Dispenser Tanpa Sentuh (Neolyte SN 60 ppm)',
          useCase: 'Sanitasi tangan otomatis bebas alkohol di pintu masuk klinik, rumah sakit, dan area publik.',
        },
        {
          name: 'Machine Fogging (Cold Fogger)',
          method: 'Pengabutan Partikel Mikro (Rasio 1:1 – 1:2)',
          useCase: 'Sterilisasi menyeluruh ruang operasi, ruang isolasi, klinik gigi, dan aula gedung.',
        },
        {
          name: 'Neogate™ Disinfectant Chamber / Fog Gate',
          method: 'Bilik Sterilisasi Otomatis (Rasio 1:3)',
          useCase: 'Gerbang kabut antiseptik non-toksik produksi Neomedika untuk pintu masuk gedung dan fasilitas kesehatan.',
        },
        {
          name: 'Spray Mop lantai & permukaan',
          method: 'Sanitasi Lantai Harian (Rasio 1:2 – 1:3)',
          useCase: 'Pembersihan lantai klinik dan rumah tangga secara praktis tanpa residu bahan kimia keras.',
        },
      ],
    },
    technology: {
      sectionNumber: '05. Teknologi & Pendekatan Kami',
      kicker: 'Connected by Design · Built for Healthcare',
      heading: 'Membangun Teknologi di Sekitar Kebutuhan Kesehatan Nyata.',
      lead: 'Arah teknologi PT Neomedika Elektra Optima berpusat pada pengembangan platform digital yang adaptif, aman, dan mampu mendukung alur kerja layanan kesehatan yang kompleks.',
      principles: [
        {
          index: '01',
          title: 'Integrasi Sejak Perancangan (Integration by Design)',
          desc: 'Mengurangi fragmentasi informasi melalui sistem yang dirancang agar terhubung secara mulus antara modul klinis, administrasi, keuangan, dan ekosistem mitra.',
        },
        {
          index: '02',
          title: 'Arsitektur yang Dapat Diskalakan (Scalable Architecture)',
          desc: 'Membangun fondasi perangkat lunak cloud yang dapat berkembang mengikuti pertambahan pengguna, cabang klinik baru, dan kapabilitas produk masa depan.',
        },
        {
          index: '03',
          title: 'Keamanan & Pengelolaan Data Bertanggung Jawab',
          desc: 'Menerapkan kontrol akses berbasis peran (RBAC), enkripsi data, dan pencatatan jejak audit (auditability) untuk melindungi informasi operasional dan medis.',
        },
        {
          index: '04',
          title: 'Interoperabilitas Berbasis Standar',
          desc: 'Mendukung pertukaran data yang terstruktur melalui API modern serta kesiapan integrasi dengan platform kesehatan nasional seperti SATUSEHAT.',
        },
        {
          index: '05',
          title: 'Alur Kerja Cerdas (Intelligent Workflows)',
          desc: 'Memanfaatkan otomatisasi dan analitik data untuk meningkatkan efisiensi operasional klinik dengan tetap mengutamakan pengawasan profesional medis.',
        },
        {
          index: '06',
          title: 'Validasi Praktis & Desain Humanis',
          desc: 'Setiap fitur dikembangkan bersama masukan klinisi dan pengelola fasilitas kesehatan agar mudah digunakan tanpa kurva pembelajaran yang rumit.',
        },
      ],
      approachHeading: 'Inovasi yang Bertanggung Jawab. Eksekusi yang Praktis.',
      approachLead:
        'Kami menerapkan siklus pengembangan terstruktur: memahami alur kerja klinis, memvalidasi pengalaman pengguna, menguji keandalan sistem, serta mematuhi tata kelola regulasi.',
      governanceBlocks: [
        {
          title: 'Mutu & Keandalan Produk',
          desc: 'Praktik jaminan mutu diterapkan di seluruh tahapan perancangan, pengujian laboratorium/perangkat lunak, implementasi, dan dukungan purnajual.',
        },
        {
          title: 'Privasi & Perlindungan Informasi',
          desc: 'Pengembangan sistem mengacu pada prinsip pelindungan data pribadi (UU PDP Indonesia) dan pemisahan lingkungan data operasional klinik dari situs publik.',
        },
        {
          title: 'Kepatuhan Regulasi & Transparansi',
          desc: 'Seluruh klaim produk dan izin edar (seperti Kemenkes RI PKD pada Neolyte) didasarkan pada dokumen resmi yang terverifikasi.',
        },
        {
          title: 'Tata Kelola Korporat (Corporate Governance)',
          desc: 'Pengelolaan hak kekayaan intelektual, manajemen risiko operasional, serta akuntabilitas produk di bawah naungan PT Neomedika Elektra Optima.',
        },
      ],
    },
    partnerships: {
      sectionNumber: '06. Ekosistem Kemitraan',
      kicker: 'Better Healthcare Is Built Together',
      heading: 'Menciptakan Dampak Lebih Besar Melalui Kolaborasi.',
      lead: 'Kami meyakini masa depan teknologi kesehatan dibentuk melalui kolaborasi erat antara penyedia layanan kesehatan, perusahaan teknologi, institusi pendidikan, dan mitra strategis.',
      tracks: [
        {
          title: 'Kemitraan Penyedia Layanan Kesehatan',
          audience: 'Klinik Gigi, Rumah Sakit & Grup Medis',
          desc: 'Kolaborasi transformasi digital klinik melalui implementasi KHAYR serta standarisasi sanitasi fasilitas menggunakan produk Neolyte.',
          category: 'Healthcare Solutions',
        },
        {
          title: 'Kemitraan Teknologi & Integrasi',
          audience: 'Penyedia Cloud, Asuransi, Pembayaran & API',
          desc: 'Peluang integrasi sistem, interoperabilitas data, infrastruktur keamanan siber, dan konektivitas aplikasi mitra.',
          category: 'Technology & Integration',
        },
        {
          title: 'Kemitraan Komersial & Distribusi',
          audience: 'Distributor Alat Kesehatan & Mitra Regional',
          desc: 'Kerja sama perluasan akses pasar, distribusi lini produk Neolyte SN/DS & Neogate, serta dukungan onboarding klinik.',
          category: 'Business & Strategic Partnerships',
        },
        {
          title: 'Kemitraan Riset & Inovasi Klinis',
          audience: 'Penasihat Klinis, Universitas & Investor',
          desc: 'Eksplorasi bersama, validasi alur kerja medis, penelitian bahan aktif kesehatan, dan pengembangan portofolio jangka panjang.',
          category: 'Business & Strategic Partnerships',
        },
      ],
      ctaButton: 'Mulai Percakapan Kemitraan',
    },
    insights: {
      sectionNumber: '07. Wawasan & Perspektif',
      kicker: 'Perspectives on the Future of Healthcare Technology',
      heading: 'Pemikiran tentang Transformasi Kesehatan Digital & Standar Higienitas.',
      lead: 'Jelajahi artikel dan perspektif PT Neomedika Elektra Optima seputar digitalisasi klinik gigi, interoperabilitas data kesehatan, dan teknologi sanitasi berbasis HOCl.',
      categories: [
        'Semua Topik',
        'Digital Healthcare',
        'Dental Technology',
        'Healthcare Hygiene',
        'Interoperability & Integration',
      ],
      readArticleLabel: 'Baca Selengkapnya',
      closeArticleLabel: 'Tutup Artikel',
      articles: [
        {
          slug: 'why-healthcare-needs-connected-digital-systems',
          category: 'Digital Healthcare',
          date: '02 November 2026',
          readTime: '4 menit baca',
          title: 'Mengapa Fasilitas Kesehatan Membutuhkan Sistem Digital yang Saling Terhubung',
          summary:
            'Fragmentasi antara rekam medis, jadwal resepsionis, inventaris obat, dan laporan keuangan sering menghambat mutu layanan. Pelajari bagaimana platform terpadu menyelesaikannya.',
          body: [
            'Di banyak klinik dan fasilitas layanan kesehatan, proses operasional masih terpisah di berbagai perangkat: jadwal dicatat secara manual, rekam medis berada di dokumen terpisah, sementara stok bahan habis pakai baru diperiksa saat hampir habis.',
            'Pendekatan sistem terhubung (connected healthcare systems) yang dikembangkan PT Neomedika Elektra Optima bertujuan menghapus sekat-sekat tersebut. Ketika dokter menyelesaikan pencatatan tindakan pada odontogram digital, sistem secara otomatis menyiapkan rincian tagihan kasir sekaligus memperbarui stok bahan medis.',
            'Hasilnya bukan sekadar efisiensi waktu administrasi hingga 40%, melainkan peningkatan fokus tenaga medis pada hal yang paling utama: keselamatan dan kenyamanan pasien.',
          ],
        },
        {
          slug: 'modern-dental-practice-operating-system-khayr',
          category: 'Dental Technology',
          date: '28 Oktober 2026',
          readTime: '5 menit baca',
          title: 'Peran Sistem Operasi Praktik Gigi Modern dalam Pertumbuhan Klinik',
          summary:
            'Mengenal arsitektur tiga pilar KHAYR—Fondasi, Perjalanan Pasien, dan Pusat Komando—beserta inovasi akuisisi pasien berbasis voucher mitra.',
          body: [
            'Mengelola klinik gigi modern menuntut keseimbangan antara presisi klinis dan ketepatan manajemen bisnis. Dokter gigi memerlukan visualisasi Odontogram yang akurat, sedangkan pemilik klinik membutuhkan visibilitas pendapatan serta strategi pemasaran yang terukur.',
            'Melalui KHAYR, klinik tidak hanya memperoleh sistem rekam medis elektronik (EMR) dan penjadwalan 3-langkah, tetapi juga akses ke fitur KHAYR Voucher Promotion yang menghubungkan promosi klinik ke jaringan aplikasi mitra seperti Telkomsel, Indosat, AXISNET, XL, dan AstraPay.',
            'Dengan model biaya berbasis penggunaan aktual (Pay as You Grow), biaya pemasaran klinik menjadi selaras sepenuhnya dengan kunjungan dan transaksi nyata di klinik.',
          ],
        },
        {
          slug: 'hocl-science-safe-effective-disinfection-neolyte',
          category: 'Healthcare Hygiene',
          date: '19 Oktober 2026',
          readTime: '4 menit baca',
          title: 'Sains di Balik Hypochlorous Acid (HOCl): Standar Baru Sanitasi Bebas Alkohol',
          summary:
            'Bagaimana molekul alami yang diproduksi sel darah putih manusia menjadi dasar disinfektan Neolyte yang efektif membunuh 99,99% patogen tanpa iritasi.',
          body: [
            'Selama puluhan tahun, fasilitas kesehatan dan masyarakat menghadapi dilema dalam memilih cairan sanitasi: alkohol mudah menguap dan menyebabkan iritasi kulit, sementara klorin/pemutih bersifat korosif dan beracun.',
            'Hypochlorous Acid (HOCl) dalam Neolyte menghadirkan titik keseimbangan ideal. Sebagai asam lemah alami yang juga diproduksi oleh neutrofil dalam sistem imun manusia, HOCl memiliki daya oksidasi kuat untuk menembus dinding sel mikroorganisme patogen.',
            'Dengan izin edar resmi KEMENKES RI PKD 20501023189 (Neolyte SN 60 ppm) dan PKD 20502023190 (Neolyte DS 160–220 ppm) serta verifikasi laboratorium IPB, Neolyte memberikan perlindungan menyeluruh untuk tangan, peralatan medis, udara ruangan, hingga bahan pangan.',
          ],
        },
        {
          slug: 'interoperability-connecting-healthcare-information',
          category: 'Interoperability & Integration',
          date: '10 Oktober 2026',
          readTime: '4 menit baca',
          title: 'Interoperabilitas: Menghubungkan Informasi Kesehatan Secara Aman dan Terstandar',
          summary:
            'Kesiapan arsitektur API dan standar pertukaran data kesehatan merupakan kunci kolaborasi lintas ekosistem medis di Indonesia.',
          body: [
            'Transformasi kesehatan nasional mendorong setiap fasilitas layanan kesehatan untuk memiliki sistem informasi yang mampu bertukar data secara terstandar, termasuk kesiapan integrasi dengan ekosistem SATUSEHAT.',
            'PT Neomedika Elektra Optima merancang arsitektur teknologinya dengan prinsip Integration by Design dan Security by Default—memastikan bahwa interoperabilitas selalu berjalan beriringan dengan perlindungan privasi dan kontrol akses berbasis peran.',
          ],
        },
      ],
    },
    contact: {
      sectionNumber: '08. Hubungi PT Neomedika Elektra Optima',
      kicker: 'Let’s Build a More Connected Healthcare Future',
      heading: 'Mari Mulai Percakapan Bersama Tim Neomedika.',
      lead: 'Apakah Anda ingin menjadwalkan demo platform klinik gigi KHAYR, memesan produk sanitasi medis Neolyte, atau mendiskusikan kemitraan strategis? Isi formulir di bawah ini—setiap data akan tersimpan otomatis ke sistem kami dan terintegrasi langsung dengan Google Sheets & Gmail perusahaan.',
      formTitle: 'Formulir Kontak, Demo Produk & Kemitraan Resmi',
      formSubtitle:
        'Mohon isi data bisnis atau institusi Anda. Sesuai tata kelola privasi NEO, jangan mencantumkan informasi rekam medis sensitif pasien.',
      fields: {
        fullName: 'Nama Lengkap *',
        fullNamePlaceholder: 'Contoh: drg. Budi Santoso / Ibu Rina Wijaya',
        businessEmail: 'Alamat Email Bisnis / Institusi *',
        businessEmailPlaceholder: 'nama@klinikanda.co.id',
        phone: 'Nomor Telepon / WhatsApp',
        phonePlaceholder: '+62 812 XXXX XXXX',
        organisation: 'Nama Klinik / Rumah Sakit / Perusahaan',
        organisationPlaceholder: 'Contoh: Klinik Gigi Senyum Optima',
        countryCity: 'Kota / Wilayah Pasar',
        countryCityPlaceholder: 'Contoh: Jakarta, Bandung, Surabaya',
        category: 'Kategori Pertanyaan *',
        productInterest: 'Produk / Solusi yang Diminati *',
        message: 'Pesan / Rincian Kebutuhan *',
        messagePlaceholder:
          'Tuliskan kebutuhan Anda (misal: jadwal demo KHAYR untuk 2 cabang klinik, atau permintaan penawaran Neolyte DS 5000ml)...',
        privacyConsent:
          'Saya menyetujui bahwa PT Neomedika Elektra Optima dapat menyimpan dan memproses data kontak bisnis ini untuk menindaklanjuti pertanyaan saya sesuai kebijakan privasi korporat.',
        submitBtn: 'Kirim Data & Simpan ke Sistem NEO',
        submittingBtn: 'Menyimpan & Mengirim Notifikasi...',
      },
      categories: [
        'Healthcare Solutions',
        'Business & Strategic Partnerships',
        'Technology & Integration',
        'General',
        'Media & Corporate',
        'Careers',
      ],
      productInterests: [
        'KHAYR Digital Dental Platform',
        'Neolyte SN / DS Hygiene Line',
        'KHAYR + Neolyte Integrated Clinic Package',
        'Corporate & Ecosystem Partnership',
        'General NEO Enquiry',
      ],
      workspaceBox: {
        title: 'Panel Integrasi Otomatis Google Gmail & Google Sheets',
        subtitle:
          'Hubungkan akun Google Workspace perusahaan untuk menyinkronkan seluruh data formulir langsung ke Google Sheets dan mengirimkan email notifikasi otomatis melalui Gmail.',
        connectedAs: 'Terhubung sebagai:',
        signInBtn: 'Sign in with Google',
        signOutBtn: 'Putuskan Akun',
        createSheetBtn: 'Buat Google Sheet Baru & Sinkronkan',
        syncAllBtn: 'Sinkronkan ke Google Sheet',
        sendGmailBtn: 'Kirim Email Notifikasi via Gmail',
        exportCsvBtn: 'Unduh Data CSV',
        recipientLabel: 'Email Tujuan Notifikasi Otomatis:',
        sheetIdLabel: 'ID Google Spreadsheet Tujuan (Opsional / Otomatis):',
      },
    },
    footer: {
      corporateDescriptor: 'PT Neomedika Elektra Optima · Integrated Healthcare Technology',
      statement:
        'Connecting Healthcare. Empowering Better Lives. Membangun ekosistem teknologi kesehatan dan solusi higienitas medis yang tepercaya.',
      disclaimerTitle: 'Pernyataan & Tata Kelola Informasi Korporat (Corporate Disclaimer)',
      disclaimerText:
        'Informasi pada situs web ini menjelaskan arah korporat, kerangka bisnis, serta produk PT Neomedika Elektra Optima (NEO). Platform KHAYR sedang dalam tahap pengembangan dan validasi; ketersediaan fitur serta integrasi tunduk pada kesiapan rilis komersial. Produk Neolyte SN telah memiliki izin edar KEMENKES RI PKD 20501023189 dan Neolyte DS memiliki izin edar KEMENKES RI PKD 20502023190.',
      copyright: '© 2026 PT Neomedika Elektra Optima (NEO). Seluruh hak cipta dilindungi undang-undang.',
    },
  },
  en: {
    nav: {
      about: 'About NEO',
      business: 'Our Business',
      products: 'Our Products',
      technology: 'Technology',
      insights: 'Insights',
      cta: 'Contact NEO',
    },
    utility: {
      legalEntity: 'PT Neomedika Elektra Optima',
      descriptor: 'Integrated Healthcare Technology',
      tagline: 'Trusted Healthcare Solutions',
      workspaceSyncBtn: 'Gmail & Sheets Integration',
      langLabel: 'Language',
    },
    hero: {
      kicker: 'PT Neomedika Elektra Optima · Integrated Healthcare Technology & Hygiene Ecosystem',
      headline: 'Connecting Healthcare. Empowering Better Lives.',
      subheadline:
        'We bring healthcare, intelligent software systems, and medical hygiene innovation together to create more connected, efficient, and trusted healthcare experiences.',
      corporateNote:
        'PT Neomedika Elektra Optima (NEO) is building a long-term healthcare technology foundation through our flagship KHAYR digital dental platform and our Neolyte HOCl medical hygiene line.',
      primaryCta: 'Explore Our Solutions',
      secondaryCta: 'Partner With NEO',
      snapshotItems: [
        {
          label: 'Legal Entity',
          value: 'PT Neomedika Elektra Optima',
          detail: 'Corporate Brand: NEO · neomedika',
        },
        {
          label: 'Flagship Digital Platform',
          value: 'KHAYR Dental OS',
          detail: 'Integrated Dental Practice Operating System (Under Development)',
        },
        {
          label: 'Healthcare Hygiene Line',
          value: 'Neolyte™ SN & DS',
          detail: 'KEMENKES RI PKD 20501023189 & 20502023190 · Halal MUI',
        },
        {
          label: 'Primary Market & Ambition',
          value: 'Indonesia & Global Vision',
          detail: 'Dental Practices, Hospitals, Institutions & Tech Partners',
        },
      ],
    },
    about: {
      sectionNumber: '01. Corporate Profile',
      kicker: 'Who We Are · About PT Neomedika Elektra Optima',
      heading: 'Technology with a Purpose. Innovation for Better Healthcare.',
      lead: 'Healthcare is evolving. As care delivery becomes increasingly connected and data-driven, healthcare organisations need technology that works seamlessly across clinical, operational, administrative, and environmental hygiene environments.',
      body: 'PT Neomedika Elektra Optima (NEO) was established with a long-term ambition to contribute to the transformation of healthcare through technology. Our approach extends beyond individual software products: we are developing a connected portfolio of capabilities that support healthcare operations, digital service delivery, responsible information exchange, and clinical sanitization.',
      visionTitle: 'Corporate Vision',
      visionText:
        'To become a trusted international healthcare technology company, enabling a more connected, intelligent, and accessible healthcare ecosystem.',
      missionTitle: 'Strategic Mission',
      missions: [
        {
          code: '01',
          title: 'Develop Purposeful Solutions',
          desc: 'Build practical digital healthcare and hygiene solutions that address real operational and clinical needs.',
        },
        {
          code: '02',
          title: 'Connect Healthcare Ecosystems',
          desc: 'Connect healthcare systems, professionals, administrators, and patients through integrated technology.',
        },
        {
          code: '03',
          title: 'Promote Responsible Innovation',
          desc: 'Advance standards-aware interoperability, data protection, and evidence-led healthcare capabilities.',
        },
        {
          code: '04',
          title: 'Build Long-Term Partnerships',
          desc: 'Establish enduring collaborations across healthcare providers, technology specialists, and distribution networks.',
        },
        {
          code: '05',
          title: 'Design Scalable Foundations',
          desc: 'Develop adaptable platforms capable of evolving across markets, multi-branch clinics, and regulatory environments.',
        },
      ],
      valuesTitle: 'Core Corporate Values',
      values: [
        {
          title: 'Innovation with Purpose',
          desc: 'We focus on technology that solves real healthcare challenges and creates measurable practical value.',
        },
        {
          title: 'Integrity & Accountability',
          desc: 'We operate with transparency, responsibility, and respect for the trust placed in healthcare systems.',
        },
        {
          title: 'Human-Centred Design',
          desc: 'Technology should empower clinicians, staff, and patients—not make healthcare workflows more complicated.',
        },
        {
          title: 'Ecosystem Collaboration',
          desc: 'We believe meaningful progress is achieved through strong partnerships with healthcare and technology leaders.',
        },
        {
          title: 'Security & Excellence',
          desc: 'We pursue high quality in our products, rigorous protection of sensitive data, and verified regulatory standards.',
        },
        {
          title: 'Continuous Adaptability',
          desc: 'We design systems engineered to evolve through clinical validation, feedback, and changing market needs.',
        },
      ],
      roadmapTitle: 'Staged Approach to Sustainable Growth (4 Phases)',
      roadmapNote:
        'This roadmap represents strategic corporate intent and is subject to product readiness, market validation, and regulatory assessment.',
      phases: [
        {
          phase: 'Phase 1 · Establish',
          title: 'Digital Dental Foundation',
          desc: 'Develop and validate KHAYR’s core dental clinic workflows and integrated operational platform.',
        },
        {
          phase: 'Phase 2 · Expand',
          title: 'Platform & Multi-Clinic Expansion',
          desc: 'Enhance patient experience, multi-location capabilities, operational analytics, automation, and strategic integrations.',
        },
        {
          phase: 'Phase 3 · Segment Growth',
          title: 'Healthcare Segment Expansion',
          desc: 'Explore general practice and specialist clinic solutions, broader EMR capabilities, and connected healthcare services.',
        },
        {
          phase: 'Phase 4 · Connect Globally',
          title: 'International Ecosystem Development',
          desc: 'Evaluate selected international markets, jurisdiction-specific compliance, localisation, and strategic partnerships.',
        },
      ],
    },
    business: {
      sectionNumber: '02. Business Architecture',
      kicker: 'Five Strategic Pillars · One Connected Healthcare Vision',
      heading: 'Building the Foundations of Connected Healthcare.',
      lead: 'NEO’s business is structured around five complementary strategic pillars that form the foundation of its long-term healthcare technology portfolio.',
      governanceNote:
        'Corporate Note: These pillars describe NEO’s strategic business framework and long-term capability roadmap.',
      pillars: [
        {
          index: '01',
          title: 'Healthcare Management Systems',
          summary:
            'Technology designed to support the structured day-to-day management and operation of healthcare organisations.',
          capabilities: [
            'Practice & clinical facility management',
            'Electronic medical records (EMR) & administrative workflows',
            'Appointment scheduling, billing, & inventory control',
            'Centralised multi-location & branch administration',
          ],
          spanWide: true,
        },
        {
          index: '02',
          title: 'Digital Healthcare Platforms',
          summary:
            'Digital platforms designed to support seamless interactions between healthcare providers, professionals, and patients.',
          capabilities: [
            'Streamlined patient appointment & reservation journeys',
            'Clinical workflow & digital charting support',
            'Structured patient relationship & promotional engagement tools',
          ],
        },
        {
          index: '03',
          title: 'Integration & Interoperability',
          summary:
            'Technology approaches engineered to enable healthcare systems and information to communicate securely.',
          capabilities: [
            'API-based connectivity & structured data exchange',
            'Interoperability architecture (including SATUSEHAT alignment)',
            'External partner ecosystem & insurance connectivity',
          ],
        },
        {
          index: '04',
          title: 'Healthcare Intelligence & Automation',
          summary:
            'Data and intelligent workflow capabilities intended to support operational visibility and informed decision-making.',
          capabilities: [
            'Real-time clinic performance & financial analytics dashboards',
            'Automated patient retention tracking & stock expiry alerts',
            'Decision-support & workflow automation with human oversight',
          ],
        },
        {
          index: '05',
          title: 'Healthcare Ecosystem & Connectivity',
          summary:
            'An ecosystem-oriented approach uniting healthcare providers, technology partners, and clinical hygiene standards.',
          capabilities: [
            'Strategic technology & healthcare provider networks',
            'Clinical-grade environmental sanitization via the Neolyte line',
            'Cross-organisation collaboration & distribution partnerships',
          ],
          spanWide: true,
        },
      ],
      solutionsHeading: 'Technology Designed Around Healthcare Needs',
      solutionsSub:
        'NEO’s solution strategy addresses the operational, digital, clinical hygiene, and connectivity challenges faced by healthcare organisations.',
      audiences: [
        {
          audience: 'For Dental Practices & Clinics',
          focus: 'Featured Platform: KHAYR & Neolyte Clinical Hygiene',
          description:
            'Digital practice management designed to connect clinical odontograms, scheduling, billing, inventory, and patient acquisition vouchers, alongside clinical-grade sanitization.',
          ctaLabel: 'Explore Dental Solutions',
          enquiryCategory: 'Healthcare Solutions',
          productInterest: 'KHAYR Digital Dental Platform',
        },
        {
          audience: 'For Hospitals & Healthcare Providers',
          focus: 'HOCl Hygiene Standards & Operational Coordination',
          description:
            'KEMENKES-registered Neolyte SN & DS sanitizer and disinfectant solutions for hospital wards, dental chairs, and Neogate chambers, alongside digital workflow exploration.',
          ctaLabel: 'Enquire About Healthcare Solutions',
          enquiryCategory: 'Healthcare Solutions',
          productInterest: 'Neolyte SN / DS Hygiene Line',
        },
        {
          audience: 'For Multi-Branch Healthcare Groups',
          focus: 'Centralised Visibility & Standardised Operations',
          description:
            'Technology foundations built to support larger-scale administration, consolidated financial reporting across branches, and supply chain visibility.',
          ctaLabel: 'Schedule Corporate Discussion',
          enquiryCategory: 'Business & Strategic Partnerships',
          productInterest: 'KHAYR Digital Dental Platform',
        },
        {
          audience: 'For Technology & Distribution Partners',
          focus: 'API Integration, Ecosystem & Distribution Collaboration',
          description:
            'Collaboration opportunities around system integration, partner application connectivity, and regional distribution of Neomedika healthcare products.',
          ctaLabel: 'Discuss Partnership Requirements',
          enquiryCategory: 'Technology & Integration',
          productInterest: 'Corporate & Ecosystem Partnership',
        },
      ],
    },
    khayr: {
      sectionNumber: '03. Flagship Digital Product · KHAYR',
      kicker: 'NEO Flagship Digital Healthcare Platform · Dental Practice Operating System',
      statusDisclosure: 'Product Status: Under Development & Validation',
      heading: 'KHAYR — A Smarter Way to Manage Modern Dental Healthcare.',
      tagline: 'Manage Easier, Promote Wider, Grow Faster.',
      lead: 'KHAYR is PT Neomedika Elektra Optima’s flagship digital dental healthcare platform, being developed as a cloud-based Dental Practice Operating System to bring clinical documentation, digital odontograms, clinic administration, billing, inventory, and partner voucher promotions into one connected environment.',
      subscriptionNote:
        'Flexible "Pay as You Grow" Subscription Model — enabling dental practices to scale modules smoothly alongside clinic growth.',
      externalPreviewCta: 'Open KHAYR Product Portal',
      enquireCta: 'Request KHAYR Demo / Information',
      rolesTitle: 'Engineered for Every Role in Your Dental Practice Ecosystem',
      roles: [
        {
          role: 'Dentists & Clinical Nurses',
          badge: 'Clinical Engine',
          desc: 'Access chronological patient EMR, chart treatments on an interactive Digital Odontogram, record anamnesis & diagnoses, and manage chair schedules.',
        },
        {
          role: 'Administrative Staff',
          badge: 'Operational Core',
          desc: 'Manage 3-step patient reservations, coordinate daily appointment queues, track inventory stock levels, and process integrated billing.',
        },
        {
          role: 'Patients',
          badge: 'Care Centre',
          desc: 'Experience frictionless check-ins, automated appointment reminders, and seamless continuity of care from initial booking to follow-up.',
        },
        {
          role: 'Clinic Owners & Managers',
          badge: 'Command Centre',
          desc: 'Monitor real-time clinic revenue, new vs. returning patient metrics, stock expiry alerts, and performance-based KHAYR Voucher Promotion campaigns.',
        },
      ],
      threePillarsTitle: 'Three Interconnected Pillars of KHAYR: Every Function, One System',
      threePillars: [
        {
          name: '1. Foundation (Fondasi)',
          subtitle: 'Configuration · Consistency & Operational Control',
          items: [
            { name: 'Services & Procedures', desc: 'Complete catalogue of dental procedures and standardized pricing tiers.' },
            { name: 'Physical Infrastructure', desc: 'Map clinic locations, branches, and individual treatment rooms.' },
            { name: 'Products & Inventory', desc: 'Catalogue medications and dental consumables with stock tracking.' },
            { name: 'Insurance Partnerships', desc: 'Centralised management of accepted insurance and corporate guarantors.' },
            { name: 'Personnel & Credentials', desc: 'Centralised staff database including dentist STR/SIP license tracking.' },
            { name: 'Smart Scheduling', desc: 'Configure dentist practice schedules by room, day, and time slot.' },
          ],
        },
        {
          name: '2. Patient Journey (Perjalanan Pasien)',
          subtitle: 'Operations · Clinical Efficiency & Care Quality',
          items: [
            { name: '3-Step Smart Reservation', desc: 'Instant search by Name, Phone, or NIK to prevent duplicate patient records.' },
            { name: 'Daily Schedule View', desc: 'Real-time appointment queue filterable by date, dentist, and status.' },
            { name: 'Dentist Digital Cockpit', desc: 'Interactive Odontogram, anamnesis entry, diagnosis, and treatment charting.' },
            { name: 'Complete Medical History', desc: 'Chronological EMR storing every consultation and clinical note.' },
            { name: 'Billing & Invoicing', desc: 'Centralised payment tracking linked directly from clinical procedures.' },
          ],
        },
        {
          name: '3. Command Centre (Pusat Komando)',
          subtitle: 'Insights · Clinic Growth & Optimization',
          items: [
            { name: 'Performance Dashboard', desc: 'Revenue breakdown by category (Procedures vs. Medications) and trends.' },
            { name: 'Active Patient Analytics', desc: 'Monthly monitoring of new patient acquisition vs. returning patient retention.' },
            { name: 'Inventory Management', desc: 'Real-time stock alerts: Safe, Low Stock, Out of Stock, & Expiry Warnings.' },
            { name: 'Financial Reports', desc: 'Comprehensive revenue tracking to identify clinic growth and seasonality.' },
            { name: 'KHAYR Voucher Promotion', desc: 'Create promotional vouchers distributed across major partner apps.' },
          ],
        },
      ],
      modulesTitle: 'Interactive KHAYR Dental Operating System Module Preview',
      modulesSub:
        'Select any module below to explore how KHAYR connects front-desk reservations, clinical odontograms, inventory, and financial analytics.',
      modules: [
        {
          id: 'reservasi',
          tabLabel: '3-Step Reservation',
          title: 'A Seamless First Step for Every Patient Appointment',
          subtitle:
            'KHAYR’s reservation engine streamlines booking for both new and returning patients, reducing check-in errors and eliminating duplicate records.',
          highlights: [
            {
              title: '1. Structured 3-Step Booking Workflow',
              desc: 'Select patient type (Returning / New) → Instant lookup or NIK registration → Assign dentist, treatment room, and slot.',
            },
            {
              title: '2. Instant Patient Search',
              desc: 'Lookup by full name, WhatsApp number, or national ID (NIK) to retrieve chronological records in seconds.',
            },
            {
              title: '3. Zero Duplicate EMR Records',
              desc: 'Real-time synchronization between front-desk reception and the dentist’s chairside cockpit.',
            },
          ],
          metrics: [
            { label: 'Admin Time Saved', value: '40%', delta: 'Faster front-desk flow' },
            { label: 'Patient No-Show Reduction', value: '3×', delta: 'Automated reminders' },
            { label: 'Record Accuracy', value: '99.4%', delta: 'Unified patient ID' },
          ],
        },
        {
          id: 'jadwal',
          tabLabel: 'Daily Appointment Queue',
          title: 'Real-Time Dental Chair & Queue Visibility',
          subtitle:
            'Monitor all dentist schedules across treatment rooms with live patient arrival and procedure status indicators.',
          highlights: [
            {
              title: 'Multi-Dimensional Filtering',
              desc: 'Filter daily appointments by date, specialist dentist, treatment room, or confirmation status.',
            },
            {
              title: 'Live Status Transitions',
              desc: 'Track patients smoothly from Confirmed → Waiting → In Treatment → Completed & Ready for Billing.',
            },
            {
              title: 'Optimal Chair Utilization',
              desc: 'Prevent scheduling conflicts and maximize dental unit productivity across shifts.',
            },
          ],
          metrics: [
            { label: 'Appointments Today', value: '28', delta: '↑ 4 vs yesterday' },
            { label: 'Attendance Rate', value: '94%', delta: '↑ 8% vs last month' },
            { label: 'Avg Wait Time', value: '< 9 min', delta: 'Coordinated queue' },
          ],
        },
        {
          id: 'klinis',
          tabLabel: 'Clinical EMR & Odontogram',
          title: 'Dentist Digital Cockpit with Interactive Odontogram Charting',
          subtitle:
            'Purpose-built dental documentation featuring an interactive FDI Odontogram, structured anamnesis, and automated billing handoff.',
          highlights: [
            {
              title: 'Interactive Visual Odontogram',
              desc: 'Click individual tooth surfaces to record caries, restorations, endodontic root canal therapy, crowns, or extractions.',
            },
            {
              title: 'Automated Procedure-to-Invoice Link',
              desc: 'Selected clinical procedures automatically deduct linked consumables and generate a draft invoice for reception.',
            },
            {
              title: 'Standards-Aware Interoperability',
              desc: 'Structured clinical data model designed for alignment with national health data exchange standards (SATUSEHAT).',
            },
          ],
          metrics: [
            { label: 'Tooth Charting Standard', value: 'FDI 32/20', delta: 'Interactive Odontogram' },
            { label: 'Billing & Stock Sync', value: 'Automated', delta: 'Zero double entry' },
            { label: 'Medical Record Security', value: '256-bit', delta: 'Role-based access' },
          ],
        },
        {
          id: 'riwayat',
          tabLabel: 'Medical History (EMR)',
          title: 'Complete, Protected Chronological Electronic Medical Records',
          subtitle:
            'Every consultation, clinical note, allergy alert, and treatment plan organized in one longitudinal patient timeline.',
          highlights: [
            {
              title: 'Longitudinal Care Continuity',
              desc: 'Review multi-visit root canal progress or orthodontic adjustments effortlessly across dentists.',
            },
            {
              title: 'Clinical Allergy & Medical Alerts',
              desc: 'High-visibility flags for hypertension, diabetes, or drug allergies before procedures begin.',
            },
            {
              title: 'Strict Role-Based Access & Audit Trail',
              desc: 'Ensures sensitive clinical records are accessed only by authorized healthcare personnel.',
            },
          ],
          metrics: [
            { label: 'History Retrieval', value: '< 2 sec', delta: 'Indexed EMR search' },
            { label: 'System Audit Trail', value: '100%', delta: 'Logged per user action' },
            { label: 'Encrypted Backups', value: 'Daily', delta: 'Cloud data protection' },
          ],
        },
        {
          id: 'inventaris',
          tabLabel: 'Inventory Control',
          title: 'Real-Time Dental Consumables & Expiry Date Monitoring',
          subtitle:
            'Prevent stockouts of composites, anesthetics, and sterilization supplies with automated status classification.',
          highlights: [
            {
              title: '4 Real-Time Stock States',
              desc: 'Instant visibility across Safe Stock, Low Stock, Out of Stock, and Approaching Expiry items.',
            },
            {
              title: 'Batch & Expiry Date Tracking',
              desc: 'Enforce FEFO (First Expired, First Out) dispensing for clinical safety and cost control.',
            },
            {
              title: 'Procurement & Usage Reconciliation',
              desc: 'Track consumable usage directly against completed dental procedures.',
            },
          ],
          metrics: [
            { label: 'Tracked Catalogue', value: '340+ SKUs', delta: 'Medications & Consumables' },
            { label: 'Early Expiry Alert', value: '60 Days', delta: 'Automated warning' },
            { label: 'Waste Reduction', value: '+28%', delta: 'Optimized stock turnover' },
          ],
        },
        {
          id: 'analitik',
          tabLabel: 'Analytics & Finance',
          title: 'Clinic Performance Command Centre & Transparent Billing Reports',
          subtitle:
            'Make data-driven management decisions: track procedure vs. medication revenue, dentist utilization, and voucher ROI.',
          highlights: [
            {
              title: 'Revenue & Growth Dashboards',
              desc: 'Visualize daily, weekly, and monthly revenue alongside payment method and insurance breakdowns.',
            },
            {
              title: 'New vs. Returning Patient Analytics',
              desc: 'Measure patient acquisition from partner promotions alongside long-term clinic retention.',
            },
            {
              title: 'Transparent Credit Balance & Voucher Ledger',
              desc: 'Full auditability of prepaid KHAYR credit deductions for redeemed promotional vouchers.',
            },
          ],
          metrics: [
            { label: 'Sample Weekly Revenue', value: 'Rp48M', delta: '↑ 12% this week' },
            { label: 'Patient Retention Rate', value: '76%', delta: 'Monthly active base' },
            { label: 'Financial Reporting', value: 'Real-Time', delta: 'Export-ready ledger' },
          ],
        },
      ],
      voucherSystem: {
        kicker: 'CLINIC GROWTH ENGINE · KHAYR VOUCHER PROMOTION',
        heading: 'Effortless Dental Clinic Promotions with Performance-Based Pricing',
        lead: 'KHAYR Voucher Promotion enables dental clinics to create promotional vouchers for specific treatments (such as Scaling, Bleaching, or Orthodontic Consultations) directly inside KHAYR at zero upfront cost and distribute them across major partner applications.',
        partnerAppsLabel: 'Distributed Across 5 Leading Partner Applications',
        partnerApps: ['Telkomsel (MyTelkomsel)', 'Indosat (myIM3)', 'AXISNET', 'XL (myXL)', 'AstraPay'],
        benefits: [
          {
            step: 'Advantage 01',
            title: 'Zero Upfront Voucher Creation Cost',
            desc: 'Clinics can design promotional offers and publish vouchers directly from KHAYR with zero registration or creation fees.',
          },
          {
            step: 'Advantage 02',
            title: 'Reach Millions of Active Partner Users',
            desc: 'Your clinic vouchers are showcased across Telkomsel, Indosat, AXISNET, XL, and AstraPay to attract new prospective patients.',
          },
          {
            step: 'Advantage 03',
            title: 'Usage-Based Fee Aligned with Revenue',
            desc: 'Promotional fees apply only when a patient redeems the voucher for an actual treatment transaction at your clinic.',
          },
        ],
        workflowSteps: [
          {
            num: '01',
            title: 'Create Voucher in KHAYR',
            desc: 'Select the dental service (e.g., 30% Off Scaling), quota, and validity period with zero upfront cost.',
          },
          {
            num: '02',
            title: 'Published on 5 Partner Apps',
            desc: 'Vouchers are automatically distributed to partner apps where users can claim or redeem points.',
          },
          {
            num: '03',
            title: 'Patient Visits Your Clinic',
            desc: 'The patient books an appointment, visits your clinic, and presents the active voucher code.',
          },
          {
            num: '04',
            title: 'Transaction & Auto Credit Deduction',
            desc: 'Upon checkout, the promotional commission is automatically deducted from your KHAYR prepaid credit balance.',
          },
        ],
      },
      governanceFootnote:
        'Development-Stage Disclosure: KHAYR is currently under development and validation by PT Neomedika Elektra Optima. Product scope, interface previews, partner integrations, and release timing are subject to technical validation and commercial readiness.',
    },
    neolyte: {
      sectionNumber: '04. Healthcare Hygiene Line · Neolyte™',
      kicker: 'Neomedika Healthcare Hygiene Portfolio · Hypochlorous Acid (HOCl) Water-Based Technology',
      heading: 'Neolyte™ — Safe, Effective, and Eco-Friendly Water-Based Disinfectant & Sanitizer.',
      tagline: '100% Alcohol-Free (0%), Non-Toxic, Non-Corrosive, and Lab-Verified Efficacy.',
      lead: 'Neolyte is a non-toxic antiseptic and disinfectant solution engineered to eliminate viruses, germs, bacteria, and fungi using active Hypochlorous Acid (HOCl)—the exact natural antimicrobial compound produced by human white blood cells (neutrophils) to defend against pathogens.',
      scienceQuote:
        '“Anolyte (HOCl) disinfectant is clinically proven to be up to 100 times more effective than standard bleach (NaOCl), eliminating 99.99% of harmful bacteria, viruses, and germs while remaining 100% safe for humans, pets, and the environment.”',
      scienceSource: 'Scientific Reference & Verification: IPB University Laboratory Testing & EPA / CDC Active Ingredient Recognition.',
      enquireCta: 'Order / Enquire About Neolyte',
      coreAdvantages: [
        {
          title: 'Effective (Kills 99.99% of Pathogens)',
          subtitle: 'Replicates the Human Immune Response',
          desc: 'Formulated by replicating the human body’s natural HOCl defense mechanism, delivering rapid broad-spectrum efficacy against viruses, bacteria, and fungi.',
        },
        {
          title: 'Gentle (0% Alcohol & Non-Irritating)',
          subtitle: 'Baby Safe · Food Grade · Non-Toxic',
          desc: '100% alcohol-free, non-corrosive, non-caustic, and non-dehydrating. Ideal for sensitive skin, healthcare workers, and baby-safe environments.',
        },
        {
          title: 'Convenient (Quick-Drying & Residue-Free)',
          subtitle: 'Ready for Hands, Surfaces & Air',
          desc: 'Fast-drying water-based mist that leaves zero sticky residue and requires no rinsing on everyday surfaces.',
        },
        {
          title: 'Multi-Purpose (Medical to Household)',
          subtitle: 'Hospitals, Dental Clinics, Food Safety & Public Spaces',
          desc: 'Trusted across healthcare facilities, dental practices, food & beverage sterilization, water treatment, and household hygiene.',
        },
      ],
      variants: [
        {
          code: 'SN',
          name: 'Neolyte SN — Hand & Body Sanitizer',
          category: 'Water-Based Antiseptic for Hands & Skin',
          ph: 'pH 4.5 – 5.5',
          ppm: '60 ppm HOCl',
          kemenkesNo: 'KEMENKES RI PKD 20501023189',
          colorHex: '#65B741',
          description:
            'A gentle, skin-neutral, alcohol-free antiseptic solution that eliminates viruses, bacteria, and fungi on hands and body without irritation or dryness. Ideal for Hospitals, Clinics, Offices, Schools, and Homes.',
          useCases: [
            'Routine hand antisepsis for dentists, medical staff, and patients',
            'Safe hand sanitization for children and sensitive skin (0% alcohol, non-stinging)',
            'Refill solution for touchless Automatic Hand Sanitizer Dispensers',
          ],
          sizes: ['60 ml', '100 ml', '250 ml', '500 ml', '1000 ml', '5000 ml'],
        },
        {
          code: 'DS',
          name: 'Neolyte DS — Safe & Effective Disinfectant',
          category: 'Clinical Surface, Equipment & Air Disinfectant',
          ph: 'pH 6.0 – 7.0',
          ppm: '160 – 220 ppm HOCl',
          kemenkesNo: 'KEMENKES RI PKD 20502023190',
          colorHex: '#189AB4',
          description:
            'A high-potency, non-corrosive disinfectant solution for medical surfaces, dental chairs, room air purification, and food-contact sterilization. Can be used undiluted or diluted with Aquades / RO Water.',
          useCases: [
            'Disinfection of dental units, hospital wards, clinics, and community health centers (Puskesmas)',
            'Room air purification (Diffuser/Humidifier), cold fogging, and Neogate chambers',
            'Sterilization of baby equipment, kitchen utensils, and fresh food ingredients',
          ],
          sizes: ['250 ml', '500 ml', '1000 ml', '5000 ml'],
        },
      ],
      certifications: {
        title: 'Official Ministry of Health Registrations & Laboratory Verification',
        subtitle:
          'Neolyte SN and Neolyte DS are backed by Indonesian Ministry of Health (KEMENKES RI) distribution permits, Halal MUI certification, and accredited laboratory testing.',
        items: [
          {
            badge: 'Distribution Permit',
            title: 'KEMENKES RI PKD 20501023189',
            reference: 'Neolyte SN (Hand & Body Sanitizer)',
            detail: 'Officially registered with the Ministry of Health of the Republic of Indonesia under Antiseptic / Household Health Supplies.',
          },
          {
            badge: 'Distribution Permit',
            title: 'KEMENKES RI PKD 20502023190',
            reference: 'Neolyte DS (Safe & Effective Disinfectant)',
            detail: 'Officially registered with the Ministry of Health of the Republic of Indonesia under Disinfectant / Household Health Supplies.',
          },
          {
            badge: 'IPB Lab Tested',
            title: '> 99.999% Bactericidal Efficacy',
            reference: 'IPB University Testing, Calibration & Certification Laboratory',
            detail: 'Verified bactericidal efficacy against Escherichia coli, Staphylococcus aureus, Pseudomonas aeruginosa, and Enterococcus hirae (EN 1276 standard).',
          },
          {
            badge: 'Safety & Halal',
            title: 'Halal MUI & EPA/CDC Recognised HOCl',
            reference: 'Majelis Ulama Indonesia & Global HOCl Standards',
            detail: 'Hypochlorous Acid (HOCl) is recognized by the EPA & CDC as a safe, effective disinfectant (Baby Safe, Food Grade, 0% Alcohol, Non-Toxic).',
          },
        ],
      },
      comparisonTitle: 'Product Comparison: HOCl (Neolyte™) vs. Conventional Disinfectants',
      comparisonSub:
        'Neolyte occupies the Ideal Zone: combining high antimicrobial potency against bacteria, fungi, and viruses with a non-toxic, non-irritating safety profile.',
      comparisons: [
        {
          agent: 'HOCl (Neolyte™)',
          efficacy: 'High Potency (Bacteria, Viruses, Fungi, Spores)',
          safetyProfile: 'Ideal Zone: Effective, Eco-Friendly, Non-Toxic & Non-Irritating',
          scorePercent: 98,
          isNeolyte: true,
        },
        {
          agent: 'Alcohol (70%–90%)',
          efficacy: 'Moderate (Limited against certain spores)',
          safetyProfile: 'Causes skin irritation, dryness/dermatitis, and is flammable',
          scorePercent: 62,
        },
        {
          agent: 'Chlorine / Bleach (NaClO)',
          efficacy: 'High against bacteria & viruses',
          safetyProfile: 'Toxic, corrosive to surfaces/metals, and irritating to respiratory tract',
          scorePercent: 55,
        },
        {
          agent: 'Iodine / Povidone',
          efficacy: 'Moderate–High',
          safetyProfile: 'Leaves surface stains and can cause stinging on skin',
          scorePercent: 50,
        },
        {
          agent: 'Standard Soap',
          efficacy: 'Minimal direct antimicrobial action',
          safetyProfile: 'Safe but requires water rinsing and cannot sterilize room air or equipment',
          scorePercent: 30,
        },
      ],
      dilutionCalculatorTitle: 'Interactive Neolyte DS (220 ppm) Dilution Calculator & Application Guide',
      dilutionCalculatorSub:
        'Select your target application and total volume below to calculate the exact quantities of Neolyte DS and Aquades / RO Water.',
      devicesTitle: 'Compatible Sanitizer & Disinfectant Application Equipment',
      devicesSub:
        'Neolyte integrates seamlessly with modern sanitization hardware for comprehensive environmental protection.',
      devices: [
        {
          name: 'Ultrasonic Diffuser / Humidifier',
          method: 'Air Purification & Disinfection (1:4 Ratio)',
          useCase: 'Continuous air sanitization in dental treatment rooms, patient waiting areas, vehicles, and homes.',
        },
        {
          name: 'Electric Sprayer (5L Portable)',
          method: 'Wide-Area Surface Spraying (1:1 – 1:3 Ratio)',
          useCase: 'Routine surface disinfection across hospitals, clinics, offices, and educational facilities.',
        },
        {
          name: 'Automatic Hand Sanitizer Dispenser',
          method: 'Touchless Hand Antisepsis (Neolyte SN 60 ppm)',
          useCase: 'Alcohol-free automated hand sanitization at clinic entrances, hospital wards, and lobbies.',
        },
        {
          name: 'Cold Fogging Machine',
          method: 'Micro-Droplet Room Fogging (1:1 – 1:2 Ratio)',
          useCase: 'Deep sterilization of operating rooms, dental operatories, isolation rooms, and commercial halls.',
        },
        {
          name: 'Neogate™ Disinfectant Chamber / Fog Gate',
          method: 'Automated Walk-Through Chamber (1:3 Ratio)',
          useCase: 'Neomedika’s flagship non-toxic misting gate for high-traffic building and healthcare facility entrances.',
        },
        {
          name: 'Microfiber Spray Mop',
          method: 'Daily Floor Sanitization (1:2 – 1:3 Ratio)',
          useCase: 'Rapid, residue-free floor disinfection for clinical rooms and residential spaces.',
        },
      ],
    },
    technology: {
      sectionNumber: '05. Technology & Our Approach',
      kicker: 'Connected by Design · Built for Healthcare',
      heading: 'Building Technology Around Real Healthcare Needs.',
      lead: 'PT Neomedika Elektra Optima’s technology direction centres on building adaptable digital platforms and connected systems capable of supporting complex healthcare workflows.',
      principles: [
        {
          index: '01',
          title: 'Integration by Design',
          desc: 'We aim to reduce fragmentation through systems engineered to connect clinical, administrative, financial, and partner environments.',
        },
        {
          index: '02',
          title: 'Scalable Cloud Architecture',
          desc: 'We pursue technology foundations that evolve seamlessly as clinics, patient volumes, branches, and product modules grow.',
        },
        {
          index: '03',
          title: 'Security & Responsible Data Management',
          desc: 'We enforce role-based access control (RBAC), encryption, and system auditability to safeguard healthcare and operational records.',
        },
        {
          index: '04',
          title: 'Standards-Aware Interoperability',
          desc: 'We prioritize structured data exchange and API connectivity, including alignment with national healthcare standards such as SATUSEHAT.',
        },
        {
          index: '05',
          title: 'Intelligent Workflows',
          desc: 'We apply workflow automation and operational analytics to improve efficiency while preserving clinical human oversight.',
        },
        {
          index: '06',
          title: 'Human-Centred Validation',
          desc: 'Every product capability is designed and validated around the real day-to-day workflows of clinicians, staff, and patients.',
        },
      ],
      approachHeading: 'Responsible Innovation. Practical Execution.',
      approachLead:
        'We follow a structured product lifecycle: understand healthcare workflows, validate user experiences, test operational reliability, and uphold regulatory governance.',
      governanceBlocks: [
        {
          title: 'Quality & Reliability',
          desc: 'Quality assurance practices span product design, laboratory and software testing, clinical onboarding, and ongoing operational support.',
        },
        {
          title: 'Security & Privacy Protection',
          desc: 'Our platforms are designed in line with applicable Indonesian personal data protection obligations and strict separation of corporate vs. clinical environments.',
        },
        {
          title: 'Compliance & Verified Claims',
          desc: 'All regulatory disclosures—such as KEMENKES RI PKD registrations for Neolyte and development-stage labels for KHAYR—are transparently maintained.',
        },
        {
          title: 'Corporate Governance',
          desc: 'Clear intellectual property management, risk oversight, and product accountability under PT Neomedika Elektra Optima.',
        },
      ],
    },
    partnerships: {
      sectionNumber: '06. Partnership Ecosystem',
      kicker: 'Better Healthcare Is Built Together',
      heading: 'Creating Greater Impact Through Collaboration.',
      lead: 'We believe the future of healthcare technology will be shaped by collaboration between healthcare providers, technology companies, institutions, and strategic partners.',
      tracks: [
        {
          title: 'Healthcare Provider Partnerships',
          audience: 'Dental Practices, Clinics & Hospital Groups',
          desc: 'Collaborate with NEO on digital clinic transformation with KHAYR and facility sanitization standards with Neolyte.',
          category: 'Healthcare Solutions',
        },
        {
          title: 'Technology & Integration Partnerships',
          audience: 'Cloud, Insurance, Payment & API Partners',
          desc: 'Explore system integration, data interoperability, cybersecurity infrastructure, and partner ecosystem connectivity.',
          category: 'Technology & Integration',
        },
        {
          title: 'Commercial & Distribution Partnerships',
          audience: 'Medical Distributors & Implementation Partners',
          desc: 'Partner with us to expand market access for Neolyte SN/DS, Neogate hardware, and clinic onboarding services.',
          category: 'Business & Strategic Partnerships',
        },
        {
          title: 'Clinical Advisory & Strategic Investors',
          audience: 'Clinical Specialists, Institutions & Investors',
          desc: 'Joint workflow validation, healthcare research, and long-term portfolio growth opportunities across Indonesia and beyond.',
          category: 'Business & Strategic Partnerships',
        },
      ],
      ctaButton: 'Start a Partnership Conversation',
    },
    insights: {
      sectionNumber: '07. Insights & Perspectives',
      kicker: 'Perspectives on the Future of Healthcare Technology',
      heading: 'Insights on Connected Digital Care & Clinical Hygiene.',
      lead: 'Explore PT Neomedika Elektra Optima’s perspectives on digital healthcare operations, dental practice management, interoperability, and HOCl hygiene science.',
      categories: [
        'All Topics',
        'Digital Healthcare',
        'Dental Technology',
        'Healthcare Hygiene',
        'Interoperability & Integration',
      ],
      readArticleLabel: 'Read Full Article',
      closeArticleLabel: 'Close Article',
      articles: [
        {
          slug: 'why-healthcare-needs-connected-digital-systems',
          category: 'Digital Healthcare',
          date: '02 November 2026',
          readTime: '4 min read',
          title: 'Why Healthcare Organisations Need More Connected Digital Systems',
          summary:
            'Disconnected scheduling, paper charts, and manual inventory tracking slow down care delivery. Discover how unified operating platforms bridge the gap.',
          body: [
            'Across many clinics and healthcare practices, daily operations remain split across disconnected tools: appointments are managed on messaging apps, clinical notes live in isolated files, and inventory is checked only when supplies run low.',
            'PT Neomedika Elektra Optima’s connected platform approach bridges clinical, administrative, and financial workflows. When a dentist completes charting on a digital odontogram, billing drafts and consumable stock deductions update automatically.',
            'The outcome is up to 40% less administrative overhead and a calmer, better-coordinated care experience for both clinicians and patients.',
          ],
        },
        {
          slug: 'modern-dental-practice-operating-system-khayr',
          category: 'Dental Technology',
          date: '28 October 2026',
          readTime: '5 min read',
          title: 'The Role of Practice Management Technology in Modern Dentistry',
          summary:
            'Inside KHAYR’s three-pillar architecture—Foundation, Patient Journey, and Command Centre—plus performance-based partner voucher promotions.',
          body: [
            'Running a modern dental clinic requires balancing clinical precision with business sustainability. Dentists need intuitive FDI Odontogram charting, while clinic owners need real-time revenue visibility and reliable patient acquisition channels.',
            'Through KHAYR, dental practices gain a unified operating system paired with KHAYR Voucher Promotion—allowing clinics to publish treatment vouchers across major partner apps including Telkomsel, Indosat, AXISNET, XL, and AstraPay.',
            'Because promotional fees are tied strictly to redeemed clinical transactions under a Pay as You Grow model, marketing spend stays directly aligned with real clinic revenue.',
          ],
        },
        {
          slug: 'hocl-science-safe-effective-disinfection-neolyte',
          category: 'Healthcare Hygiene',
          date: '19 October 2026',
          readTime: '4 min read',
          title: 'The Science of Hypochlorous Acid (HOCl): Alcohol-Free Clinical Sanitization',
          summary:
            'How the natural antimicrobial molecule produced by human white blood cells powers Neolyte’s 99.99% pathogen efficacy without toxicity or skin irritation.',
          body: [
            'Conventional disinfectants force a compromise between potency and safety: alcohol dehydrates skin and poses flammability risks, while chlorine bleach is corrosive and irritating.',
            'Hypochlorous Acid (HOCl)—the active ingredient in Neolyte—resides in the Ideal Zone. Naturally generated by neutrophils in the human immune system, HOCl rapidly neutralizes bacteria, viruses, and fungi while remaining non-toxic and non-irritating.',
            'Backed by Ministry of Health permits KEMENKES RI PKD 20501023189 (Neolyte SN) and PKD 20502023190 (Neolyte DS) plus IPB University laboratory verification, Neolyte protects hands, clinical instruments, room air, and food surfaces.',
          ],
        },
        {
          slug: 'interoperability-connecting-healthcare-information',
          category: 'Interoperability & Integration',
          date: '10 October 2026',
          readTime: '4 min read',
          title: 'Interoperability: Connecting Healthcare Information Responsibly',
          summary:
            'Why standards-aware APIs, role-based access control, and SATUSEHAT readiness are foundational to Indonesia’s digital healthcare future.',
          body: [
            'As national healthcare ecosystems mature, clinics and hospitals need software engineered for structured data exchange rather than closed silos.',
            'PT Neomedika Elektra Optima builds every platform around Integration by Design and strict privacy governance—ensuring interoperability goes hand in hand with data security and patient trust.',
          ],
        },
      ],
    },
    contact: {
      sectionNumber: '08. Contact PT Neomedika Elektra Optima',
      kicker: 'Let’s Build a More Connected Healthcare Future',
      heading: 'Let’s Start a Conversation With NEO.',
      lead: 'Whether you are exploring the KHAYR dental platform, ordering Neolyte healthcare hygiene solutions, or discussing strategic partnerships, submit your enquiry below. Every submission is automatically saved to our system and integrated with Google Sheets and Gmail.',
      formTitle: 'Official Corporate Enquiry, Product Demo & Partnership Form',
      formSubtitle:
        'Please provide your business or institutional contact details. In line with NEO privacy governance, do not submit sensitive patient medical records.',
      fields: {
        fullName: 'Full Name *',
        fullNamePlaceholder: 'e.g. drg. Budi Santoso / Rina Wijaya',
        businessEmail: 'Business / Institutional Email *',
        businessEmailPlaceholder: 'name@yourclinic.co.id',
        phone: 'Phone / WhatsApp Number',
        phonePlaceholder: '+62 812 XXXX XXXX',
        organisation: 'Clinic / Hospital / Organisation Name',
        organisationPlaceholder: 'e.g. Senyum Optima Dental Clinic',
        countryCity: 'City / Country Market',
        countryCityPlaceholder: 'e.g. Jakarta, Bandung, Singapore',
        category: 'Enquiry Category *',
        productInterest: 'Product / Solution Interest *',
        message: 'Message / Requirements *',
        messagePlaceholder:
          'Describe your requirements (e.g. requesting a KHAYR demo for 2 dental branches, or a quotation for Neolyte DS 5000ml)...',
        privacyConsent:
          'I acknowledge that PT Neomedika Elektra Optima may store and process these business contact details to respond to my enquiry in accordance with corporate privacy rules.',
        submitBtn: 'Submit Enquiry & Save to NEO System',
        submittingBtn: 'Saving & Dispatching Notification...',
      },
      categories: [
        'Healthcare Solutions',
        'Business & Strategic Partnerships',
        'Technology & Integration',
        'General',
        'Media & Corporate',
        'Careers',
      ],
      productInterests: [
        'KHAYR Digital Dental Platform',
        'Neolyte SN / DS Hygiene Line',
        'KHAYR + Neolyte Integrated Clinic Package',
        'Corporate & Ecosystem Partnership',
        'General NEO Enquiry',
      ],
      workspaceBox: {
        title: 'Automatic Google Gmail & Google Sheets Integration Panel',
        subtitle:
          'Connect your corporate Google Workspace account to sync all incoming enquiries directly into Google Sheets and dispatch automatic email notifications via Gmail.',
        connectedAs: 'Connected as:',
        signInBtn: 'Sign in with Google',
        signOutBtn: 'Disconnect Account',
        createSheetBtn: 'Create New Google Sheet & Sync',
        syncAllBtn: 'Sync to Google Sheet',
        sendGmailBtn: 'Send Email Notification via Gmail',
        exportCsvBtn: 'Download CSV Backup',
        recipientLabel: 'Automated Notification Recipient Email:',
        sheetIdLabel: 'Target Google Spreadsheet ID (Optional / Auto-Created):',
      },
    },
    footer: {
      corporateDescriptor: 'PT Neomedika Elektra Optima · Integrated Healthcare Technology',
      statement:
        'Connecting Healthcare. Empowering Better Lives. Developing connected healthcare technology platforms and trusted clinical hygiene solutions.',
      disclaimerTitle: 'Corporate & Product Status Disclaimer',
      disclaimerText:
        'Information on this website describes PT Neomedika Elektra Optima’s (NEO) corporate direction, business framework, and product portfolio. KHAYR is currently under development and validation; feature scope and integrations are subject to release readiness. Neolyte SN holds distribution permit KEMENKES RI PKD 20501023189 and Neolyte DS holds KEMENKES RI PKD 20502023190.',
      copyright: '© 2026 PT Neomedika Elektra Optima (NEO). All rights reserved.',
    },
  },
};
