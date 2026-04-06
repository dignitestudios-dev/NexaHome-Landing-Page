import "./globals.css";
import AosInit from "../components/AosInit";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "NexaHome — Connect with Homeowners Ready to Hire",
  description:
    "NexaHome connects home service experts with homeowners who are actively looking to hire. Join our waitlist today.",
  openGraph: {
    title: "NexaHome — Connect with Homeowners Ready to Hire",
    description:
      "NexaHome connects home service experts with homeowners who are actively looking to hire. Join our waitlist today.",
    type: "website",
    locale: "en_US",
    siteName: "NexaHome",
  },
  twitter: {
    title: "NexaHome — Connect with Homeowners Ready to Hire",
    description:
      "NexaHome connects home service experts with homeowners who are actively looking to hire. Join our waitlist today.",
    card: "summary_large_image",
  },
  icons: {
    icon: "/fav-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body><AosInit />{children}</body>
    </html>
  );
}
