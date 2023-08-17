import { Input, Typography, Layout, theme } from "antd";
const { Header } = Layout;
import React, { useContext } from "react";
import { AppContext } from "../../AppContext";
// import useStyles from "../../hooks/useStyles";
function AppHeader() {
  const { searchText, setSearchText } = useContext(AppContext);
  
  // const { styles } = useStyles();
  const handleSearchInput = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <>
      <Header style={{ position: "sticky",
      top: 0,
      zIndex: 1,
      width: "100%",
      backgroundColor: "#000000",
      display: "flex",
      height: "fit-content",
      justifyContent: "center",}}>
        <Typography.Title  >
          Address Book App
          <Input.Search
            value={searchText}
            onChange={handleSearchInput}
          ></Input.Search>
        </Typography.Title>
      </Header>
    </>
  );
}
export default AppHeader;
