import http from "./BaseService";

export const productsList = () => http.get("/")
export const productItem = (id) => http.get(`/${id}`)