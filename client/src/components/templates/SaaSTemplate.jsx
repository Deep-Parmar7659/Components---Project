import React from "react";

const SaaSTemplate = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* HERO SECTION */}
      <section className="px-6 py-20 text-center max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Build Better Products Faster 🚀
        </h1>
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
          All-in-one SaaS platform to manage your workflow, team, and growth.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="px-6 py-3 bg-pink-500 text-white rounded-xl hover:bg-pink-600 transition">
            Get Started
          </button>
          <button className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            Live Demo
          </button>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="px-6 py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold">Powerful Features</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Everything you need to scale your SaaS business.
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
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
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white dark:bg-gray-900 shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="mt-3 text-gray-600 dark:text-gray-300">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="px-6 py-20 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold">Simple Pricing</h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Choose a plan that fits your needs.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
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
            },
            {
              name: "Enterprise",
              price: "$99/mo",
              features: ["Unlimited", "24/7 Support", "Full Features"],
            },
          ].map((plan, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl border dark:border-gray-700 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <p className="mt-4 text-3xl font-bold">{plan.price}</p>

              <ul className="mt-6 space-y-2 text-gray-600 dark:text-gray-300">
                {plan.features.map((f, i) => (
                  <li key={i}>✔ {f}</li>
                ))}
              </ul>

              <button className="mt-6 w-full px-4 py-2 bg-pink-500 text-white rounded-xl hover:bg-pink-600">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="px-6 py-20 bg-pink-500 text-white text-center">
        <h2 className="text-3xl font-bold">
          Ready to boost your productivity?
        </h2>
        <p className="mt-4">
          Start your free trial today. No credit card required.
        </p>

        <button className="mt-6 px-8 py-3 bg-white text-pink-500 font-semibold rounded-xl hover:bg-gray-100 transition">
          Get Started Free
        </button>
      </section>
    </div>
  );
};

export default SaaSTemplate;
