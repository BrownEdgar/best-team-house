import { createSlice } from "@reduxjs/toolkit";
const initialStateValue = {
    slogan:'easy way to find your property',
    title:'find the perfect place to stay with your family',
    description:'Enjoy a stress-free and enjoyable vacation with your loved ones. Start your search today and find your dream property!'
}
const headerSlice = createSlice({
    name:'header',
    initialState: initialStateValue,
    reducers:{}
})
export default headerSlice.reducer;
