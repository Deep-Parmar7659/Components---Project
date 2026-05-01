const JobBoardTemplate = () => {
  const jobs = [
    {
      title: "Senior Frontend Developer",
      company: "Stripe",
      location: "Remote",
      type: "Full-time",
      salary: "$120–160K",
      tags: ["React", "TypeScript", "CSS"],
      logo: "💳",
      hot: true,
    },
    {
      title: "Product Designer",
      company: "Figma",
      location: "San Francisco",
      type: "Full-time",
      salary: "$100–140K",
      tags: ["Figma", "UX", "Prototyping"],
      logo: "✏️",
      hot: false,
    },
    {
      title: "Backend Engineer",
      company: "Vercel",
      location: "Remote",
      type: "Full-time",
      salary: "$130–180K",
      tags: ["Node.js", "AWS", "PostgreSQL"],
      logo: "▲",
      hot: true,
    },
    {
      title: "Growth Marketer",
      company: "Linear",
      location: "New York",
      type: "Contract",
      salary: "$80–100K",
      tags: ["SEO", "Analytics", "Email"],
      logo: "📐",
      hot: false,
    },
    {
      title: "iOS Developer",
      company: "Notion",
      location: "Remote",
      type: "Full-time",
      salary: "$110–150K",
      tags: ["Swift", "Xcode", "UIKit"],
      logo: "📝",
      hot: false,
    },
    {
      title: "DevOps Engineer",
      company: "Railway",
      location: "Remote",
      type: "Full-time",
      salary: "$120–170K",
      tags: ["Docker", "Kubernetes", "CI/CD"],
      logo: "🚂",
      hot: true,
    },
  ];

  const categories = [
    { name: "Engineering", count: 1240, icon: "💻" },
    { name: "Design", count: 380, icon: "🎨" },
    { name: "Marketing", count: 290, icon: "📈" },
    { name: "Product", count: 210, icon: "🧩" },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* NAV */}
      <nav className="px-6 py-4 flex justify-between items-center border-b border-gray-100 dark:border-gray-800">
        <span className="font-extrabold text-lg">
          Job<span className="text-violet-500">Nest</span>
        </span>
        <div className="flex gap-3">
          <button className="px-4 py-1.5 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-semibold hover:border-violet-400 transition">
            Post a Job
          </button>
          <button className="px-4 py-1.5 bg-violet-500 text-white rounded-full text-xs font-bold hover:bg-violet-600 transition">
            Sign Up
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="px-6 py-12 text-center bg-linear-to-br from-violet-50 to-purple-100 dark:from-violet-950 dark:to-gray-900">
        <span className="inline-block px-3 py-1 bg-violet-100 text-violet-700 text-xs font-semibold rounded-full mb-3">
          🎯 10,000+ Jobs from Top Companies
        </span>
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-3">
          Find Your Next{" "}
          <span className="text-violet-500 dark:text-violet-400">
            Dream Job
          </span>
        </h1>
        <p className="text-sm text-gray-500 mb-6 max-w-xs mx-auto">
          Browse curated remote and on-site jobs at the world's best companies.
        </p>

        {/* Search */}
        <div className="bg-white rounded-2xl p-3 flex flex-col sm:flex-row gap-2 max-w-lg mx-auto shadow-lg border border-violet-100">
          <input
            type="text"
            placeholder="🔍  Job title or keyword..."
            className="flex-1 px-3 py-2 text-gray-800 text-sm focus:outline-none"
          />
          <select className="px-3 py-2 text-gray-600 bg-gray-50 rounded-xl text-xs border-none focus:outline-none">
            <option>All Locations</option>
            <option>Remote</option>
            <option>New York</option>
            <option>San Francisco</option>
          </select>
          <button className="px-5 py-2 bg-violet-500 text-white font-bold rounded-xl text-sm hover:bg-violet-600 transition">
            Search
          </button>
        </div>

        <div className="mt-3 text-xs text-gray-400">
          Popular:{" "}
          <span className="text-violet-500 cursor-pointer hover:underline">
            React
          </span>{" "}
          ·{" "}
          <span className="text-violet-500 cursor-pointer hover:underline">
            Remote
          </span>{" "}
          ·{" "}
          <span className="text-violet-500 cursor-pointer hover:underline">
            Design
          </span>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="px-4 py-8 bg-gray-50 dark:bg-gray-800">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
          {categories.map((c, i) => (
            <div
              key={i}
              className="p-4 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-violet-400 cursor-pointer transition text-center"
            >
              <span className="text-2xl">{c.icon}</span>
              <p className="text-sm font-bold mt-1">{c.name}</p>
              <p className="text-xs text-gray-400">{c.count} jobs</p>
            </div>
          ))}
        </div>
      </section>

      {/* JOB LISTINGS */}
      <section className="px-4 py-10">
        <div className="flex justify-between items-center mb-5 max-w-2xl mx-auto">
          <h2 className="text-xl font-bold">Latest Jobs</h2>
          <span className="text-xs text-violet-500 font-semibold cursor-pointer hover:underline">
            View all →
          </span>
        </div>

        <div className="flex flex-col gap-3 max-w-2xl mx-auto">
          {jobs.map((j, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-4 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-violet-400 hover:shadow-md transition cursor-pointer group"
            >
              {/* Logo */}
              <div className="w-10 h-10 rounded-xl bg-violet-50 dark:bg-violet-900/20 border border-violet-100 dark:border-violet-900/40 flex items-center justify-center text-lg shrink-0">
                {j.logo}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 flex-wrap">
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-bold">{j.title}</p>
                      {j.hot && (
                        <span className="px-1.5 py-0.5 bg-red-100 text-red-600 text-xs font-bold rounded-full">
                          🔥 Hot
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 mt-0.5">
                      {j.company} · {j.location}
                    </p>
                  </div>
                  <p className="text-sm font-bold text-violet-600 shrink-0">
                    {j.salary}
                  </p>
                </div>

                <div className="mt-2 flex items-center gap-2 flex-wrap">
                  <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded-full">
                    {j.type}
                  </span>
                  {j.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 bg-violet-50 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400 text-xs rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <button className="px-3 py-1.5 bg-violet-500 text-white text-xs font-bold rounded-xl hover:bg-violet-600 transition shrink-0 opacity-0 group-hover:opacity-100">
                Apply
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="px-6 py-12 bg-violet-500 dark:bg-violet-600 text-center"
        style={{ color: "#fff" }}
      >
        <h2 className="text-2xl font-extrabold mb-2" style={{ color: "#fff" }}>
          Hiring? Post your job today
        </h2>
        <p className="text-sm mb-6" style={{ color: "#fff" }}>
          Reach 500,000+ active job seekers
        </p>
        <button
          className="px-8 py-3 bg-white text-violet-600 font-bold rounded-full text-sm hover:bg-gray-100 transition"
          style={{ color: "#7c3aed" }}
        >
          Post a Job — Free
        </button>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-6 text-center text-xs text-gray-400 border-t border-gray-100 dark:border-gray-800">
        <p className="font-bold text-sm text-gray-700 dark:text-white mb-1">
          JobNest
        </p>
        <p>📧 hello@jobnest.io · Jobs posted daily</p>
        <p className="mt-2">© 2025 JobNest. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default JobBoardTemplate;
