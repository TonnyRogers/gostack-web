import axios from 'axios';

const api = axios.create({
  baseURL: 'http://34.72.241.75:3333',
});

export default api;
