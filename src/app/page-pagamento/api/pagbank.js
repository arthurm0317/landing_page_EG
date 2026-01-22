import axios from 'axios';

const API_BASE_URL = 'https://sandbox.api.assinaturas.pagseguro.com';
const TOKEN = '81a614e8-9efa-4d14-817a-0300a8a9c2a2c7d189b3439684ce4ffe60b920629f3ba74f-9a98-45b2-ac42-c615e251f54a';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
    'Content-Type': 'application/json',
  },
});

export default {
  async criarAssinante(dados) {
    return await api.post('/customers', dados);
  },

  async criarAssinatura(dados) {
    return await api.post('/subscriptions', dados);
  },
};