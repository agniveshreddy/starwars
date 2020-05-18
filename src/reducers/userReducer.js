import { types } from '../actions';

export default function(state = {}, action) {
  const { user, error } = action;
  switch(action.type) {
    case types.LOGIN_SUCCESS:
      return { ...user };
    case types.LOGIN_ERROR:
      return { error };
    default:
      return state;
  }
};