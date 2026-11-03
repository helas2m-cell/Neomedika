# PT Neomedika Elektra Optima (NEO) — Corporate Website & Lead Integration

A modern, bilingual (Bahasa Indonesia & English) corporate website for **PT Neomedika Elektra Optima (NEO)** that unites its official **Neomedika Brand Guideline v0.9** visual identity with the strategic positioning of the **NEO Website Guide Pack**, featuring in-depth showcases for **KHAYR** (Digital Dental Healthcare Platform) and **Neolyte** (HOCl Healthcare Hygiene Product Line), plus an automated enquiry system integrated with **Google Sheets** and **Google Gmail**.

---

## User Review & Critical Decisions

> [!IMPORTANT]
> The following architectural and design decisions incorporate your confirmed preferences from our clarification step and align all attached NEO corporate guidelines:

- **Confirmed Decision 1 — Visual Identity & Palette (`Neomedika Brand Guideline v0.9`)**: The website will strictly apply the official **neomedika — trusted healthcare solutions** hexagonal "N" logo and the **Magenta (`#EE498E`) → Purple (`#903595`) → Deep Purple (`#342077`) → Plum Text (`#381B37`)** color system on a clean white canvas, maintaining strict logo safe-space rules ($X = \frac{1}{4}$ symbol width) and a white background panel wherever the logo sits.
- **Confirmed Decision 2 — Product Portfolio Hierarchy (`KHAYR` & `Neolyte`)**:
  - **KHAYR** is featured prominently as NEO's flagship **Digital Dental Healthcare Platform (Dental Practice Operating System)** covering Clinical EMR & Digital Odontogram, Clinic & Multi-Branch Operations, Billing & Finance, Inventory, Patient Relationship Management, and SATUSEHAT-ready interoperability architecture (with clear development-stage disclosure per corporate governance rules).
  - **Neolyte** is presented as NEO's **Healthcare Hygiene Line**, complete with technical specifications from the official Indonesia brochure (`Neolyte SN` Hand & Body Sanitizer pH 4.5–5.5, 60 ppm & `Neolyte DS` Disinfectant pH 6.0–7.0, 160–220 ppm), **KEMENKES RI PKD 20501023189 & 20502023190**, **Halal MUI**, **IPB Laboratory Verification**, an interactive **Dilution & Application Calculator**, and supported hardware devices (Neogate Fog Gate, Ultrasonic Diffuser, Electric Sprayer, Automatic Dispenser, Fogging Machine, Spray Mop).
- **Confirmed Decision 3 — Lead Capture with Google Gmail & Google Sheets Integration**: Visitor enquiries are captured via a validated corporate contact form, persisted immediately to the internal system store, and connected with **Google Workspace (`Google Sheets` & `Gmail`)** so incoming enquiries are automatically recorded into your company spreadsheet and trigger formatted email notifications/confirmations via Gmail.
- **Confirmed Decision 4 — Bilingual Experience (ID / EN)**: Complete, editorially reviewed **Bahasa Indonesia** and **English** content across every section, switchable instantaneously without page reload.

---

## 1. Overview & Core Concept

- **What It Does**: Serves as the authoritative corporate digital headquarters for **PT Neomedika Elektra Optima (NEO)**—communicating corporate vision, the **Five Strategic Business Pillars**, the **KHAYR** digital dental platform, the **Neolyte** healthcare hygiene line, technology & governance principles, partnership pathways, editorial insights, and an integrated lead management & email notification workflow.
- **Target Audience / Persona**:
  - **Healthcare Providers & Dental Clinic Owners**: Exploring KHAYR practice management software or Neolyte clinical sanitization solutions.
  - **Technology & Strategic Partners**: Evaluating interoperability, API integration, and distribution partnerships with NEO.
  - **Institutional Stakeholders & Investors**: Reviewing PT Neomedika Elektra Optima's platform roadmap, 4-stage growth strategy, and corporate governance.
- **Key Value**: Establishes high institutional trust ("Trusted Healthcare Solutions" / "Connecting Healthcare. Empowering Better Lives.") while converting visitor interest directly into structured leads in Google Sheets and automated emails via Gmail.

---

## 2. User Experience & Visual Design

### Key User Flows

1. **First-Screen Corporate Positioning & Bilingual Toggle**:
   - Visitors land on a spacious 1440px-wide editorial Hero presenting PT Neomedika Elektra Optima's core proposition (*"Connecting Healthcare. Empowering Better Lives."* / *"Menghubungkan Layanan Kesehatan. Memberdayakan Kehidupan yang Lebih Baik."*) alongside an interactive visual showcase of NEO's connected healthcare ecosystem.
   - A language switcher (`ID` / `EN`) in the utility bar switches all copy, product specs, and form labels between Bahasa Indonesia and English.
2. **Corporate Profile & Five Strategic Pillars Discovery**:
   - Visitors explore **About NEO** (Vision, 5 Missions, 6 Corporate Values, 3-Stage Corporate Strategy, and 4-Phase Growth Roadmap) and an asymmetric Bento grid of the **Five Interconnected Business Pillars** (`01. Healthcare Management Systems`, `02. Digital Healthcare Platforms`, `03. Integration & Interoperability`, `04. Healthcare Intelligence & Automation`, `05. Healthcare Ecosystem & Connectivity`).
3. **KHAYR Flagship Digital Dental Platform Exploration**:
   - Visitors interact with a dedicated **KHAYR Product Showcase** featuring an interactive module explorer across its 6 core capabilities (Clinical Management & Dental EMR with Digital Odontogram, Clinic & Multi-Branch Management, Financial Management, Inventory & Procurement, Patient Relationship Management, and Integration & Intelligence), complete with concept UI previews, link to the live KHAYR preview, and transparent development-stage disclosure.
4. **Neolyte Healthcare Hygiene & Dilution Explorer**:
   - Visitors switch to or scroll into the **Neolyte Product Showcase**, comparing **Neolyte SN (60 ppm, pH 4.5–5.5)** and **Neolyte DS (160–220 ppm, pH 6.0–7.0)**, reviewing the HOCl safety vs. effectiveness matrix (comparing HOCl against Alcohol, Chlorine, Iodine, Phenol, and Chlorhexidine), inspecting verified credentials (**KEMENKES RI PKD 20501023189 & 20502023190**, **Halal MUI**, **IPB Lab Test 99.99% efficacy**), using the interactive **Dilution Ratio Calculator** (`1:5`, `1:4`, `1:3`, `1:2`, `1:1`, and Undiluted), and browsing packaging sizes (`60ml` to `5000ml`) and application hardware (`Neogate`, `Diffuser`, `Electric Sprayer`, `Fogging Machine`).
5. **Enquiry Submission & Automatic Google Sheets + Gmail Sync**:
   - Visitors click any section CTA (*"Explore Our Solutions"*, *"Partner With NEO"*, *"Enquire About KHAYR"*, *"Order / Enquire Neolyte"*) which pre-selects the relevant Enquiry Category in the **Contact NEO Form**.
   - Upon submitting validated details (Full Name, Business Email, Organisation, Phone/WhatsApp, Country/City, Enquiry Category, Product Interest, Message, and Privacy Consent), the enquiry is saved to the server database and synced to **Google Sheets** + **Gmail** notification (with a dedicated **Corporate Admin Workspace Panel** where NEO staff can sign in with Google, link/create the target Google Sheet, and trigger or auto-sync Gmail notifications with confirmation).

### Visual Identity & Theme

- **Aesthetic Direction**: Premium, minimal, confident, human-centered international healthcare technology aesthetic—combining crisp editorial structure from the NEO Website Guides with the vibrant signature gradient and plum typography of **Neomedika Brand Guideline v0.9**.
- **Color Palette & Mood (60-30-10 Discipline)**:
  - **60% Dominant Neutral Canvas (`--background`)**: Pure White (`#FFFFFF`) and Soft Lavender-White (`#FAF8FC`) surfaces that honor the mandatory white safe-space around the official Neomedika logo.
  - **30% Structural & Deep Brand Surfaces (`--primary-surface` / `--text`)**:
    - **Plum Text (`#381B37`)**: Primary headings and high-contrast body typography.
    - **Deep Purple (`#342077`)**: High-impact corporate anchor sections (Closing Partnership Banner, Corporate Snapshot Bar, and Footer).
    - **Tagline Grey (`#666666`)**: Secondary descriptions and unboxed metadata.
    - **Hairline Divider (`#EAE4F2`)**: Subtle 1px structural borders.
  - **10% Accent Budget (`--accent`)**:
    - **Neomedika Magenta (`#EE498E`) & Neomedika Purple (`#903595`)**: Signature gradient (`linear-gradient(135deg, #EE498E 0%, #903595 55%, #342077 100%)`) reserved strictly for primary CTAs, active filter states, and key brand highlights.
    - **Product Contextual Accents**: Subtle teal/cyan & fresh green accents exclusively inside the Neolyte product comparison matrix to reflect its official packaging (`Neolyte SN` Green & `Neolyte DS` Blue).
- **Typography & Hierarchy (2+1 Font Rule)**:
  - **Display & Headings**: `Plus Jakarta Sans` (SemiBold 600 / Bold 700, tight tracking `-0.02em`, `text-wrap: balance`, Hero `clamp(2.25rem, 4vw, 3.5rem)`).
  - **Body & UI Prose**: `DM Sans` (Regular 400 / Medium 500, `16px` base with `1.65` line-height and `65ch` max measure).
  - **Technical Specs & Metrics**: `JetBrains Mono` (`tabular-nums` for pH values, ppm concentrations, dilution ratios, Kemenkes RI PKD numbers, and submission timestamps).
- **Component Styling & Layout**:
  - **Strict 3-Zone Top Bar Contract**: Zone 1 features the official Neomedika brand lockup on a clean white surface; Zone 2 houses 5 concise single-line navigation links (`About`, `Business`, `Products`, `Technology`, `Insights`); Zone 3 holds the primary `Contact NEO` CTA button. Language switching (`ID | EN`) and Admin Workspace sync live cleanly in a top sub-bar / hero utility strip.
  - **Zero-Pill & Anti-Slop Discipline**: All article categories, product status disclosures, and regulatory numbers are rendered as clean, unboxed typography separated by `·` or `/` (no badge sandwiches, no `border-l-4` stripes, no `//` code prefixes, and no pulsing decorative dots).

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Dual-Layer Lead Architecture (Server Persistence + Google Workspace OAuth)**
  - *Chosen Approach*: Combine an Express server-side persistent JSON/SQLite lead store with first-party **Google Workspace OAuth (`gmail.send` + `spreadsheets`)**.
  - *Why*: Public website visitors should be able to submit the contact form immediately without needing to log into Google themselves, while PT Neomedika Elektra Optima's owner/admin (`helas.m@gmail.com`) can authenticate with Google in one click to automatically log all enquiries into a dedicated **Google Sheet** and send automated **Gmail** notifications/replies.
  - *Alternatives Considered*: Pure client-only `mailto:` links (rejected because they do not store data in your system or Google Sheets) or requiring visitors to authenticate with Google just to send an enquiry (rejected due to high friction).
- **Decision 2: Accurate Product Governance for KHAYR vs. Neolyte**
  - *Chosen Approach*: Present **KHAYR** with rich interactive module workflows and clear *Under Development* status notes (as mandated by Document 03 & 05), while presenting **Neolyte** with its full verified commercial & regulatory credentials from the attached brochure (`KEMENKES RI PKD 20501023189`, `KEMENKES RI PKD 20502023190`, `Halal MUI`, and `IPB Lab Test`).
  - *Why*: Satisfies both the corporate governance rules in the NEO Website Guide Pack and your explicit requirement to showcase both KHAYR and Neolyte comprehensively.
- **Decision 3: Recreation of the Official Neomedika Hexagonal "N" Brand Mark**
  - *Chosen Approach*: Craft a precision vector SVG of the **Neomedika** hexagonal "N" ribbon logo with exact Magenta (`#EE498E`) to Purple (`#903595`) to Deep Purple (`#342077`) gradients, local folds, lowercase `neomedika` wordmark in Plum (`#381B37`), and `trusted healthcare solutions` tagline in `#666666`, always placed on a clean white container with $X = \frac{1}{4}$ safe clearance.
  - *Why*: Follows Section 03, 04, 06, and 08 of `Neomedika_Brand_Guideline_v0.9.pdf` so the brand looks razor-sharp at any screen density (1x/2x/Retina).

---

## 4. Technical Architecture & Data Strategy *(Technical Reference)*

### Architecture & Component Diagram

```
┌──────────────────────────────────────────────────────────────────────────────┐
│                     PT NEOMEDIKA ELEKTRA OPTIMA WEB APP                      │
│                  Bilingual Context (ID / EN) + SEO JSON-LD                   │
└───────────────┬──────────────────────────────────────────────┬───────────────┘
                │                                              │
                ▼                                              ▼
┌───────────────────────────────────────┐      ┌───────────────────────────────┐
│        PUBLIC CORPORATE VIEWS         │      │  CONTACT & WORKSPACE ENGINE   │
│                                       │      │                               │
│  ┌─────────────────────────────────┐  │      │  ┌─────────────────────────┐  │
│  │ 3-Zone Top Bar (Neomedika Logo) │  │      │  │ Validated Enquiry Form  │  │
│  └─────────────────────────────────┘  │      │  │ (Category, Product,     │  │
│  ┌─────────────────────────────────┐  │      │  │  Org, Email, Consent)   │  │
│  │ Hero + Bilingual Utility Bar    │  │      │  └────────────┬────────────┘  │
│  └─────────────────────────────────┘  │      │               │               │
│  ┌─────────────────────────────────┐  │      │               ▼               │
│  │ About NEO (Vision, Mission,     │  │      │  ┌─────────────────────────┐  │
│  │ Values, 4-Phase Roadmap)        │  │      │  │ Express Backend API     │  │
│  └─────────────────────────────────┘  │      │  │ POST /api/enquiries     │  │
│  ┌─────────────────────────────────┐  │      │  │ GET  /api/enquiries     │  │
│  │ Five Strategic Business Pillars │  │      │  └────────────┬────────────┘  │
│  │ (Asymmetric Bento Grid)         │  │      │               │               │
│  └─────────────────────────────────┘  │      │               ▼               │
│  ┌─────────────────────────────────┐  │      │  ┌─────────────────────────┐  │
│  │ KHAYR Product Deep-Dive         │  │      │  │ Google Workspace Sync   │  │
│  │ (6 Dental OS Modules + Preview) │  │      │  │ (Firebase Google OAuth) │  │
│  └─────────────────────────────────┘  │      │  │ • Google Sheets Append  │  │
│  ┌─────────────────────────────────┐  │      │  │ • Gmail Auto-Email Send │  │
│  │ Neolyte Product Deep-Dive       │  │      │  │ • Confirmation Dialog   │  │
│  │ (SN vs DS, HOCl Matrix, IPB/PKD │  │      │  └─────────────────────────┘  │
│  │  Credentials, Dilution Tool)    │  │      │                               │
│  └─────────────────────────────────┘  │      └───────────────────────────────┘
│  ┌─────────────────────────────────┐  │
│  │ Technology, Approach,           │  │
│  │ Solutions, Partnerships,        │  │
│  │ Insights & Deep Purple Footer   │  │
│  └─────────────────────────────────┘  │
└───────────────────────────────────────┘
```

### Data Model & State

- **Enquiry Record (`Enquiry`)**:
  - `id`: Unique identifier (`NEO-2026-XXXX`)
  - `fullName`: Visitor's full name (required)
  - `businessEmail`: Validated email address (required)
  - `phone`: Phone / WhatsApp number (optional)
  - `organisation`: Clinic, hospital, or company name (optional/conditional)
  - `countryCity`: Location / market (e.g., Greater Jakarta, Bandung, International)
  - `category`: `General` | `Business & Strategic Partnerships` | `Healthcare Solutions` | `Technology & Integration` | `Media & Corporate` | `Careers`
  - `productInterest`: `KHAYR Digital Dental Platform` | `Neolyte SN / DS Hygiene Line` | `Corporate & Ecosystem Partnership` | `General NEO Enquiry`
  - `message`: Enquiry details (required, with advisory against submitting sensitive patient health records)
  - `privacyConsent`: Boolean confirmation of privacy notice
  - `locale`: `'id' | 'en'`
  - `createdAt`: ISO timestamp
  - `syncedToSheets`: Boolean status of Google Sheets synchronization
  - `emailNotificationSent`: Boolean status of Gmail notification dispatch

### Interactive Component & State Mapping

- **Bilingual Locale Switcher (`ID` / `EN`)**: Updates global language context immediately across all 9 homepage sections, product deep-dives, insights articles, and form validation messages.
- **Product Deep-Dive Tabs & Calculators**:
  - **KHAYR Interactive Module Explorer**: Lets users switch between Clinical EMR & Odontogram, Clinic Scheduling, Billing & Finance, Inventory, Patient CRM, and Interoperability, updating the displayed workflow diagram and concept UI preview.
  - **Neolyte Interactive Dilution & Application Calculator**: Lets users select an application use case (e.g., *Baby & Food Sterilization 1:5*, *Kitchen & Personal Care / Humidifier 1:4*, *Disinfectant Chamber & Home Surfaces 1:3*, *Public Spaces & Packaging 1:2*, *Hospitals, Clinics & Puskesmas 1:1*, or *Waste & Public Facilities Undiluted*) and input a target volume in liters/milliliters to calculate exact **Neolyte DS** and **Aquades/RO Water** quantities in real time.
- **Contextual CTA Routing**: Clicking any product or partnership CTA smoothly scrolls to the Contact section, pre-populates the corresponding `Enquiry Category` and `Product Interest`, and focuses the form.
- **Google Workspace Admin & Auto-Sync Flow**:
  - Uses client-side Firebase Google OAuth with minimal scopes:
    - `https://www.googleapis.com/auth/spreadsheets` (to create/append enquiries to the PT Neomedika Elektra Optima Lead Sheet)
    - `https://www.googleapis.com/auth/gmail.send` (to send formatted HTML/text email notifications to corporate mailbox `helas.m@gmail.com` and acknowledgement emails)
  - Includes a mandatory explicit confirmation modal before executing any Google Sheets write or Gmail send operation, plus CSV export and local backend persistence.
