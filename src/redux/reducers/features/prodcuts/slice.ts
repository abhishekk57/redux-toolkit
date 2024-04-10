import {
  createAction,
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit';

import type { RootState } from '../../../index';

const initialState = {
  products: {},
  loading: false,
  error: '',
};

export const apiSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
      fetchAllisLoading(state) {
          state.loading = true;
      },
      fetchAllSucceeded(state, action: PayloadAction<any>) {
          state.products = action.payload;
          state.loading = false;
      },
      fetchAllFailure(state, action: PayloadAction<any>) {
          state.error = action.payload;
          state.loading = false;
      },
  },
});

export const productApiActions = {
  fetchAll: createAction(`${apiSlice.name}`),
  fetchAllisLoading: apiSlice.actions.fetchAllisLoading,
  fetchAllSucceeded: apiSlice.actions.fetchAllSucceeded,
  fetchAllFailure: apiSlice.actions.fetchAllFailure,
};

export const productResult = (state: RootState): any => state?.products;
export default apiSlice.reducer;