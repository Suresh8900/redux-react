// axiosInstance.ts
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://3.144.131.203/ecommerce-web/public/', 
  timeout: 10000, 
});

axiosInstance.interceptors.request.use(
  (config) => {
    
    const token = localStorage.getItem('token'); 
    //const token = '900|tMiMYmBATavdSMTnb5LXkAB7gsGaQhfyRrxq80Sh'; 
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default axiosInstance;
