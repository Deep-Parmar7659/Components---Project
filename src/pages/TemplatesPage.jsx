import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { templatesData } from "../data/templatesData";

const SidebarContent = ({
  search,
  setSearch,
  filter,
  categories,
  handleCategorySelect,
  getCategoryCount,
}) => (
  <>
    {/* Search */}
    <div className="relative mb-6">
      <input
        type="text"
        placeholder="Search Templates"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          background: "var(--card-bg)",
          border: "1px solid var(--card-border)",
          color: "var(--text-primary)",
        }}
        className="w-full px-4 py-2.5 pr-10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
      />
      <span
        className="absolute right-3 top-1/2 -translate-y-1/2 text-sm"
        style={{ color: "var(--text-secondary)" }}
      >
        🔍
      </span>
    </div>

    {/* Category List */}
    <nav className="space-y-1">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => handleCategorySelect(cat)}
          className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm transition-all"
          style={
            filter === cat
              ? {
                  background: "var(--accent)",
                  color: "#ffffff",
                  fontWeight: 500,
                }
              : { color: "var(--text-secondary)", background: "transparent" }
          }
          onMouseEnter={(e) => {
            if (filter !== cat) {
              e.currentTarget.style.background = "var(--card-bg)";
              e.currentTarget.style.color = "var(--text-primary)";
            }
          }}
          onMouseLeave={(e) => {
            if (filter !== cat) {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "var(--text-secondary)";
            }
          }}
        >
          <span>{cat}</span>
          <span
            className="text-xs px-2 py-0.5 rounded-full"
            style={
              filter === cat
                ? { background: "rgba(255,255,255,0.2)", color: "#ffffff" }
                : {
                    background: "var(--card-border)",
                    color: "var(--text-secondary)",
                  }
            }
          >
            {getCategoryCount(cat)}
          </span>
        </button>
      ))}
    </nav>
  </>
);

const TemplatesPage = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const categories = [
    "All",
    "Landing",
    "Dashboard",
    "Auth",
    "E-commerce",
    "Blog",
    "Portfolio",
    "SaaS",
    "Startup",
    "Admin",
    "Restaurant",
    "Agency",
    "Medical",
    "Real Estate",
    "Job Board",
  ];

  const getCategoryCount = (cat) => {
    if (cat === "All") return templatesData.length;
    return templatesData.filter((t) =>
      t.name.toLowerCase().includes(cat.toLowerCase()),
    ).length;
  };

  const filtered = templatesData.filter((t) => {
    const matchSearch = t.name.toLowerCase().includes(search.toLowerCase());
    const matchFilter =
      filter === "All" || t.name.toLowerCase().includes(filter.toLowerCase());
    return matchSearch && matchFilter;
  });

  const handleCategorySelect = (cat) => {
    setFilter(cat);
    setSidebarOpen(false);
  };

  const sidebarContentProps = {
    search,
    setSearch,
    filter,
    categories,
    handleCategorySelect,
    getCategoryCount,
  };

  return (
    <div
      className="min-h-screen flex"
      style={{ background: "var(--bg-main)", color: "var(--text-primary)" }}
    >
      {/* ===== DESKTOP SIDEBAR ===== */}
      <aside
        className="hidden md:block w-64 min-h-screen p-5 shrink-0 sticky top-0 h-screen overflow-y-auto"
        style={{
          background: "var(--bg-secondary)",
          borderRight: "1px solid var(--card-border)",
        }}
      >
        <SidebarContent {...sidebarContentProps} />
      </aside>

      {/* ===== MOBILE SIDEBAR OVERLAY ===== */}
      {sidebarOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black/50"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      <aside
        className={`md:hidden fixed top-0 left-0 z-50 h-full w-72 p-5 overflow-y-auto transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{
          background: "var(--bg-secondary)",
          borderRight: "1px solid var(--card-border)",
        }}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-lg">Filter</h2>
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-xl leading-none"
            style={{ color: "var(--text-secondary)" }}
          >
            ✕
          </button>
        </div>
        <SidebarContent {...sidebarContentProps} />
      </aside>

      {/* ===== RIGHT CONTENT ===== */}
      <main className="flex-1 p-4 sm:p-6 md:p-8 min-w-0">
        {/* Header */}
        <div className="mb-6 sm:mb-8 flex items-center justify-between gap-4">
          <div>
            <h1
              className="text-2xl sm:text-3xl font-bold"
              style={{ color: "var(--text-primary)" }}
            >
              {filter === "All" ? "All Templates" : `${filter} Templates`}
            </h1>
            <p
              className="text-sm mt-1"
              style={{ color: "var(--text-secondary)" }}
            >
              {filtered.length} templates found
            </p>
          </div>
          {/* Mobile filter button */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="md:hidden px-4 py-2 rounded-xl text-sm font-medium shrink-0"
            style={{
              background: "var(--card-bg)",
              border: "1px solid var(--card-border)",
              color: "var(--text-primary)",
            }}
          >
            ☰ Filter
          </button>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((template) => (
              <div
                key={template.id}
                onClick={() => navigate(`/templates/${template.slug}`)}
                className="group cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "var(--card-bg)",
                  border: "1px solid var(--card-border)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 30px rgba(236,72,153,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--card-border)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Preview Image */}
                <div
                  className="w-full h-44 overflow-hidden"
                  style={{ background: "var(--bg-secondary)" }}
                >
                  {template.preview ? (
                    <img
                      src={template.preview}
                      alt={template.name}
                      className="w-full h-full object-contain object-top transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div
                      className="w-full h-full flex items-center justify-center text-sm"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      No Preview
                    </div>
                  )}
                </div>

                {/* Card Info */}
                <div
                  className="p-4"
                  style={{ borderTop: "1px solid var(--card-border)" }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h2
                        className="text-base font-semibold"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {template.name}
                      </h2>
                      <p
                        className="text-xs mt-0.5"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        Click to preview template
                      </p>
                    </div>
                    <span
                      className="text-xs font-medium opacity-0 group-hover:opacity-100 transition"
                      style={{ color: "var(--accent)" }}
                    >
                      View →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p
            className="text-center mt-20 text-lg"
            style={{ color: "var(--text-secondary)" }}
          >
            No templates found 😅
          </p>
        )}
      </main>
    </div>
  );
};

export default TemplatesPage;
