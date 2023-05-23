import { configureStore } from "@reduxjs/toolkit";
import CardSlice from "./CardSlice";

export const store = configureStore({
  reducer: {
    Card: CardSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
