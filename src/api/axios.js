import axios from "axios";

const axiosInstance = () => {
  return axios.create({
    baseURL: "http://localhost:8000/api",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
  });
};

export default axiosInstance;
