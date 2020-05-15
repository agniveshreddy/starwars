import { takeEvery } from 'redux-saga/effects';

import { types } from '../actions';
import authenticateUserSaga from '../sagas/authenticateUserSaga';


export default function* watchers() {
  yield takeEvery(types.AUTHENTICATE_USER, authenticateUserSaga);
}