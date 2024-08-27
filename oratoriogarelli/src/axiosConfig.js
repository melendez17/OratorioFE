// src/axiosConfig.js

import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080', // URL base de tu backend
});

export default instance;
