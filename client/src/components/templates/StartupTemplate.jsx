import React from "react";

const StartupTemplate = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* HERO */}
      <section className="px-6 py-24 text-center max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Launch Your Startup Faster 🚀
        </h1>
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
          Build, scale, and grow your business with our powerful tools.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="px-6 py-3 bg-pink-500 text-white rounded-xl">
            Get Started
          </button>
          <button className="px-6 py-3 border rounded-xl">Learn More</button>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-6 py-20 bg-gray-50 dark:bg-gray-800">
        <h2 className="text-3xl font-bold text-center">Why Choose Us</h2>

        <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {["Fast Development", "Scalable Architecture", "Secure Platform"].map(
            (feature, i) => (
              <div
                key={i}
                className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow"
              >
                <h3 className="text-xl font-semibold">{feature}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Description about {feature}.
                </p>
              </div>
            ),
          )}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-3xl font-bold">What Our Users Say</h2>

        <div className="mt-10 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[1, 2, 3].map((t) => (
            <div key={t} className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <p className="text-gray-600 dark:text-gray-300">
                “Amazing platform! Helped us grow quickly.”
              </p>
              <h4 className="mt-4 font-semibold">User {t}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 bg-pink-500 text-white text-center">
        <h2 className="text-3xl font-bold">Ready to build your startup?</h2>
        <p className="mt-4">Join thousands of founders already growing.</p>

        <button className="mt-6 px-8 py-3 bg-white text-pink-500 rounded-xl">
          Start Free Trial
        </button>
      </section>
    </div>
  );
};

export default StartupTemplate;
