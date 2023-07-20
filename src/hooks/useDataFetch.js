import { useEffect, useState ,useRef } from "react";
import axios from "axios";
import React, { useEffect, } from 'react';

function useFetchData()
{
const [dataArray, setDataArray] = useState([]);
const [loading, setLoading]= useState(true)
const isFirstRender = useRef(true);
const [totalUsers,setTotalUser]=useState()
    const fetch = async () => {
       const fetchData=[]
        try {
          if(totalUsers<=1000)
          {
            const response = await axios.get("https://randomuser.me/api/?results=50");
            
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
             
              
              fetchData.push(detail);
            });
        
        
            setDataArray((prev)=>[...prev,...fetchData]); 
          }
          else
          {
            console.log("end of users")
          }
      
        } catch (error) {
          console.log(error);
        }
         
      };
      
      
      useEffect(()=>
      {

       
            if (isFirstRender.current) {
                // Code to be executed only on the first render
                console.log('First render');


                setLoading(true)
                loader()
                setLoading(false)

                isFirstRender.current = false;
              } else {
                // Code to be executed on subsequent renders
                setLoading(true)
                const timeoutId = setTimeout(loader(), 5000); // Set a timeout for 5 seconds to fetch the next batch during idle time
                
                setLoading(false)
                return () => clearTimeout(timeoutId); // Clear the timeout if the component unmounts or rerenders before the timeout is reached
              }
          
              
            },[totalUsers]) // Empty dependency array to ensure it runs only once on mount
        
      
     return {dataArray,loading}   
}



export default useFetchData;


