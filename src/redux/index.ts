import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './root-saga/rootReducer';
import  rootSaga  from './root-saga/rootSaga';

const createStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware({
                thunk: false,
                serializableCheck: false,
            }).concat(sagaMiddleware),
        devTools: __DEV__,
    });
    sagaMiddleware.run(rootSaga);
    return store;
};

export const store = createStore();
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;