import {combineReducers} from 'redux';

import { testReducer } from './testReducer';
import { userReducer } from './userReducer';
export default combineReducers({
  //testReducer
  test:testReducer,
  user:userReducer

})
