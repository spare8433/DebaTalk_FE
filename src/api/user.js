import {users} from './index'

// 로그인 api
export const loginAPI = data => users.post('login', data)
