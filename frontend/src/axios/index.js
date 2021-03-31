import axios from "axios";

const baseUrl = "https://luna-sagittarius.propulsion-learn.ch/backend/api/";
// const baseUrl = 'http://localhost:8000/backend/api/',

const Axios = axios.create({
  baseUrl: baseUrl,
});

Axios.defaults.baseURL = baseUrl;

Axios.defaults.headers.post["Content-Type"] = "application/json";

Axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = "Bearer " + token;
  }
  return config;
});

export default Axios;
