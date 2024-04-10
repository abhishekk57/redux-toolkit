import { type SagaIterator } from '@redux-saga/core';
import { call, put, takeEvery } from 'redux-saga/effects';

import getProducts from '../../../../services/product-service/product.api';
import { productApiActions } from './slice';


export function* onGetApi(): SagaIterator {
    try {
        const response: any = yield call(getProducts);
        yield put(productApiActions.fetchAllSucceeded(response));
    } catch (e: unknown) {
        if (e instanceof Error) {
            yield put(productApiActions.fetchAllFailure(e.message.toString()));
        }
    }
}


function* apiWatcherSaga(): SagaIterator {
    yield takeEvery(productApiActions.fetchAll.type, onGetApi);
}

export default apiWatcherSaga;