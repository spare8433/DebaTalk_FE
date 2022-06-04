import produce from "immer"
import * as actions from '@store/user/user.types'

const initialState = {
	loadMyInfoLoading: false,
	loadMyInfoDone: false,
	loadMyInfoError: null,
	signUpLoading: false,
	signUpDone: false,
	signUpError: null,
	logInLoading: false,
	logInDone: false,
	logInError: null,
	logOutLoading: false,
	logOutDone: false,
	logOutError: null,
	myData: null
}

export const userReducers = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      //* SIGN_UP
      // case actions.SIGN_UP_REQUEST:
			// 	draft.signUpLoading = true
			// 	draft.signUpDone = false
			// 	draft.signUpError = null
			// 	break
			// case actions.SIGN_UP_SUCCESS:
			// 	draft.signUpLoading = false
			// 	draft.signUpDone = true
			// 	draft.myData = action.data
			// 	break
			// case actions.SIGN_UP_FAILURE:
			// 	draft.signUpLoading = false
			// 	draft.signUpError = action.error
			// 	break

			//* LOG_IN
			case actions.LOG_IN_REQUEST:
				draft.logInLoading = true
				draft.logInDone = false
				draft.logInError = null
				break
			case actions.LOG_IN_SUCCESS:
				draft.logInLoading = false
				draft.logInDone = true
				draft.myData = action.data
				break
			case actions.LOG_IN_FAILURE:
				draft.logInLoading = false
				draft.logInError = action.error
				break

			//* FETCH USER PROFILE
			case actions.FETCH_USER_PROFILE_REQUEST:
				draft.loadMyInfoLoading = true
				draft.loadMyInfoDone = false
				draft.logInError = null
				break;
			case actions.FETCH_USER_PROFILE_SUCCESS:
				draft.loadMyInfoLoading = false
				draft.loadMyInfoDone = true
				draft.myData = action.data
				break;
			case actions.FETCH_USER_PROFILE_FAILURE:
				draft.loadMyInfoLoading = false
				draft.loadMyInfoError = action.error
				break;


			default:
				break
			
    }
  })
}

