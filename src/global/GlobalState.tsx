import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: false,
};

const GlobalState = createSlice({
  name: "second",
  initialState,
  reducers: {
    ontoggleState: (state, {payload}) => {
      state.toggle = payload;
    },
  },
});

export const { ontoggleState } = GlobalState.actions;

export default GlobalState.reducer;
