import axios from "axios";

const api = axios.create({
  baseURL: "http://35.177.146.78:8000",
});

export default api;
