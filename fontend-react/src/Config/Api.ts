import axios from 'axios';

export const API_URL = `${process.env.REACT_APP_API_URL}`;
export const DEPLOYED_URL = `${process.env.REACT_APP_DEPLOYED_URL}`;
// change api

export const api = axios.create({
  baseURL: API_URL, 
  headers: {
    'Content-Type': 'application/json',
  },
});