import axios from "axios";

const http = axios.create({
  baseURL: "https://fakestoreapi.com/products",
  withCredentials: false
})

http.interceptors.response.use(
  response => response.data,
  error => Promise.reject(error)
)

export default http