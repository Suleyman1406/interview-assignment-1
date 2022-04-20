import { createSlice } from "@reduxjs/toolkit";

/* Creating a slice of the Redux store. */
export const ProfileFinderSlice = createSlice({
  name: "profile",
  initialState: {
    profileData: undefined,
    /* Getting the data from localStorage and parsing it into an array. If there is no data in
    localStorage, it will return an empty array. */
    starredRepos: JSON.parse(localStorage.getItem("starred-repos")) || [],
  },
  reducers: {
    /* Filling the profileData state with the data from the action. */
    fillProfileData: (state, action) => {
      state.profileData = action.payload.profileData;
    },
    /* Emptying the profileData state. */
    emptyProfileData: (state, action) => {
      state.profileData = null;
    },
    /* Adding the repo to the starredRepos array. */
    addToStarredRepos: (state, action) => {
      state.starredRepos.push(action.payload.repo);
      /* Saving the data in the localStorage. */
      localStorage.setItem("starred-repos", JSON.stringify(state.starredRepos));
    },
    /* Removing the item from the starredRepos array. */
    removeFromStarredRepos: (state, action) => {
      state.starredRepos = state.starredRepos.filter(
        (item) => item.id !== action.payload.repo.id
      );
      /* Saving the data in the localStorage. */
      localStorage.setItem("starred-repos", JSON.stringify(state.starredRepos));
    },
  },
});
export const {
  fillProfileData,
  addToStarredRepos,
  removeFromStarredRepos,
  emptyProfileData,
} = ProfileFinderSlice.actions;

export default ProfileFinderSlice.reducer;
