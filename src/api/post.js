import {instanceWithAuth} from './index'

// post 등록
export const createPostAPI = data => instanceWithAuth('posts').post('')