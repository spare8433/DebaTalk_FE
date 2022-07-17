import * as actions from '@store/reportCotent/reportCotent.types'

export const reportRequest = (req) => ({
  type: actions.REPORT_REQUEST,
  req
})

export const reportSuccess = () => ({
  type: actions.REPORT_SUCCESS
})

export const reportFailure = (error) => ({
  type: actions.REPORT_FAILURE,
  error
})