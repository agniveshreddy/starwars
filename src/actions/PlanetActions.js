import { types } from './index';

export const searchPlanets = (searchString) => {
    return {
        type: types.SEARCH_PLANETS,
        searchString
    }
};

export const getPlanetInfo = (planetName) => {
    return {
        type: types.GET_PLANET_INFO,
        planetName
    }
};