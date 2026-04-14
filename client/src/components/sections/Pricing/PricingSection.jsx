// 4) Main pricing section layout
// Data → Map → Component → UI
import { useState } from "react";
import { useTheme } from "../../../context/ThemeContext";
import PricingHeader from "./PricingHeader";
import PricingCard from "./PricingCard";
import PricingToggle from "./PricingToggle";
import { pricingPlans } from "./PricingData";
import Section from "../../ui/Section";
function PricingSection() {
  const [billing, setBilling] = useState("monthly");
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const plans = pricingPlans[billing];

  return (
    <Section>
      <section
        className="py-20 relative overflow-hidden"
        style={{
          background: isDark ? "" : "#f9fafb",
          transition: "background 0.3s ease",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <PricingHeader isDark={isDark} />
          <PricingToggle
            billing={billing}
            setBilling={setBilling}
            isDark={isDark}
          />
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <PricingCard
                key={index}
                title={plan.title}
                price={plan.price}
                features={plan.features}
                popular={plan.popular}
                billing={billing}
                isDark={isDark}
              />
            ))}
          </div>
        </div>
      </section>
    </Section>
  );
}

export default PricingSection;
