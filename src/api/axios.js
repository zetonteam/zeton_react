import axios from "axios";

Object.assign(axios.defaults.headers.common, {
  "Content-Type": "application/json",
  "Accept": "application/json"
})

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api",
});

export default axiosInstance;
