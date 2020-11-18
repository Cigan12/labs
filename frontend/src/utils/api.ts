import axios from "axios";

console.log("Cigan-log: process.env", process.env.NODE_ENV);

export const API = axios.create({
    baseURL:
        process.env.NODE_ENV === "development"
            ? "http://localhost:3001"
            : "https://api.olya-get-well.ru",
});
