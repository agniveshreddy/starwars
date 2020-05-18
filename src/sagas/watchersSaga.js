import { takeEvery } from 'redux-saga/effects';

import { types } from '../actions';
import authenticateUserSaga from '../sagas/authenticateUserSaga';
import searchPlanetsSaga from '../sagas/searchPlanetsSaga';


export default function* watchers() {
  yield takeEvery(types.AUTHENTICATE_USER, authenticateUserSaga);
  yield takeEvery(types.SEARCH_PLANETS, searchPlanetsSaga);
}