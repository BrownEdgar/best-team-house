import { configureStore } from '@reduxjs/toolkit';

import housesSlice from '../features/houses/housesSlice';
import navigationSlice from '../features/navigationSlice';
import headerSlice from '../features/headerSlice';
import footerSlice from '../features/footer/footerSlice';
import aboutSlice from '../features/about/aboutSlice';
import emailSlice from '../features/email/emailSlice';

const store = configureStore({
  reducer: {
    navigation: navigationSlice,
    header: headerSlice,
    houses: housesSlice,
    footer: footerSlice,
    about: aboutSlice,
    email: emailSlice
  }
})

export default store