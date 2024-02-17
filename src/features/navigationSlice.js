import { createSlice } from "@reduxjs/toolkit";
const initialStateValue = {
  image:'../../../public/logo.png',
  menu:["home","service","about","blog","contact"]  
}
const navigationSlice = createSlice({
    name:'navigation',
    initialState: initialStateValue,
    reducers:{},
    selectors:{
        getLogo: (state) => state.image,
        getMenu:(state) => state.menu
    }

})
export default navigationSlice.reducer;
export const {getLogo,getMenu} = navigationSlice.selectors;