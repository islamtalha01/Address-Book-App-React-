
import React, { createContext, useRef, useState } from 'react';
export const AppContext = createContext();

// Create a provider component that will wrap your entire app
export const AppProvider = ({ children }) => {
  const elementRef = useRef(null); 
  const [searchText, setSearchText] = useState('');
  const [selectedNationality, setSelectedNationality] = useState('');
  // const [Intersecting, setIntersecting] = useState(false);
  const [endOfUsers,setEndOfUsers]=useState(false)
 
  return (
    <AppContext.Provider value={{ searchText, setSearchText,selectedNationality,setSelectedNationality,elementRef,endOfUsers,setEndOfUsers}}>
      {children}
    </AppContext.Provider>
  );
};


