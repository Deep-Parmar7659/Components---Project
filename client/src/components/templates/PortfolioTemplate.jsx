import React from "react";

const PortfolioTemplate = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* HERO */}
      <section className="px-6 py-20 text-center">
        <h1 className="text-5xl font-bold">Hi, I'm John 👋</h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Frontend Developer crafting beautiful web experiences.
        </p>
        <button className="mt-6 px-6 py-3 bg-pink-500 text-white rounded-xl">
          View Projects
        </button>
      </section>

      {/* ABOUT */}
      <section className="px-6 py-16 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          I specialize in building responsive and interactive web apps using
          React and Tailwind CSS.
        </p>
      </section>

      {/* PROJECTS */}
      <section className="px-6 py-20 bg-gray-50 dark:bg-gray-800">
        <h2 className="text-3xl font-bold text-center">Projects</h2>

        <div className="mt-10 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {["Project One", "Project Two", "Project Three"].map((project, i) => (
            <div
              key={i}
              className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow"
            >
              <h3 className="text-xl font-semibold">{project}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Short description of the project.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-3xl font-bold">Skills</h2>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          {["React", "Tailwind", "JavaScript", "HTML", "CSS"].map(
            (skill, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-pink-100 dark:bg-pink-900 rounded-full"
              >
                {skill}
              </span>
            ),
          )}
        </div>
      </section>

      {/* CONTACT */}
      <section className="px-6 py-20 bg-pink-500 text-white text-center">
        <h2 className="text-3xl font-bold">Let's Work Together</h2>
        <p className="mt-4">Contact me for collaborations.</p>
        <button className="mt-6 px-6 py-3 bg-white text-pink-500 rounded-xl">
          Contact Me
        </button>
      </section>
    </div>
  );
};

export default PortfolioTemplate;
