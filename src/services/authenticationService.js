import { api } from '../api';

export const authenticationService = ({username}) => {
    const GET_USER_API = api.SEARCH_PEOPLE+ username;
    return fetch(GET_USER_API)
        .then(response => {
          return response.json();
        })  
        .then(json => {
          return json;
        })
  };