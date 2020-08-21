import axios from 'axios';

const api = axios.create({
  baseURL: 'http://34.72.241.75',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

export default api;
