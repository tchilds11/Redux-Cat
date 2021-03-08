import { ACTION_EAT, ACTION_NAP, ACTION_PLAY } from './actionTypes';

export const CatReducer = (state, action) => {
    switch(action.type) {
        case ACTION_EAT:
            return {
                activity: 'eating'
            }

        case ACTION_NAP:
            return {
                activity: 'napping'
            }
        case ACTION_PLAY:
            return {
                activity: 'playing'
            }
            default:
                return state
    }
};