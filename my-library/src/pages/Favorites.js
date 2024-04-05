import React from "react";
import { useAppContext } from "../context/appContext";

import BackButton from "../components/BackButton";
const Favorites = () => {
  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

  const favoritesChecker = (id) => {
    const boolean = favorites.some((book) => book.id === id);
    return boolean;
  };
  return (
   
     
    <div className="favorites">
      <BackButton />
   
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
                <button className="btn" onClick={() => removeFromFavorites(book.id)}>
                  Remove from favorites
                </button>
              ) : (
                <button  className="btn" onClick={() => addToFavorites(book)}>
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
