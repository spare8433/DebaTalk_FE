import produce from "immer"
import * as actions from '@store/hotDebateTopicList/hotDebateTopicList.types'

const initialState = {
  getPostLoading: false,
  getPostDone: false,
  getPostError: null,
	hotDebateTopicListData: null
}

export const hotDebateTopicListReducer = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      //* LOG OUT
      case actions.GET_HOT_DEBATE_TOPIC_LIST_REQUEST:
        draft.getPostLoading= true
        draft.getPostDone = false
        draft.getPostError = null
        break
      case actions.GET_HOT_DEBATE_TOPIC_LIST_SUCCESS:
        draft.getPostLoading= false
        draft.getPostDone = true
        draft.hotDebateTopicListData = action.data
        break
      case actions.GET_HOT_DEBATE_TOPIC_LIST_FAILURE:
        draft.getPostLoading= false
        draft.getPostError = action.error
        draft.hotDebateTopicListData = null
        break

			default:
				break
    }
  })
}