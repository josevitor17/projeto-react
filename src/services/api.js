// api.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.render.com/deploy/srv-d2js5nbe5dus738ge1e0?key=4OCMiH_Wh80", // URL pública do backend
});

export default api;
