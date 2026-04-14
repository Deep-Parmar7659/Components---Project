import { useFavorites } from "../../Context/FavoritesContext";
const FavoriteButton = ({ name }) => {
  const { favorites, toggle } = useFavorites();

  const isFav = favorites.includes(name);

  return (
    <button
      onClick={() => toggle(name)}
      className="text-xl hover:scale-110 transition"
    >
      {isFav ? "⭐" : "☆"}
    </button>
  );
};

export default FavoriteButton;
