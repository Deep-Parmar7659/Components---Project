const KEY = "favorites";

export const getFavorites = () => {
  try {
    const data = localStorage.getItem(KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    return [];
  }
};

export const toggleFavorite = (name) => {
  let favorites = getFavorites();

  if (favorites.includes(name)) {
    favorites = favorites.filter((item) => item !== name);
  } else {
    favorites.push(name);
  }

  localStorage.setItem(KEY, JSON.stringify(favorites));
  return favorites;
};

export const isFavorite = (name) => {
  return getFavorites().includes(name);
};
