// appContext.js
import React, { createContext, useContext, useState } from "react";
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
    setFavorites((prevFavorites) => prevFavorites.filter((book) => book.id !== id));
  };

  const navigateBack = () => {
    navigate(-1);
  };

  return (
    <AppContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, navigateBack }}>
      {children}
    </AppContext.Provider>
  );
};



// import React, { createContext, useContext, useState } from "react";

// const AppContext = createContext();

// export const useAppContext = () => {
//   const context = useContext(AppContext);
//   if (context === undefined) {
//     throw new Error("useAppContext must be used within an AppContextProvider");
//   }
//   return context;
// };

// const AppContextProvider = ({ children }) => {
//   const [favorites, setFavorites] = useState([]);

//   const addToFavorites = (book) => {
//     const oldFavorites = [...favorites];
//     const newFavorites = oldFavorites.concat(book);
//     setFavorites(newFavorites);
//   };

//   const removeFromFavorites = (id) => {
//     const oldFavorites = [...favorites];
//     const newFavorites = oldFavorites.filter((book) => book.id !== id);
//     setFavorites(newFavorites);
//   };

//   return (
//     <AppContextProvider
//       value={{ favorites, addToFavorites, removeFromFavorites }}
//     >
//       {children}
//     </AppContextProvider>
//   );
// };
// export default AppContextProvider;
