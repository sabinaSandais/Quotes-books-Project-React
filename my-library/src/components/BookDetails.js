import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BOOKS_DETAILS_URL } from "../Api";

const BookDetails = () => {
  const [book, setBook] = useState({});

  const { id } = useParams();
  const bookDetails = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data);
      setBook(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    bookDetails(`${BOOKS_DETAILS_URL}/${id}`);
  }, [id]);

  return (
    <div className="book-details">
      <div>
        <h2>{book?.title}</h2>
        <img src={book.image_url} alt={book.title} />
      </div>
      <div>
        <h2>DESCRIPTION</h2>
        <p>{book.description}</p>
        <h2>Authors</h2>
        <p>{book.authors}</p>
        <h2>Genres</h2>
        <p>{book.genres}</p>
      </div>
    </div>
  );
};

export default BookDetails;
