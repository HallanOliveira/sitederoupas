import axios from 'axios'

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/posts',
  timeout: 3000,
  headers: {'X-Custom-Header': 'foobar'}
});

export default api
