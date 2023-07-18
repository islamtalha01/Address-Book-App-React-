import { useEffect, useState } from "react";
const [data_array, setDataSource] = useState([]);
const [batch_size,setBatchSize]=useState(50)
const [End0fusers,setEnd0fusers]=useState(false)
const [loading, setLoading]= useState(true)
function setBatchSize (prev)
{
    if(prev>=1000)
    {
              
              setEnd0fusers(true);
              
    }
    console.log(End0fusers)
   //if bactchsizesum>1000 ser enf of user to true
}
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


    setDataSource((prev)=>[...prev,...dataArray]); //keep in mind you are not keeping the state immutable fix it later
    // console.log(dataArray);
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


export default Loader;
