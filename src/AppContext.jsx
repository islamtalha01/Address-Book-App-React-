import React, { createContext, useState } from 'react';
export const AppContext = createContext();

// Create a provider component that will wrap your entire app
export const AppProvider = ({ children }) => {
  const [searchText, setSearchText] = useState('');
  const [selectedNationality, setSelectedNationality] = useState('');
  const [loading, setLoading]= useState(false)
  const [endOfUsers,setEndOfUsers]=useState(false)

  
  return (
    <AppContext.Provider value={{ searchText, setSearchText,selectedNationality,setSelectedNationality,loading,setLoading,endOfUsers,setEndOfUsers}}>
      {children}
    </AppContext.Provider>
  );
};