import { FETCH_USER_PROFILE_FAILURE, FETCH_USER_PROFILE_REQUEST, FETCH_USER_PROFILE_SUCCESS, LOG_IN_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_OUT } from "./user.types"

export const logInRequest = (req) => ({
  type: LOG_IN_REQUEST,
  req
})

export const logInSuccess = (data) => ({
  type: LOG_IN_SUCCESS,
  data
})

export const logInFailure = (error) => ({
  type: LOG_IN_FAILURE,
  error
})

export const fetchUserProfileRequest = () => ({
  type: FETCH_USER_PROFILE_REQUEST
})

export const fetchUserProfileSuccess = (data) => ({
  type: FETCH_USER_PROFILE_SUCCESS,
  data
})

export const fetchUserProfileFailure = (error) => ({
  type: FETCH_USER_PROFILE_FAILURE,
  error
})