import axios from "axios";

export const api = axios.create({ baseURL: "/data", timeout: 10000 });

//Sebelum melakukan request ke server , jalankan fungsi berikut
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);
