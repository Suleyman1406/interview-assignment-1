import { configureStore } from "@reduxjs/toolkit";
import profileFinderReducer from "./profileFinder.slice";
export const store = configureStore({
  reducer: {
    profileFinderReducer,
  },
});
