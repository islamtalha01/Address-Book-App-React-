import { Row, Col } from "antd";
import UserListContainer from "../containers/UserListContainer";
import AppFooter from "../components/AppFooter";
import AppHeader from "../components/AppHeader";
import Sidebar from "../components/Sidebar";
import React, { useContext,useState,useEffect } from "react";
import { AppContext } from "../AppContext";
import inLineStyles from "../inLineStyles";
function HomePage() {
  const { elementRef } = useContext(AppContext);
  
  const {styles} =inLineStyles()

  return (
    <Row
      className={styles.homePageContainer}
    >
      
      <AppHeader />

      <Row  className={styles.homePageContentContainer}>
        <Col span={3}>
          <Sidebar />
        </Col>
        <Col span={21} className={styles.zeroPadding}>
          <UserListContainer />
        </Col>
      </Row>


      <AppFooter />
    </Row>
  );
}

export default HomePage;


