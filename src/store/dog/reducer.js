import {success, error} from 'redux-saga-requests';

import {API_CALL_REQUEST} from './actions';
import {STATE_STATUSES} from '../../utils/stateStatuses';

const initialState = {
    dog: {},
    status: STATE_STATUSES.INIT,
    error: null
};

const processReducer = (state = initialState) => ({
    ...state,
    status: STATE_STATUSES.PENDING,
    error: null
});

const errorReducer = (action, state = initialState) => ({
    ...state,
    status: STATE_STATUSES.ERROR,
    error: {...action.error},
});

export default (state = initialState, action) => {
    switch (action.type) {
        case API_CALL_REQUEST:
            return processReducer(state);
        case success(API_CALL_REQUEST):
            return {
                ...state,
                status: STATE_STATUSES.READY,
                dog: action.data
            };
        case error(API_CALL_REQUEST):
            return errorReducer(action);
        default:
            return state;
    }
}

