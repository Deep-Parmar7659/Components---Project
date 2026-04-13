import React, { useRef } from "react";
import HeroSection from "../Components/Sections/Hero/HeroSection";
import PricingSection from "../Components/Sections/Pricing/PricingSection";
import AnimatedTestimonials from "../Components/Sections/AnimatedTestimonials/AnimatedTestimonials";
import FeaturesSection from "../Components/Sections/Features/FeaturesSection";
import { testimonials } from "../Components/Sections/AnimatedTestimonials/testimonialsData";
import BenefitsSection from "../Components/Sections/Benefits/BenefitsSection";
import CTASection from "../Components/Sections/CTA/CTASection";

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
