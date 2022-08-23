import {instanceWithAuth} from './index'

// debate-post 등록
export const createDebatePostAPI = data => instanceWithAuth('debate-posts').post('create',data)

// debate-post 불러오기
export const getDebatePostsAPI = querry => instanceWithAuth('debate-posts').get(
  `all?limit=${querry.limit}&skip=${querry.skip}&key=${querry.key}&title=${querry.title}&category=${querry.category}`
)

// debate-post 특정 게시물 가져오기
export const getOneDebatePostAPI = id => instanceWithAuth('debate-posts').get(`one/${id}`)