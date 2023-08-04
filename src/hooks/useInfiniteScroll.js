
import { useEffect, useState } from "react";
import axios from "axios";
import React, { useContext } from 'react';
import { AppContext } from '../AppContext';
function useInfiniteScroll(nationality)
{
const {selectedNationality,loading,setLoading,setEndOfUsers,endOfUsers} = useContext(AppContext);
const [dataArray, setDataArray] = useState([]);
const [totalUsers,setTotalUser]=useState(50)
    const Loader = async (selectedNationality) => {
       const fetchData=[]
        try {
          
          if(totalUsers<=1000)
          {
            
            let apiUrl="https://randomuser.me/api/?results=50";
            if(selectedNationality)
            {
              
                apiUrl += `&nat=${selectedNationality}`;
                
            }
           
            const response = await axios.get(apiUrl);
            
            const results = response.data.results;
      
            console.log(results)
            
        results.forEach((element) => {
          const {
            name:{first,
            last},
            email,
            login:{username},
            picture:{thumbnail},
            location:{city,street:{name,number},state,postcode},
            cell,
            phone,
            nat,
          } = element;
         
        

          fetchData.push(
            {
              name:{first,
              last},
              email,
              login:{username},
              picture:{thumbnail},
              location:{city,street:{name,number},state,postcode},
              cell,
              phone,
              nat,
            }
          );
         
            });
        
            
            setDataArray((prev)=>[...prev,...fetchData]); 
            console.log(fetchData)
            setLoading(false)
          }
          else
          {
            setLoading(false)
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
          setLoading(true)    
          
          setTotalUser((prev)=> {
              console.log()
            if(prev >=1000)
            {
                 console.log("hi")
                 setEndOfUsers(true)
                 setLoading(false)
                 return prev;
            } 

            return prev+50
            
          }); 
             
            // if(prev>=1000){setEndOfUsers(true);return }
      
        }
      };
      useEffect(()=>
      {
        
        Loader(selectedNationality);
       
        
      },[totalUsers,selectedNationality])
      
      useEffect(() => {
        
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
       
      return {dataArray};
        
}
export default useInfiniteScroll;