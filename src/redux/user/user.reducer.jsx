// could be .js file

import { UserActionTypes } from './user.types';

const INTIAL_STATE = {
    currentUser: null
};

const UserReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            };

        default:
            return state;
    }
};

export default UserReducer;