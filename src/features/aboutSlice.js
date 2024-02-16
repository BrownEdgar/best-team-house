import { createSlice } from "@reduxjs/toolkit";
const initialStateValue = {
    name: "About Us",
    title: "We have many partnerships with various apartment managers",
    description: "We're dedicated to making your real estate dreams a reality. With a team of experienced professionals, we provide personalized service and expert guidance to help you buy, sell, or rent your perfect property."
}

const aboutSlice = createSlice({
    name: 'about',
    initialState: initialStateValue,
    reducers: {
        addUser(state, action) {
            state.users.push(action.payload);
        }
    }
})
export default aboutSlice.reducer;
export const { addUser } = aboutSlice.actions;
