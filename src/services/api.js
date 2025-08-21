// api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001", // URL pública do backend
});

export default api;
