import {instance,instanceWithAuth} from './index'

// 로그인 api
export const loginAPI = data => instance('users').post('login', data)


//회원가입 api
export const sginUpAPI = data => instance('users').post('signup', data)

// 유저 정보 가져오기
export const getUser = data => instanceWithAuth('users').get('')

//회원가입 api
export const uploadUserImageAPI = data => instanceWithAuth('users').patch('image', data)