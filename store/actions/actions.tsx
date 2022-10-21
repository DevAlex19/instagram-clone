import { createAsyncThunk } from "@reduxjs/toolkit";

type getUserType = {
  email: string;
  username: string;
};

type getUserLoginType = {
  email: string;
  password: string;
};
type createUserType = {
  name?: string;
  email?: string;
  username?: string;
  password?: string;
  date?: string;
};
type changeAvatarType = {
  data: FormData
  email: string;
}


type resetPasswordType = {
  token: string;
  password: string;
};

export const getUser = createAsyncThunk(
  "app/getUser",
  async ({ email, username }: getUserType) => {
    try {
      const res = await fetch("http://localhost:3002/getUser", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          username,
        }),
      });
      const result = await res.json();
      return result;
    } catch (e) {
      return e;
    }
  }
);

export const checkEmail = createAsyncThunk(
  "app/checkEmail",
  async (email: string) => {
    try {
      const res = await fetch("http://localhost:3002/checkEmail", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });
      const result = await res.json();
      return result;
    } catch (e) {
      return e;
    }
  }
);

export const registerUser = createAsyncThunk(
  "app/createUser",
  async ({ date, email, name, username, password }: createUserType) => {
    try {
      const res = await fetch("http://localhost:3002/createUser", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          date,
          email,
          name,
          username,
          password,
        }),
      });
      const result = await res.json();
      return result;
    } catch (e) {
      return e;
    }
  }
);

export const sendRegisterEmail = createAsyncThunk(
  "app/registerEmail",
  async (to: string) => {
    try {
      const res = await fetch("http://localhost:3002/registerEmail", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to,
        }),
      });
      const result = await res.json();
      return result;
    } catch (e) {
      return e;
    }
  }
);

export const updateAccountStatus = createAsyncThunk(
  "app/updateStatus",
  async (email: string) => {
    try {
      const res = await fetch("http://localhost:3002/updateStatus", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });
      const result = await res.json();
      return true;
    } catch (e) {
      return e;
    }
  }
);

export const getUserLogin = createAsyncThunk(
  "app/getUserLogin",
  async ({ email, password }: getUserLoginType) => {
    try {
      const res = await fetch("http://localhost:3002/getUserLogin", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const result = await res.json();

      return result;
    } catch (e) {
      return e;
    }
  }
);

export const checkUser = createAsyncThunk(
  "app/checkUser",
  async (token: string) => {
    try {
      const res = await fetch("http://localhost:3002/checkUser", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token,
        }),
      });
      const result = await res.json();

      return result;
    } catch (e) {
      return e;
    }
  }
);

export const resetPassword = createAsyncThunk(
  "app/resetPassword",
  async ({ token, password }: resetPasswordType) => {
    try {
      const res = await fetch("http://localhost:3002/changePassword", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token,
          password,
        }),
      });

      const result = await res.json();
    } catch (e) {
      return e;
    }
  }
);

export const sendResetPasswordEmail = createAsyncThunk(
  "app/sendResetPasswordEmail",
  async (to: string) => {
    try {
      const res = await fetch("http://localhost:3002/resetPassword", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to,
        }),
      });
      const result = await res.json();
    } catch (e) {
      return e;
    }
  }
);


export const changeAvatar = createAsyncThunk('app/avatar', async ({ data, email }: changeAvatarType) => {
  let result = '';
  try {
    await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUD_NAME}/image/upload`, {
      method: 'post',
      body: data
    }).then(res => res.json()).then(async data => {
      if (data.url) {
        const avatar = await fetch("http://localhost:3002/changeAvatar", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            profile: data.url
          }),
        });
        result = data.url
      }

    })
  } catch (e) {
    console.log(e)
  }
  return result;
})



export const createPost = createAsyncThunk('app/createPost', async ({ email, data }: changeAvatarType) => {
  let result = {
    email: '', image: '', likes: '', date: '',
    comments: []
  };
  try {
    await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUD_NAME}/image/upload`, {
      method: 'post',
      body: data
    }).then(res => res.json()).then(async data => {
      if (data.url) {
        const post = await fetch("http://localhost:3002/createPost", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            image: data.url
          }),
        });
        const postResult = await post.json()
        result = postResult
      }

    })
  } catch (e) {
    console.log(e)
  }
  return result;
})


export const getProfile = createAsyncThunk('app/getProfile', async (username: string) => {
  try {
    const profile = await fetch("http://localhost:3002/getProfile", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username
      }),
    })
    const result = await profile.json()
    return result;
  } catch (e) {
    console.log(e)
  }
})