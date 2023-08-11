import { Row, Col } from "antd";
import UserListContainer from "../Components/containers/UserListContainer";
import AppFooter from "../Components/AppFooter";
import AppHeader from "../Components/AppHeader";
import Sidebar from "../Components/Sidebar";
import React, { useContext } from "react";
import { AppContext } from "../../src/AppContext";
function HomePageMock() {
  const {elementRef } = useContext(AppContext);


  return (
    <Row style={{ flexDirection: "column", minHeight: "100vh" }}>
      <AppHeader />

      <Row>
        <Col span={3}>
          <Sidebar />
        </Col>
        <Col span={21}>
          <UserListContainer />
        </Col>
      </Row>
     
      < div
          ref={elementRef}
          style={{
            display: "flex",
            textAlign: "center",
            height: "10",
            marginTop: "auto ",
          }}
        ></div>


     
      
      <AppFooter/>
    </Row>
  );
}

export default HomePageMock;
