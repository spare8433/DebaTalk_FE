import {combineReducers} from 'redux';
import { communityPostReducer } from './communityPost/communityPost.reducer';
import { communityPostsReducer } from './communityPosts/communityPosts.reducer';
import { userReducer } from './user/user.reducer';
import { userListReducer } from './userList/userList.reducer';

export default combineReducers({
  user:userReducer,
  userList:userListReducer,
  communityPosts:communityPostsReducer,
  communityPost:communityPostReducer,
})