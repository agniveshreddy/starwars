import { types } from '../actions';

export default function(state = {}, action) {
  const { user, error } = action;
  switch(action.type) {
    case types.AUTHENTICATE_SUCCESS:
      return { ...user };
    case types.AUTHENTICATE_ERROR:
      return { ...error };
    default:
      return state;
  }
};