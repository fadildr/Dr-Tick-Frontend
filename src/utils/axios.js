import axios from "axios";

const axiosApiIntances = axios.create({
  // baseURL: "https://fazzpay-d3aubygex-bagusth15.vercel.app/",
  baseURL: "http://localhost:3001/api/",
});

export default axiosApiIntances;
