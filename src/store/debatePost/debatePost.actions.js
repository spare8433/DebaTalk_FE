import * as actions from '@store/debatePost/debatePost.types'

export const getDebatePostRequest = (req) => ({
  type: actions.GET_DEBATE_POST_REQUEST,
  req
})

export const getDebatePostSuccess = (data) => ({
  type: actions.GET_DEBATE_POST_SUCCESS,
  data
})

export const getDebatePostFailure = (error) => ({
  type: actions.GET_DEBATE_POST_FAILURE,
  error
})