import {
  createSelector,
  createSlice,
} from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { HomeState } from '.';
import { RootState } from '../../store';
import { getPosts } from './services';

const initialState: HomeState = {
  products: [],
  loading: false,
  error: null,
};

export const selectProducts = createSelector(
  (state: RootState) => state.home.products,
  (products) => products,
);

const { actions, name, reducer } = createSlice({
  name: 'home',
  initialState,
  reducers: {
    // getPosts: (state: HomeState, action: PayloadAction<Product[]>) => {
    //   state.loading = true;
    //   state.products = action.payload;
    //   state.error = null;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getPosts.fulfilled,
      (state, { payload }) => {
        state.products = payload.data;
        state.loading = false;
      });
    builder.addCase(getPosts.rejected,
      (state, action) => {
        if (action.payload) { state.error = action.error as AxiosError; }
        state.loading = false;
      });
  },

});

export { reducer, actions, name };
