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
  message,
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
import { } from 'antd';

const { Meta } = Card;

function HomePage() {
  const { token } = useToken();
  const { searchText, loading, endOfUsers } = useContext(AppContext);
  const { dataArray } = useInfiniteScroll();
  const [messageApi, contextHolder] = message.useMessage();
  // console.log(dataArray.length, endOfUsers, loading);

  const [cardStates, setCardStates] = useState({});

  // console.log(dataArray);

  // const{updtDataArray,endOfUsers,showAble,loading}=useInfiniteScroll_copy()

  // console.log(typeof searchText);
  console.log(endOfUsers);
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

  const toggleMoreInfo = (index) => {
    setCardStates((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));

    console.log("hi i am midway of hompage");
  };

  const renderItem = (item, index) => {
    const isMoreInfoVisible = cardStates[index];
    return (
      <>
        <Meta
          style={{
            display: "block",
            borderRadius: token.borderRadiusXS,
          }}
          title={item.first + " " + item.last}
          avatar={<Avatar src={item.thumbUrl} />}
          description={
            <>
              <p>Email: {item.email}</p>

              <p>Username : {item.userName} </p>

              {isMoreInfoVisible && (
                <>
                  <p>Street: {item.city}</p>
                  <p>City: {item.city}</p>
                  <p>Postal Code: {item.postCode}</p>
                  <p>State: {item.state}</p>
                  <p>Phone: {item.phone}</p>
                  <p>Nationality: {item.nat}</p>
                </>
              )}

              <Button
                onClick={() => toggleMoreInfo(index)}
                style={{ display: "block" }}
              >
                {isMoreInfoVisible ? "Close" : "More Info"}
              </Button>
            </>
          }
        />
      </>
    );
  };

  return (
    
    
       <>
   
      <Space direction="vertical" size={token.sizeXS}>
        <AppHeader />

        <Row gutter={[10]}>
          <Col span={3}>
            <Sidebar />
          </Col>
          <Col span={21}>
            <Row gutter={[15, 15]}>
              {search().length > 0 &&
                search().map((item, index) => (
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
                      style={{ minHeight: "350px" }}
                      cover={
                        <Image
                          style={{
                            width: "100px",
                            height: "100px",
                            justifyContent: "center",
                          }}
                          alt="example"
                          src={item.thumbUrl}
                        ></Image>
                      }
                    >
                      {renderItem(item, index)}
                    </Card>
                  </Col>
                ))}
            </Row>
          </Col>
        </Row>

        <Row style={{ justifyContent: "center" }}>
          {loading && (
            <Spin tip="Loading" size="large">
              <div className="content" />
            </Spin>
          )}
        </Row>

        <Footer
          style={{
            textAlign: "center",
            color: "#fff",
            backgroundColor: "#D5D7E5",
            width: "100%",
          }}
        >
          Engineering Department Carbonteq
        </Footer>
      
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
      
      </Space>
    </>

    
   
  );
}
export default HomePage;
