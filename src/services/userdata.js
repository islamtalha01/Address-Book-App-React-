import axios from "axios";
const baseUrl = "https://randomuser.me/api/?";

const getuserdata = async(query, limit) => {
  // console.log(limit,"in_userdata_service")
  const apiurl = `${baseUrl}results=${limit}&nat=${query}`;

  const request =  await axios.get(apiurl);
  const result = await request.data.results
  return result
};

export default { get: getuserdata };
