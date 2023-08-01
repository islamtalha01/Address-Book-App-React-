import React, { createContext, useState } from 'react';
export const AppContext = createContext();

// Create a provider component that will wrap your entire app
export const AppProvider = ({ children }) => {
  const [searchText, setSearchText] = useState('');
  const [selectedNationality, setSelectedNationality] = useState("");
  
  return (
    <AppContext.Provider value={{ searchText, setSearchText,selectedNationality,setSelectedNationality }}>
      {children}
    </AppContext.Provider>
  );
};