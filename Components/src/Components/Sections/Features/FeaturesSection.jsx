// Main section (title + grid)
import Section from "../../UIComponents/Section";
import Container from "../../UIComponents/Container";
import features from "./FeaturesData";
import FeatureCard from "./FeatureCard";
const FeaturesSection = () => {
  return (
    <Section id="features-section">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Build Faster with TailwindTap</h2>

          <p className="section-subtitle">
            Modern UI components to speed up your development workflow
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item) => (
            <FeatureCard key={item.id} {...item} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default FeaturesSection;
