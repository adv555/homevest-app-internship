import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const { REACT_APP_API_BASE_URL } = process.env;

export const BASE_URL = REACT_APP_API_BASE_URL;

const api = axios.create({
    withCredentials: true,
    baseURL: "http://localhost:3001/api/v1",
})

api.interceptors.request.use((config) => {
    if(localStorage.getItem("token") && config.headers)
        config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
    return config;
})

export {api};