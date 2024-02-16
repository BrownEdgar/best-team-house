import { configureStore } from '@reduxjs/toolkit';
import aboutSlice from '../features/aboutSlice';

const store = configureStore({
  reducer: {
   about:aboutSlice
  }
})

export default store