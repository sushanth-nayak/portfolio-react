import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-row items-center justify-center h-full px-4">
        <div className="flex flex-col justify-center h-full">
          <h3 className="text-1xl sm:text-2xl font-light text-accent">
            Hi, I'm
          </h3>
          <h2 className="text-4xl sm:text-7xl font-bold pb-2 bg-gradient-to-r from-cyan-500 to-red-500 inline-block text-transparent bg-clip-text">
          Sushanth Nayak
          </h2>
          <p className="text-gray-500 py-4 max-w-sm sm:max-w-xl">
          I am a 2022 mechanical engineering graduate with a passion for web development and an eagerness to learn new technologies.
          </p>

          <div className="hidden md:inline">
            <Link to="projects" smooth duration={500} offset={-80}>
              <button className="group text-white w-fit px-6 py-3 my-2 flex flex-row items-center rounded-md bg-gradient-to-r from-cyan-500 to-red-500 cursor-pointer">
                Projects
                <div className="contents md:hidden">
                  <Link to="projects" smooth duration={500} offset={-80}>
                    Projects
                  </Link>
                </div>
                <span className="group-hover:rotate-90 duration-300">
                  <HiOutlineArrowRight size={18} className="ml-1" />
                </span>
              </button>
            </Link>
          </div>
          <div className="inline md:hidden">
            <Link to="projects" smooth duration={500} offset={-80}>
              <button className="group text-white w-fit px-6 py-3 my-2 flex flex-row items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                Projects
                <span className="group-hover:rotate-90 duration-300">
                  <HiOutlineArrowRight size={18} className="ml-1" />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
