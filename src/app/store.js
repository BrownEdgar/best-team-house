import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../features/counterSlice';
import housesSlice from '../features/houses/housesSlice';

const store = configureStore({
  reducer: {
    counter: counterSlice,
    houses: housesSlice
  }
})

export default store