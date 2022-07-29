import produce from "immer"
import * as actions from '@store/debatePost/debatePost.types'

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
	debatePostData: null
}

export const debatePostReducer = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      //* LOG OUT
      case actions.GET_DEBATE_POST_REQUEST:
        draft.getPostLoading= true
        draft.getPostDone = false
        draft.getPostError = null
        break
      case actions.GET_DEBATE_POST_SUCCESS:
        draft.getPostLoading= false
        draft.getPostDone = true
        draft.debatePostData = action.data
        break
      case actions.GET_DEBATE_POST_FAILURE:
        draft.getPostLoading= false
        draft.getPostError = action.error
        draft.debatePostData = null
        break

			default:
				break
    }
  })
}