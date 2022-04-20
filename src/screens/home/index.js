import React from "react";
import Form from "../../components/home/form";
import Profile from "../../components/home/profile";

const Home = () => {
  return (
    <div className="w-full flex justify-center sm:py-10 py-6 md:py-20 px-3 sm:px-5">
      <div className="w-[90%] sm:w-[80%] md:w-[70%] duration-200 tracking-widest font-semibold">
        <h2 className="mb-2">
          Find Github Profile with{" "}
          <span className="text-primary font-bold">Github User Name</span>
        </h2>
        <Form />
        <Profile />
      </div>
    </div>
  );
};

export default Home;
