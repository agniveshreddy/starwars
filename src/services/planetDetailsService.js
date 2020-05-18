export const planetDetailsService = ({api}) => {
    return fetch(api)
        .then(response => {
          return response.json();
        })  
        .then(json => {
          return json;
        })
};