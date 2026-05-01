const AgencyTemplate = () => {
  const services = [
    {
      icon: "🎨",
      title: "UI/UX Design",
      desc: "Beautiful, user-centered interfaces that convert.",
    },
    {
      icon: "💻",
      title: "Web Development",
      desc: "Fast, scalable websites built with modern tech.",
    },
    {
      icon: "📱",
      title: "Mobile Apps",
      desc: "iOS & Android apps your users will love.",
    },
    {
      icon: "📈",
      title: "SEO & Marketing",
      desc: "Drive traffic and grow your online presence.",
    },
    {
      icon: "🛒",
      title: "E-commerce",
      desc: "Online stores that sell around the clock.",
    },
    {
      icon: "☁️",
      title: "Cloud Solutions",
      desc: "Reliable, secure infrastructure at any scale.",
    },
  ];

  const projects = [
    { name: "NovaPay", category: "Fintech", emoji: "💳", color: "#6366f1" },
    {
      name: "GreenCart",
      category: "E-commerce",
      emoji: "🛒",
      color: "#22c55e",
    },
    { name: "MediBook", category: "Healthcare", emoji: "🏥", color: "#ec4899" },
    { name: "TravelX", category: "Travel", emoji: "✈️", color: "#f59e0b" },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* NAV */}
      <nav className="px-6 py-4 flex justify-between items-center border-b border-gray-100 dark:border-gray-800">
        <span className="font-extrabold text-lg tracking-tight text-gray-900 dark:text-white">
          Pixel<span className="text-indigo-500">Forge</span>
        </span>
        <div className="hidden sm:flex gap-5 text-xs font-medium text-gray-500 dark:text-gray-400">
          {["Work", "Services", "About", "Contact"].map((l) => (
            <span
              key={l}
              className="hover:text-indigo-500 cursor-pointer transition"
            >
              {l}
            </span>
          ))}
        </div>
        <button className="px-4 py-1.5 bg-indigo-500 text-white rounded-full text-xs font-bold hover:bg-indigo-600 transition">
          Let's Talk
        </button>
      </nav>

      {/* HERO */}
      <section className="px-6 py-16 text-center max-w-2xl mx-auto">
        <div className="inline-block px-3 py-1 bg-indigo-50 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-300 text-xs font-semibold rounded-full mb-4">
          🏆 Award-Winning Digital Agency
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4 text-gray-900 dark:text-white">
          We Build Digital
          <span className="text-indigo-500"> Experiences</span> That Matter
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-8 max-w-sm mx-auto">
          From concept to launch, we craft digital products that grow your
          business and delight your users.
        </p>
        <div className="flex justify-center gap-3 flex-wrap">
          <button className="px-6 py-2.5 bg-indigo-500 text-white font-bold rounded-full text-sm hover:bg-indigo-600 transition">
            Start a Project
          </button>
          <button className="px-6 py-2.5 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-full text-sm hover:border-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-400 transition">
            View Our Work
          </button>
        </div>

        {/* Stats */}
        <div className="mt-10 flex justify-center gap-8">
          {[
            { num: "150+", label: "Projects" },
            { num: "98%", label: "Satisfaction" },
            { num: "12+", label: "Years" },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <p className="text-2xl font-extrabold text-indigo-500">{s.num}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-4 py-12 bg-gray-50 dark:bg-gray-800">
        <h2 className="text-xl font-bold text-center mb-1 text-gray-900 dark:text-white">
          What We Do
        </h2>
        <p className="text-xs text-center text-gray-500 dark:text-gray-400 mb-8">
          End-to-end digital solutions
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {services.map((s, i) => (
            <div
              key={i}
              className="p-5 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-indigo-400 hover:-translate-y-0.5 transition-all"
            >
              <span className="text-2xl">{s.icon}</span>
              <h3 className="text-sm font-bold mt-2 text-gray-900 dark:text-white">
                {s.title}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="px-4 py-12 bg-white dark:bg-gray-900">
        <h2 className="text-xl font-bold text-center mb-1 text-gray-900 dark:text-white">
          Recent Work
        </h2>
        <p className="text-xs text-center text-gray-500 dark:text-gray-400 mb-8">
          Projects we're proud of
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {projects.map((p, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 text-center cursor-pointer hover:scale-105 transition-transform"
              style={{ background: p.color, color: "#ffffff" }}
            >
              <div className="text-3xl mb-2">{p.emoji}</div>
              <p className="text-sm font-bold" style={{ color: "#ffffff" }}>
                {p.name}
              </p>
              <p
                className="text-xs mt-0.5"
                style={{ color: "rgba(255,255,255,0.80)" }}
              >
                {p.category}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-14 bg-indigo-500 dark:bg-indigo-600 text-center">
        <h2 className="text-2xl font-extrabold mb-3 text-white">
          Ready to build something great?
        </h2>
        <p
          className="text-sm mb-6 max-w-xs mx-auto"
          style={{ color: "rgba(255,255,255,0.90)" }}
        >
          Let's turn your idea into a product that stands out.
        </p>
        <button
          className="px-8 py-3 bg-white font-bold rounded-full text-sm hover:bg-gray-100 dark:hover:bg-gray-200 transition"
          style={{ color: "#4f46e5" }}
        >
          Get a Free Quote
        </button>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-6 flex justify-between items-center text-xs border-t border-gray-100 dark:border-gray-800 flex-wrap gap-2">
        <span className="font-bold text-gray-700 dark:text-white">
          Pixel<span className="text-indigo-500">Forge</span>
        </span>
        <span className="text-gray-700 dark:text-gray-500">
          © 2025 PixelForge Agency
        </span>
        <div className="flex gap-4">
          {["Twitter", "LinkedIn", "Dribbble"].map((s) => (
            <span
              key={s}
              className="text-gray-700 dark:text-gray-500 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer transition"
            >
              {s}
            </span>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default AgencyTemplate;
