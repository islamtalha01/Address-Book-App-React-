import { Input, Typography, Layout } from "antd";
const { Header, Footer, Sider, Content } = Layout;
function AppHeader() {

	const handleSearch=(value)=>
	{
  
		// setQuery(value);
		console.log("done");
	  
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
      </Header>
    </>
  );
}
export default AppHeader;
