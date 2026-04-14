import { useState } from "react";
import {
  getFavorites,
  toggleFavorite,
  isFavorite,
} from "../Utils/favoritesStorage";

const useFavorites = () => {
  const [favorites, setFavorites] = useState(() => {
    const data = getFavorites();
    return Array.isArray(data) ? data : [];
  });

  const toggle = (name) => {
    const updated = toggleFavorite(name);
    setFavorites(updated);
  };

  const check = (name) => isFavorite(name);

  return { favorites, toggle, check };
};

export default useFavorites;
