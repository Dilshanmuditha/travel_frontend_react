import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserState } from "../model/types";

const initialState: UserState = {
  isAuthorized: false,
  role: null,
  name: null,
  email: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUserDetails: (state, action: PayloadAction<UserState>) => {
      state.isAuthorized = true;
      state.role = action.payload.role;
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    resetUserDetails: () => initialState,
  },
});

export const { addUserDetails, resetUserDetails } = userSlice.actions;
export default userSlice.reducer;
