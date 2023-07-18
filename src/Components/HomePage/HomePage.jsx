import { useState, useEffect } from "react";
import { Input, Card } from "antd";
import Loading from "../Loading";
import axios from "axios";
const { Meta } = Card;
function HomePage() {
  const [SearchedText, setSearchedText] = useState("");//for searching purpose later on
  const [data_array, setDataSource] = useState([]);

// const Loader = async () => {
//   const dataArray = [];
//   try {
//     const response = await axios.get("https://randomuser.me/api/?results=1000");
//     const results = response.data.results;
//     console.log(response.data);

//     results.forEach((element) => {
//       const firstName = element.name.first;
//       const lastName = element.name.last;
//       const email = element.email;
//       const userName = element.login.username;
//       const thumbnail_Url = element.picture.thumbnail;

//       //location.street, location.city,location.state ,location.postcode,phoone ,cell field

//       const detail = {
//         first: firstName,
//         last: lastName,
//         email: email,
//         username: userName,
//         thumb_Url: thumbnail_Url,
//       };

//       dataArray.push(detail);
//     });
//     setDataSource(dataArray);
//     // console.log(dataArray);
//   } catch (error) {
//     console.log(error);
//   }
// };
const [batch_size,setBatchSize]=useState(50)
const [End0fusers,setEnd0fusers]=useState(false)
const [loading, setLoading]= useState(true)
// function setBatchSize (prev)
// {
//     if(prev>=1000)
//     {
              
//               setEnd0fusers(true);
              
//     }
//     console.log(End0fusers)
//    //if bactchsizesum>1000 ser enf of user to true
// }

const Loader = async () => {
  const dataArray = [];
  try {
    const response = await axios.get(`https://randomuser.me/api/?results=${batch_size}`);
    const results = response.data;
    console.log(response.data);
    setLoading(false)
    results.forEach((element) => {
      const firstName = element.name.first;
      const lastName = element.name.last;
      const email = element.email;
      const userName = element.login.username;
      const thumbnail_Url = element.picture.thumbnail;

      //location.street, location.city,location.state ,location.postcode,phoone ,cell field

      const detail = {
        first: firstName,
        last: lastName,
        email: email,
        username: userName,
        thumb_Url: thumbnail_Url,
      };

      dataArray.push(detail);
    });


    setDataSource((prev)=>[...prev,...dataArray]); 
  } catch (error) {
    console.log(error);
  }
};

useEffect(() => {
  fetchData();
  const handleScroll = (e) => {
    const scrollHeight = e.target.documentElement.scrollHeight;
    const currentHeight =
      e.target.documentElement.scrollTop + window.innerHeight;
    if (currentHeight + 1 >= scrollHeight) {
      setLoading(true)    
      setBatchSize((prev)=>{prev+50});
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, [batch_size]);




useEffect(() => {
  Loader();
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
        { data_array &&
          data_array.length > 0 && data_array.map((item,index) => (
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
      <Loading/>
    </>
  );
}
export default HomePage;
