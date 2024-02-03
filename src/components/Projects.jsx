import React from "react";
import carrental from "../assets/projects/car-rental.png";
import restaurant from "../assets/projects/restaurant.png";
import bikerental from "../assets/projects/bike-rental.png";
import portfolio from "../assets/projects/portfolio.png";
import educational from "../assets/projects/Educational.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Bike Rental Website",
      src: bikerental,
      href: "https://github.com/sushanth-nayak/bikerental-reactjs",
      deploy:"https://bikerental-reactjs.vercel.app/",
      shadow:"shadow-[#2AFDD3]",
    },
    {
      id: 2,
      name: "Educational Website",
      src: educational,
      href: "https://github.com/sushanth-nayak/Educational-reactjs",
      deploy:"https://educational-reactjs.vercel.app/",
      shadow: "shadow-[#FD4F2A]",
    },
    {
      id: 3,
      name: "Restaurant Website",
      src: restaurant,
      href: "https://github.com/sushanth-nayak/restaurant-reactjs",
      deploy: "https://restaurant-reactjs-ten.vercel.app/",
    },
    {
      id: 4,
      name: "Car Rental Website",
      src: carrental,
      href: "https://github.com/sushanth-nayak/car-rental-reactjs",
      deploy: "https://car-rental-reactjs.vercel.app/",
      shadow:"shadow-[#6EC5EF]",
    },
    {
      id: 5,
      name: "Basic Portfolio Website",
      src: portfolio,
      href: "https://github.com/sushanth-nayak/portfolio-react",
      shadow: "shadow-[#FF3B3B]",
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white h-full"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-accent bg-gradient-to-r from-cyan-500 to-red-500 inline-block text-transparent bg-clip-text">
            Projects
          </h2>
          <p className="py-6">
            Checkout some of the things I have worked on here
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ">
          {projects.map(({ id, name, src, href, shadow, deploy }) => (
            <div
              key={id}
              className={`shadow-md rounded-lg hover:scale-105 duration-500  ${
                shadow ? shadow : "shadow-gray-600"
              }`}
            >
              <img src={src} alt="" className="rounded-md m-auto flex-1" />
              <div className="flex flex-col grow flex-initial justify-center items-center">
                <button className="px-6 py-3 cursor-default">{name}</button>
                {deploy && (
                  <div className="flex flex-row justify-between items-center">
                    <button className="px-6 py-3 text-gray-500 mb-auto justify-end hover:text-cyan-500">
                      <a href={href} target="_blank" rel="noreferrer">
                        Github
                      </a>
                    </button>
                    <button className="px-6 py-3 text-gray-500 mb-auto justify-end hover:text-cyan-500">
                      <a href={deploy} target="_blank" rel="noreferrer">
                        Website
                      </a>
                    </button>
                  </div>
                )}
                {!deploy && (
                  <button className="px-6 py-3 text-gray-500 mb-auto justify-end hover:text-cyan-500">
                    <a href={href} target="_blank" rel="noreferrer">
                      Github Repository
                    </a>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
