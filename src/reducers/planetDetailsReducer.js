import { types } from '../actions';

export default function(state = {}, action) {
  const { planetDetails, error } = action;
  switch(action.type) {
    case types.PLANET_DETAILS_SUCCESS:
      return { ...planetDetails };
    case types.PLANET_DETAILS_ERROR:
      return { error };
    default:
      return state;
  }
};