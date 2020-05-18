import { types } from '../actions';

export default function(state = {}, action) {
  const { planets, error } = action;
  switch(action.type) {
    case types.SEARCH_PLANETS_SUCCESS:
      return [ ...planets ];
    case types.SEARCH_PLANETS_ERROR:
      return { ...error };
    default:
      return state;
  }
};