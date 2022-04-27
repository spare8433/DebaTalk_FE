import axios from 'axios';
import interceptor from './interceptor'

const SERVER_URL = 'http://localhost:8000/'

// 로그인 전 요청
const createInstance = url => axios.create({ baseURL: `${SERVER_URL}${url}` })

const createInstanceWithAuth = url => {
  const instance = axios.create({ baseURL: `${SERVER_URL}${url}` })
  return interceptor(instance) 
}

export const instance = createInstance
export const instanceWithAuth = createInstanceWithAuth