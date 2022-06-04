import { getUserAPI, loginAPI } from '@api/user';
import { setCookie } from '@cookie/';
import {
	all,
	call,
	fork,
	put,
	takeLatest
} from 'redux-saga/effects'

import { fetchUserProfileFailure, fetchUserProfileSuccess, logInFailure, logInSuccess } from './user.actions';
import { FETCH_USER_PROFILE_REQUEST, LOG_IN_REQUEST } from './user.types';
import history from 'util/history';
import { getCookie } from '@cookie/';


function* logIn(action) {
	console.log(action);
	console.log('login requset');
  try {
		console.log('login start');
    const { data } = yield call(loginAPI,action.req);
		console.log('login api request success');
		yield setCookie('token',data.token)
		console.log('setCookie success');
		const user = yield call(getUserAPI)
		console.log('getUser api success');
		console.log(user.data);
    yield put( logInSuccess(user.data) );
		console.log('login success');
  	history.push("/");
  } catch (error) {
		console.error(error)
    yield put( logInFailure(error) );
		console.log('login fail');
  }
}

function* fetchProfile() {
	console.log('fetch user profile requset');
	try {
		const user = yield call(getUserAPI)
		console.log('get profile api requset success');
		yield put( fetchUserProfileSuccess(user.data) );
		console.log('fetch user profile success');
	} catch (error) {
		console.error(error)
    yield put( fetchUserProfileFailure(error) );
		console.log('fetch user profile fail');
	}

}

function* signIn(action) {
	console.log(action);
	console.log('signIn requset');
  try {
		console.log('login start');
    const { data } = yield call(loginAPI,action.req);
		console.log('login api request success');
		yield setCookie('token',data.token)
		console.log('setCookie success');
		const user = yield call(getUserAPI,data.token)
		console.log('getUser api success');
		console.log(user.data);
    yield put( logInSuccess(user.data) );
		console.log('login success');
  	history.push("/");
  } catch (error) {
		console.error(error)
    yield put( logInFailure(error) );
		console.log('login fail');
  }
}



function* watchLogIn() {
	yield takeLatest(LOG_IN_REQUEST, logIn)
}

function* watchFetchProfile() {
	yield takeLatest(FETCH_USER_PROFILE_REQUEST, fetchProfile)
}


export default function* userSaga() {
	yield all([fork(watchLogIn), fork(watchFetchProfile)])
}