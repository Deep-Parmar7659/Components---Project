// ComponentCard → each card
import { useNavigate } from "react-router-dom";
import { useFavorites } from "../../Context/FavoritesContext";

const ComponentCard = ({ component }) => {
  const { favorites, toggle } = useFavorites();
  const isFav = favorites.includes(component.name.toLowerCase());
  const navigate = useNavigate();

  const handleClick = () => {
    const slug = component.name.toLowerCase().replace(/\s+/g, "-");
    navigate(`/components/${slug}`);
  };

  return (
    <div
      onClick={handleClick}
      className="group cursor-pointer rounded-2xl
        bg-white/70 dark:bg-gray-900/60
        backdrop-blur-lg
        border border-gray-200 dark:border-gray-800
        shadow-sm hover:shadow-xl
        hover:-translate-y-1
        transition-all duration-300
        overflow-hidden"
    >
      {/* PREVIEW IMAGE on top */}
      <div className="w-full h-40 bg-gray-100 dark:bg-gray-700 overflow-hidden">
        {component.preview ? (
          <img
            src={component.preview}
            alt={component.name}
            className="w-full h-full object-contain dark:bg-gray-900 transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
            No Preview
          </div>
        )}
      </div>

      {/* CARD BODY — your existing style kept exactly */}
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
          {component.name}
        </h2>

        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Click to preview component
        </p>

        <div className="flex justify-between items-center">
          <span className="text-sm px-3 py-1">{component.type}</span>
          <div className="mt-4 text-sm font-medium text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition">
            View →
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentCard;
