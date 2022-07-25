import produce from "immer"
import * as actions from '@store/userList/userList.types'

const initialState = {
	getUsersListLoading: false,
	getUsersListDone: false,
	getUsersListError: null,
	data: null
}

export const userListReducer = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {

			//* GET ALL USERS
			case actions.GET_ALL_USERS_REQUEST:
				draft.getUsersListLoading = true
				draft.getUsersListDone = false
				draft.getUsersListError = null
				break
			case actions.GET_ALL_USERS_SUCCESS:
				draft.getUsersListLoading = false
				draft.getUsersListDone = true
				draft.data = action.data
				break
			case actions.GET_ALL_USERS_FAILURE:
				draft.getUsersListLoading = false
				draft.getUsersListError = action.error
				break

			default:
				break
			
    }
  })
}

