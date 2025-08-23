import AboutSection from "@/modules/home/components/about-section";
import HeroSection from "@/modules/home/components/hero-section";
import QuotesSection from "@/modules/home/components/quotes-section";
import TeamSection from "@/modules/home/components/team-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <TeamSection />
      <QuotesSection />
    </>
  );
}
