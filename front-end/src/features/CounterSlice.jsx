import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 100,
  isShow: false,
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
    toggle: (state) => {
      state.isShow = !state.isShow;
    },
  },
});

export const { increment, decrement, toggle } = counterSlice.actions;

export default counterSlice.reducer;
