import { useState, useEffect } from "react";
import { Input, Card } from "antd";
import axios from "axios";
const { Meta } = Card;
function HomePage() {
  const [SearchedText, setSearchedText] = useState("");
  const [data_array, setDataSource] = useState([]);
  const fetchData = () => {
    const dataArray = [];
    axios
      .get("https://randomuser.me/api/?results=50")
      .then((response) => {
        response.data.results.forEach((element) => {
         
          const firstName = element.name.first;
          const lastName = element.name.last;
          const email = element.email;
          const userName = element.login.username;
          const thumbnail_Url = element.picture.thumbnail;
          const detail = {
    
            first: firstName,
            last: lastName,
            email: email,
            username: userName,
            thumb_Url: thumbnail_Url,
          };

          dataArray.push(detail);
        });
        setDataSource(dataArray);
        // console.log(dataArray);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, []);
  const renderItem = (item) => {
    return (
      <div>
        <Meta title={item.first + item.last} description={item.email} />
        {/* Additional content specific to each item */}
      </div>
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
      <Card style={{ display: "flex", margin: "auto" }}>
        {data_array.map((item,index) => (
          <Card.Grid key={index}>
            <Card
              title={item.title}
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={item.thumb_Url} />}
            >
              {renderItem(item)}
            </Card>
          </Card.Grid>
        ))}
      </Card>
    </>
  );
}
export default HomePage;
