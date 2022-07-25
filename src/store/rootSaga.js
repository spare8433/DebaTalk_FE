import { all, fork } from 'redux-saga/effects'
import postSaga from './communityPost/communityPost.saga'
import postsSaga from './communityPosts/communityPosts.saga'
import userSaga from './user/user.sagas'
import userListSaga from './userList/userList.sagas'

export default function* rootSaga() {
	yield all([fork(userSaga),fork(userListSaga),fork(postsSaga),fork(postSaga)])
}