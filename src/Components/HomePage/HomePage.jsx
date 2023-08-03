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
import React, { useContext } from "react";
import { AppContext } from "../../AppContext";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import AppHeader from "../Header";
import Sidebar from "../Sidebar";
const { Footer, Content } = Layout;
import { useState, useEffect } from "react";
import "./style.css";
import {} from "antd";
import UserModal from "./UserModal";

const { Meta } = Card;

function HomePage() {
  const { token } = useToken();

  const { searchText, loading } = useContext(AppContext);
  const { dataArray,endOfUsers } = useInfiniteScroll();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modaldata, setModalData] = useState({});
  // console.log(dataArray);

  // const{updtDataArray,endOfUsers,showAble,loading}=useInfiniteScroll_copy()
  const showModal = (data, index) => {
    setIsModalOpen(true);

    setModalData(data);
    console.log(data);
    console.log(index);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const search = () => {
    if (!dataArray.length) {
      return dataArray; // Return the original array when dataArray is empty
    }

    const filteredData = dataArray.filter((item) => {
      const fullName = `${item.first} ${item.last}`;
      return fullName.toLowerCase().includes(searchText.toLowerCase());
    });

    return filteredData;
  };

  const renderItem = (item) => {
    return (
      <>
        <Meta
          style={{
            display: "block",
            
          }}
          title={item.first + " " + item.last}
          avatar={<Avatar src={item.thumbUrl} />}
          description={
            <>
              <p>Email: {item.email}</p>

              <p>Username : {item.userName} </p>
            </>
          }
        />
      </>
    );
  };

  return (
    <>
    
        <AppHeader />
        <UserModal
          modaldata={modaldata}
          isModalOpen={isModalOpen}
          handleOk={handleOk}
          handleCancel={handleCancel}
        />
        <Row  style={{ marginRight: "0px", marginLeft: "0px" }}>
          <Col span={3}>
            <Sidebar />
          </Col>
          <Col span={21}>
            <Row
              gutter={[10, 10]}
              style={{ marginRight: "0px", marginLeft: "0px" }}
            >
              {search().length > 0 &&
                search().map((data, index) => (
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
          {loading && (
            <Spin tip="Loading" size="small">
              <div className="content" />
            </Spin>
          )}
        </Row>
        {endOfUsers && (
          <div>
            {" "}
            <p
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {" "}
              End of users
            </p>
          </div>
        )}
        <Footer
          style={{
            textAlign: "center",
            color: "#fff",
            backgroundColor: "#000000",
            width: "100%",
            position: "sticky",
          }}
        >
          Engineering Department Carbonteq
        </Footer>

        
    
    </>
  );
}
export default HomePage;
