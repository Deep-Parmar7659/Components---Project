import React from "react";

const benefitsData = [
  {
    id: 1,
    title: "Build Faster",
    description:
      "Skip repetitive UI work and launch your projects quickly with ready-made components.",
  },
  {
    id: 2,
    title: "Save Development Time",
    description:
      "Reduce hours of coding by using pre-built UI elements and templates.",
  },
  {
    id: 3,
    title: "Focus on Core Logic",
    description:
      "Spend more time on functionality instead of designing UI from scratch.",
  },
  {
    id: 4,
    title: "Consistent Design",
    description:
      "Maintain a clean and uniform design across your entire application.",
  },
  {
    id: 5,
    title: "Easy to Use",
    description:
      "Simple and beginner-friendly structure makes development smooth.",
  },
  {
    id: 6,
    title: "Faster Project Delivery",
    description:
      "Complete your projects quickly and efficiently using reusable UI blocks.",
  },
];

const BenefitsSection = () => {
  return (
    <section
      id="benefits"
      className="scroll-mt-24 py-16 sm:py-20 bg-gray-50 dark:bg-gray-900 px-4"
    >
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 px-4">
        <h2 className="mt-10 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Why Choose TailwindTap?
        </h2>
        <p className="mt-5 mb-8 text-gray-500 dark:text-gray-400 text-sm md:text-base">
          Discover powerful, ready-to-use components and templates to build
          modern React applications faster and more efficiently.
        </p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefitsData.map((benefit) => (
          <div
            key={benefit.id}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
              {benefit.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;
