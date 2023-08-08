import { useEffect, useState, useRef,useContext } from "react";
import userDataService from "../services/userdata";
import { AppContext } from '../AppContext';

function useDataFetch(limit=50) {
  const {
    setLoading,selectedNationality,totalUsers,setTotalUser
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
            // const {
            //   name: { first, last },
            //   email,
            //   login: { username },
            //   picture: { thumbnail },
            //   location: {
            //     city,
            //     street: { name, number },
            //     state,
            //     postcode,
            //   },
            //   cell,
            //   phone,
            //   nat,
            // } = element;
  
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
   
  }, []);

  return {usersData};
}

export default useDataFetch;
