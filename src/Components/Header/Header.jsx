import { Input, Typography, Layout } from "antd";
const { Header} = Layout;
import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';


  
function AppHeader() {
	const { searchText, setSearchText } = useContext(AppContext);
	const handleSearch=(value)=>
	{
  
		setSearchText(value);
		console.log(value);
	  
	}
  return (
    <>
      <Header style={{   position: 'sticky',top: 0,
          zIndex: 1,
          width: '100%',
		  backgroundColor:'inherit',
          display: 'flex',
          alignItems: 'center',
		  justifyContent:'center',margin:'20px'}} >
        <Typography.Title style={{ textAlign: "center" }}>
          Address Book App
          <Input.Search onSearch={handleSearch} style={{margin:'10px'}}>

		  </Input.Search>
        </Typography.Title>
		{/* <p>
			{searchText}
		</p> */}
      </Header>
    </>
  );
  
}
export default AppHeader;
