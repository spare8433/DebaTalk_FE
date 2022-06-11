import { all, fork } from 'redux-saga/effects'
import postSaga from './communityPost/communityPost.saga'
import postsSaga from './communityPosts/communityPosts.saga'
import userSaga from './user/user.sagas'

export default function* rootSaga() {
	yield all([fork(userSaga),fork(postsSaga),fork(postSaga)])
}