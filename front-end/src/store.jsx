import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./components/partsComponents/Counter/CounterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
