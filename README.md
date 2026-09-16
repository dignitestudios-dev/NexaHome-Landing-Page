# NexaHome Landing Portal & Web Experience

A high-performance Next.js 14 App Router and Tailwind CSS platform for **NexaHome** (`https://nexahomeapp.com`), connecting homeowners in Baton Rouge with local, identity-verified home service professionals.

---

## 🚀 Quick Start

### Prerequisites
- **Node.js**: `v18.17+` or `v20+`
- **npm** or **yarn** / **pnpm**

### Installation & Development

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Build optimized static and server-rendered bundle
npm run build

# Run local production server
npm start
```

---

## 🌐 Routes & Pages

| Route | Purpose / Description | Primary Target |
| :--- | :--- | :--- |
| `/` | **Expert Landing Page** — Features, lead benefits, onboarding flow, FAQ, Web App launch | Contractors & Home Service Pros |
| `/homeowners` | **Homeowner Landing Page** — Search by service & ZIP, 3-step match, why choose, App Store buttons | Baton Rouge Homeowners |
| `/get` | **Direct App Download Page** — Automatic OS detection (iOS vs Android), App Store & Google Play links, dynamic QR code | Mobile App Downloaders |
| `/api/waitlist` | **Waitlist API Endpoint (POST)** — Resilient Mailchimp subscription + dual SendGrid confirmation & admin alerts | Backend Service |
| `/experts/*` | Terms & Conditions, Privacy Policy, Refund Policy | Service Pros |
| `/home-owner/*`| Terms & Conditions, Privacy Policy, Refund Policy | Homeowners |
| `/partner/*` | Partner Terms & Conditions, Partner Privacy Policy | Business Partners |

---

## 🛠 Tech Stack

- **Framework**: [Next.js 14 (App Router)](https://nextjs.org/)
- **UI Library**: React 18
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)
- **Email & CRM**: SendGrid (`@sendgrid/mail`) & Mailchimp API v3.0
- **Typography**: Plus Jakarta Sans
- **Deployment**: Vercel

---

## 🎨 Design System

- **Primary Color**: `#005864` (Deep Teal)
- **Primary Dark**: `#004c56`
- **Primary Light**: `#03717f`
- **Accent**: `#F5A623` (Golden Amber)
- **Backgrounds**: `#FFFFFF` / `#F9FAFB` (Gray-50) / `#F3F4F6` (Gray-100)
- **Font**: `Plus Jakarta Sans`

---

## ⚙️ Environment Variables

Create a `.env.local` file in the root directory:

```env
# SendGrid Email Integration
SENDGRID_API_KEY=SG.your_api_key_here

# Mailchimp Integration
MAILCHIMP_API_KEY=your_key-usX
MAILCHIMP_AUDIENCE_ID=your_audience_id

# App Store Links (Optional overrides)
NEXT_PUBLIC_APP_STORE_URL=https://apps.apple.com/us/app/nexahome-app/id6769668269
NEXT_PUBLIC_GOOGLE_PLAY_URL=https://play.google.com/store/apps/details?id=com.dignitestudios.nexahome&pli=1
```

---

## 📖 In-Depth Documentation

For full architectural diagrams, component breakdown, Mailchimp retry logic, and technical guides, check out:
- [docs/PROJECT_DOCUMENTATION.md](./docs/PROJECT_DOCUMENTATION.md)
