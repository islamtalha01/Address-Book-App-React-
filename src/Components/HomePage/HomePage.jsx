import {
  Card,
  Button,
  Row,
  Col,
  Avatar,theme
} from "antd";
const { useToken } = theme;
import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import "../../style.css";

// import useInfiniteScroll_copy from "../../hooks/useInfiniteScroll _copy";
import { useState,useEffect } from "react";

const { Meta } = Card;

function HomePage() {
  const { token } = useToken();
  const { dataArray, endOfUsers } = useInfiniteScroll();
  // console.log(dataArray.length, endOfUsers, loading);
  const { searchText } = useContext(AppContext);
  const [cardStates, setCardStates] = useState({});
  const filteredData = {if(searchText){dataArray.filter((item) => {
    const fullName = `${item.first} ${item.last}`;
    return fullName.toLowerCase().includes(searchText.toLowerCase());
  });}
   else
   {
     return dataArray
   }
}
  // const{updtDataArray,endOfUsers,showAble,loading}=useInfiniteScroll_copy()
 
 
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
      
     
      <div style={{ marginTop: "20px" }}>
        <Row gutter={[10, 10]}>
          {filteredData.length > 0 &&
            filteredData.map((item, index) => (
              <Col key={index} span={6}>
                
                  <Card
                    hoverable
                    // cover={<img style={{width:'150px',height:'150px'}} alt="example" src={item.thumbUrl} />}
                    
                  >
                    {renderItem(item, index)}
                  </Card>
              
              </Col>
            ))}
        </Row>
      </div>

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
    </>
  );
}
export default HomePage;
