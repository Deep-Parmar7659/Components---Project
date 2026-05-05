import { NavLink, Link } from "react-router-dom";
import { useFavorites } from "../../context/FavoritesContext";
import { componentsData } from "../../data/componentsData";

const Sidebar = ({ onClose }) => {
  const { favorites } = useFavorites();

  const linkClass =
    "block px-4 py-2 rounded-lg capitalize hover:bg-pink-100 dark:hover:bg-gray-800";

  const activeClass = "bg-pink-600 text-white";

  const basicComponents = componentsData.filter((c) => c.type === "Basic");
  const advancedComponents = componentsData.filter(
    (c) => c.type === "Advanced",
  );
  const uiComponents = componentsData.filter((c) => c.type === "UI");

  const formatPath = (name) => name.toLowerCase().replace(/\s+/g, "-");

  const handleLinkClick = () => {
    if (onClose) onClose();
  };

  return (
    <div className="w-64 h-screen overflow-y-auto bg-white dark:bg-gray-900 p-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">Components</h2>
        {/* Close button - only visible on mobile */}
        <button
          onClick={onClose}
          className="md:hidden text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 text-xl leading-none"
          aria-label="Close sidebar"
        >
          ✕
        </button>
      </div>

      {/* FAVORITES */}
      {favorites.length > 0 && (
        <div className="mb-6">
          <h2 className="text-sm font-semibold mb-2 text-gray-500">
            Favorites
          </h2>
          <ul className="space-y-2">
            {favorites.map((item) => (
              <li key={item}>
                <Link
                  to={`/components/${item}`}
                  onClick={handleLinkClick}
                  className="block px-3 py-2 rounded-md hover:text-primary"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* BASIC */}
      <div className="mb-6">
        <h2 className="text-sm text-gray-500 mb-2">Basic</h2>
        {basicComponents.map((item) => (
          <NavLink
            key={item.id}
            to={`/components/${formatPath(item.name)}`}
            onClick={handleLinkClick}
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ""}`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>

      {/* ADVANCED */}
      <div className="mb-6">
        <h2 className="text-sm text-gray-500 mb-2">Advanced</h2>
        {advancedComponents.map((item) => (
          <NavLink
            key={item.id}
            to={`/components/${formatPath(item.name)}`}
            onClick={handleLinkClick}
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ""}`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>

      {/* UI */}
      <div>
        <h2 className="text-sm text-gray-500 mb-2">UI</h2>
        {uiComponents.map((item) => (
          <NavLink
            key={item.id}
            to={`/components/${formatPath(item.name)}`}
            onClick={handleLinkClick}
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ""}`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
