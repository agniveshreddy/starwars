import { takeEvery, takeLatest } from 'redux-saga/effects';

import { types } from '../actions';
import authenticateUserSaga from '../sagas/authenticateUserSaga';
import planetDetailsSaga from '../sagas/planetDetailsSaga';
import searchPlanetsSaga from '../sagas/searchPlanetsSaga';


export default function* watchers() {
  yield takeEvery(types.AUTHENTICATE_USER, authenticateUserSaga);
  yield takeEvery(types.GET_PLANET_INFO, planetDetailsSaga);
  yield takeLatest(types.SEARCH_PLANETS, searchPlanetsSaga);
}