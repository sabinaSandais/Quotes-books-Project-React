import { useState } from "react";
import useFetch from "../hooks/useFetch";
import { API_URL } from "../Api";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import "./BookList.css";

const BookList = () => {
  const { data: books, loading, error } = useFetch(API_URL);
  const [searchTerm, setSearchTerm] = useState("");
  const { addToFavorites, removeFromFavorites, favoritesChecker, trimTitle } =
    useAppContext();
  const navigate = useNavigate();

  const filteredBooks = books?.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="book-list-page">
      <SearchBar books={books} setSearchTerm={setSearchTerm} />
      <div className="book-list">
        {filteredBooks && filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div key={book.id} className="book">
              <div>
                <h3>{trimTitle(book.title, 15)}</h3>
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
                  <button
                    className="remove-btn"
                    onClick={() => removeFromFavorites(book.id)}
                  >
                    Remove from favorites
                  </button>
                ) : (
                  <button
                    className="add-btn"
                    onClick={() => addToFavorites(book)}
                  >
                    Add to favorites
                  </button>
                )}
              </div>
            </div>
          ))
        ) : (
          <div>No books found.</div>
        )}
      </div>
    </div>
  );
};

export default BookList;
