

// const Loader = async () => {


// const [dataArray, setDataSource] = useState([]);
// const [batchSize,setBatchSize]=useState(50)
// const [endOfusers,setEndOfUsers]=useState(false)


//     const dataArray = [];
//     try {
//       if(batchSize<=1000)
//       {
//         const response = await axios.get(`https://randomuser.me/api/?results=${batchSize}`);
//         console.log(batchSize)
//         const results = response.data.results;
//         // console.log(response.data);
//         // setLoading(false)
//         results.forEach((element) => {
//           const firstName = element.name.first;
//           const lastName = element.name.last;
//           const email = element.email;
//           const userName = element.login.username;
//           const thumbnailUrl = element.picture.thumbnail;
//           const street=element.location.street.name+element.location.street.number;
//           const city=element.location.city
//           const state=element.location.state
//           const postCode=element.location.postcode
//           const phone=element.cell
          
//           //location.street, location.city,location.state ,location.postcode,phoone ,cell field
    
//           const detail = {
//             first: firstName,
//             last: lastName,
//             email: email,
//             userName: userName,
//             thumbUrl: thumbnailUrl,
//              street:street,
//              city:city,
//              state :state,
//             postCode:postCode,
//             phone:phone,
//           };
           
//            console.log(detail)
    
//           dataArray.push(detail);
//         });
    
        
        
//             setDataSource((prev)=>[...prev,...dataArray]);
        
         
//       }
//       else
//       {
//         console.log("end of users")
//       }
  
//     } catch (error) {
//       console.log(error);
//     }
     
//   };