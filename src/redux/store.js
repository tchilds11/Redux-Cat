import { createStore } from 'redux';
import { CatReducer } from './Reducer';

const defaultState = {
    activity: 'napping'
}

export const store = createStore(CatReducer, defaultState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());