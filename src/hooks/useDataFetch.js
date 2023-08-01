import { useEffect, useState ,useRef } from "react";
import axios from "axios";
// console.log("hi i am entring in datafecth scroll")
function useFetchData()
{
const [dataArray, setDataArray] = useState([]);
const [loading, setLoading]= useState(true)
const  [preFetch,setPreFetch]=useState([])
const isFirstRender=useRef(true)
const [totalUsers,setTotalUser]=useState(50)
    const fetch = async () => {
        
       const fetchData=[]
        try {
       
          if(totalUsers<=1000)
          {
            
            const response = await axios.get("https://randomuser.me/api/?results=50");
            
            const results = response.data.results;
           
            
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
               
          
             
             
              fetchData.push(detail);

            });
        
            if(isFirstRender)
            {
                console.log(fetchData)
                setDataArray([fetchData]);
            }
            
            else{
                setPreFetch([fetchData])
            }
             
          }
          else
          {
            console.log("end of users")
          }
      
        } catch (error) {
          console.log("error is",error);
        }
        
        

      };
      
      
      useEffect(()=>
      {

       
            if (isFirstRender.current) {
                // Code to be executed only on the first render
                console.log('First render');


                
                fetch()
               

                isFirstRender.current = false;
              } 
              
            },[]) 


     useEffect(()=>{
            

        fetch()
       
      
     },[totalUsers])    
      
     return {dataArray,loading,preFetch,isFirstRender,totalUsers}   
}



export default useFetchData;


  


