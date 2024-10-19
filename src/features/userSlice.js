import { createSlice } from "@reduxjs/toolkit";

// Define the initial state for the user slice
const initialState = {
  user: null,
};

// Create the user slice with actions and reducers
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Action to log in a user
    login: (state, action) => {
      state.user = action.payload;
    },
    // Action to log out a user
    logout: (state) => {
      state.user = null;
    },
  },
});

// Export actions for use in components
export const { login, logout } = userSlice.actions;

// Selector to access the user state
export const selectUser = (state) => state.user.user;

// Export the reducer to be included in the store
export default userSlice.reducer;
