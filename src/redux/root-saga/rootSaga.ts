import { all, fork } from 'redux-saga/effects';

import { apiWatcherSaga, productSearchSaga } from '../reducers';

function* rootSaga(): any {
    yield all([fork(apiWatcherSaga)]);
    yield all([fork(productSearchSaga)]);
}

export default rootSaga;