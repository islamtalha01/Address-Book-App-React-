import { useEffect, useState, useRef,useContext } from "react";
import userDataService from "../services/userdata";
import { AppContext } from '../AppContext';
function useDataFetch(limit=50) {
  const {
    selectedNationality,totalUsers,setTotalUser,Intersecting
  } = useContext(AppContext);
  const [usersData, setUsersData] = useState([]);
  
  const isfirstRender=useRef(true)

  const fetchData = [];
 
  
  const getUsersData = async () => {

    try {
      
      // setLoading(true)

       if( isfirstRender.current) {
         limit= limit*2;
         isfirstRender.current=false
       }
        console.log("limit of api is ",limit)
        const data = await userDataService.get(selectedNationality,limit)
        
        
          data.forEach((element) => {
            
  
            fetchData.push({
              element
            });
          })


        

        setUsersData((prev)=>[...prev,...fetchData])
        // console.log(fetchData)
       
        // setLoading(false);
      
      
    } catch (error) {
      console.log("error is", error);
    }
  };

  useEffect(() => {
    
    getUsersData();
   
  }, [Intersecting]);

  return {usersData};
}

export default useDataFetch;
