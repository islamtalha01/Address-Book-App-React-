import { Input, Typography, Layout, theme } from "antd";
const { Header } = Layout;
import React, { useContext } from "react";
import { AppContext } from "../../AppContext";
import inLineStyles from "../../inLineStyles";
function AppHeader() {
  const { searchText, setSearchText } = useContext(AppContext);
  
  const { styles } = inLineStyles();
  const handleSearchInput = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <>
      <Header className={styles.appHeader}>
        <Typography.Title className={styles.textAlignCenter} >
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
