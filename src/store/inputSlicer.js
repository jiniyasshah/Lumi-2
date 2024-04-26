import { createSlice } from "@reduxjs/toolkit";

const inputSlice = createSlice({
  name: "input",
  initialState: [],
  reducers: {
    storeInput: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const inputActions = inputSlice.actions;

export default inputSlice;
