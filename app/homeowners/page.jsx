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

const homeownersShareImageUrl = "https://nexahomeapp.com/home-owner.png";

export const metadata = {
  title: "Find Trusted Home Service Experts in Baton Rouge | NexaHome",
  description: "NexaHome connects Baton Rouge homeowners with local, identity-verified service experts. Post your job free and connect with experts ready to help.",
  openGraph: {
    images: [
      {
        url: homeownersShareImageUrl,
        width: 1200,
        height: 630,
        alt: "Family in front of their new home",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [homeownersShareImageUrl],
  },
};

export default function HomeownersPage() {
  return (
    <main>
      <Navbar />
      <HomeownersHero />
      <HomeownersHowItWorks />
      <GetInspired />
      <WhyChooseNexaHome />
      <LouisianaBanner />
      {/* <Testimonials /> */}
      <HomeownersAbout />
      <HomeownersFAQ />
      <HomeownersWaitlist />
      <HomeOwnerCtaBanner />
      <Footer />
    </main>
  );
}
