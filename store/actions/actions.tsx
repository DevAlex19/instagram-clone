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
  "/resetPassword",
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
  "/sendResetPasswordEmail",
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
