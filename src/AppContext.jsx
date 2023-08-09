
import React, { createContext, useRef, useState } from 'react';
export const AppContext = createContext();

// Create a provider component that will wrap your entire app
export const AppProvider = ({ children }) => {
  const [searchText, setSearchText] = useState('');
  const [selectedNationality, setSelectedNationality] = useState('');
  const [Intersecting, setIsIntersecting] = useState(false);
  
  return (
    <AppContext.Provider value={{ searchText, setSearchText,selectedNationality,setSelectedNationality,Intersecting,setIsIntersecting}}>
      {children}
    </AppContext.Provider>
  );
};