import React from "react";
import useFetch from "../hooks/useFetch";
import { API_URL } from "../Api";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";

const BookList = () => {
  const { data: books, loading, error } = useFetch(API_URL);
  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();
  const navigate = useNavigate();

  //const favoritesChecker = (id) => favorites.some((book) => book.id === id);
  const favoritesChecker = (id) => {
    const select = favorites.some((book) => book.id === id);
    return select;
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="book-list">
      {books.map((book) => (
        <div key={book.id} className="book">
          <div>
            <h4>{book.title}</h4>
          </div>
          <div>
            <img
              src={book.image_url}
              alt={book.title}
              onClick={() => navigate(`/book/${book.id}`)}
            />
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
      ))}
    </div>
  );
};

export default BookList;
