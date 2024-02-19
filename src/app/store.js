import { configureStore } from '@reduxjs/toolkit';
import infoSlice from '../features/info/infoSlice';
import logoSlice from '../features/info/logoSlice';



const store = configureStore({
  reducer: {
    logos: logoSlice,
    infos: infoSlice
  }
})

export default store