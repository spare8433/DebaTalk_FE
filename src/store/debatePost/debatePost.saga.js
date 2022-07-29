import { getOneDebatePostAPI } from '@api/debatePost';
import {
	all,
	call,
	fork,
	put,
	takeLatest
} from 'redux-saga/effects'

import { getDebatePostFailure, getDebatePostSuccess } from './debatePost.actions';
import { GET_DEBATE_POST_REQUEST } from './debatePost.types';


function* getOneDebatePost(action) {
	console.log(action);
	console.log('GET DEBATE POST LIST requset');
  try {
		console.log('GET DEBATE POST LIST start');
    const { data } = yield call(getOneDebatePostAPI,action.req);
		console.log('GET DEBATE POST LIST api request success');

    yield put( getDebatePostSuccess(data) );
		console.log('GET DEBATE POST LIST success');
		
  } catch (error) {
		console.error(error)
    yield put( getDebatePostFailure(error) );
		console.log('GET DEBATE POST LIST fail');
  }
}


function* watchgetDebatePost() {
	yield takeLatest(GET_DEBATE_POST_REQUEST, getOneDebatePost)
}


export default function* debatePostSaga() {
	yield all([fork(watchgetDebatePost) ])
}