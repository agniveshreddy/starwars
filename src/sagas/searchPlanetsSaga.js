import { call, take, put } from 'redux-saga/effects';
import { types } from '../actions';
import { NO_PLANETS_FOUND } from '../constants';
import { searchPlanetsService }  from '../services/searchPlanetsService';
import { api } from '../api';


export default function* searchPlanetsSaga(payload) {
    let {searchString} = payload;
    let planets =[];
    
    let response;
    do{
        const SEARCH_PLANETS_API = (response && response.next)?response.next:(api.SEARCH_PLANETS+ searchString);
        response = yield call(searchPlanetsService, { api:SEARCH_PLANETS_API });
        if(response) {
            planets = [...planets,...response.results];
        }
    }
    while(response.next)

    if(planets.length>0) {
        yield put({ type: types.SEARCH_PLANETS_SUCCESS, planets });
    }
    else {
        yield put({ type: types.SEARCH_PLANETS_ERROR, NO_PLANETS_FOUND});
    }
}