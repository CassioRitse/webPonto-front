import axios from "axios";

export const api = axios.create({
  // baseURL: "http://192.168.0.105:3333/",
  baseURL: "http://localhost:8080/apiPonto/",
});
