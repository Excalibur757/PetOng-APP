// lib/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.3.41:3000', // ✅ Substitua pelo IP DA SUA MÁQUINA
  timeout: 5000,
});

export default api;
