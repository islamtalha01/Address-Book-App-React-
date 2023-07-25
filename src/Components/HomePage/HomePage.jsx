import {
  Input,
  Card,
  Button,
  ConfigProvider,
  Space,
  Row,
  Col,
  Avatar,Skeleton
} from "antd";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import "../../style.css";

// import useInfiniteScroll_copy from "../../hooks/useInfiniteScroll _copy";
import { useState,useEffect } from "react";

const { Meta } = Card;

function HomePage() {
  const { dataArray, endOfUsers } = useInfiniteScroll();
  // console.log(dataArray.length, endOfUsers, loading);

  const [cardStates, setCardStates] = useState({});
  const [query,setQuery]=useState('')
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
            borderRadius: "4px",
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
        <Row gutter={[16, 16]}>
          {dataArray.length > 0 &&
            dataArray.map((item, index) => (
              <Col key={index} span={4}>
                
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
