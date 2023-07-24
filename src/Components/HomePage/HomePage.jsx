// import { Input, Card,Button,ConfigProvider } from "antd";
// import useInfiniteScroll from "../../hooks/useInfiniteScroll";
// // import useInfiniteScroll_copy from "../../hooks/useInfiniteScroll _copy";
// import { useState } from "react";
// import { theme } from "./styles";

// const { Meta } = Card;

// function HomePage() {
  
//   const { dataArray,endOfUsers,loading} = useInfiniteScroll();
//   // const{updtDataArray,endOfUsers,showAble}=useInfiniteScroll_copy()

//   // console.log(dataArray.length,endOfUsers,loading)
//   const [cardStates,setCardStates]=useState({})

  

    
 
//   const toggleMoreInfo = (index) => {
    

//     setCardStates((prevState)=> ({...prevState,[index]:!prevState[index]}))
   
    
    
//   };

//   const renderItem = (item,index) => {
//     const isMoreInfoVisible=cardStates[index];
//     return (
//       < >
//       <Meta
//           title={item.first +" "+ item.last}  
//           description={
//             <>
//               Email : {item.email}
//               <br />
//               Username : {item.userName}
//             </>
//           }
//         />
//         {isMoreInfoVisible && (
//           <>
//             <p>Street: {item.city}</p> 
//             <p>City: {item.city}</p>
//             <p>Postal Code: {item.postCode}</p>
//             <p>State: {item.state}</p>
//             <p>Phone: {item.phone}</p>
//           </>
//         )}
//         <Button onClick={() => toggleMoreInfo(index)}>
//           {isMoreInfoVisible ? 'Close' : 'More Info'}
//         </Button>
//       </>
//     );
//   };
  
// return (
//   <>
//   {/* <ConfigProvider theme={theme}> */}

//   <Input.Search
//         style={{ maxWidth: 500, display: "flex", margin: "auto" }}
//         onSearch={(value) => {
//           setSearchedText(value);
//           console.log(SearchedText);
//         }}
//       ></Input.Search>
    
//     {
      

//     }
//     { dataArray &&
//       dataArray.length > 0 &&
//       dataArray.map((item, index) => (
//         <Card.Grid key={index}>
//           <Card
//             title={index}
//             hoverable
//             style={{ width: 240 }}
//             cover={<img alt="example" src={item.thumbUrl} />}
//             // loading={loading}
//           >
//             {renderItem(item,index)}
//           </Card> 
//         </Card.Grid>
//       ))}


//     {/* { updtDataArray &&
//       updtDataArray.length > 0 &&
//       updtDataArray.map((item, index) => (
//         <Card.Grid key={index}>
//           {showAble &&<Card
//             title={index}
//             hoverable
//             style={{ width: 240 }}
//             cover={<img alt="example" src={item.thumbUrl} />}
//             // loading={loading}
//           >
//             {renderItem(item,index)}
//           </Card> }
//         </Card.Grid>
//       ))} */}

   
     



 
//   {endOfUsers && (
//             <div>
//               {" "}
//               <p
//                 style={{
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                 }}
//               >
//                 {" "}
//                 End of users
//               </p>
//             </div>
//           )}

//   {/* </ConfigProvider> */}
  

//   </>
  

// );











 
// }
// export default HomePage;



import { Input, Card,Button,ConfigProvider, Space ,Row,Col} from "antd";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import '../../style.css'
import { Switch } from "antd";
// import useInfiniteScroll_copy from "../../hooks/useInfiniteScroll _copy";

// import * as styletoken from "../../tokens/tokens.json"
import { useState } from "react";
// import { theme } from "./styles";
const { Meta } = Card;

function HomePage() {
  const { dataArray,endOfUsers,loading} = useInfiniteScroll();
  console.log(dataArray.length,endOfUsers,loading)
  
  const [cardStates,setCardStates]=useState({})
  
  // const{updtDataArray,endOfUsers,showAble,loading}=useInfiniteScroll_copy()
  // console.log("hi i am here after gettingdat frm other module in  hompage")
 
  const toggleMoreInfo = (index) => {
    

    setCardStates((prevState)=> ({...prevState,[index]:!prevState[index]}))
   
    console.log("hi i am midway of hompage")
    
  };

  const renderItem = (item,index) => {
    const isMoreInfoVisible=cardStates[index];
    return (
      <>
      <Meta style={{
            whiteSpace: 'nowrap',
            display: 'inline-block',
            borderRadius: '4px',
            wordWrap: 'break-word',
            /* Add more styles as needed */
          }}
          title={item.first +" "+ item.last}  
          description={
            <>
              Email:{item.email}
              <br />
              Username :{item.userName}
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
 
 
  <Input.Search
        style={{ maxWidth: 500, display: "flex", margin: "auto" }}
        onSearch={(value) => {
          setSearchedText(value);
          console.log(SearchedText);
        }}
      ></Input.Search>


    <div style={{marginTop:'20px'}}>
    <Row gutter={[16,16]}>
             { dataArray.length > 0 &&
      dataArray.map((item, index) => (
      
        <Col  key={index} span={6}>
          <Card 
            hoverable
       
            cover={<img className="thumbnail-img" alt="example" src={item.thumbUrl} />}
            loading={loading}
            bodyStyle={{ width:'10px',padding:'10px', }}
            >
            
          
            {renderItem(item,index)}
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


