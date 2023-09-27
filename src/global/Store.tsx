import { configureStore } from "@reduxjs/toolkit";
import reducer from "./GlobalState";

export const Store = configureStore({
  reducer,
});
