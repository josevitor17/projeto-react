// api.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://meu-backend.com", // URL pública do backend
});

export default api;
