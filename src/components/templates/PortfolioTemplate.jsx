import React from "react";

const PortfolioTemplate = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* HERO */}
      <section className="px-6 py-16 text-center">
        <h1 className="text-3xl md:text-5xl font-bold">Hi, I'm John 👋</h1>
        <p className="mt-4 text-sm md:text-base text-gray-600 dark:text-gray-300">
          Frontend Developer crafting beautiful web experiences.
        </p>
        <button className="mt-6 px-6 py-3 bg-pink-500 text-white rounded-xl text-sm md:text-base">
          View Projects
        </button>
      </section>

      {/* ABOUT */}
      <section className="px-6 py-12 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold">About Me</h2>
        <p className="mt-4 text-sm md:text-base text-gray-600 dark:text-gray-300">
          I specialize in building responsive and interactive web apps using
          React and Tailwind CSS.
        </p>
      </section>

      {/* PROJECTS — 1 col SM, 3 cols MD+ */}
      <section className="px-6 py-12 bg-gray-50 dark:bg-gray-800">
        <h2 className="text-2xl md:text-3xl font-bold text-center">Projects</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {["Project One", "Project Two", "Project Three"].map((project, i) => (
            <div
              key={i}
              className="p-5 bg-white dark:bg-gray-900 rounded-xl shadow"
            >
              <h3 className="text-base md:text-lg font-semibold">{project}</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Short description of the project.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS — wraps naturally */}
      <section className="px-6 py-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">Skills</h2>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {["React", "Tailwind", "JavaScript", "HTML", "CSS"].map(
            (skill, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-pink-100 dark:bg-pink-900 rounded-full text-sm"
              >
                {skill}
              </span>
            ),
          )}
        </div>
      </section>

      {/* CONTACT */}
      <section className="px-6 py-16 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white text-center">
        <h2 className="text-2xl md:text-3xl font-bold">Let's Work Together</h2>
        <p className="mt-4 text-sm md:text-base">
          Contact me for collaborations.
        </p>
        <button className="mt-6 px-6 py-3 bg-pink-500 text-white rounded-xl text-sm md:text-base hover:bg-pink-600">
          Contact Me
        </button>
      </section>
    </div>
  );
};

export default PortfolioTemplate;
