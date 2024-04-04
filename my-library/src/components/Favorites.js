import React from "react";
import { useAppContext } from "../context/appContext";

const Favorites = () => {
  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

  const favoritesChecker = (id) => {
    const boolean = favorites.some((book) => book.id === id);
    return boolean;
  };
  return (
    <div className="favorites">
      {favorites.length > 0 ? (
        favorites.map((book) => (
          <div key={book.id} className="book">
            <div>
              <h4>{book.title}</h4>
            </div>
            <div>
              <img src={book.image_url} alt={book.title} />
            </div>
            <div>
              {favoritesChecker(book.id) ? (
                <button onClick={() => removeFromFavorites(book.id)}>
                  Remove from favorites
                </button>
              ) : (
                <button onClick={() => addToFavorites(book)}>
                  Add to favorites
                </button>
              )}
            </div>
          </div>
        ))
      ) : (
        <h2>No favorites yet</h2>
      )}
    </div>
  );
};

export default Favorites;
