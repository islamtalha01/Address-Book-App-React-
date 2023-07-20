import { useEffect, useState } from "react";
import axios from "axios";
function useInfiniteScroll()
{
const [dataArray, setDataSource] = useState([]);
const [batchSize,setBatchSize]=useState(50)
const [endOfusers,setEndOfUsers]=useState(false)
const [loading, setLoading]= useState(true)
let count=0;
    const Loader = async () => {
       const fetchData=[]
        try {
          if(batchSize<=1000)
          {
            const response = await axios.get("https://randomuser.me/api/?results=50");
            console.log(batchSize)
            const results = response.data.results;
            // console.log(response.data);
            // setLoading(false)
            results.forEach((element) => {
              const firstName = element.name.first;
              const lastName = element.name.last;
              const email = element.email;
              const userName = element.login.username;
              const thumbnailUrl = element.picture.thumbnail;
              const street=element.location.street.name+element.location.street.number
              const city=element.location.city
              const state=element.location.state
              const postCode=element.location.postcode
              const phone=element.cell
              
              //location.street, location.city,location.state ,location.postcode,phoone ,cell field
        
              const detail = {
                first: firstName,
                last: lastName,
                email: email,
                userName: userName,
                thumbUrl: thumbnailUrl,
                 street:street,
                 city:city,
                 state :state,
                postCode:postCode,
                phone:phone,
              };
               
            //    console.log(detail)
             console.log("data")
              
              fetchData.push(detail);
            });
        
            
            setDataSource((prev)=>[...prev,...fetchData]); 
          }
          else
          {
            console.log("end of users")
          }
      
        } catch (error) {
          console.log(error);
        }
         
      };
      
      const handleScroll = (e) => {
        const scrollHeight = e.target.documentElement.scrollHeight;
        const currentHeight = e.target.documentElement.scrollTop + window.innerHeight;
        if (currentHeight + 1 >= scrollHeight) {
          // setLoading(true)    
          
          setBatchSize((prev)=> {

            if(prev >=1000)
            {
                 console.log("hi")
                 setEndOfUsers(true)
                 return prev;
            } 
            
            return prev+50
            
          }); 
             
            // if(prev>=1000){setEndOfUsers(true);return }
      
        }
      };
      useEffect(()=>
      {
        Loader();
        console.log(batchSize)
      },[batchSize])
      
      useEffect(() => {
        
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
  console.log(count)
      return {dataArray,endOfusers};
        
}



export default useInfiniteScroll;

