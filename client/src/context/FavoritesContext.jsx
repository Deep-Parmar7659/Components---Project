// User clicks favorite → Saved in context → Available everywhere
import { createContext, useContext, useState } from "react";
import { getFavorites, toggleFavorite } from "../Utils/favoritesStorage";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => getFavorites());

  const toggle = (name) => {
    const updated = toggleFavorite(name);
    setFavorites(updated);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggle }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
