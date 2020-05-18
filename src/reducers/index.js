import { combineReducers } from 'redux';
import user from './userReducer';
import planets from './planetsReducer';
import planetDetails from './planetDetailsReducer';

const rootReducer = combineReducers({
    user,
    planets,
    planetDetails,
});

export default rootReducer;