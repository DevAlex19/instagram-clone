import { AnyAction, configureStore, ThunkDispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import mainSlice from "../reducers/main";

export const store = configureStore({
  reducer: mainSlice,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;
export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
