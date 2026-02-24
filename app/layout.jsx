import "./globals.css";

export const metadata = {
  title: "NexaHome — Connect with Homeowners Ready to Hire",
  description:
    "NexaHome connects home service experts with homeowners who are actively looking to hire. Join our waitlist today.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
