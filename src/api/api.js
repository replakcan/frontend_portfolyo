import axios from "axios";

const BASE_URL = "https://reqres.in/api/workintech";

const axiosInstance = () => {
  return axios.create({
    baseURL: BASE_URL,
  });
};

export const API = axiosInstance();
