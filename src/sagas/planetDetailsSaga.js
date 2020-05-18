import { put, call } from 'redux-saga/effects';
import {types} from '../actions';
import { planetDetailsService } from '../services/planetDetailsService';
import { api } from '../api';

export default function* planetDetailsSaga(payload) {
    const {planetName} = payload;
    const PLANET_DETAILS_API = api.SEARCH_PLANETS + planetName;
    try {
      const response = yield call(planetDetailsService, { api:PLANET_DETAILS_API });
      if(response.results){
        yield put({ type: types.PLANET_DETAILS_SUCCESS, planetDetails: response.results[0]});
      }
      else
        yield put({ type: types.PLANET_DETAILS_ERROR, error:'' });
    } 
    catch(error) {
      yield put({ type: types.PLANET_DETAILS_ERROR, error })
    }
}

