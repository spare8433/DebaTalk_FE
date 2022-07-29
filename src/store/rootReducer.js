import {combineReducers} from 'redux';
import { communityPostReducer } from './communityPost/communityPost.reducer';
import { communityPostsReducer } from './communityPosts/communityPosts.reducer';
import { debatePostReducer } from './debatePost/debatePost.reducer';
import { debatePostListReducer } from './debatePostList/debatePostList.reducer';
import { hotDebateTopicListReducer } from './hotDebateTopicList/hotDebateTopicList.reducer';
import { userReducer } from './user/user.reducer';
import { userListReducer } from './userList/userList.reducer';

export default combineReducers({
  user:userReducer,
  userList:userListReducer,
  debatePost:debatePostReducer,
  debatePostList:debatePostListReducer,
  hotDebateTopicList:hotDebateTopicListReducer,
  communityPosts:communityPostsReducer,
  communityPost:communityPostReducer,
})