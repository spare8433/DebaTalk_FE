import * as actions from '@store/user/user.types'

export const logInRequest = (req) => ({
  type: actions.LOG_IN_REQUEST,
  req
})

export const logInSuccess = (data) => ({
  type: actions.LOG_IN_SUCCESS,
  data
})

export const logInFailure = (error) => ({
  type: actions.LOG_IN_FAILURE,
  error
})

export const fetchUserProfileRequest = (data) => ({
  type: actions.FETCH_USER_PROFILE_REQUEST,
  data
})

export const fetchUserProfileSuccess = () => ({
  type: actions.FETCH_USER_PROFILE_SUCCESS
})

export const fetchUserProfileFailure = (error) => ({
  type: actions.FETCH_USER_PROFILE_FAILURE,
  error
})

export const signUpRequest = (req) => ({
  type: actions.SIGN_UP_REQUEST,
  req
})

export const signUpSuccess = (data) => ({
  type: actions.SIGN_UP_SUCCESS,
  data
})

export const signUpFailure = (error) => ({
  type: actions.SIGN_UP_FAILURE,
  error
})


export const logOutRequest = () => ({
  type: actions.LOG_OUT_REQUEST
})

export const logOutSuccess = () => ({
  type: actions.LOG_OUT_SUCCESS
})