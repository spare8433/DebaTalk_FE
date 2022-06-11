import { getOnePostAPI } from '@api/post';
import {
	all,
	call,
	fork,
	put,
	takeLatest
} from 'redux-saga/effects'

import history from 'util/history';
import { getCommunityPostFailure, getCommunityPostSuccess } from './communityPost.actions';
import { GET_COMMUNITY_POST_REQUEST } from './communityPost.types';

function* getPost(action) {
	console.log(action);
	console.log('getPost requset');
  try {
		console.log('getPost start');
    const { data } = yield call(getOnePostAPI,action.req);
		console.log('getPost api request success');

    yield put( getCommunityPostSuccess(data) );
		console.log('getPost success');
		
  	// history.push("/");
  } catch (error) {
		console.error(error)
    yield put( getCommunityPostFailure(error) );
		console.log('getPost fail');
  }
}


function* watchgetPost() {
	yield takeLatest(GET_COMMUNITY_POST_REQUEST, getPost)
}


export default function* postSaga() {
	yield all([fork(watchgetPost) ])
}