import HeroSection from "@/components/sections/HeroSection";
import ProfilesSection from "@/components/sections/ProfilesSection";
import ModelSection from "@/components/sections/ModelSection";
import WhyEuropeSection from "@/components/sections/WhyEuropeSection";
import ResultsSection from "@/components/sections/ResultsSection";
import AboutSection from "@/components/sections/AboutSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ProfilesSection />
      <ModelSection />
      <WhyEuropeSection />
      <ResultsSection />
      <AboutSection />
      <FinalCtaSection />
      <Footer />
    </main>
  );
};

export default Index;
