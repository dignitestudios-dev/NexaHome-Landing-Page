# NexaHome Landing Page (Next.js App Router)

A Next.js 14 App Router + Tailwind CSS landing page for NexaHome.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed

### Installation

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
nexahome/
├── app/
│   ├── layout.jsx        # Root layout with metadata + global CSS import
│   ├── page.jsx          # Home page — composes all sections
│   └── globals.css       # Global CSS + Tailwind directives + Google Fonts
├── components/
│   ├── Navbar.jsx        # "use client" — sticky nav with mobile menu
│   ├── Hero.jsx          # Welcome section with service category pills
│   ├── WhyPartner.jsx    # 4-card benefits grid with hover effects
│   ├── About.jsx         # About section with dashboard mockup
│   ├── HowToJoin.jsx     # 4-step process with numbered cards
│   ├── FAQ.jsx           # "use client" — accordion FAQ
│   ├── Waitlist.jsx      # "use client" — signup form with success state
│   ├── CtaBanner.jsx     # Full-bleed CTA with app store buttons
│   └── Footer.jsx        # 4-column site footer
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
└── package.json
```

### Client vs Server Components
| Component | Type | Reason |
|-----------|------|--------|
| `Navbar` | Client (`"use client"`) | Uses `useState` for mobile menu |
| `FAQ` | Client (`"use client"`) | Uses `useState` for accordion |
| `Waitlist` | Client (`"use client"`) | Uses `useState` for form |
| All others | Server Component | Static rendering, no hooks |

---

## 🎨 Customization

- **Colors**: Edit `tailwind.config.js` — change `primary` (default: `#1B6B4A`)
- **Fonts**: Update the Google Fonts import in `app/globals.css`
- **Content**: Edit individual files in `/components`
- **SEO**: Update `metadata` in `app/layout.jsx`

---

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS 3
- **Language**: JavaScript (JSX)
- **Fonts**: DM Sans + Playfair Display (Google Fonts)
