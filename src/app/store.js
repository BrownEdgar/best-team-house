import { configureStore } from '@reduxjs/toolkit';
import footerSlice from '../features/footer/footerSlice';

const store = configureStore({
  reducer: {
    footer: footerSlice
  }
})

export default store