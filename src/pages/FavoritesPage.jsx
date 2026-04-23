import AppContainer from "../components/ui/AppContainer";
import useFavorites from "../hooks/useFavorites";
import { Link } from "react-router-dom";

const FavoritesPage = () => {
  const { favorites } = useFavorites();

  return (
    <div className="min-h-screen bg-background">
      <AppContainer>
        <h1 className="text-3xl font-semibold mb-6">⭐ Favorite Components</h1>

        {favorites.length === 0 ? (
          <p className="text-muted-foreground">No favorite components yet 😅</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {favorites.map((item) => (
              <Link
                key={item}
                to={`/components/${item}`}
                className="p-6 rounded-xl border bg-card hover:shadow-lg transition"
              >
                <h2 className="text-lg font-medium capitalize">
                  {item.replace("-", " ")}
                </h2>

                <p className="text-sm text-muted-foreground mt-2">
                  Click to view component
                </p>
              </Link>
            ))}
          </div>
        )}
      </AppContainer>
    </div>
  );
};

export default FavoritesPage;
