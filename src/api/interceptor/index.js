import axios from 'axios';
import { getCookie } from '../../cookie';



export default (instance) =>{

    //req
    instance.interceptors.request.use(function (config) {
      config.headers["Authorization"] = 'Bearer ' + getCookie('token');
      return config;
    }, function (error) {
      // Do something with request error
      return Promise.reject(error);
    });


    // res
    instance.interceptors.response.use(function (response) {
      return response;
    }, function (error) {
      console.log(error);
      return Promise.reject(error);
    });

    return instance
  }
  

  