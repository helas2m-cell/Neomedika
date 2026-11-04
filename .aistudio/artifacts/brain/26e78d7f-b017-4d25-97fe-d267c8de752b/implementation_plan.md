# Rencana Implementasi Revisi Website Korporat PT Neomedika Elektra Optima (NEO) v1.0

Dokumen ini merinci rencana pembaruan menyeluruh pada website korporat **PT Neomedika Elektra Optima (NEO)** sesuai dengan spesifikasi dalam **NEO Website Revision Master Document (Developer v1.0)** serta preferensi yang telah Anda konfirmasi.

---

## 1. Prinsip Utama & Batasan Desain yang Dipertahankan (Strict Constraints)

1. **Kombinasi Warna Tetap (Tidak Berubah):**
   - Mempertahankan sepenuhnya palet warna identitas saat ini:
     - **Magenta Utama:** `#EE498E`
     - **Ungu Korporat:** `#903595`
     - **Deep Purple:** `#342077`
     - **Dark Plum:** `#381B37`
     - **Soft Lavender & Surface Neutrals:** `#FAF8FC`, `#EAE4F2`, `#D9CEE6`
     - **Aksen Produk Neolyte:** `#189AB4` (Teal) & `#65B741` (Green)
2. **Logo & Identitas Visual Tetap (Tidak Berubah dari Aslinya):**
   - **Logo & Nama Neomedika:** Tetap menggunakan `/assets/aistudio/Logo_dan_Nama_Neomedika_4K_Transparan_93a165b0.png` dan komponen `<NeomedikaLogo />`.
   - **Logo & Nama KHAYR:** Tetap menggunakan `/assets/aistudio/KHAYR_Logo_Name_Transparant_cddcce1f.png`.
   - **Logo & Nama Neolyte:** Tetap menggunakan `/assets/aistudio/Neollyte_logo_2K_379f6785.png`.
   - **Aset Visual Pendukung:** Tetap mempertahankan gambar kemasan `Neolyte_SN_69407702.png`, `Neolyte_DS_bcf3a6e4.png`, kolase aplikasi `Aplikasi_Neoliye_2K_c316e6a3.png`, `Logo_Satusehat_965283aa.png`, serta foto sistem manajemen layanan kesehatan yang telah terpasang.
3. **Pengaturan Bahasa & Email Resmi:**
   - **Bahasa Default:** Bahasa Indonesia (`ID`) sebagai default saat halaman pertama kali dibuka, dilengkapi tombol pengalih bahasa (`ID` / `EN`) yang utuh dan konsisten di seluruh 8 halaman.
   - **Email Korporat Publik:** Mengganti tampilan email personal di bagian publik menjadi `info@neomedika.com` (serta `partnerships@neomedika.com` untuk kemitraan).

---

## 2. Struktur Navigasi 8 Menu Utama (Desktop & Mobile Pop-Up Drawer)

Navigasi header (baik pada layar desktop maupun menu *pop-up drawer* pada tampilan *mobile*) akan diperbarui untuk mencakup **8 halaman utama** sesuai Section 3 dokumen revisi:

1. **Home (Beranda)** — Ringkasan korporat, *Hero Section*, ringkasan *Who We Are*, ringkasan *5 Pilar Bisnis*, *Featured Products* (KHAYR & Neolyte), ringkasan *Technology*, ringkasan *Partnerships*, 3 *Featured Insights*, dan *Closing CTA*.
2. **About NEO (Tentang NEO)** — Pengantar halaman, *Who We Are*, *Vision*, *Mission* (5 poin misi), *Corporate Values* (5 nilai utama: *Innovation, Integrity, Collaboration, Responsibility, Long-Term Thinking*), dan *Our Development Approach* (5 tahapan pengembangan).
3. **Our Business (Bisnis Kami)** — Penjabaran lengkap **5 Pilar Strategis** beserta *Scope* dan *Strategic Focus* masing-masing pilar, ditutup dengan *Corporate Business Disclaimer* resmi.
4. **Our Products (Produk Kami: KHAYR & Neolyte)** — Dilengkapi sub-navigasi/pilihan cepat untuk melihat halaman penuh **KHAYR** dan **Neolyte**.
5. **Technology (Teknologi)** — Menampilkan **6 Prinsip Teknologi & Pengembangan Produk** (*Integration by Design, Scalable Architecture, Security by Design, Responsible Data Management, Standards-Aware Interoperability, Human-Centred Product Validation*) serta menghapus klaim teknis absolut yang belum tervalidasi.
6. **Partnerships (Kemitraan)** — Menampilkan **4 Kategori Kemitraan Strategis** (*Healthcare Providers, Technology Partners, Distribution Partners, Clinical & Institutional Partners*) beserta tombol CTA *Discuss Partnership Opportunities*.
7. **Insights (Wawasan)** — Menampilkan **5 Kategori Wawasan & Perspektif Industri** (*Digital Healthcare, Dental Technology, Healthcare Hygiene, Interoperability & Integration, Corporate & Industry Perspectives*) dengan artikel edukatif terstruktur.
8. **Contact (Kontak)** — Formulir resmi *Corporate Enquiry & Partnership Form*.

---

## 3. Rincian Perubahan Konten Per Halaman

### A. Halaman 01 — Home (`Home`)
- **Identitas & Tagline Korporat:**
  - *Corporate Name:* `PT Neomedika Elektra Optima`
  - *Corporate Brand:* `NEO — Integrated Healthcare Technology`
  - *Primary Tagline:* `Connecting Healthcare. Empowering Better Lives.` (beserta padanan Bahasa Indonesia yang selaras).
- **Ringkasan Ekosistem Terintegrasi:** Menampilkan kartu navigasi cepat menuju *About NEO*, *5 Business Pillars*, *Featured Products (KHAYR & Neolyte)* dengan logo asli masing-masing, *Technology*, *Partnerships*, dan *Featured Insights*.

### B. Halaman 02 — About NEO (`About NEO`)
- Menyajikan struktur lengkap sesuai spesifikasi Halaman 02 dokumen revisi:
  - **Who We Are:** Penjelasan posisi NEO sebagai perusahaan teknologi kesehatan terintegrasi.
  - **Vision & Mission:** Pernyataan visi dan 5 butir misi resmi.
  - **Corporate Values:** 5 kartu nilai inti (*Innovation, Integrity, Collaboration, Responsibility, Long-Term Thinking*).
  - **Our Development Approach:** 5 langkah berurutan (*01 Understand Healthcare Needs*, *02 Design Practical Solutions*, *03 Develop Technology Platforms*, *04 Validate Clinical and Operational Workflows*, *05 Build Strategic Partnerships and Scale*).

### C. Halaman 03 — Our Business (`Our Business`)
- Menampilkan **5 Pilar Bisnis Utama** beserta rincian *Scope* dan *Strategic Focus*:
  1. *Pillar 01 — Healthcare Management Systems*
  2. *Pillar 02 — Smart Medical Devices*
  3. *Pillar 03 — Consumer Health & Hygiene*
  4. *Pillar 04 — Healthcare Infrastructure & Consulting*
  5. *Pillar 05 — Digital Health Ecosystem Integration*
- Menyertakan **Required Disclaimer** pada bagian bawah halaman mengenai status pengembangan produk, validasi, dan persetujuan regulasi.

### D. Halaman 04 — KHAYR (`Our Products → KHAYR`)
- **Logo & Visual:** Mempertahankan logo asli `KHAYR` dan logo `SATUSEHAT` pada posisinya.
- **Headline & Positioning:** `KHAYR — Building a More Connected Dental Practice` (*Dental Clinic Management & Electronic Medical Record Platform*).
- **8 Planned Product Modules:**
  1. *Clinical Management & Dental EMR*
  2. *Digital Odontogram & Treatment Planning*
  3. *Patient Relationship Management*
  4. *Appointment & Scheduling Management*
  5. *Billing & Financial Management*
  6. *Inventory & Procurement*
  7. *Clinic & Multi-Branch Management*
  8. *Operational Reporting & Analytics*
- **7 Product Development Principles:** Menampilkan prinsip rekayasa produk KHAYR secara transparan.
- **Concept UI Preview & Penyesuaian Klaim:**
  - Menambahkan badge `Concept UI — Illustrative Product Preview` pada pratinjau antarmuka produk dengan data pasien simulasi/sintetis.
  - Mengganti metrik absolut yang belum tervalidasi (`40% Admin Time Saved`, `3x No-Show Reduction`, `99.4% Record Accuracy`, `Zero Duplicate EMR Records`) menjadi nilai manfaat terarah: **Structured Clinical Documentation**, **Connected Patient Workflows**, dan **Centralised Practice Management**.
- **Interoperability Development Roadmap (SATUSEHAT):**
  - Menyajikan penjelasan peta jalan interoperabilitas yang mempertimbangkan standar layanan kesehatan Indonesia (termasuk SATUSEHAT) dengan catatan kepatuhan teknis & regulasi.
- **Proposed Digital Voucher Distribution Ecosystem:**
  - Memperbarui bagian promosi voucher menjadi konsep ekosistem distribusi voucher digital tanpa mencantumkan klaim kemitraan ritel pihak ketiga yang belum terkonfirmasi, dilengkapi *Required Disclosure*.
- **CTA & Product Status Disclosure:**
  - Tombol CTA menggunakan `Register Your Interest` dan `Request Product Information` (mengarahkan ke formulir kontak dengan kategori KHAYR), serta menampilkan *Product Status Disclosure*.

### E. Halaman 05 — Neolyte (`Our Products → Neolyte`)
- **Logo & Visual:** Mempertahankan logo asli `Neolyte`, foto produk `Neolyte SN` & `Neolyte DS`, serta gambar kolase aplikasi `Aplikasi_Neoliye_2K_c316e6a3.png`.
- **Headline & Positioning:** `Neolyte Healthcare Hygiene Solutions` (*HOCl-Based Sanitizer & Disinfectant Product Line* untuk *Neolyte SN — Hand & Body Sanitizer* dan *Neolyte DS — Surface & Equipment Disinfectant*).
- **Penyesuaian Klaim Kepatuhan:**
  - Menghapus/menyesuaikan klaim absolut yang belum terverifikasi (`100% Safe`, `Baby Safe`, `Food Grade`, `Sterilises Food`, `100x More Effective Than Bleach`, `EPA/CDC Approved`) dan menggantinya dengan deskripsi fungsi higienitas dan sanitasi berbasis *Hypochlorous Acid (HOCl)* yang akurat sesuai dokumen revisi.
- **Panduan Kalkulator Pengenceran (Dilution Guide Notice):**
  - Menambahkan pemberitahuan resmi pada fitur *Interactive Dilution Calculator* bahwa rasio pengenceran bersifat ilustratif dan pengguna harus selalu mengacu pada label produk resmi yang disetujui.
- **CTA & Product Specification Disclosure:**
  - Tombol CTA `Product Enquiry` dan `Request Product Documentation` serta *Product Specification Disclosure*.

### F. Halaman 06, 07, 08 — Technology, Partnerships, Insights
- **Technology:** Menampilkan 6 kartu prinsip arsitektur teknologi NEO secara bersih dan profesional.
- **Partnerships:** Menampilkan 4 kategori mitra strategis beserta tombol CTA `Discuss Partnership Opportunities` yang terhubung langsung ke formulir kontak.
- **Insights:** Menampilkan 5 kategori topik edukasi & perspektif industri beserta 3 artikel wawasan pilihan (*Featured Insights*) yang dapat dibaca melalui modal interaktif.

### G. Halaman 09 — Contact & Footer (`Contact`)
- **Corporate Enquiry & Partnership Form:**
  - Field lengkap: *Full Name*, *Company / Institution / Clinic Name*, *Role / Title*, *Email Address*, *Phone / WhatsApp Number*, *Enquiry Category* (6 kategori resmi sesuai dokumen revisi), dan *Message / Enquiry Details*.
- **Patient Data Protection Notice:**
  - Menampilkan kotak peringatan jelas pada formulir agar pengunjung tidak mengirimkan rekam medis pasien atau data kesehatan sensitif melalui formulir korporat.
- **Consent & Privacy Notice Modal:**
  - Checkbox persetujuan pemrosesan data kontak bisnis beserta tautan modal **Privacy Notice** resmi PT Neomedika Elektra Optima.
- **Penghapusan Database Publik:**
  - Menghapus sepenuhnya bagian `NEO System Incoming Enquiry Database`, penghitung jumlah record masuk, tabel log publik, dan tombol `Download CSV Backup` dari tampilan website publik.
- **Footer Resmi:**
  - Menampilkan identitas `PT Neomedika Elektra Optima | NEO — Integrated Healthcare Technology`, tagline `Connecting Healthcare. Empowering Better Lives.`, email resmi `info@neomedika.com`, *Corporate Disclaimer*, dan hak cipta `© 2026 PT Neomedika Elektra Optima (NEO). All rights reserved.`

---

## 4. File yang Akan Dimodifikasi

1. `/src/data/content.ts` — Pembaruan struktur data dwibahasa (`id` sebagai default & `en`) untuk mencakup seluruh 8 halaman, modul KHAYR, spesifikasi Neolyte, prinsip teknologi, kategori kemitraan, artikel wawasan, *Privacy Notice*, dan *Disclaimers*.
2. `/src/components/KhayrShowcase.tsx` — Pembaruan tampilan 8 modul KHAYR, 7 prinsip pengembangan, badge *Concept UI — Illustrative Product Preview*, *Interoperability Development Roadmap* (dengan logo SATUSEHAT), *Proposed Digital Voucher Distribution Ecosystem*, dan *Product Status Disclosure*.
3. `/src/components/NeolyteShowcase.tsx` — Pembaruan deskripsi Neolyte SN & DS sesuai panduan klaim dokumen revisi, penambahan catatan panduan label resmi pada *Dilution Calculator*, serta *Product Specification Disclosure*.
4. `/src/components/ContactWorkspaceSection.tsx` — Pembaruan formulir menjadi *Corporate Enquiry & Partnership Form* dengan 6 kategori resmi, *Patient Data Protection Notice*, checkbox persetujuan & modal *Privacy Notice*, penggunaan email resmi `info@neomedika.com`, serta penghapusan penuh tabel *Incoming Enquiry Database* & *CSV Export* dari halaman publik.
5. `/src/App.tsx` — Implementasi navigasi 8 halaman utama (desktop & *mobile pop-up menu*), bahasa default `id`, penambahan komponen halaman *About NEO*, *Our Business*, *Technology*, *Partnerships*, dan *Insights*, serta pembaruan *Footer* korporat.
6. `/index.html` — Pembaruan judul halaman (`NEO | Integrated Healthcare Technology — PT Neomedika Elektra Optima`) dan meta deskripsi SEO.
