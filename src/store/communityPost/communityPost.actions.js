import * as actions from '@store/communityPost/communityPost.types'

export const getCommunityPostRequest = (req) => ({
  type: actions.GET_COMMUNITY_POST_REQUEST,
  req
})

export const getCommunityPostSuccess = (data) => ({
  type: actions.GET_COMMUNITY_POST_SUCCESS,
  data
})

export const getCommunityPostFailure = (error) => ({
  type: actions.GET_COMMUNITY_POST_FAILURE,
  error
})