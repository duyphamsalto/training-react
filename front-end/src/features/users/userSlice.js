import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  info: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
  error: {},
  isProcessing: false,
  isLogged: false,
  isShowIcon: false,
};

export const userSlice = createSlice({
  name: 'userTest',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isProcessing = true;
      state.error = {};
    },
    loginSuccess: (state, action) => {
      state.info = action.payload;
      state.isProcessing = false;
      state.isLogged = true;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    loginFail: (state, action) => {
      state.error = action.payload;
      state.isProcessing = false;
    },
    logout: (state) => {
      state.info = null;
      state.isLogged = false;
      localStorage.removeItem('user');
      window.location = '/login';
    },
    setToken: (state, action) => { state.token = action.payload; },
    toggleIcon: (state) => { state.isShowIcon = !state.isShowIcon}
  }
});

export const { loginStart, loginSuccess, loginFail, logout, setToken, toggleIcon } = userSlice.actions;

export default userSlice.reducer;
