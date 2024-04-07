import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { BOOKS_DETAILS_URL } from "../Api";
import BackButton from "../components/BackButton";
import "./BookDetails.css";

const BookDetails = () => {
  const { id } = useParams();
  const { data: book, loading, error } = useFetch(`${BOOKS_DETAILS_URL}/${id}`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="book-container">
      <div className="book-detail">
        <h3>{book.title}</h3>
        <img src={book.image_url} alt={book?.title} />
        <h3>DESCRIPTION</h3>
        <p>{book.description}</p>
        <h3>Authors</h3>
        <p>{book.authors}</p>
        <h3>Genres</h3>
        <p>{book.genres}</p>
        <BackButton />
      </div>
    </div>
  );
};

export default BookDetails;
