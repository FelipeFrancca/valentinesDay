import axios from "axios";

// http://localhost:8080
const api = axios.create({
    baseURL: '/',
});



export default api;