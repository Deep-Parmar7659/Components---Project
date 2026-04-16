// Cmponents are dynamically display using map function.
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const componentsData = [
  // Basic
  { name: "Accordion", slug: "accordion", category: "Basic" },
  { name: "Accordion FAQ", slug: "accordion-faq", category: "Basic" },
  { name: "Tabs", slug: "tabs", category: "Basic" },
  { name: "Button", slug: "button", category: "Basic" },
  { name: "Input", slug: "input", category: "Basic" },
  { name: "Badge", slug: "badge", category: "Basic" },
  { name: "Avatar", slug: "avatar", category: "Basic" },
  { name: "Spinner", slug: "spinner", category: "Basic" },
  { name: "Checkbox", slug: "checkbox", category: "Basic" },
  { name: "Radio", slug: "radio", category: "Basic" },
  { name: "Switch", slug: "switch", category: "Basic" },

  // Advanced
  { name: "Modal", slug: "modal", category: "Advanced" },
  { name: "Sheet", slug: "sheet", category: "Advanced" },
  { name: "Dropdown", slug: "dropdown", category: "Advanced" },
  { name: "Tooltip", slug: "tooltip", category: "Advanced" },
  { name: "Popover", slug: "popover", category: "Advanced" },
  { name: "Pagination", slug: "pagination", category: "Advanced" },
  { name: "Skeleton", slug: "skeleton", category: "Advanced" },
  { name: "Command", slug: "command", category: "Advanced" },
  { name: "DataTable", slug: "datatable", category: "Advanced" },
  { name: "Toast", slug: "toast", category: "Advanced" },
  { name: "Alert", slug: "alert", category: "Advanced" },
  { name: "Stepper", slug: "stepper", category: "Advanced" },

  // UI
  { name: "GlowCard", slug: "glowcard", category: "UI" },
  { name: "GlassCard", slug: "glasscard", category: "UI" },
  { name: "Container", slug: "container", category: "UI" },
  { name: "Section", slug: "section", category: "UI" },
  { name: "Card", slug: "card", category: "UI" },
  { name: "Navbar", slug: "navbar", category: "UI" },
];

const ComponentsPage = () => {
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearch(searchInput);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchInput]);

  // Filter logic
  const filtered = componentsData.filter((comp) => {
    return (
      (filter === "All" || comp.category === filter) &&
      comp.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="min-h-screen px-6 py-16 bg-linear-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">
        Explore Components
      </h1>

      {/* Search + Filter */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 mb-10">
        {/* Search */}
        <input
          type="text"
          placeholder="Search components..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="
            flex-1 px-4 py-3 rounded-lg border 
            border-gray-400 dark:border-gray-700
            bg-white dark:bg-gray-900
            text-gray-900 dark:text-white
            placeholder-gray-400 dark:placeholder-gray-500
            focus:outline-none focus:ring-2 focus:ring-blue-500
            transition
          "
        />

        {/* Filter Buttons */}
        <div className="flex gap-2">
          {["All", "Basic", "Advanced", "UI"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg ${
                filter === cat
                  ? "bg-pink-500 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Result Count */}
      <p className="text-sm text-gray-500 text-center mb-6">
        {filtered.length} components found
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((comp) => (
            <div
              key={comp.slug}
              className="
                p-6 rounded-2xl
               bg-white/70 dark:bg-gray-900/60
                backdrop-blur-lg
                border border-gray-200 dark:border-gray-800
                shadow-sm hover:shadow-xl
                hover:-translate-y-1
                transition-all duration-300
              "
            >
              <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white tracking-tight">
                {comp.name}
              </h2>

              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                {comp.category}
              </p>

              <button
                onClick={() => navigate(`/components/${comp.slug}`)}
                className="
                  inline-block text-sm font-semibold
                  text-blue-600 dark:text-blue-400
                  hover:underline
                "
              >
                View Component →
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">
          No components found 😔
        </p>
      )}
    </div>
  );
};

export default ComponentsPage;
