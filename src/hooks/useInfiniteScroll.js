import { useEffect, useState } from "react";
import axios from "axios";
import React, { useContext } from 'react';
import { AppContext } from '../AppContext';
function useInfiniteScroll(nationality)
{
const [dataArray, setDataArray] = useState([]);
const [totalUsers,setTotalUser]=useState(50)
const [endOfUsers,setEndOfUsers]=useState(false)
const [loading, setLoading]= useState(true)
const {selectedNationality} = useContext(AppContext);
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
              const nat=element.nat
            
               
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
                nat:nat,
              };
               
           
             
              
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
      
      const handleScroll = (e) => {
        const scrollHeight = e.target.documentElement.scrollHeight;
        const currentHeight = e.target.documentElement.scrollTop + window.innerHeight;
        if (currentHeight + 1 >= scrollHeight) {
           
          
          setTotalUser((prev)=> {

            if(prev >=1000)
            {
                 console.log("hi")
                 setEndOfUsers(true)
                 return prev;
            } 
            
            return prev+50
            
          }); 
             
            // if(prev>=1000){setEndOfUsers(true);return }
      
        }
      };
      useEffect(()=>
      {
        setLoading(true)
        Loader(selectedNationality);
        setLoading(false)
      },[totalUsers,selectedNationality])
      
      useEffect(() => {
        
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
       console.log(endOfUsers) //endOfUser state is not being aceesed there
      return {dataArray,endOfUsers,loading};
        
}



export default useInfiniteScroll;

