import { getDebatePostsAPI } from '@api/debatePost';
import {
	all,
	call,
	fork,
	put,
	takeLatest
} from 'redux-saga/effects'

import {  getDebatePostListFailure, getDebatePostListSuccess } from './debatePostList.actions';
import { GET_DEBATE_POST_LIST_REQUEST } from './debatePostList.types';


function* getDebatePostList(action) {
	console.log(action);
	console.log('GET DEBATE POST LIST requset');
  try {
		console.log('GET DEBATE POST LIST start');
    const { data } = yield call(getDebatePostsAPI,action.req);
		console.log('GET DEBATE POST LIST api request success');

    yield put( getDebatePostListSuccess(data) );
		console.log('GET DEBATE POST LIST success');
		
  } catch (error) {
		console.error(error)
    yield put( getDebatePostListFailure(error) );
		console.log('GET DEBATE POST LIST fail');
  }
}


function* watchgetDebatePostList() {
	yield takeLatest(GET_DEBATE_POST_LIST_REQUEST, getDebatePostList)
}


export default function* debatePostListSaga() {
	yield all([fork(watchgetDebatePostList) ])
}