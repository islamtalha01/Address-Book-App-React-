import {  useState, useRef, useContext } from "react";
import userDataService from "../services/userdata";
import { AppContext } from "../AppContext";
const MAX_USER = 1000;
function useDataFetch(limit = 50) {
  const { selectedNationality, endOfUsers, setEndOfUsers } =
    useContext(AppContext);

  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalUsers, setTotalUsers] = useState(50);
  const isfirstRender = useRef(true);
  const [preFetchUsers, setpreFetchUsers] = useState([]);

  const getUsersData = async () => {
    try {
      if (totalUsers <= MAX_USER) {
        setUsersData((prev) => [...prev, ...preFetchUsers]);

        if (isfirstRender.current) {
          setLoading(true);

          const [fetchedUsers, preFetchedUsers] = await Promise.all([
            userDataService.get(selectedNationality, limit),
            userDataService.get(selectedNationality, limit),
          ]);
          setUsersData(fetchedUsers);
          setpreFetchUsers(preFetchedUsers);
          setLoading(false);
          setEndOfUsers(false);
          isfirstRender.current = false;
        } else {
          const preFetchedUsers = await userDataService.get(
            selectedNationality,
            limit
          );

          setpreFetchUsers(preFetchedUsers);
        }

        setTotalUsers((prev) => prev + 50);
      } else {
        setEndOfUsers(true);
      }
    } catch (error) {
      console.log("error is", error);
    }
  };
   console.log(totalUsers)
  return { usersData, endOfUsers, loading,getUsersData };
}

export default useDataFetch;
