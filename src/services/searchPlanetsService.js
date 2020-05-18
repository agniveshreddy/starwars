export const searchPlanetsService = ({api}) => {
    return fetch(api)
        .then(response => {
          return response.json();
        })  
        .then(json => {
          console.log('json: '+ JSON.stringify(json));
          return json;
        })
  };