import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyPartner from "../components/WhyPartner";
import About from "../components/About";
import HowToJoin from "../components/HowToJoin";
import FAQ from "../components/FAQ";
import Waitlist from "../components/Waitlist";
import CtaBanner from "../components/CtaBanner";
import Footer from "../components/Footer";

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
