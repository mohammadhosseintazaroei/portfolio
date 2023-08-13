import axios, { type AxiosRequestConfig } from 'axios';

const baseURL = `${import.meta.env.VITE_BASE_URL}/api/panel`;
// const baseURL = 'http://api.automoby.ir/api/panel';
// const baseURL = 'http://localhost:7070/api/panel';

const axiosDefaultConfigs: AxiosRequestConfig = {
  baseURL,
};

const axiosInstance = axios.create(axiosDefaultConfigs);

export default axiosInstance;
