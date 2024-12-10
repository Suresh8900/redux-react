// src/app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import listReducer from "../features/list/listSlice";
import apiReducer from "../features/api/apiSlice";

export const store = configureStore({
  reducer: {
    list: listReducer,
    api: apiReducer,
  },
});

// Type definitions for RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
