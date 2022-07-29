import { all, fork } from 'redux-saga/effects'
import postSaga from './communityPost/communityPost.saga'
import postsSaga from './communityPosts/communityPosts.saga'
import debatePostSaga from './debatePost/debatePost.saga'
import debatePostListSaga from './debatePostList/debatePostList.saga'
import hotDebateTopicListSaga from './hotDebateTopicList/hotDebateTopicList.saga'
import userSaga from './user/user.sagas'
import userListSaga from './userList/userList.sagas'

export default function* rootSaga() {
	yield all([
		fork(userSaga),
		fork(userListSaga),
		fork(postsSaga),
		fork(postSaga),
		fork(debatePostSaga),
		fork(debatePostListSaga),
		fork(hotDebateTopicListSaga)
	])
}