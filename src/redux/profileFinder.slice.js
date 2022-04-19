import { createSlice } from "@reduxjs/toolkit";

export const ProfileFinderSlice = createSlice({
  name: "profile",
  initialState: {
    profileData: null,
  },
  reducers: {
    fillProfileData: (state, action) => {
      state.profileData = action.payload.profileData;
    },
  },
});
export const { fillProfileData } = ProfileFinderSlice.actions;

export default ProfileFinderSlice.reducer;
