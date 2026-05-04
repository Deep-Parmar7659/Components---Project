import React from "react";

const StartupTemplate = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* HERO */}
      <section className="px-4 py-12 text-center">
        <h1 className="text-2xl font-bold leading-snug">
          Launch Your Startup Faster 🚀
        </h1>
        <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
          Build, scale, and grow your business with powerful tools.
        </p>
        <div className="mt-6 flex flex-col gap-3 max-w-xs mx-auto">
          <button className="w-full px-6 py-2.5 bg-pink-500 text-white rounded-xl text-sm font-medium">
            Get Started
          </button>
          <button className="w-full px-6 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl text-sm">
            Learn More
          </button>
        </div>
      </section>

      {/* FEATURES — always 1 col */}
      <section className="px-4 py-10 bg-gray-50 dark:bg-gray-800">
        <h2 className="text-xl font-bold text-center mb-6">Why Choose Us</h2>
        <div className="flex flex-col gap-3 max-w-sm mx-auto">
          {[
            {
              icon: "⚡",
              title: "Fast Development",
              desc: "Ship features quickly with our ready-made tools.",
            },
            {
              icon: "📈",
              title: "Scalable Architecture",
              desc: "Built to grow from 10 to 10 million users.",
            },
            {
              icon: "🔒",
              title: "Secure Platform",
              desc: "Enterprise-grade security out of the box.",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="p-4 bg-white dark:bg-gray-900 rounded-xl shadow flex gap-3 items-start"
            >
              <span className="text-xl shrink-0">{feature.icon}</span>
              <div>
                <h3 className="text-sm font-semibold">{feature.title}</h3>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS — always 1 col */}
      <section className="px-4 py-10">
        <h2 className="text-xl font-bold text-center mb-6">
          What Our Users Say
        </h2>
        <div className="flex flex-col gap-3 max-w-sm mx-auto">
          {[
            {
              name: "Sarah K.",
              quote: "Amazing platform! Helped us grow 3x in 6 months.",
            },
            {
              name: "Mike R.",
              quote: "The best tool we've used. Highly recommended!",
            },
            {
              name: "Lisa T.",
              quote: "Setup was instant, results were incredible.",
            },
          ].map((t, i) => (
            <div key={i} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <p className="text-xs text-gray-600 dark:text-gray-300 italic">
                "{t.quote}"
              </p>
              <p className="mt-2 text-xs font-semibold">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-12 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white text-center">
        <h2 className="text-xl font-bold">Ready to build your startup?</h2>
        <p className="mt-2 text-xs">
          Join thousands of founders already growing.
        </p>
        <button className="mt-5 px-6 py-2.5 bg-pink-500 text-white font-semibold rounded-xl text-sm hover:bg-pink-600">
          Start Free Trial
        </button>
      </section>
    </div>
  );
};

export default StartupTemplate;
