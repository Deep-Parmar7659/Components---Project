import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Components", path: "/components" },
    { name: "Templates", path: "/templates" },
    { name: "Favorites", path: "/favorites" },
    { name: "Contact", path: "/contact" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl border-b border-(--card-border) bg-(--bg-main)/60">
      <div className="container-custom flex justify-between items-center py-4">
        {/* LOGO */}
        <Link
          to="/"
          className="text-xl font-semibold tracking-tight hover:opacity-80 transition"
          onClick={closeMenu}
        >
          TailwindTap
        </Link>

        {/* DESKTOP NAV LINKS */}
        <div className="hidden md:flex items-center gap-6">
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

        {/* MOBILE: theme toggle + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleTheme}
            className="px-3 py-1.5 rounded-full border border-(--card-border)
            bg-(--card-bg) text-(--text-primary) transition text-sm"
          >
            {theme === "dark" ? "🌞" : "🌙"}
          </button>

          {/* Hamburger Button */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className="flex flex-col justify-center items-center w-8 h-8 gap-1.5"
          >
            <span
              className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {menuOpen && (
        <div className="md:hidden border-t border-(--card-border) bg-(--bg-main)/95 backdrop-blur-xl px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => {
            const isActive =
              location.pathname === link.path ||
              location.pathname.startsWith(link.path + "/");
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={closeMenu}
                className={`text-base font-medium transition py-1 ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
