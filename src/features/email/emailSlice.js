import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  title: "Upgrade your home today?",
  description: " Ready to take your home to the next level? Whether you're looking to renovate, remodel, or add some finishing touches, we're here to help.",
  users: []
}

const emailSlice = createSlice({
  name: 'email',
  initialState: initialStateValue,
  reducers: {
    addUserEmail(state, action) {
      state.users.push(action.payload);
    }
  }
})
export default emailSlice.reducer;
export const { addUserEmail } = emailSlice.actions;
