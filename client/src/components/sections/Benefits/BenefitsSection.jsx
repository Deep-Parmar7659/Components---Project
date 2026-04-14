import React from "react";

const benefitsData = [
  {
    id: 1,
    title: "Save Time",
    description: "Use ready-made components for rapid development.",
  },
  {
    id: 2,
    title: "Dark/Light Mode",
    description: "Seamless support for modern themes.",
  },
  {
    id: 3,
    title: "Fully Responsive",
    description: "Works on desktop, tablet, and mobile devices.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
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
