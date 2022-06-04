import {applyMiddleware, createStore} from 'redux';
import rootSaga from './rootSaga'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from './rootReducer';


const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)