import React from "react";
import { useSelector } from "react-redux";
import Repositories from "../../components/repositories";

const StaredRepos = () => {
  /* Getting the data from the redux store. */
  const starredRepos = useSelector(
    (state) => state.profileFinderReducer.starredRepos
  );
  return (
    <div className="w-full flex justify-center py-8 sm:py-10 md:py-20 px-5 ">
      <div className="w-[80%] sm:w-[70%] md:w-[60%] tracking-widest ">
        <p className="text-3xl font-bold ">Starred Repos</p>
        <Repositories profileRepos={starredRepos} />
      </div>
    </div>
  );
};

export default StaredRepos;
