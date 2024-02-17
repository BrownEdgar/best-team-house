import { configureStore } from '@reduxjs/toolkit';
import footerSlice from '../features/footer/footerSlice';
import housesSlice from '../features/houses/housesSlice';
import navigationSlice from '../features/navigationSlice';
import headerSlice from '../features/headerSlice';

const store = configureStore({
  reducer: {
    navigation: navigationSlice,
    header: headerSlice,
    houses: housesSlice,
    footer: footerSlice
  }
})

export default store