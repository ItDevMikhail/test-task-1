import { all, takeEvery, put, fork, call } from 'redux-saga/effects';

import { FETCH_CLIENTS } from '../constants/Clients';
import { fetchClientsFailure, fetchClientsSuccess } from '../actions/Clients';
import FetchService from 'services/FetchService'



export function* getClientList() {
  yield takeEvery(FETCH_CLIENTS, function* () {
    try {
      const response = yield call(FetchService.getClients)
      yield put(fetchClientsSuccess(response))
    } catch (error) {
      yield put(fetchClientsFailure(error))
    }
  })
}

export default function* rootSaga() {
  yield all([
    fork(getClientList)])
};