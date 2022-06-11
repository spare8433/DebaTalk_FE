import { getPostsAPI } from '@api/post';
import {
	all,
	call,
	fork,
	put,
	takeLatest
} from 'redux-saga/effects'

import history from 'util/history';
import { getCommunityPostsFailure, getCommunityPostsSuccess } from './communityPosts.actions';
import { GET_COMMUNITY_POSTS_REQUEST } from './communityPosts.types';

function* getPosts(action) {
	console.log(action);
	console.log('getPosts requset');
  try {
		console.log('getPosts start');
    const { data } = yield call(getPostsAPI,action.req);
		console.log('getPosts api request success');

    yield put( getCommunityPostsSuccess(data) );
		console.log('getPosts success');
		
  	// history.push("/");
  } catch (error) {
		console.error(error)
    yield put( getCommunityPostsFailure(error) );
		console.log('getPosts fail');
  }
}



function* watchgetPosts() {
	yield takeLatest(GET_COMMUNITY_POSTS_REQUEST, getPosts)
}


export default function* postsSaga() {
	yield all([fork(watchgetPosts) ])
}