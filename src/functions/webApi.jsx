import axios from "axios";
import { useEffect, useState } from "react";

const useAxiosReq = ({ deafultValue, method, url, body, dependency = [] }) => {
  const [data, setData] = useState(deafultValue);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const fatchData = async () => {
    setLoading(true);
    try {
      const result = await axiosReq({ method, url, body });
      setData(result);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fatchData();
  }, dependency);
  return { data, loading, error, setData, setLoading };
};
const axiosReq = async ({ method = "POST", body, url }) => {
  try {
    const { data: result } = await axios({
      withCredentials: true,
      baseURL: "http://localhost:3001/",
      method,
      data: body,
      url,
    });
    return result;
  } catch (error) {
    console.error("my Axios Error: \n", error);
    throw error.message;
  }
};

const flags = {
  sent: "isSent",
  inbox: "isRecieved",
  favorite: "isFavorite",
  deleted: "isDeleted",
  draft: "isDraft",
  read: "isRead",
  notRead: { isRead: false },
};

// const getEmails = async (emailType) => {
//     const flags = [Flags[emailType]]
//     const data = await axios.post(URL + "/userchats/getchats", { flags })
//     return data.data
// }
export { flags, useAxiosReq, axiosReq };
