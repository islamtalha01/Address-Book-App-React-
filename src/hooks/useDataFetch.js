// import { useEffect, useState, useRef, useContext } from "react";
// import userDataService from "../services/userdata";
// import { AppContext } from "../AppContext";
// function useDataFetch(limit = 50) {
//   const { selectedNationality, Intersecting, endOfUsers, setEndOfUsers } =
//     useContext(AppContext);
//   const [usersData, setUsersData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [totalUsers, setTotalUsers] = useState(0);
//   const isfirstRender = useRef(true);
//   const [preFetchUsers, setpreFetchUsers] = useState([]);
//   const fetchData = [];
//   const preFetchData = [];

//   const getUsersData = async () => {
//     try {
//       setLoading(true);
//       if (totalUsers <= 1000) {
//         if (!isfirstRender.current) {
//           console.log("hi");
//           setUsersData((prev) => [...prev, ...preFetchUsers]);
//           setLoading(false);
//         }

//         if (isfirstRender.current) {
//           const firstdatabatch = await userDataService.get(
//             selectedNationality,
//             limit
//           );
//           const seconddatabatch = await userDataService.get(
//             selectedNationality,
//             limit
//           );
//           firstdatabatch.forEach((element) => {
//             fetchData.push({
//               element,
//             });
//           });

//           seconddatabatch.forEach((element) => {
//             preFetchData.push({
//               element,
//             });
//           });
//           console.log(firstdatabatch);
//           console.log(seconddatabatch);
//         } else {
//           const seconddatabatch = await userDataService.get(
//             selectedNationality,
//             limit
//           );
//           seconddatabatch.forEach((element) => {
//             preFetchData.push({
//               element,
//             });
//           });
//         }

//         if (isfirstRender.current) {
//           setUsersData((prev) => [...prev, ...fetchData]);
//           setpreFetchUsers(preFetchData);
//           setLoading(false);
//           isfirstRender.current = false;
//         } else {
//           setpreFetchUsers(preFetchData);
//         }
//         setTotalUsers((prev) => prev + 50);
//       }
//       else {
//         setEndOfUsers(true);
//         setLoading(false);
//       }
//     } catch (error) {
//       console.log("error is", error);
//     }
//   };

//   useEffect(() => {
//     getUsersData();

//     console.log(totalUsers);
//   }, [Intersecting]);

//   useEffect(()=>{

//   },[])

//   return { usersData, endOfUsers, loading };
// }

// export default useDataFetch;

import { useEffect, useState, useRef, useContext } from "react";
import userDataService from "../services/userdata";
import { AppContext } from "../AppContext";
function useDataFetch(limit = 50) {
  const { selectedNationality, Intersecting, endOfUsers, setEndOfUsers } =
    useContext(AppContext);
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalUsers, setTotalUsers] = useState(0);
  const isfirstRender = useRef(true);
  const [preFetchUsers, setpreFetchUsers] = useState([]);
  const fetchData = [];
  const preFetchData = [];

  const getUsersData = async () => {
    try {
      if (totalUsers <= 1000) {
        if (isfirstRender.current) {
          setLoading(true);
          const firstdatabatch = await userDataService.get(
            selectedNationality,
            limit
          );
          const seconddatabatch = await userDataService.get(
            selectedNationality,
            limit
          );
          firstdatabatch.forEach((element) => {
            fetchData.push({
              element,
            });
          });

          seconddatabatch.forEach((element) => {
            preFetchData.push({
              element,
            });
          });
          console.log(firstdatabatch);
          console.log(seconddatabatch);
        } else {
          const seconddatabatch = await userDataService.get(
            selectedNationality,
            limit
          );
          seconddatabatch.forEach((element) => {
            preFetchData.push({
              element,
            });
          });
        }

        if (isfirstRender.current) {
          setUsersData((prev) => [...prev, ...fetchData]);
          setpreFetchUsers(preFetchData);
          setLoading(false);
          isfirstRender.current = false;
        } else {
          setpreFetchUsers(preFetchData);
        }
        setTotalUsers((prev) => prev + 50);
      } else {
        setEndOfUsers(true);
        setLoading(false);
      }
    } catch (error) {
      console.log("error is", error);
    }
  };

  function UpdateUserData() {
    if (totalUsers <= 1000) {
      setLoading(true);
      setUsersData((prev) => [...prev, ...preFetchUsers]);
      setLoading(false);
    }
  }

  useEffect(() => {
    getUsersData();
  }, [Intersecting]);

  useEffect(() => {
    UpdateUserData();
  }, [Intersecting]);

  return { usersData, endOfUsers, loading };
}

export default useDataFetch;
