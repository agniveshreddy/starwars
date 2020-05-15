import { types } from './index';

export const authenticateUser = (username, password) => {
    return {
        type: types.AUTHENTICATE_USER,
        username: username,
        password: password,
    }
};