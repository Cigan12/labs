import axios from "axios";

export const API = axios.create({
    baseURL:
        process.env.NODE_ENV === "development"
            ? "http://localhost:3001"
            : "https://api.olya-get-well.ru",
});
