import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { employeesApiSlice } from "../employees-api/employeesApi";

export const store = configureStore({
  reducer: {
    [employeesApiSlice.reducerPath]: employeesApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(employeesApiSlice.middleware),
});

// setupListeners(store.dispatch)