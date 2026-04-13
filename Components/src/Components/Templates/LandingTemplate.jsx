import HeroSection from "../Sections/Hero/HeroSection";
import FeaturesSection from "../Sections/Features/FeaturesSection";
import PricingSection from "../Sections/Pricing/PricingSection";
const LandingTemplate = () => {
  return (
    <div className="space-y-10">
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
    </div>
  );
};

export default LandingTemplate;
