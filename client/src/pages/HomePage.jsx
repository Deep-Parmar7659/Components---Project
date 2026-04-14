import React, { useRef } from "react";
import HeroSection from "../components/Sections/Hero/HeroSection";
import PricingSection from "../components/Sections/Pricing/PricingSection";
import AnimatedTestimonials from "../components/Sections/AnimatedTestimonials/AnimatedTestimonials";
import FeaturesSection from "../components/Sections/Features/FeaturesSection";
import { testimonials } from "../components/Sections/AnimatedTestimonials/testimonialsData";
import BenefitsSection from "../components/Sections/Benefits/BenefitsSection";
import CTASection from "../components/Sections/CTA/CTASection";

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
