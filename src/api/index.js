import axios from 'axios';
import {getCookie} from '../cookie'
const SERVER_URL = 'http://localhost:8000/'

// 로그인 전 요청
const createInstance = url => axios.create({ baseURL: `${SERVER_URL}${url}` })


//req
export const tokenReq = () =>{
  axios.interceptors.request.use(function (config) {
    config.headers["Content-Type"] = "application/json; charset=utf-8";
    config.headers["Authorization"] = 'Bearer' + getCookie('token');
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
}

// res

// axios.interceptors.response.use(function (response) {
//   return response;
// }, function (error) {
//   console.log(error);
//   return Promise.reject(error);
// });

export const users = createInstance('users')