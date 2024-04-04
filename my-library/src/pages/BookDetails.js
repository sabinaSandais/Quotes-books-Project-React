import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { BOOKS_DETAILS_URL } from "../Api";

const BookDetails = () => {
  const { id } = useParams();
  const { data: book, loading, error } = useFetch(`${BOOKS_DETAILS_URL}/${id}`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="book-details">
      <div>
        <h2>{book?.title}</h2>
        <img src={book?.image_url} alt={book?.title} />
      </div>
      <div>
        <h2>DESCRIPTION</h2>
        <p>{book?.description}</p>
        <h2>Authors</h2>
        <p>{book?.authors}</p>
        <h2>Genres</h2>
        <p>{book?.genres}</p>
      </div>
    </div>
  );
};

export default BookDetails;
