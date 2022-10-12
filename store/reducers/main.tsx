import { createSlice } from "@reduxjs/toolkit";
import {
  checkUser,
  registerUser,
  updateAccountStatus,
} from "../actions/actions";

const initialState = {
  user: {
    data: {
      name: "",
      username: "",
      email: "",
      password: "",
      code: "",
      token: "",
      date: "",
      status: "",
    },
    loading: "idle",
  },
};

export const mainSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.user.data = { ...state.user.data, ...action.payload };
    });
    builder.addCase(updateAccountStatus.fulfilled, (state, action) => {
      if (action.payload) {
        state.user.data.status = "active";
      }
    });
    builder.addCase(checkUser.pending, (state, action) => {
      state.user.loading = "loading";
    });
    builder.addCase(checkUser.fulfilled, (state, action) => {
      if (action.payload) {
        state.user.data = { ...state.user.data, ...action.payload.user };
        state.user.loading = "succeeded";
      }
    });
  },
});

export default mainSlice.reducer;
