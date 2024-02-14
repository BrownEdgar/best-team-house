import { configureStore } from '@reduxjs/toolkit';
import navigationSlice from '../features/navigationSlice';
import headerSlice from '../features/headerSlice';

const store = configureStore({
  reducer: {
    navigation:navigationSlice,
    header:headerSlice
  }
})

export default store