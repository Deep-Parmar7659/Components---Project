import React from "react";

// ✅ Self-contained LandingTemplate — does NOT use shared HeroSection/FeaturesSection/PricingSection
// Those shared sections are kept original for the HomePage.

const LandingTemplate = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* HERO */}
      <section className="px-4 py-14 text-center">
        <h1 className="text-2xl font-extrabold mb-3">TailwindTap</h1>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 max-w-xs mx-auto">
          Build modern UI faster with reusable Tailwind components
        </p>
        <div className="flex flex-col gap-3 max-w-xs mx-auto">
          <button className="w-full px-6 py-2.5 bg-pink-600 text-white font-semibold rounded-full text-sm hover:bg-pink-700 transition">
            Get Started
          </button>
          <button className="w-full px-6 py-2.5 bg-pink-600 text-white font-semibold rounded-full text-sm hover:bg-pink-700 transition">
            Explore Components
          </button>
        </div>
      </section>

      {/* FEATURES — always 1 col stacked */}
      <section className="px-4 py-10 bg-gray-50 dark:bg-gray-800">
        <h2 className="text-xl font-bold text-center mb-2">
          Build Faster with TailwindTap
        </h2>
        <p className="text-xs text-center text-gray-500 dark:text-gray-400 mb-6">
          Modern UI components to speed up your development workflow
        </p>
        <div className="flex flex-col gap-3 max-w-sm mx-auto">
          {[
            {
              icon: "⚡",
              title: "Reusable Components",
              desc: "Build faster using ready-to-use Tailwind components.",
            },
            {
              icon: "🎨",
              title: "Modern Design",
              desc: "Clean, minimal and beautiful UI for your projects.",
            },
            {
              icon: "🌙",
              title: "Dark Mode Ready",
              desc: "Seamless dark/light experience across all components.",
            },
            {
              icon: "📱",
              title: "Fully Responsive",
              desc: "Works perfectly on mobile, tablet and desktop.",
            },
            {
              icon: "🧑‍💻",
              title: "Developer Friendly",
              desc: "Easy to customize and integrate in any project.",
            },
            {
              icon: "🚀",
              title: "Fast Performance",
              desc: "Optimized for speed and smooth experience.",
            },
          ].map((f, i) => (
            <div
              key={i}
              className="p-4 bg-white dark:bg-gray-900 rounded-xl shadow flex gap-3 items-start"
            >
              <span className="text-lg shrink-0">{f.icon}</span>
              <div>
                <h3 className="text-sm font-semibold">{f.title}</h3>
                <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING — always 1 col stacked */}
      <section className="px-4 py-10">
        <h2 className="text-xl font-bold text-center mb-1">Simple Pricing</h2>
        <p className="text-xs text-center text-gray-500 dark:text-gray-400 mb-6">
          Choose the best plan for your need
        </p>
        <div className="flex flex-col gap-4 max-w-sm mx-auto">
          {[
            {
              name: "Basic",
              price: "$9",
              period: "/month",
              features: ["5 Projects", "10GB Storage", "Basic Support"],
              popular: false,
            },
            {
              name: "Pro",
              price: "$29",
              period: "/month",
              features: [
                "Unlimited Projects",
                "100GB Storage",
                "Priority Support",
              ],
              popular: true,
            },
            {
              name: "Enterprise",
              price: "$99",
              period: "/month",
              features: ["Unlimited Projects", "1TB Storage", "24/7 Support"],
              popular: false,
            },
          ].map((plan, i) => (
            <div
              key={i}
              className={`p-5 rounded-xl border ${
                plan.popular
                  ? "border-pink-500 shadow-lg"
                  : "border-gray-200 dark:border-gray-700"
              }`}
            >
              {plan.popular && (
                <span className="text-xs bg-pink-500 text-white px-2 py-0.5 rounded-full mb-2 inline-block">
                  Most Popular
                </span>
              )}
              <h3 className="text-sm font-semibold">{plan.name}</h3>
              <p className="mt-1 text-2xl font-bold">
                {plan.price}
                <span className="text-xs font-normal text-gray-500">
                  {plan.period}
                </span>
              </p>
              <ul className="mt-3 space-y-1 text-xs text-gray-500 dark:text-gray-400">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-1">
                    <span className="text-pink-500">✔</span> {f}
                  </li>
                ))}
              </ul>
              <button className="mt-4 w-full py-2 bg-pink-500 text-white rounded-xl text-xs font-medium hover:bg-pink-600">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-12 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white text-center">
        <h2 className="text-xl font-bold">Ready to get started?</h2>
        <p className="mt-2 text-xs">
          Join thousands of developers building with TailwindTap.
        </p>
        <button className="mt-5 px-6 py-2.5 bg-pink-500 text-white font-semibold rounded-full text-sm hover:bg-pink-600 transition">
          Start Building Free
        </button>
      </section>
    </div>
  );
};

export default LandingTemplate;
