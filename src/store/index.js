import {applyMiddleware, createStore, combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';

import dogReducer from './dog/reducer';

import {composeWithDevTools} from 'redux-devtools-extension';


import saga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    dogState: dogReducer,
});

export function initializeStore(initialState = undefined) {
    const middlewares = [
        sagaMiddleware,
    ];

    const store = createStore(rootReducer, initialState,
        composeWithDevTools(applyMiddleware(...middlewares)));
    sagaMiddleware.run(saga);

    return store;
}