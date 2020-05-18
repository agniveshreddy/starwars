import { types } from './index';

export const searchPlanets = (searchString) => {
    return {
        type: types.SEARCH_PLANETS,
        searchString
    }
};