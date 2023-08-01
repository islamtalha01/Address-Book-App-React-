import { Input, Typography, Layout, Space,Row } from "antd";
const { Header} = Layout;
import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';


  
function AppHeader() {
	const { searchText, setSearchText } = useContext(AppContext);

	
	const handleSearchInput=(e)=>
	{
  
		setSearchText(e.target.value);
		console.log(e.target.value);
	  
	}
  return (
    <>
   
    <Header style={{   position: 'sticky',top: 0,
          zIndex: 1,
          width: '100%',
		      backgroundColor:'inherit',
          display: 'flex',height:"fit-content",
        
		      justifyContent:'center',}} >
            
            <Row>

            <Typography.Title style={{ textAlign: "center" }}>
          Address Book App
          <Input.Search  style={{}}          value={searchText}
        onChange={handleSearchInput}>

		  </Input.Search>
        </Typography.Title>
            </Row>
       
		
      </Header>
   
    </>
  );
  
}
export default AppHeader;
