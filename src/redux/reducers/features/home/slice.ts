import {
    createAction,
    createSlice,
    type PayloadAction,
  } from '@reduxjs/toolkit';
  
  import type { RootState } from '../../../index';
  
  const initialState = {
    productSearch: {},
    loading: false,
    error: '',
  };
  
  export const productSearchSlice = createSlice({
    name: 'products_search',
    initialState,
    reducers: {
        fetchAllisLoading(state) {
            state.loading = true;
        },
        fetchAllSucceeded(state, action: PayloadAction<any>) {
            state.productSearch = action.payload;
            state.loading = false;
        },
        fetchAllFailure(state, action: PayloadAction<any>) {
            state.error = action.payload;
            state.loading = false;
        },
    },
  });
  
  export const productSearchActions = {
    fetchAll: createAction(`${productSearchSlice.name}`),
    fetchAllisLoading: productSearchSlice.actions.fetchAllisLoading,
    fetchAllSucceeded: productSearchSlice.actions.fetchAllSucceeded,
    fetchAllFailure: productSearchSlice.actions.fetchAllFailure,
  };
  
  export const productSearchResult = (state: RootState): any => state?.productSearch;
  export default productSearchSlice.reducer;