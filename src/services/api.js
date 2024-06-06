import axios from "axios";

// http://localhost:8080
const api = axios.create({
    baseURL: 'http://localhost:3000',
});



export default api;