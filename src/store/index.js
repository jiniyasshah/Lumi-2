import { configureStore } from "@reduxjs/toolkit";
import inputSlice from "./inputSlicer";

const Store = configureStore({
  reducer: {
    input: inputSlice.reducer,
  },
});

export default Store;
