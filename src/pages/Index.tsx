import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProfilesSection from "@/components/sections/ProfilesSection";
import ModelSection from "@/components/sections/ModelSection";
import WhyEuropeSection from "@/components/sections/WhyEuropeSection";
import ResultsSection from "@/components/sections/ResultsSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ProfilesSection />
      <ModelSection />
      <AboutSection />
      <WhyEuropeSection />
      <ResultsSection />
      <FinalCtaSection />
      <Footer />
    </main>
  );
};

export default Index;
