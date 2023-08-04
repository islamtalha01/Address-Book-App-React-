import { useEffect, useState, useRef,useContext } from "react";
import userDataService from "../services/userdata";
// console.log("hi i am entring in datafecth scroll")
import { AppContext } from '../AppContext';

function useDataFetch() {
  const {
    
    loading,
    setLoading,
    setEndOfUsers,
    endOfUsers,selectedNationality
  } = useContext(AppContext);
  const [dataArray, setDataArray] = useState([]);
  const [totalUsers, setTotalUser] = useState(0);
  const isfirstRender=useRef(true)
  const [data,setData]=useState([]);
  const fetchData = [];
  let limit= 50;
  let result =[];
  const setUsersData = async () => {

    try {
      setLoading(true)
      if (totalUsers <= 1000) {


       if( isfirstRender.current) {
         limit= 100;
         isfirstRender.current=false
       }
        console.log("limit of api is ",limit)
        const data = await userDataService.get(selectedNationality,limit)
        
        
          data.forEach((element) => {
            const {
              name: { first, last },
              email,
              login: { username },
              picture: { thumbnail },
              location: {
                city,
                street: { name, number },
                state,
                postcode,
              },
              cell,
              phone,
              nat,
            } = element;
  
            fetchData.push({
              name: { first, last },
              email,
              login: { username },
              picture: { thumbnail },
              location: { city, street: { name, number }, state, postcode },
              cell,
              phone,
              nat,
            });
          })


        setTotalUser((prev) => {
          if (prev >= 1000) {
            setEndOfUsers(true);
            console.log("end of users");
            return prev;
          }
          return prev + 50;
        });

        setDataArray((prev)=>[...prev,...fetchData])
       
        setLoading(false);
      } else {
        setLoading(false);
      }
      
    } catch (error) {
      console.log("error is", error);
    }
  };

  useEffect(() => {
    
    setUsersData();
   
  }, [selectedNationality]);

  return { dataArray, totalUsers };
}

export default useDataFetch;
