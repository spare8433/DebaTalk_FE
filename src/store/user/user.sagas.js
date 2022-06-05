import { getUserAPI, loginAPI, sginUpAPI } from '@api/user';
import { setCookie,removeCookie } from '@cookie/';
import {
	all,
	call,
	fork,
	put,
	takeLatest
} from 'redux-saga/effects'

import { fetchUserProfileFailure, fetchUserProfileSuccess, logInFailure, logInSuccess, logOutSuccess, signUpFailure, signUpSuccess } from './user.actions';
import { FETCH_USER_PROFILE_REQUEST, LOG_IN_REQUEST, LOG_OUT_REQUEST, SIGN_UP_REQUEST } from './user.types';
import history from 'util/history';

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

function* logOut() {
	yield removeCookie('token');
	yield put( logOutSuccess() );
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

function* signUp(action) {
	console.log(action);
	console.log('signUp requset');
  try {
		console.log('signUp start');

    const singUpData = yield call(sginUpAPI,action.req);
		console.log('signUp api request success');

		console.log(action.req);

		const loginData = yield call(loginAPI,{ userId:action.req.userId, password:action.req.password });
		console.log('login api request success');

		yield setCookie('token',loginData.data.token)
		console.log('setCookie success');

		yield put( signUpSuccess(singUpData.data) );

		console.log('signUp success');
  	// history.push("/");
  } catch (error) {
		console.error(error)
    yield put( signUpFailure(error) );
		console.log('signUp fail');
  }
}



function* watchLogIn() {
	yield takeLatest(LOG_IN_REQUEST, logIn)
}

function* watchLogOut() {
	yield takeLatest(LOG_OUT_REQUEST, logOut)
}

function* watchFetchProfile() {
	yield takeLatest(FETCH_USER_PROFILE_REQUEST, fetchProfile)
}

function* watchSignUp() {
	yield takeLatest(SIGN_UP_REQUEST, signUp)
}



export default function* userSaga() {
	yield all([fork(watchLogIn), fork(watchFetchProfile), fork(watchSignUp), fork(watchLogOut)])
}