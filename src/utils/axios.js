import axios from "axios";

const axiosApiIntances = axios.create({
  // baseURL: "https://fazzpay-d3aubygex-bagusth15.vercel.app/",
  baseURL: "http://localhost:3001/api/",
  // baseURL: "https://event-organizing-backend.vercel.app/api/",
});
// Add a request interceptor
// Add a request interceptor
axiosApiIntances.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
export default axiosApiIntances;
