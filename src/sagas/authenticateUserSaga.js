import { call, take, put } from 'redux-saga/effects';
import { types } from '../actions';
import { authenticationService }  from '../services/authenticationService';
import { CONSTANTS } from '../constants';

export default function* authenticateUserSaga(payload) {
    const {username, password} = payload;
    const response = yield call(authenticationService, { username, password })
    if(response){
      const user = response.results[0];
      if (user['name'] === username && user['birth_year'] === password) {
        yield put({ type: types.AUTHENTICATE_SUCCESS, user });
        yield take('LOGOUT')
        //yield call(Api.clearItem, 'token')
      }
      else
      {
        const error = CONSTANTS.LOGIN_ERROR;
        yield put({ type: types.AUTHENTICATE_ERROR, error });
      }
        
    }
    
}