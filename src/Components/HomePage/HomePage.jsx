import {
  Input,
  Card,
  Button,
  ConfigProvider,
  Space,
  Row,
  Col,
  Avatar,
} from "antd";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import "../../style.css";
import { Switch } from "antd";
// import useInfiniteScroll_copy from "../../hooks/useInfiniteScroll _copy";

// import * as styletoken from "../../tokens/tokens.json"
import { useState } from "react";
// import { theme } from "./styles";
const { Meta } = Card;

function HomePage() {
  const { dataArray, endOfUsers, loading } = useInfiniteScroll();
  console.log(dataArray.length, endOfUsers, loading);

  const [cardStates, setCardStates] = useState({});

  // const{updtDataArray,endOfUsers,showAble,loading}=useInfiniteScroll_copy()
  // console.log("hi i am here after gettingdat frm other module in  hompage")

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
      <Input.Search
        style={{ maxWidth: 500, display: "flex", margin: "auto" }}
        onSearch={(value) => {
          setSearchedText(value);
          console.log(SearchedText);
        }}
      ></Input.Search>

      <div style={{ marginTop: "20px" }}>
        <Row gutter={[16, 16]}>
          {dataArray.length > 0 &&
            dataArray.map((item, index) => (
              <Col key={index} span={6}>
                <Card
                  hoverable
                  // cover={<img style={{width:'150px',height:'150px'}} alt="example" src={item.thumbUrl} />}
                  loading={loading}
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
