import React from "react";
import { useSelector } from "react-redux";
import { BsChevronDoubleDown } from "react-icons/bs";
import axios from "axios";
const Profile = () => {
  const profileData = useSelector(
    (state) => state.profileFinderReducer.profileData
  );

  const getRepos = (githubUserName) => {
    axios
      .get(`https://api.github.com/users/${githubUserName}/repos`)
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <>
      {!profileData && (
        <img
          src="./images/search-bg.jpg"
          alt="search background"
          className="w-[60%] mt-10 mx-auto"
        />
      )}
      {profileData && (
        <div className=" mx-auto mt-10 py-5 px-5 shadow-secondary shadow  rounded-xl bg-gray-100">
          <div className="w-32 h-32  rounded-full float-left  shadow-lg shadow-primary">
            <img
              src={profileData.avatar_url}
              alt=""
              className="w-full h-full rounded-full "
            />
          </div>
          <div className="w-[calc(100%-128px)] inline-block  py-2 px-4">
            <a
              className="my-1 "
              href={profileData.html_url}
              target={"_blank"}
              rel="noreferrer"
            >
              {profileData.name}
              <span className="text-black/70">
                {profileData.location && ", " + profileData.location}
              </span>
            </a>
            <p className="m-1 ">
              {profileData.company}{" "}
              <span className="text-black/50">(company)</span>
            </p>
            <a
              className="m-1 "
              href={`https://api.github.com/users/${profileData.login}/following`}
              target={"_blank"}
              rel="noreferrer"
            >
              Following:{" "}
              <span className="text-primary">{profileData.following}</span>
            </a>
            <div />
            <a
              className="m-1 "
              href={profileData.followers_url}
              target={"_blank"}
              rel="noreferrer"
            >
              Followers:{" "}
              <span className="text-primary">{profileData.followers}</span>
            </a>
          </div>
          <div
            onClick={getRepos.bind(null, profileData.login)}
            className="flex flex-col items-center text-primary cursor-pointer duration-200 active:translate-y-1 hover:-translate-y-1  w-full mt-4"
          >
            <p>Click For Repos</p>
            <BsChevronDoubleDown />
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
