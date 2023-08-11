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
    <Row style={{ flexDirection: "column", minHeight: "100vh",margin: "0px 0px " }}>
      <AppHeader />

      <Row gutter={2} style={{flexWrap:'wrap',margin:"0px 0px"}}>
        <Col span={3}>
          <Sidebar />
        </Col>
        <Col span={21} style={{padding:"0px 0px"}}>
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
