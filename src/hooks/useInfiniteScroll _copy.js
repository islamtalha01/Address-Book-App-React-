import { useEffect, useState } from "react";
// console.log("hi i am entring in infitne scroll")

import useFetchData from "./useDataFetch";


function useInfiniteScroll_copy(){
const {dataArray,preFetch,isFirstRender,totalUsers,loading}=useFetchData();
const [endOfUsers,setEndOfUsers]=useState(false)
const [showAble,setShowAble]=useState(true)
const [updtDataArray,setUpdtDataArray]=useState([])
// const isFirstRender = useRef(true);

   
if(isFirstRender)
{
     setUpdtDataArray([dataArray])
}
      const handleScroll = (e) => {
        const scrollHeight = e.target.documentElement.scrollHeight;
        const currentHeight = e.target.documentElement.scrollTop + window.innerHeight;
        if (currentHeight + 1 >= scrollHeight) {
          // setLoading(true)    
          
          

            if(totalUsers >=1000)
            {
                 console.log("hi")
                 setEndOfUsers(true)
                 return prev;
            } 
            
                 
                  
                   if(!isFirstRender)
                   {
                        setUpdtDataArray((prev)=>{[...prev,...preFetch]})
                   }
               
               
              
            


            
          

      
        }
      };
     
      useEffect(() => {
        
        window.addEventListener("scroll", handleScroll);
        console.log("bye")
        return () => window.removeEventListener("scroll", handleScroll);
        
           
      }, []);

       
      return {updtDataArray,endOfUsers,showAble,loading};
        
}



export default useInfiniteScroll_copy;









