import { configureStore } from "@reduxjs/toolkit";
import auth from "./slices/auth";

const reducer = {
  auth_state: auth,
};

const store = configureStore({
  reducer: reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
