import produce from "immer"
import * as actions from '@store/communityPost/communityPost.types'

const initialState = {
  getPostLoading: false,
  getPostDone: false,
  getPostError: null,
	createPostLoading: false,
	createPostDone: false,
	createPostError: null,
	deletePostLoading: false,
	deletePostDone: false,
	deletePostError: null,
	communityPostData: null
}

export const communityPostReducer = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      //* LOG OUT
      case actions.GET_COMMUNITY_POST_REQUEST:
        draft.getPostLoading= true
        draft.getPostDone = false
        draft.getPostError = null
        break
      case actions.GET_COMMUNITY_POST_SUCCESS:
        draft.getPostLoading= false
        draft.getPostDone = true
        draft.communityPostData = action.data
        break
      case actions.GET_COMMUNITY_POST_FAILURE:
        draft.getPostLoading= false
        draft.getPostError = action.error
        draft.communityPostData = null
        break

			default:
				break
    }
  })
}