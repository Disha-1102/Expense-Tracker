import axios from "axios";

const api = axios.create({
  baseURL: "https://expense-tracker-t6o8.onrender.com"
});

export default api;