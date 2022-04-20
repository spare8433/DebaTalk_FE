import {users} from './index'

// 로그인 api
export const loginAPI = data => users.post('login', data)


//회원가입 api
export const sginUpAPI = data => users.post('signup', data)
