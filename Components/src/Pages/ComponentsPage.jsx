import { useState } from "react";
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
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const navigate = useNavigate();

  const filtered = componentsData.filter((comp) => {
    return (
      (filter === "All" || comp.category === filter) &&
      comp.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="min-h-screen px-6 py-16 bg-white dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">
        Explore Components
      </h1>

      {/* Search */}
      <div className="max-w-4xl mx-auto flex gap-4 mb-10">
        <input
          type="text"
          placeholder="Search..."
          className="flex-1 px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          onChange={(e) => setFilter(e.target.value)}
          className="px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
        >
          <option>All</option>
          <option>Basic</option>
          <option>Advanced</option>
          <option>UI</option>
        </select>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {filtered.map((comp) => (
          <div
            key={comp.slug}
            className="p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              {comp.name}
            </h2>

            <p className="text-gray-500 mb-4">{comp.category}</p>

            <button
              onClick={() => navigate(`/components/${comp.slug}`)} // ✅ FIX
              className="text-pink-500 font-semibold"
            >
              View Component →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComponentsPage;
