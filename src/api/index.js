import axios from 'axios';

const SERVER_URL = 'http://localhost:8000/'

// 로그인 전 요청
const createInstance = url => axios.create({ baseURL: `${SERVER_URL}${url}` })

export const users = createInstance('users')