import {instanceWithAuth} from './index'

// post 등록
export const createPostAPI = data => instanceWithAuth('posts').post('',data)

// post 불러오기
export const getPostAPI = querry => instanceWithAuth('posts').get(`all?limit=${querry.limit}&skip=${querry.skip}`)

// 특정 게시물 가져오기
export const getOnePostAPI = id => instanceWithAuth('posts').get(`/${id}`)