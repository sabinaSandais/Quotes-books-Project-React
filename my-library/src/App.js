import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Favorites from "./pages/Favorites";
import BookDetails from "./pages/BookDetails";
import BookList from "./pages/BookList";
import Quotes from "./pages/Quotes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Quotes />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/bookList" element={<BookList />} />
      </Routes>
    </div>
  );
}

export default App;
