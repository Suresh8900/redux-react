
import { createSlice } from '@reduxjs/toolkit';
import {addToCart, createUser, dashboard, removeFromCart, } from './apiActions';

interface ApiState {
  data: any;
  loading: boolean;
  error: string | null;
  successMessage: string | null;
}

const initialState: ApiState = {
  data: null,
  loading: false,
  error: null,
  successMessage: null,
};

const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    [createUser,addToCart,dashboard,removeFromCart].forEach((action) => {
      builder
        .addCase(action.pending, (state) => {
          state.loading = true;
          state.error = null;
          state.successMessage = null;
        })
        .addCase(action.fulfilled, (state, { payload }) => {
          state.loading = false;
          state.data = payload.data;
          state.successMessage = payload.message;
        })
        .addCase(action.rejected, (state, { payload }) => {
          state.loading = false;
          state.error = payload as string;
        });
    });
  },
});

export default apiSlice.reducer;
