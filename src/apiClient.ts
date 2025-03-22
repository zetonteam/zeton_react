import axios from 'axios';
import { mockyClient } from './mockyClient';

const apiClient = axios.create({});

if (process.env.VITE_REACT_APP_API_URL) {
  apiClient.defaults.baseURL = process.env.VITE_REACT_APP_API_URL;
} else {
  apiClient.defaults.baseURL = 'http://localhost:8000';
}

export default mockyClient;
