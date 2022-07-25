import {instance,instanceWithAuth} from './index'

// 로그인 api
export const loginAPI = data => instance('users').post('login', data)

//회원가입 api
export const sginUpAPI = data => instance('users').post('signup', data)

// 유저 정보 가져오기
export const getUserAPI = data => instanceWithAuth('users').get('')

// 프로필 사진 업데이트
export const uploadUserImageAPI = data => instanceWithAuth('users').patch('image', data)

// 전체 유저 정보 가져오기
export const getAllUsersAPI = data => instanceWithAuth('users').get('all',data)