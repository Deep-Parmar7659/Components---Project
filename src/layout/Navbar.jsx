import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: "Components", path: "/components" },
    { name: "Templates", path: "/templates" },
    { name: "Favorites", path: "/favorites" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl border-b border-(--card-border) bg-(--bg-main)/60">
      <div className="container-custom flex justify-between items-center py-4">
        {/* LOGO */}
        <Link
          to="/"
          className="text-xl font-semibold tracking-tight hover:opacity-80 transition"
        >
          TailwindTap
        </Link>

        {/* NAV LINKS */}
        <div className="flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive =
              location.pathname === link.path ||
              location.pathname.startsWith(link.path + "/");

            return (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          {/* THEME TOGGLE */}
          <button
            onClick={toggleTheme}
            className="px-4 py-1.5 rounded-full border border-(--card-border) 
            bg-(--card-bg) text-(--text-primary) 
            hover:scale-105 transition"
          >
            {theme === "dark" ? "🌞" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
