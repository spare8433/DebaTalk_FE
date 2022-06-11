import {combineReducers} from 'redux';
import { communityPostReducer } from './communityPost/communityPost.reducer';
import { communityPostsReducer } from './communityPosts/communityPosts.reducer';
import { userReducer } from './user/user.reducer';

export default combineReducers({
  user:userReducer,
  communityPosts:communityPostsReducer,
  communityPost:communityPostReducer,
})