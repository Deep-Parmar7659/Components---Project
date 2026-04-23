import React from "react";

const SaaSTemplate = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* HERO */}
      <section className="px-4 py-12 text-center">
        <h1 className="text-2xl font-bold leading-snug">
          Build Better Products Faster 🚀
        </h1>
        <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
          All-in-one SaaS platform to manage your workflow, team, and growth.
        </p>
        <div className="mt-6 flex flex-col gap-3 max-w-xs mx-auto">
          <button className="w-full px-6 py-2.5 bg-pink-500 text-white rounded-xl text-sm font-medium hover:bg-pink-600 transition">
            Get Started
          </button>
          <button className="w-full px-6 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            Live Demo
          </button>
        </div>
      </section>

      {/* FEATURES — always 1 col stacked */}
      <section className="px-4 py-10 bg-gray-50 dark:bg-gray-800">
        <h2 className="text-xl font-bold text-center mb-2">
          Powerful Features
        </h2>
        <p className="text-xs text-center text-gray-500 dark:text-gray-400 mb-6">
          Everything you need to scale your SaaS business.
        </p>
        <div className="flex flex-col gap-3 max-w-sm mx-auto">
          {[
            {
              title: "Analytics",
              desc: "Track performance with real-time data insights.",
            },
            {
              title: "Automation",
              desc: "Save time with smart workflow automation.",
            },
            {
              title: "Collaboration",
              desc: "Work together with your team seamlessly.",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="p-4 rounded-xl bg-white dark:bg-gray-900 shadow"
            >
              <h3 className="text-sm font-semibold">{feature.title}</h3>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING — always 1 col stacked */}
      <section className="px-4 py-10">
        <h2 className="text-xl font-bold text-center mb-2">Simple Pricing</h2>
        <p className="text-xs text-center text-gray-500 dark:text-gray-400 mb-6">
          Choose a plan that fits your needs.
        </p>
        <div className="flex flex-col gap-4 max-w-sm mx-auto">
          {[
            {
              name: "Basic",
              price: "$9/mo",
              features: ["1 Project", "Basic Support", "Analytics"],
            },
            {
              name: "Pro",
              price: "$29/mo",
              features: [
                "5 Projects",
                "Priority Support",
                "Advanced Analytics",
              ],
              popular: true,
            },
            {
              name: "Enterprise",
              price: "$99/mo",
              features: ["Unlimited", "24/7 Support", "Full Features"],
            },
          ].map((plan, i) => (
            <div
              key={i}
              className={`p-5 rounded-xl border ${plan.popular ? "border-pink-500 shadow-lg" : "border-gray-200 dark:border-gray-700"}`}
            >
              {plan.popular && (
                <span className="text-xs bg-pink-500 text-white px-2 py-0.5 rounded-full mb-2 inline-block">
                  Most Popular
                </span>
              )}
              <h3 className="text-sm font-semibold">{plan.name}</h3>
              <p className="mt-1 text-2xl font-bold">{plan.price}</p>
              <ul className="mt-3 space-y-1 text-xs text-gray-500 dark:text-gray-400">
                {plan.features.map((f, j) => (
                  <li key={j}>✔ {f}</li>
                ))}
              </ul>
              <button className="mt-4 w-full py-2 bg-pink-500 text-white rounded-xl text-xs font-medium hover:bg-pink-600">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-12 bg-pink-500 text-white text-center">
        <h2 className="text-xl font-bold">Ready to boost your productivity?</h2>
        <p className="mt-2 text-xs">
          Start your free trial. No credit card required.
        </p>
        <button className="mt-5 px-6 py-2.5 bg-white text-pink-500 font-semibold rounded-xl text-sm hover:bg-gray-100 transition">
          Get Started Free
        </button>
      </section>
    </div>
  );
};

export default SaaSTemplate;
