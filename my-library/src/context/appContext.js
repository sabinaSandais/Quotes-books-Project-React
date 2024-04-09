import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AppContext = createContext();

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};

export const AppContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  const addToFavorites = (book) => {
    setFavorites((prevFavorites) => [...prevFavorites, book]);
  };

  const removeFromFavorites = (id) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((book) => book.id !== id)
    );
  };

  const favoritesChecker = (id) => favorites.some((book) => book.id === id);

  const navigateBack = () => {
    navigate(-1);
  };

  const trimTitle = (title, maxLength) => {
    if (title.length > maxLength) {
      return title.substring(0, maxLength) + "...";
    }
    return title;
  };

  return (
    <AppContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        navigateBack,
        favoritesChecker,
        trimTitle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
