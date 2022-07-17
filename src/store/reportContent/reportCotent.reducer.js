import produce from "immer"
import * as actions from '@store/user/user.types'

const initialState = {
	reportLoading: false,
	reportDone: false,
	reportError: null
}

export const reportReducer = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {

      //* REPORT
      case actions.REPORT_REQUEST:
				draft.reportLoading = true
				draft.reportDone = false
				draft.reportError = null
				break
			case actions.REPORT_SUCCESS:
				draft.reportLoading = false
				draft.reportDone = true
				break
			case actions.REPORT_FAILURE:
				draft.reportLoading = false
				draft.reportError = action.error
				break

			default:
				break
			
    }
  })
}

