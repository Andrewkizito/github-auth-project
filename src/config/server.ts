import axios from "axios";

const api = axios.create({
  baseURL: "https://dd2dz94bpibhz.cloudfront.net",
});

export default api;
