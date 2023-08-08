
import React, { createContext, useRef, useState } from 'react';
export const AppContext = createContext();

// Create a provider component that will wrap your entire app
export const AppProvider = ({ children }) => {
  const [searchText, setSearchText] = useState('');
  const [selectedNationality, setSelectedNationality] = useState('');
  const [loading, setLoading]= useState(false)
  const [hasMore,setHasMore]=useState(true)
  const [totalUsers, setTotalUser] = useState(0);
  const elementRef=useRef(null)
  return (
    <AppContext.Provider value={{ searchText, setSearchText,selectedNationality,setSelectedNationality,loading,setLoading,hasMore,setHasMore,totalUsers,setTotalUser}}>
      {children}
    </AppContext.Provider>
  );
};