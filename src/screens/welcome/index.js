import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineGlobal,
} from "react-icons/ai";
import { FaHackerrank } from "react-icons/fa";

const profiles = [
  {
    icon: AiFillGithub,
    url: "https://github.com/Suleyman1406",
  },

  {
    icon: AiFillLinkedin,
    url: "https://www.linkedin.com/in/dadashow/",
  },
  {
    icon: FaHackerrank,
    url: "https://www.hackerrank.com/dadasovsuleyman1",
  },

  {
    icon: AiFillMail,
    url: "mailto:dadasovsuleyman126@gmail.com",
  },
  {
    icon: AiOutlineGlobal,
    url: "https://dadashow.me/",
  },
];

const Welcome = () => {
  return (
    <div className="min-h-[calc(100vh-144px)] md:min-h-[calc(100vh-80px)] bg-welcome-bg flex items-center justify-center p-5 pt-10 overflow-hidden">
      <div className="text-3xl">
        <h1 className="font-semibold">
          Welcome to{" "}
          <span className="font-bold text-primary">
            Dog<span className="text-secondary">Go</span>
          </span>{" "}
          Front-end Development Intern Assesment
        </h1>
        <div className="text-xl mt-10">
          <p className="tracking-wider">
            Hello, my name is Suleyman. I'm{" "}
            <span className="text-primary font-bold italic">Developer</span>.
            <br />
            Actually, I'm{" "}
            <span className="text-secondary font-bold italic">
              Front-end Developer
            </span>
            .
          </p>
          <div className="flex flex-row justify-center mt-6">
            {profiles.map(({ icon: Icon, url }) => (
              <a
                href={url}
                target={"_blank"}
                className="m-2 px-2 py-2  justify-center rounded-full bg-primary duration-200 hover:-translate-y-1 hover:shadow-md hover:shadow-primary"
                rel="noreferrer"
              >
                <Icon className=" text-3xl text-white mx-auto" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
