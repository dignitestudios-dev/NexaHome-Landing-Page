# NexaHome Landing Page — Comprehensive Project Documentation

## 1. Executive Summary & Vision

**NexaHome** (`https://nexahomeapp.com`) is a modern web platform and landing portal designed to bridge the gap between homeowners and local, verified home service experts (contractors, painters, electricians, handymen, cleaners, landscapers, audio/visual specialists) primarily focused on the **Baton Rouge, Louisiana** market.

The platform has three key audiences and user experiences:
1. **Home Service Experts (`/`)**: Discovering genuine customer project leads, understanding the credit-based lead unlocking model, registering for early access, or entering the live Expert Web App (`https://expert.nexahomeapp.com`).
2. **Homeowners (`/homeowners`)**: Searching for verified local professionals, submitting project requests without platform fees, understanding privacy protections, or launching the Homeowner Web App (`https://homeowner.nexahomeapp.com`).
3. **Mobile App Users (`/get` & Modal)**: Fast direct installation via Apple App Store and Google Play Store, augmented by automated OS detection and QR code generation for desktop-to-mobile handoffs.

---

## 2. Technology Stack & Core Dependencies

| Category | Technology | Version | Purpose / Notes |
| :--- | :--- | :--- | :--- |
| **Framework** | Next.js (App Router) | `14.2.3` | React server/client components, SSR/SSG, route handlers |
| **Runtime / UI** | React / React-DOM | `^18.x` | Modern component architecture & hooks |
| **Language** | JavaScript (ESNext / JSX) | TypeScript `5.9.3` config | `.jsx` / `.js` files with active typechecking |
| **Styling** | Tailwind CSS | `^3.3.0` | Utility-first styling with custom theme extensions |
| **PostCSS** | PostCSS + Autoprefixer | `^8` / `^10.0.1` | CSS transformations and cross-browser vendor prefixing |
| **Icons** | Lucide React | `^0.575.0` | Feather/Lucide vector icons (`User`, `Mail`, `Phone`, `Check`, etc.) |
| **Scroll Animation** | AOS (Animate On Scroll) | `^2.3.4` | Smooth entrance animations initialized via client wrapper |
| **Interactive UI** | React Card Flip | `^1.2.3` | 3D card-flip interaction support |
| **Email Service** | `@sendgrid/mail` | `^8.1.6` | Transactional notifications & confirmation emails |
| **Audience CRM** | Mailchimp API v3.0 | Native `fetch` | Automatic list subscription, merge fields, and contact tagging |
| **Deployment** | Vercel | Vercel CLI / Git CI | Configured via `vercel.json` with `@vercel/next` |

---

## 3. Directory & File Structure

```
NexaHome-Landing-Page/
├── .env                              # Local environment variables (SendGrid, Mailchimp, App URLs)
├── .gitignore                        # Git exclusion rules (node_modules, .next, .env, etc.)
├── google9127827f9220a189.html       # Google Search Console site verification token
├── next.config.js                    # Next.js config (reactStrictMode, remote image domains)
├── package.json                      # Dependencies, scripts (dev, build, start)
├── postcss.config.js                 # Tailwind CSS & Autoprefixer plugin config
├── tailwind.config.js                # Custom palette, fonts, content paths
├── tsconfig.json                     # TypeScript compiler options & path alias (@/*)
├── vercel.json                       # Vercel deployment build target definition
│
├── app/                              # Next.js 14 App Router
│   ├── globals.css                   # Global styles, Google Fonts imports, custom utilities
│   ├── layout.jsx                    # Root layout with site-wide SEO metadata & AOS initialization
│   ├── page.jsx                      # Expert Landing Page (Route: `/`)
│   │
│   ├── api/
│   │   └── waitlist/
│   │       └── route.js              # POST endpoint for waitlist submissions (Mailchimp + SendGrid)
│   │
│   ├── homeowners/
│   │   └── page.jsx                  # Homeowners Landing Page (Route: `/homeowners`)
│   │
│   ├── get/
│   │   └── page.jsx                  # Direct App Download Landing Page (Route: `/get`)
│   │
│   ├── experts/                      # Expert Legal Pages
│   │   ├── privacy-policy/page.jsx
│   │   ├── refund-policy/page.jsx
│   │   └── terms-and-conditions/page.jsx
│   │
│   ├── home-owner/                   # Homeowner Legal Pages
│   │   ├── privacy-policy/page.jsx
│   │   ├── refund-policy/page.jsx
│   │   └── terms-and-conditions/page.jsx
│   │
│   └── partner/                      # Partner Program Legal Pages
│       ├── privacy-policy/page.jsx
│       └── terms-and-conditions/page.jsx
│
├── components/                       # Shared & Section UI Components
│   ├── AosInit.jsx                   # "use client" wrapper to initialize AOS animation engine
│   ├── AppDownloadModal.jsx          # "use client" popup dialog for App Store / Play Store / Web App
│   ├── Navbar.jsx                    # "use client" responsive navbar with route-aware navigation
│   ├── Hero.jsx                      # Expert Hero section with service pills & CTA
│   ├── WhyPartner.jsx                # Expert 4-card value proposition grid
│   ├── About.jsx                     # Expert About section with laptop preview mockup
│   ├── HowToJoin.jsx                 # Expert 4-step onboarding process flow
│   ├── FAQ.jsx                       # "use client" accordion FAQ for service experts
│   ├── Waitlist.jsx                  # "use client" waitlist form with US phone formatting & modal
│   ├── CtaBanner.jsx                 # Expert full-bleed bottom banner linking to Web App
│   ├── Footer.jsx                    # "use client" site footer with route-aware legal links
│   │
│   ├── download/
│   │   └── GetAppView.jsx            # "use client" OS detection, direct store links & dynamic QR code
│   │
│   └── homeowners/                   # Homeowner-Specific Components
│       ├── HomeownersHero.jsx        # Homeowner Hero with search input & horizontal service carousel
│       ├── HomeownersHowItWorks.jsx  # 3-step visual match process (Share -> Reach -> Start)
│       ├── GetInspired.jsx           # 4-card project inspiration gallery (Interior, Fence, Gutter, Landscaping)
│       ├── WhyChooseNexaHome.jsx     # 6-card grid on verified experts, privacy & zero homeowner fees
│       ├── LouisianaBanner.jsx       # Regional callout banner (Baton Rouge service area)
│       ├── Testimonials.jsx          # Star-rated homeowner reviews (currently commented in page)
│       ├── HomeownersAbout.jsx       # Homeowner About section with pool cleaning graphic
│       ├── HomeownersFAQ.jsx         # "use client" homeowner accordion FAQ
│       ├── HomeownersWaitlist.jsx    # "use client" homeowner waitlist form
│       └── CtaBanner.jsx             # Homeowner banner with phone mockup & app store badges
│
├── docs/                             # Project Documentation
│   └── PROJECT_DOCUMENTATION.md      # Comprehensive technical architecture & reference guide
│
├── public/                           # Static Assets (Images, Icons, Favicons)
│   ├── fav-icon.png                  # NexaHome favicon
│   ├── logo.png                      # NexaHome brand logo
│   ├── hero-container.png            # Main hero graphic for expert landing
│   ├── home-owner.png                # Main hero graphic for homeowner landing
│   ├── home-owner-banner.png         # Background image for homeowner CTA banner
│   ├── phone-mockup.png              # Mobile app mockup
│   ├── Laptop.png                    # Web application mockup on laptop
│   ├── about-nexa.png                # Pool cleaner illustration for About section
│   ├── overlay-card.png, join-card-dot.png
│   ├── choose1.png ... choose6.png   # Value proposition feature icons
│   ├── step-1.png ... step-4.png     # Onboarding step badges
│   ├── featured1.png ... featured4.png # Inspiration project cards
│   ├── fb.png, insta.png             # Social platform icons
│   └── handyman.png, painting.png, plumbing.png, electrical.png, landscaping.png, audio-visual.png, cleaning.png
```

---

## 4. Route & Feature Breakdown

### 4.1. Expert Landing Page (`/` -> `app/page.jsx`)
- **Target Audience:** Service professionals, contractors, trade specialists.
- **Key Sections:**
  1. **Navbar**: Switches between Expert and Homeowner views, links to `#features`, `#about`, `#how-it-works`, and primary CTA `Go to the Web App` (`https://expert.nexahomeapp.com/`).
  2. **Hero (`Hero.jsx`)**: Heading, service tags (Handyman, Painters, Plumbing, Electrical, Landscaping, Audio & Visual, Cleaning), mobile CTA, and hero image (`/hero-container.png`).
  3. **Why Partner (`WhyPartner.jsx`)**: 4-card grid highlighting lead volume, marketing savings, trusted platform reputation, and localized job matching.
  4. **About Us (`About.jsx`)**: Story on simplifying the connection between pros and homeowners, backed by laptop mockup (`/Laptop.png`).
  5. **How to Join (`HowToJoin.jsx`)**: 4-step walkthrough: Create Account -> Complete Profile -> Get Verified -> Start Connecting.
  6. **FAQ (`FAQ.jsx`)**: 8 detailed questions addressing credit costs, lead caps (up to 5 experts per lead), and direct payments.
  7. **CTA Banner (`CtaBanner.jsx`)**: Full-bleed "NOW LIVE" banner with link to Expert Web App.
  8. **Footer (`Footer.jsx`)**: Logo, social links, legal navigation (expert terms/privacy/refund), and contact email.

### 4.2. Homeowner Landing Page (`/homeowners` -> `app/homeowners/page.jsx`)
- **Target Audience:** Homeowners in Baton Rouge needing repairs, maintenance, or home improvements.
- **Key Sections:**
  1. **Navbar**: Shows homeowner navigation (`Home`, `How It Works`, `Features`, `About Us`), "For Experts" switch button, and "Get the App" trigger.
  2. **Hero (`HomeownersHero.jsx`)**: Dual-input search form (service keyword + ZIP code) redirecting to `https://homeowner.nexahomeapp.com/`, plus an interactive horizontal scrolling carousel of popular services.
  3. **How It Works (`HomeownersHowItWorks.jsx`)**: 3-step visual cards:
     - 1: Share Your Need (repair, upgrade, photos/video).
     - 2: Reach Local Experts (pick up to 5 verified pros).
     - 3: Start the Job With Confidence (direct expert contact).
  4. **Get Inspired (`GetInspired.jsx`)**: 4 visual cards for Interior Design, Fencing, Gutter Installation, and Landscaping.
  5. **Why Choose NexaHome (`WhyChooseNexaHome.jsx`)**: 6 key value pillars (Identity-Verified, Local, Privacy Protected, One Request Multi-Expert, In Control, Always Free).
  6. **Regional Banner (`LouisianaBanner.jsx`)**: "Serving homeowners across the Baton Rouge area".
  7. **About Us (`HomeownersAbout.jsx`)**: Homeowner-focused mission and quality assurance.
  8. **FAQ (`HomeownersFAQ.jsx`)**: Accordion covering free pricing, safety verification, and turnaround speed.
  9. **CTA Banner (`components/homeowners/CtaBanner.jsx`)**: App Store & Google Play download badges with 3D phone mockup.
  10. **Footer (`Footer.jsx`)**: Dynamically switches legal links to `/home-owner/...`.

### 4.3. Direct Download Portal (`/get` -> `app/get/page.jsx`)
- **Purpose:** Frictionless download destination for marketing campaigns, QR code scans, or direct SMS links.
- **Smart OS Detection (`GetAppView.jsx`)**:
  - Detects iOS / iPad devices and highlights the Apple App Store button with a "Your Device" badge.
  - Detects Android devices and highlights Google Play with a "Your Device" badge.
  - On Desktop, displays standard download buttons and links back to the homeowner site.
- **Store URL Customization:** Configurable via `process.env.NEXT_PUBLIC_APP_STORE_URL` and `process.env.NEXT_PUBLIC_GOOGLE_PLAY_URL` with hardcoded fallbacks to the live stores.

### 4.4. Legal & Compliance Policies
- **Experts:**
  - `/experts/privacy-policy`
  - `/experts/refund-policy`
  - `/experts/terms-and-conditions`
- **Homeowners:**
  - `/home-owner/privacy-policy`
  - `/home-owner/refund-policy`
  - `/home-owner/terms-and-conditions`
- **Partner Program:**
  - `/partner/privacy-policy`
  - `/partner/terms-and-conditions`

---

## 5. API & Backend Integrations

### `/api/waitlist` (POST Request Handler)
- **File:** `app/api/waitlist/route.js`
- **Payload Schema:**
  ```json
  {
    "name": "Jane Doe",
    "email": "jane@example.com",
    "phone": "(555) 123-4567",
    "company": "Doe Home Services LLC",
    "userType": "expert" // or "homeowner"
  }
  ```
- **Validation:**
  - Validates non-empty name, email, and userType (`expert` | `homeowner`).
  - Strict email regex validation (`/^[^\s@]+@[^\s@]+\.[^\s@]+$/`).
- **Resilient 3-Tier Mailchimp Ingestion:**
  1. **Attempt 1:** Subscribes user with all provided merge fields (`FNAME`, `LNAME`, `PHONE`, `COMPANY`).
  2. **Attempt 2 (Fallback):** Retries with only `FNAME` and `LNAME` if custom audience fields aren't configured in Mailchimp.
  3. **Attempt 3 (Fallback):** Retries with minimal `email_address` and `status_if_new: "subscribed"`.
  - **Tagging:** Automatically applies `"Expert Waitlist"` or `"Homeowner Waitlist"` tag to the member.
- **SendGrid Dual Email Delivery:**
  1. **Admin Notification:** Sends HTML summary email to `nexahomeapp@gmail.com` with formatted user details, role badge, and submission source.
  2. **Subscriber Confirmation:** Sends responsive HTML confirmation email from `no-reply@nexahomeapp.com` tailored to the user's role (Expert vs Homeowner).

---

## 6. Design System & Theming

### 6.1. Color Tokens (`tailwind.config.js`)
| Token | Hex Value | Semantic Usage |
| :--- | :--- | :--- |
| `primary` | `#005864` | Main brand deep teal, header bars, active states, buttons |
| `primary-dark` | `#004c56` | Button hover states, active gradients |
| `primary-light` | `#03717f` | Gradient endpoints, secondary backgrounds |
| `accent` | `#F5A623` | Golden amber badges, warm decorative glows |
| `gray-50` / `gray-100` | `#F9FAFB` / `#F3F4F6` | Section alternating backgrounds, subtle borders |
| `text-dark` | `#242424` / `#101828` | Main headings and high-contrast body copy |

### 6.2. Typography
- **Primary Body Font:** `'Plus Jakarta Sans', sans-serif` (loaded in 300, 400, 500, 600, 700 weights via Google Fonts).
- **Heading Font:** Configured to `'Plus Jakarta Sans', sans-serif`.

### 6.3. Pre-defined Utility Classes (`globals.css`)
- `.btn-primary`: `@apply bg-primary text-white px-6 py-3 rounded-[14px] font-semibold hover:bg-primary-dark transition-all duration-200 inline-block;`
- `.btn-outline`: `@apply border-2 border-primary text-primary px-6 py-3 rounded-[14px] font-semibold hover:bg-primary hover:text-white transition-all duration-200 inline-block;`
- `.section-title`: `@apply text-3xl md:text-4xl font-heading font-bold text-gray-900;`
- `.why-choose-card`: Custom gradient container with soft drop shadows and rounded borders.
- `.scrollbar-hide`: Cross-browser hiding of scrollbars for smooth sliding carousels.

---

## 7. Environment Configuration

The following environment variables are supported in `.env` / `.env.local`:

```env
# SendGrid Email Integration
SENDGRID_API_KEY=SG.xxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Mailchimp Audience Integration
MAILCHIMP_API_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-usX
MAILCHIMP_AUDIENCE_ID=xxxxxxxxxx

# Store URLs (Optional overrides for App Store / Play Store)
NEXT_PUBLIC_APP_STORE_URL=https://apps.apple.com/us/app/nexahome-app/id6769668269
NEXT_PUBLIC_GOOGLE_PLAY_URL=https://play.google.com/store/apps/details?id=com.dignitestudios.nexahome&pli=1
```

---

## 8. Development & Build Commands

```bash
# Install all dependencies
npm install

# Run local development server (http://localhost:3000)
npm run dev

# Compile and create optimized production build
npm run build

# Start local production server
npm start
```

---

## 9. Insights, Observations & Future Roadmap

1. **Testimonials Component**: `components/homeowners/Testimonials.jsx` is fully implemented but currently commented out in `app/homeowners/page.jsx`. Once genuine homeowner reviews from the Baton Rouge rollout are finalized, this component can be reactivated with real customer quotes.
2. **App Store URLs Centralization**: Store links are declared in `AppDownloadModal.jsx`, `GetAppView.jsx`, and `components/homeowners/CtaBanner.jsx`. They currently use environment variables with fallback constants.
3. **Waitlist Components**: `components/Waitlist.jsx` and `components/homeowners/HomeownersWaitlist.jsx` are ready and wired to `/api/waitlist` if needed on standalone pages or landing variants.
4. **Browserslist Notice**: During `npm run build`, running `npx update-browserslist-db@latest` will keep `caniuse-lite` database fresh.
5. **SEO & Analytics**: Root metadata and open graph tags are established; adding Google Analytics / Meta Pixel via Next.js Script component (`next/script`) can be done cleanly when required.
