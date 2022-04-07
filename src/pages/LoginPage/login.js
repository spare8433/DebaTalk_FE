import axios from 'axios';
import jwt from 'jsonwebtoken'
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/actions';

export const onLogin = (data) => {
  return () => {
    const dispatch = useDispatch();

    axios.post('/users/login', data).then(res => {
      const { token } = res.data;
  
      // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      
      dispatch(setUser(jwt.decode(token)))    
      // accessToken을 localStorage, cookie 등에 저장하지 않는다!
  
    }).catch(error => {
      // ... 에러 처리
    });    
  } 
}