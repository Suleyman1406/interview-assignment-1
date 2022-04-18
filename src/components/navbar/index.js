import React from "react";
import { Link } from "react-router-dom";
import {
  HOME_SCREEN,
  STARED_REPOS_SCREEN,
  WELCOME_SCREEN,
} from "../../contants/navigations";

const Navbar = () => {
  return (
    <div className="h-20 py-5 shadow-2xl flex flex-row justify-between px-5">
      <Link to={WELCOME_SCREEN}>
        <div className="h-[80%] flex flex-row items-center">
          <img
            className="h-full"
            src="https://www.doggoapp.com/images/svg/doggo-logo.svg"
            alt="Doggo Logo"
          />
          <span className="font-semibold ml-1">Assesment</span>
        </div>
      </Link>
      <div className="flex font-semibold text-white flex-row text-xl">
        <Link to={HOME_SCREEN}>
          <p className="mx-4 h-[100%] flex items-center px-6 rounded-2xl bg-primary cursor-pointer hover:shadow-lg duration-200 hover:shadow-primary">
            Home
          </p>
        </Link>
        <Link to={STARED_REPOS_SCREEN}>
          <p className="mx-4 h-[100%] flex items-center  px-6 rounded-2xl bg-secondary cursor-pointer hover:shadow-lg duration-200 hover:shadow-secondary">
            Stare Repos
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
