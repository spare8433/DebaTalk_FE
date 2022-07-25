import * as actions from '@store/userList/userList.types'

export const getAllUsersRequest = (req) => ({
  type: actions.GET_ALL_USERS_REQUEST,
  req
})

export const getAllUsersSuccess = (data) => ({
  type: actions.GET_ALL_USERS_SUCCESS,
  data
})

export const getAllUsersFailure = (error) => ({
  type: actions.GET_ALL_USERS_FAILURE,
  error
})