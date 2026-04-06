import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyPartner from "../components/WhyPartner";
import About from "../components/About";
import HowToJoin from "../components/HowToJoin";
import FAQ from "../components/FAQ";
import Waitlist from "../components/Waitlist";
import CtaBanner from "../components/CtaBanner";
import Footer from "../components/Footer";

const homeShareImageUrl = "https://nexahomeapp.com/hero-container.png";

export const metadata = {
  openGraph: {
    images: [
      {
        url: homeShareImageUrl,
        width: 1200,
        height: 630,
        alt: "NexaHome professionals helping homeowners",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [homeShareImageUrl],
  },
};

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />
      <WhyPartner />
      <About />
      <HowToJoin />
      <FAQ />
      <Waitlist />
      <CtaBanner />
      <Footer />
    </main>
  );
}
