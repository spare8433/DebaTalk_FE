// import { getUserAPI, loginAPI, sginUpAPI } from '@api/user';

import {
	all,
	call,
	fork,
	put,
	takeLatest
} from 'redux-saga/effects'

import { reportFailure, reportSuccess } from './reportCotent.actions';
import { REPORT_REQUEST } from './reportCotent.types';
import { createReportAPI } from '@api/reportContent';

function* report(action) {
	try {
		yield call(createReportAPI)

    yield put( reportSuccess() );
		console.log('report success');
		
  } catch (error) {
		console.error(error)
    yield put( reportFailure(error) );
		console.log('report fail');
  }
}


function* watchReport() {
	yield takeLatest(REPORT_REQUEST, report)
}

export default function* reportSaga() {
	yield all([fork(watchReport)])
}