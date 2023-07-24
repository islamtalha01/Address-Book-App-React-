import { Input, Card,Button,ConfigProvider } from "antd";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import { useState } from "react";
import { theme } from "./styles";
const { Meta } = Card;

function HomePage() {
  const { dataArray,endOfUsers,loading} = useInfiniteScroll();
  console.log(dataArray.length,endOfUsers,loading)
  const [cardStates,setCardStates]=useState({})
  const toggleMoreInfo = (index) => {
    

    setCardStates((prevState)=> ({...prevState,[index]:!prevState[index]}))
   
    
    
  };

  const renderItem = (item,index) => {
    const isMoreInfoVisible=cardStates[index];
    return (
      <>
      <Meta
          title={item.first +" "+ item.last}  
          description={
            <>
              Email : {item.email}
              <br />
              Username : {item.userName}
            </>
          }
        />
        {isMoreInfoVisible && (
          <>
            <p>Street: {item.city}</p> 
            <p>City: {item.city}</p>
            <p>Postal Code: {item.postCode}</p>
            <p>State: {item.state}</p>
            <p>Phone: {item.phone}</p>
          </>
        )}
        <Button onClick={() => toggleMoreInfo(index)}>
          {isMoreInfoVisible ? 'Close' : 'More Info'}
        </Button>
      </>
    );
  };
  
return (
  <>
  {/* <ConfigProvider theme={theme}> */}

  <Input.Search
        style={{ maxWidth: 500, display: "flex", margin: "auto" }}
        onSearch={(value) => {
          setSearchedText(value);
          console.log(SearchedText);
        }}
      ></Input.Search>

<Card style={{ display: 'flex', margin: 'auto' }}>
    {dataArray &&
      dataArray.length > 0 &&
      dataArray.map((item, index) => (
        <Card.Grid key={index}>
          <Card
            title={index}
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={item.thumbUrl} />}
            loading={loading}
          >
            {renderItem(item,index)}
          </Card>
        </Card.Grid>
      ))}
  </Card>
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

  {/* </ConfigProvider> */}
  

  </>
  

);











 
}
export default HomePage;






