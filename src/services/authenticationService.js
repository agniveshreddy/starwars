import { api } from '../api';

export const authenticationService = ({username, password}) => {
    const GET_USER_API = api.SEARCH_PEOPLE+ username;
    console.log('autentication request: '+ JSON.stringify(username));
    return fetch(GET_USER_API)
        .then(response => {
          return response.json();
        })  
        .then(json => {
          console.log('json: '+ JSON.stringify(json));
          return json;
        })
  };