import { type Action, combineReducers } from '@reduxjs/toolkit';
import productsReducer from '../reducers/features/prodcuts/slice';
import productsSearchReducer from '../reducers/features/home/slice';

const appReducer = combineReducers({
    products: productsReducer,
    productSearch: productsSearchReducer,
});

const rootReducer = (
    state: any,
    action: Action,
): ReturnType<typeof appReducer> => {
    return appReducer(state, action);
};

export default rootReducer;