import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './components/Contents/Dashboard/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})