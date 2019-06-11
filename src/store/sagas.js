import {createRequestInstance, watchRequests} from 'redux-saga-requests';
import {createDriver} from 'redux-saga-requests-axios';

import {requestInstance} from '../utils/axiosConfig';

export default function* rootSaga() {
    yield createRequestInstance({driver: createDriver(requestInstance)});
    yield watchRequests();
}