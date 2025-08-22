// api.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://conceito-node.onrender.com", // URL pública do backend
});

export default api;
