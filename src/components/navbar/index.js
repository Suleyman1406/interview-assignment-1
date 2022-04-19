import React from "react";
import { Link } from "react-router-dom";
import {
  HOME_SCREEN,
  STARRED_REPOS_SCREEN,
  WELCOME_SCREEN,
} from "../../contants/navigations";

const Navbar = () => {
  return (
    <div className="h-36 md:h-20 py-5 shadow-2xl duration-300 flex flex-col justify-center items-center md:items-stretch md:flex-row md:justify-between px-5">
      <Link to={WELCOME_SCREEN}>
        <div className="h-[80%] mb-3 md:mb-0 justify-center flex flex-row items-center">
          <img
            className="h-full"
            src="https://www.doggoapp.com/images/svg/doggo-logo.svg"
            alt="Doggo Logo"
          />
          <span className="font-semibold ml-1">Assesment</span>
        </div>
      </Link>
      <div className="flex duration-300 font-semibold text-white flex-col md:flex-row text-xl">
        <Link to={HOME_SCREEN}>
          <p className="mx-4 h-[88%] shadow-sm shadow-gray-400   mb-2 md:mb-0 flex items-center justify-center px-6  rounded-2xl bg-primary cursor-pointer hover:shadow-lg duration-200 hover:shadow-primary">
            Home
          </p>
        </Link>
        <Link to={STARRED_REPOS_SCREEN}>
          <p className="mx-4 h-[88%]  mb-2 md:mb-0 shadow-sm shadow-gray-400 flex items-center justify-center  px-6 rounded-2xl bg-secondary cursor-pointer hover:shadow-lg duration-200 hover:shadow-secondary">
            Starred Repos
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
