"use  client";

import { configureStore } from "@reduxjs/toolkit";
import category from "./slices/category";
import basket from "./slices/basket";

export const store = configureStore({
  reducer: {
    category,
    basket
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
