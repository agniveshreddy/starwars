import { combineReducers } from 'redux';
import user from './userReducer';
import planets from './planetsReducer';

const rootReducer = combineReducers({
    user,
    planets,
});

export default rootReducer;