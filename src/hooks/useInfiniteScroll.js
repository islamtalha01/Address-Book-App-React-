import { useEffect, useState, useRef } from "react";
import axios from "axios";
import React, { useContext } from "react";
import { AppContext } from "../AppContext";
function useInfiniteScroll(nationality) {
  
  
  

  const {
    selectedNationality,
    loading,
    setLoading,

   
  } = useContext(AppContext);
  const [preFetched, setPreFetched] = useState([]);
  const [dataArray, setDataArray] = useState([]);
  const [totalUsers, setTotalUser] = useState(50);
  const [endOfUsers,setEndOfUsers]=useState(false)
  const fetchData = [];
  let preFetchData = [];
  // const [fetchData,setFetchData]=useState([])
  

  
 
  
  
  function debounce(func, delay) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => func.apply(this, args), delay);
    };
  }
  




  const Loader = async (selectedNationality) => {
    try {
      if (totalUsers <= 1000) {
        let apiUrl = "https://randomuser.me/api/?results=50";
        if (selectedNationality) {
          apiUrl += `&nat=${selectedNationality}`;
        }

        const response = await axios.get(apiUrl);

        const results = response.data.results;

        results.forEach((element) => {
          const firstName = element.name.first;
          const lastName = element.name.last;
          const email = element.email;
          const userName = element.login.username;
          const thumbnailUrl = element.picture.thumbnail;
          const street =
            element.location.street.name + element.location.street.number;
          const city = element.location.city;
          const state = element.location.state;
          const postCode = element.location.postcode;
          const cell = element.cell;
          const phone = element.phone;
          const nat = element.nat;

          const detail = {
            first: firstName,
            last: lastName,
            email: email,
            userName: userName,
            thumbUrl: thumbnailUrl,
            street: street,
            city: city,
            state: state,
            postCode: postCode,
            cell: cell,
            phone: phone,
            nat: nat,
          };

          fetchData.push(detail);
        });
       
        setDataArray(fetchData);
        console.log(fetchData);
        console.log("loader is called");
      } else {
        setLoading(false);
        console.log("end of users");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const preLoader = async (selectedNationality) => {
    try {
      if (totalUsers <= 1000) {
        let apiUrl = "https://randomuser.me/api/?results=50";
        if (selectedNationality) {
          apiUrl += `&nat=${selectedNationality}`;
        }

        const response = await axios.get(apiUrl);

        const results = response.data.results;

        results.forEach((element) => {
          const firstName = element.name.first;
          const lastName = element.name.last;
          const email = element.email;
          const userName = element.login.username;
          const thumbnailUrl = element.picture.thumbnail;
          const street =
            element.location.street.name + element.location.street.number;
          const city = element.location.city;
          const state = element.location.state;
          const postCode = element.location.postcode;
          const cell = element.cell;
          const phone = element.phone;
          const nat = element.nat;

          const detail = {
            first: firstName,
            last: lastName,
            email: email,
            userName: userName,
            thumbUrl: thumbnailUrl,
            street: street,
            city: city,
            state: state,
            postCode: postCode,
            cell: cell,
            phone: phone,
            nat: nat,
          };

          preFetchData.push(detail);
        });

        setPreFetched(preFetchData);
        console.log(preFetchData);
        console.log("preloadER IS CALLED")
      } else {
        console.log("end of users");
      }
    } catch (error) {
      console.log(error);
    }
  };
  // const handleScroll = (e) => {
  //   const scrollHeight = e.target.documentElement.scrollHeight;
  //   const currentHeight =
  //     e.target.documentElement.scrollTop + window.innerHeight;
  //   if (currentHeight + 1 >= scrollHeight) {
  //     setLoading(true);
  //     setDataArray((prev) => [...prev, ...preFetched]);
  //     setLoading(false);
  //     setTotalUser((prev) => {
  //       console.log();
  //       if (prev >= 1000) {
  //         console.log("hi");
  //         setEndOfUsers(true);
  //         setLoading(false);
  //         return prev;
  //       }
        
  //       return prev + 50;
  //     }); 
      
  //   }
  // };
  const handleScroll=useRef(
    debounce(() => {
      const scrollHeight = document.documentElement.scrollHeight;
      const currentHeight =
      document.documentElement.scrollTop + window.innerHeight;
      if (currentHeight + 1 >= scrollHeight) {
        setLoading(true);
        const dataHolder=preFetchData
        console.log("hi from handle scroll")
        setDataArray((prev) => [...prev,...dataHolder]);
        setTotalUser((prev) => {
          if (prev >= 1000) {
            setEndOfUsers(true);
            setLoading(false);
            return prev;
          }
          return prev + 50;
        });
        setLoading(false);
        console.log(dataArray.length)
      }
    }, 100)
  ).current;

  // const handleScroll = useRef(
  //   debounce((totalUsers) => {
  //     const scrollHeight = e.documentElement.scrollHeight;
  //     const currentHeight =
  //     e.documentElement.scrollTop + window.innerHeight;
      
  //     // Check if totalUsers is greater than 1000 and return if true
  //     if (totalUsers > 1000) {
  //       return;
  //     }
  
  //     if (currentHeight + 1 >= scrollHeight) {
  //       setLoading(true);
  //       setDataArray((prev) => [...prev, ...preFetched]);
  //       setLoading(false);
  //       setTotalUser((prev) => {
  //         if (prev >= 1000) {
  //           setEndOfUsers(true);
  //           setLoading(false);
  //           return prev;
  //         }
  //         return prev + 50;
  //       });
  //     }
  //   }, 100)
  // ).current;
  

  useEffect(() => {
    Loader(selectedNationality);
  }, [selectedNationality]);


  useEffect(() => {
    console.log(totalUsers)
    preLoader(selectedNationality);
    
  

  }, [totalUsers, selectedNationality]);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { dataArray,endOfUsers };
}
export default useInfiniteScroll;
