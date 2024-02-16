import { configureStore } from '@reduxjs/toolkit';
import housesSlice from '../features/houses/housesSlice';

const store = configureStore({
  reducer: {
    houses: housesSlice
  }
})

export default store