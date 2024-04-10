import { type SagaIterator } from '@redux-saga/core';
import { call, put, takeEvery } from 'redux-saga/effects';

import getFilterProducts from '../../../../services/product-search-service/product-search.api';
import { productSearchActions } from './slice';


export function* onGetApi(): SagaIterator {
    try {
        const response: any = yield call(getFilterProducts);
        yield put(productSearchActions.fetchAllSucceeded(response));
    } catch (e: unknown) {
        if (e instanceof Error) {
            yield put(productSearchActions.fetchAllFailure(e.message.toString()));
        }
    }
}


function* productSearchWatcherSaga(): SagaIterator {
    yield takeEvery(productSearchActions.fetchAll.type, onGetApi);
}

export default productSearchWatcherSaga;