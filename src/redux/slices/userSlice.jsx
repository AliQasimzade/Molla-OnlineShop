import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loggedUser: (state, action) => {
      state.user = action.payload
    },
   logoutedUser: (state) => {
    state.user = {}
   },
   updateUser:(state, action) => {
    const update = action.payload
    state.user = {...state.user, ...update}
   }
  },
});

export const { loggedUser,logoutedUser,updateUser } =
  userSlice.actions;

export default userSlice.reducer;
