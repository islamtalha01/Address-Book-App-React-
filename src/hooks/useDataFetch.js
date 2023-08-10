import { useEffect, useState, useRef,useContext } from "react";
import userDataService from "../services/userdata";
import { AppContext } from '../AppContext';
function useDataFetch(limit=50) {
  const {
    selectedNationality,Intersecting
  } = useContext(AppContext);
  const [usersData, setUsersData] = useState([]);
  const [endOfUsers,setEndOfUsers]=useState(false)
  const [totalUsers,setTotalUsers]=useState(0)
  const isfirstRender=useRef(true)
  const [loading,setLoading]=useState(false)
  const fetchData = [];
 
  
  const getUsersData = async () => {

    try {
      
      setLoading(true)

       if( isfirstRender.current) {
         limit= limit*2;
         isfirstRender.current=false
         console.log("Hi",isfirstRender)
       }
        
        if(totalUsers<=1000){
        const data = await userDataService.get(selectedNationality,limit)
        
        
          data.forEach((element) => {
            
  
            fetchData.push({
              element
            });
          })


        

        setUsersData((prev)=>[...prev,...fetchData])
        setTotalUsers((prev)=>prev+50)
        
      
        }
        else
        {

         
          setEndOfUsers(true)


        }
    } catch (error) {
      console.log("error is", error);
    }
  };

  // useEffect(() => {
    
  //   getUsersData();
  //   console.log(totalUsers)
   
  // }, [Intersecting]);


  useEffect(() => {
    
    getUsersData();
    console.log(totalUsers)
    console.log("Array size",usersData.length)
   
  }, []);



  
  return {usersData,endOfUsers,loading};
}

export default useDataFetch;
