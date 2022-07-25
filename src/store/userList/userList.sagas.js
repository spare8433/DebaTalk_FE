import { getAllUsersAPI } from '@api/user';
import {
	all,
	call,
	fork,
	put,
	takeLatest
} from 'redux-saga/effects'

import { getAllUsersFailure, getAllUsersSuccess } from './userList.actions';
import { GET_ALL_USERS_REQUEST } from './userList.types';


function* getAllUsers(action) {
	console.log('GET ALL USERS requset');
	try {
		const userList = yield call(getAllUsersAPI,action.req)
		console.log('GET ALL USERS api requset success');
		console.log(userList.data);
		yield put( getAllUsersSuccess(userList.data) );
		console.log('GET ALL USERS success');
	} catch (error) {
		console.error(error)
    yield put( getAllUsersFailure(error) );
		console.log('GET ALL USERS fail');
	}
}


function* watchGetAllUsers() {
	yield takeLatest(GET_ALL_USERS_REQUEST, getAllUsers)
}


export default function* userListSaga() {
	yield all([fork(watchGetAllUsers)])
}