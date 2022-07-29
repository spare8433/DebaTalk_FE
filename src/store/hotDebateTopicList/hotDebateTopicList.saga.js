import { getDebatePostsAPI } from '@api/debatePost';
import {
	all,
	call,
	fork,
	put,
	takeLatest
} from 'redux-saga/effects'

import { getHotDebateTopicListFailure, getHotDebateTopicListSuccess } from './hotDebateTopicList.actions';
import { GET_HOT_DEBATE_TOPIC_LIST_REQUEST } from './hotDebateTopicList.types';


function* getHotDebateTopicList() {
	const option = {
		limit:4,
		skip:0,
		key:'hits',
		title:'',
		content:'',
		method:'',
	}

	console.log('GET HOT DEBATE TOPIC LIST requset');
  try {
		console.log('GET HOT DEBATE TOPIC LIST start');

    const dbt_subject = yield call(getDebatePostsAPI,{...option,category:'주제토론'});

		const dbt_prosCons = yield call(getDebatePostsAPI,{...option,category:'찬반토론'});

		const dbt_balance = yield call(getDebatePostsAPI,{...option,category:'밸런스토론'});

		console.log('GET HOT DEBATE TOPIC LIST api request success');

    yield put( getHotDebateTopicListSuccess({
			subject:dbt_subject.data,
			prosCons:dbt_prosCons.data,
			balance:dbt_balance.data
		}) );
		console.log('GET HOT DEBATE TOPIC LIST success');
		
  } catch (error) {
		console.error(error)
    yield put( getHotDebateTopicListFailure(error) );
		console.log('GET HOT DEBATE TOPIC LIST fail');
  }
}


function* watchGetHotDebateTopicList() {
	yield takeLatest(GET_HOT_DEBATE_TOPIC_LIST_REQUEST, getHotDebateTopicList)
}


export default function* hotDebateTopicListSaga() {
	yield all([fork(watchGetHotDebateTopicList) ])
}