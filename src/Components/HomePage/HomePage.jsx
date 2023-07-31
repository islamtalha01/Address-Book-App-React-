import { Card, Button, Row, Col, Avatar, theme, Divider } from "antd";
const { useToken } = theme;
import React, { useContext } from "react";
import { AppContext } from "../../AppContext";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";

import AppHeader from "../Header";
import Sidebar from "../Sidebar";
// import useInfiniteScroll_copy from "../../hooks/useInfiniteScroll _copy";
import { useState, useEffect } from "react";

const { Meta } = Card;

function HomePage() {
  const { token } = useToken();
  const { dataArray, endOfUsers } = useInfiniteScroll();
  // console.log(dataArray.length, endOfUsers, loading);
  const { searchText } = useContext(AppContext);
  const [cardStates, setCardStates] = useState({});

  console.log(dataArray);

  // const{updtDataArray,endOfUsers,showAble,loading}=useInfiniteScroll_copy()

  console.log(typeof searchText);

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
   <AppHeader />

    <Row>
  <Col span={4}>
    <Sidebar />
  </Col>
  <Col span={16}>
    <Row gutter={[10, 10]} style={{ margin: "0px" }}>
      {search().length > 0 &&
        search().map((item, index) => (
          <Col key={index} span={6} style={{ padding: "0px" }}>
            <Card
              hoverable
              // cover={<img style={{width:'150px',height:'150px'}} alt="example" src={item.thumbUrl} />}
            >
              {renderItem(item, index)}
            </Card>
          </Col>
        ))}
    </Row>
  </Col>
</Row >


{/* {endOfUsers && (
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
)} */}
  
     
  </>
  );
}
export default HomePage;
