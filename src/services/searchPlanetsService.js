export const searchPlanetsService = ({api}) => {
    return fetch(api)
        .then(response => {
          return response.json();
        })  
        .then(json => {
          return json;
        })
  };