import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-test-carrinho.herokuapp.com',
});

export default api;
