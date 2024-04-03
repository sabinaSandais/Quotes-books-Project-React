import React, { createContext, useContext, useState } from "react";

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

  const addToFavorites = (book) => {
    setFavorites((prevFavorites) => [...prevFavorites, book]);
  };

  const removeFromFavorites = (id) => {
    setFavorites((prevFavorites) => prevFavorites.filter((book) => book.id !== id));
  };

  return (
    <AppContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
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
