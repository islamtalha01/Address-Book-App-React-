
import React, { createContext, useRef, useState } from 'react';
export const AppContext = createContext();

// Create a provider component that will wrap your entire app
export const AppProvider = ({ children }) => {
  const [searchText, setSearchText] = useState('');
  const [selectedNationality, setSelectedNationality] = useState('');
  const [Intersecting, setIntersecting] = useState(false);
  const [endOfUsers,setEndOfUsers]=useState(false)
  const elementRef = useRef(null); //Added elementRef location from Hompage component
  return (
    <AppContext.Provider value={{ searchText, setSearchText,selectedNationality,setSelectedNationality,Intersecting,setIntersecting,elementRef,endOfUsers,setEndOfUsers}}>
      {children}
    </AppContext.Provider>
  );
};


