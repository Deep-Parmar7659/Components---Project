import HeroSection from "../sections/Hero/HeroSection";
import FeaturesSection from "../sections/Features/FeaturesSection";
import PricingSection from "../sections/Pricing/PricingSection";
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
