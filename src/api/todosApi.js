import axios from 'axios';

export const todosApi = axios.create({
  baseURL: 'https://my-json-server.typicode.com/AlvaroArratia/static-todos-api'
});