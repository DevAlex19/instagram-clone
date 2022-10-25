import { createSlice } from "@reduxjs/toolkit";
import {
  changeAvatar,
  checkUser,
  createPost,
  editPassword,
  editProfile,
  getPosts,
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
      _id: "",
      email: "",
      image: "",
      likes: [],
      date: "",
      username: "",
      profile: "",
      comments: [{ user: "", comment: "", img: "", subcomments: [] }],
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
  postModal: "",
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
    setModalId: (state, action) => {
      state.postModal = action.payload;
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
    builder.addCase(editPassword.fulfilled, (state, action) => {
      state.user.data.password = action.payload;
    });
    builder.addCase(editProfile.fulfilled, (state, action) => {
      if (action.payload.username) {
        state.user.data.username = action.payload.username;
      }
      if (action.payload.name) {
        state.user.data.name = action.payload.name;
      }
    });
    builder.addCase(getPosts.fulfilled, (state, action) => {
      if (action.payload) {
        state.posts = [...action.payload];
      }
    });
  },
});

export const { addNotification, removeNotification, setModalId } =
  mainSlice.actions;

export default mainSlice.reducer;
