import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HomeownersHero from "../../components/homeowners/HomeownersHero";
import HomeownersHowItWorks from "../../components/homeowners/HomeownersHowItWorks";
import GetInspired from "../../components/homeowners/GetInspired";
import WhyChooseNexaHome from "../../components/homeowners/WhyChooseNexaHome";
import LouisianaBanner from "../../components/homeowners/LouisianaBanner";
import Testimonials from "../../components/homeowners/Testimonials";
import HomeownersAbout from "../../components/homeowners/HomeownersAbout";
import HomeownersFAQ from "../../components/homeowners/HomeownersFAQ";
import HomeownersWaitlist from "../../components/homeowners/HomeownersWaitlist";
import HomeOwnerCtaBanner from "../../components/homeowners/CtaBanner";

export default function HomeownersPage() {
  return (
    <main>
      <Navbar />
      <HomeownersHero />
      <HomeownersHowItWorks />
      <GetInspired />
      <WhyChooseNexaHome />
      <LouisianaBanner />
      <Testimonials />
      <HomeownersAbout />
      <HomeownersFAQ />
      <HomeownersWaitlist />
      <HomeOwnerCtaBanner />
      <Footer />
    </main>
  );
}
