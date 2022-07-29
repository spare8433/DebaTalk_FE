import * as actions from '@store/debatePostList/debatePostList.types'

export const getDebatePostListRequest = (req) => ({
  type: actions.GET_DEBATE_POST_LIST_REQUEST,
  req
})

export const getDebatePostListSuccess = (data) => ({
  type: actions.GET_DEBATE_POST_LIST_SUCCESS,
  data
})

export const getDebatePostListFailure = (error) => ({
  type: actions.GET_DEBATE_POST_LIST_FAILURE,
  error
})