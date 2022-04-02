import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 100,
  bool: false,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      console.log(action);
      state.value += action.payload;
    },
    callLog: (state) => {
      console.log(state);
    },
    toggle: (state) => {
      state.bool = !state.bool;
    },
  },
});

export const { increment, decrement, incrementByAmount, callLog, toggle } =
  counterSlice.actions;

export default counterSlice.reducer;
