import React from "react";
import Form from "../../components/home/form";
import Profile from "../../components/home/profile";

const Home = () => {
  return (
    <div className="w-full flex justify-center py-20 px-5">
      <div className="w-[70%] tracking-widest font-semibold">
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
