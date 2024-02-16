import { configureStore } from '@reduxjs/toolkit';
import sliderSlice from '../features/sliderSlice';

const store = configureStore({
  reducer: {
    slider: sliderSlice
  }
})

export default store