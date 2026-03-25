import "./globals.css";
import AosInit from "../components/AosInit";

export const metadata = {
  title: "NexaHome — Connect with Homeowners Ready to Hire",
  description:
    "NexaHome connects home service experts with homeowners who are actively looking to hire. Join our waitlist today.",
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
