import * as actions from '@store/communityPosts/communityPosts.types'

export const getCommunityPostsRequest = (req) => ({
  type: actions.GET_COMMUNITY_POSTS_REQUEST,
  req
})

export const getCommunityPostsSuccess = (data) => ({
  type: actions.GET_COMMUNITY_POSTS_SUCCESS,
  data
})

export const getCommunityPostsFailure = (error) => ({
  type: actions.GET_COMMUNITY_POSTS_FAILURE,
  error
})