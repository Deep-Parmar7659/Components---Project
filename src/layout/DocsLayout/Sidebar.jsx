import { NavLink, Link } from "react-router-dom";
import { useFavorites } from "../../context/FavoritesContext";
import { componentsData } from "../../data/componentsData";
const Sidebar = () => {
  const { favorites } = useFavorites();

  const linkClass =
    "block px-4 py-2 rounded-lg capitalize hover:bg-pink-100 dark:hover:bg-gray-800";

  const activeClass = "bg-pink-600 text-white";

  // 🔥 GROUP COMPONENTS
  const basicComponents = componentsData.filter((c) => c.type === "Basic");
  const advancedComponents = componentsData.filter(
    (c) => c.type === "Advanced",
  );
  const uiComponents = componentsData.filter((c) => c.type === "UI");

  // Route
  const formatPath = (name) => name.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="w-64 h-screen overflow-y-auto bg-white dark:bg-gray-900 p-4">
      <h2 className="text-xl font-bold mb-6">Components</h2>

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
