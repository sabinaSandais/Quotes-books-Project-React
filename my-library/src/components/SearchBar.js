import React, { useState, useEffect } from "react";
import "./SearchBar.css";

const SearchBar = ({ books, setSearchTerm }) => {
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [localSearchTerm, setLocalSearchTerm] = useState("");

  useEffect(() => {
    if (localSearchTerm) {
      const filtered = books.filter((book) =>
        book.title.toLowerCase().includes(localSearchTerm.toLowerCase())
      );
      setFilteredBooks(filtered);
      setShowSuggestions(true);
    } else {
      setFilteredBooks([]);
      setShowSuggestions(false);
    }
  }, [localSearchTerm, books]);

  return (
    <div className="search-bar-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search for books..."
        value={localSearchTerm}
        onChange={(e) => setLocalSearchTerm(e.target.value)}
        onFocus={() => localSearchTerm && setShowSuggestions(true)}
        onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
      />
      {showSuggestions && (
        <ul className="suggestions-list">
          {filteredBooks.map((book) => (
            <li
              key={book.id}
              className="suggestion-item"
              onMouseDown={() => {
                setSearchTerm(book.title);
                setLocalSearchTerm("");
                setShowSuggestions(false);
              }}
            >
              {book.title}
            </li>
          ))}
          {filteredBooks.length === 0 && (
            <li className="no-suggestion-item">No results found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
