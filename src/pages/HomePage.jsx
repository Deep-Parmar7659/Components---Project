import React, { useRef } from "react";
import HeroSection from "../components/sections/Hero/HeroSection";
import PricingSection from "../components/sections/Pricing/PricingSection";
import AnimatedTestimonials from "../components/Sections/AnimatedTestimonials/AnimatedTestimonials";
import FeaturesSection from "../components/sections/Features/FeaturesSection";
import { testimonials } from "../components/sections/AnimatedTestimonials/testimonialsData";
import BenefitsSection from "../components/sections/Benefits/BenefitsSection";
import CTASection from "../components/sections/CTA/CTASection";

function HomePage() {
  const benefitsRef = useRef(null);

  return (
    <div>
      {/* Hero / Landing Banner */}
      <HeroSection
        scrollToBenefits={() =>
          benefitsRef.current.scrollIntoView({ behavior: "smooth" })
        }
      />
      {/* Key Features */}
      <FeaturesSection />
      {/* Optional: Benefits / Why TailwindTap */}
      <div ref={benefitsRef}>
        <BenefitsSection />
      </div>
      {/* Pricing Plans */}
      <PricingSection />
      {/* Testimonials */}
      <AnimatedTestimonials testimonials={testimonials} />
      {/* Final Call-to-Action */}
      <CTASection />
    </div>
  );
}

export default HomePage;
