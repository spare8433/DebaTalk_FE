import produce from "immer"
import * as actions from '@store/communityPosts/communityPosts.types'

const initialState = {
  getPostsLoading: false,
  getPostsDone: false,
  getPostsError: null,
	createPostsLoading: false,
	createPostsDone: false,
	createPostsError: null,
	deletePostLoading: false,
	deletePostDone: false,
	deletePostError: null,
	communityPostDatas: null
}

export const communityPostsReducer = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      //* LOG OUT
      case actions.GET_COMMUNITY_POSTS_REQUEST:
        draft.getPostsLoading= true
        draft.getPostsDone = false
        draft.getPostsError = null
        break
      case actions.GET_COMMUNITY_POSTS_SUCCESS:
        draft.getPostsLoading= false
        draft.getPostsDone = true
        draft.communityPostDatas = action.data
        break
      case actions.GET_COMMUNITY_POSTS_FAILURE:
        draft.getPostsLoading= false
        draft.getPostsError = action.error
        draft.communityPostDatas = null
        break

			default:
				break
    }
  })
}