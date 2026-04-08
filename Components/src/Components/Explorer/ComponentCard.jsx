// ComponentCard → each card
import { useFavorites } from "../../Context/FavoritesContext";

const ComponentCard = ({ component }) => {
  const { favorites, toggle } = useFavorites();
  const isFav = favorites.includes(component.name.toLowerCase());

  return (
    <div className="relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-xl transition-all">
      {/* ⭐ Favorite Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggle(component.name.toLowerCase());
        }}
        className="absolute top-3 right-3 text-lg hover:scale-110 transition"
      >
        {isFav ? "⭐" : "☆"}
      </button>

      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
        {component.name}
      </h2>

      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {component.description}
      </p>

      <div className="flex justify-between items-center">
        <span className="text-sm px-3 py-1 bg-pink-100 text-pink-600 rounded-full">
          {component.type}
        </span>

        <button className="text-sm font-semibold text-pink-600 hover:underline">
          View
        </button>
      </div>
    </div>
  );
};

export default ComponentCard;
