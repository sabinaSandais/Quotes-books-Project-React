
import React, { useState } from "react";
import useFetch from "../hooks/useFetch"; // Adjust the import path as necessary
import { API_URL } from "../Api";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import './BookList.css' 

const BookList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data: books, loading, error } = useFetch(API_URL);
  console.log(books);
  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();
  const navigate = useNavigate();

  const favoritesChecker = (id) => favorites.some((book) => book.id === id);

  
  const filteredBooks = books?.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div className="search-bar"><SearchBar onSearch={setSearchTerm} /></div>
      <div className="book-list">
        {filteredBooks.map((book) => (
          <div key={book.id} className="book">
            <div>
              <h2 className="book-title">{book.title}</h2>
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
    </div>
  );
};

export default BookList;



// import React from "react";
// import useFetch from "../hooks/useFetch";
// import { API_URL } from "../Api";
// import { useAppContext } from "../context/appContext";
// import { useNavigate } from "react-router-dom";
// import '../App.css';

// const BookList = () => {
//   const { data: books, loading, error } = useFetch(API_URL);
//   const { favorites, addToFavorites, removeFromFavorites } = useAppContext();
//   const navigate = useNavigate();

//   //const favoritesChecker = (id) => favorites.some((book) => book.id === id);
//   const favoritesChecker = (id) => {
//     const select = favorites.some((book) => book.id === id);
//     return select;
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div className="book-list">
//       {books.map((book) => (
//         <div key={book.id} className="book">
//           <div>
//             <h4>{book.title}</h4>
//           </div>
//           <div>
//             <img
//               src={book.image_url}
//               alt={book.title}
//               onClick={() => navigate(`/book/${book.id}`)}
//             />
//           </div>
//           <div>
//             {favoritesChecker(book.id) ? (
//               <button onClick={() => removeFromFavorites(book.id)}>
//                 Remove from favorites
//               </button>
//             ) : (
//               <button onClick={() => addToFavorites(book)}>
//                 Add to favorites
//               </button>
//             )}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default BookList;
