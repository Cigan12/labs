import axios from "axios";

export const API = axios.create({
    baseURL: "http://back:3001/",
});
