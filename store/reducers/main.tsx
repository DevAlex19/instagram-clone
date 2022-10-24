import { createSlice } from "@reduxjs/toolkit";
import {
  changeAvatar,
  checkUser,
  createPost,
  getProfile,
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
      profile: "",
      description: "",
    },
    loading: "idle",
  },
  posts: [
    {
      email: "",
      image: "",
      likes: "",
      date: "",
      comments: [],
    },
  ],
  profile: {
    name: "",
    username: "",
    email: "",
    password: "",
    code: "",
    token: "",
    date: "",
    status: "",
    profile: "",
  },
  notification: [""],
};

export const mainSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    addNotification: (state, action) => {
      state.notification = [action.payload];
    },
    removeNotification: (state) => {
      state.notification = [""];
    },
  },
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
    builder.addCase(changeAvatar.fulfilled, (state, action) => {
      if (action.payload) {
        state.user.data.profile = action.payload;
      }
    });
    builder.addCase(createPost.fulfilled, (state, action) => {
      if (action.payload) {
        state.posts = [...state.posts, action.payload];
      }
    });
    builder.addCase(getProfile.fulfilled, (state, action) => {
      const { user, posts } = action.payload;
      state.profile = { ...state.profile, ...user };
      state.posts = [...posts];
    });
  },
});

export const { addNotification, removeNotification } = mainSlice.actions;

export default mainSlice.reducer;
