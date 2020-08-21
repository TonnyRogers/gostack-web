import axios from 'axios';

const api = axios.create({
  baseURL: 'https://373261597.tk',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

export default api;
