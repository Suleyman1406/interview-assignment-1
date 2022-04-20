import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  emptyProfileData,
  fillProfileData,
} from "../../../redux/profileFinder.slice";
const Form = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [isloading, setLoading] = useState(false);

  /**
   * It takes the user input, makes an API call to the GitHub API, and then dispatches the response to
   * the Redux store.
   * @param e - the event object
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(emptyProfileData());
    axios
      .get(`https://api.github.com/users/${userName}`)
      .then((response) => {
        dispatch(fillProfileData({ profileData: response.data }));
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => setLoading(false));
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-between">
      <input
        type="text"
        value={userName}
        disabled={isloading}
        onChange={(e) => setUserName(e.target.value)}
        className="border disabled:cursor-wait shadow-md focus:shadow-primary w-[calc(100%-70px)] sm:w-[calc(100%-125px)]  border-gray-400 py-2 tracking-wide  px-2 rounded-xl outline-none duration-200 hover:border-gray-500  focus:border-primary animate-comeFromLeft"
        placeholder="Please enter user name..."
      />
      <button
        onClick={handleSubmit}
        disabled={isloading}
        className="w-16 sm:w-28 bg-secondary disabled:cursor-wait disabled:opacity-50 text-white font-extrabold rounded-xl animate-comeFromRight text-lg shadow-md hover:bg-opacity-80 duration-200 active:translate-y-1"
      >
        Search
      </button>
    </form>
  );
};

export default Form;
