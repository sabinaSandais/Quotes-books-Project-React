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
  // const history = useHistory();

  const addToFavorites = (book) => {
    setFavorites((prevFavorites) => [...prevFavorites, book]);
  };

  const removeFromFavorites = (id) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((book) => book.id !== id)
    );
  };
  // const navigateToHomePage = () => {

  //   history.push('/'); // Redirects to the home page
  // };

  const navigateBack = () => {
    navigate(-1);
  };

  

  return (
    <AppContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites, navigateBack }}
    >
      {children}
    </AppContext.Provider>
  );
};
