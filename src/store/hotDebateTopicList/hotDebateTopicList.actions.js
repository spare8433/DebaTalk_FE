import * as actions from '@store/hotDebateTopicList/hotDebateTopicList.types'

export const getHotDebateTopicListRequest = () => ({
  type: actions.GET_HOT_DEBATE_TOPIC_LIST_REQUEST
})

export const getHotDebateTopicListSuccess = (data) => ({
  type: actions.GET_HOT_DEBATE_TOPIC_LIST_SUCCESS,
  data
})

export const getHotDebateTopicListFailure = (error) => ({
  type: actions.GET_HOT_DEBATE_TOPIC_LIST_FAILURE,
  error
})