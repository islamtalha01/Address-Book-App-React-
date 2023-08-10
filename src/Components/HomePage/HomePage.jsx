import {
  Card,
  Button,
  Row,
  Col,
  Avatar,
  theme,
  Image,
  Space,
  Layout,
  Spin,
} from "antd";
const { useToken } = theme;
import React, { useContext, useRef } from "react";
import { AppContext } from "../../AppContext";

import AppHeader from "../Header";
import Sidebar from "../Sidebar";
const { Footer, Content } = Layout;
import { useState, useEffect } from "react";
import "./style.css";
import {} from "antd";
import UserModal from "../UserModal/UserModal";
import useDataFetch from "../../hooks/useDataFetch";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
const { Meta } = Card;

function HomePage() {
  const { token } = useToken();

  const { searchText } = useContext(AppContext);
  const elementRef = useRef(null);

  useInfiniteScroll(elementRef);

  const { usersData, endOfUsers, loading } = useDataFetch(50);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const { isFirstRender, setFirstRender } = useState(true);

  const showModal = (data, index) => {
    setIsModalOpen(true);
   
    setModalData(data);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  function filterData() {
    if (isFirstRender) {
      setFirstRender(false);
      return usersData; // Return the original array when dataArray is empty
    }
    const filteredData = usersData.slice(0, -50).filter((item) => {
      const fullName = `${item.element.name.first} ${item.element.name.last}`;
      return fullName.toLowerCase().includes(searchText.toLowerCase());
    });

    return filteredData;
  }

  

  const renderItem = (item) => {
    return (
      <>
        {
          <Meta
            style={{
              display: "block",
            }}
            title={item.element.name.first + " " + item.element.name.last}
            avatar={<Avatar src={item.element.picture.thumbnail} />}
            description={
              <>
                <p>Email: {item.element.email}</p>

                <p>Username : {item.element.login.username} </p>
              </>
            }
          />
        }
      </>
    );
  };

  return (
    <>
      <Row style={{ flexDirection: "column", minHeight: "100vh" }}>
        <AppHeader />

        <UserModal
          modalData={modalData}
          isModalOpen={isModalOpen}
          handleOk={handleOk}
          handleCancel={handleCancel}
        />
        <Row>
          <Col span={3}>
            <Sidebar />
          </Col>
          <Col span={21}>
            <Row
              gutter={[4, 4]}
              style={{ marginRight: "0px", marginLeft: "0px" }}
            >
              {usersData &&
                filterData().length > 0 &&
                filterData().map((data, index) => (
                  <Col
                    key={index}
                    xs={token.sizeMD}
                    sm={token.sizeMS}
                    md={token.sizeSM}
                    lg={token.sizeXS}
                    xl={token.sizeXXS}
                    style={{ padding: "0px" }}
                  >
                    <Card
                      hoverable
                      bodyStyle={{ minHeight: "250px" }}
                      actions={[
                        <Button
                          type="primary"
                          onClick={() => {
                            showModal(data, index);
                          }}
                        >
                          {" "}
                          More Info
                        </Button>,
                      ]}
                    >
                      {renderItem(data, index)}
                    </Card>
                  </Col>
                ))}
            </Row>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center" }}>
          {!searchText.length > 0 && loading && (
            <Spin tip="Loading" size="small">
              <div className="content" />
            </Spin>
          )}
        </Row>

        <div
          ref={elementRef}
          style={{
            display: "flex",
            textAlign: "center",
            height: "10",
            marginTop: "auto ",
          }}
        ></div>
        {endOfUsers && (
          <Footer
            style={{
              textAlign: "center",
              color: "#fff",
              backgroundColor: "#000000",
              width: "100%",
              marginTop: "auto ",
            }}
          >
            End of Users
          </Footer>
        )}
      </Row>
    </>
  );
}
export default HomePage;
