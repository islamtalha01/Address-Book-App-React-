import axios from "axios";
const baseUrl = import.meta.env.VITE_RandomUsers_API_Base_URL;

const getuserdata = async (query, limit) => {
  const apiurl = `${baseUrl}results=${limit}&nat=${query}`;

  const request = await axios.get(apiurl);
  const result = await request.data.results;
  return result;
};

export default { get: getuserdata };
