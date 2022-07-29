import produce from "immer"
import * as actions from '@store/debatePostList/debatePostList.types'

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
	debatePostListData: null
}

export const debatePostListReducer = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      //* LOG OUT
      case actions.GET_DEBATE_POST_LIST_REQUEST:
        draft.getPostLoading= true
        draft.getPostDone = false
        draft.getPostError = null
        break
      case actions.GET_DEBATE_POST_LIST_SUCCESS:
        draft.getPostLoading= false
        draft.getPostDone = true
        draft.debatePostListData = action.data
        break
      case actions.GET_DEBATE_POST_LIST_FAILURE:
        draft.getPostLoading= false
        draft.getPostError = action.error
        draft.debatePostListData = null
        break

			default:
				break
    }
  })
}