import { useEffect, useState } from "react";
import useFetchData from "./useDataFetch";

const {totalUsers}=useFetchData()
function useInfiniteScroll()
{
//const [totalUsers,setTotalUser]=useState(50)
const [endOfUsers,setEndOfUsers]=useState(false)
const [hidden,setHidden]=useState(true)

   
      
      const handleScroll = (e) => {
        const scrollHeight = e.target.documentElement.scrollHeight;
        const currentHeight = e.target.documentElement.scrollTop + window.innerHeight;
        if (currentHeight + 1 >= scrollHeight) {
          // setLoading(true)    
          
          // setTotalUser((prev)=> {

          //   if(prev >=1000)
          //   {
          //        console.log("hi")
          //        setEndOfUsers(true)
          //        return prev;
          //   } 
            
          //   return prev+50

            
          // }); 




          if(totalUsers>=1000)
          {
            setEndOfUsers(true)

          }
          else
          {
            sethidden(false)
          }   
            // if(prev>=1000){setEndOfUsers(true);return }
      
        }
      };
     
      useEffect(() => {
        
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
       console.log(endOfUsers) //endOfUser state is not being aceesed there
      return {endOfUsers,totalUsers};
        
}



export default useInfiniteScroll;

