import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-full xs:h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-[#219be5] bg-gradient-to-r from-cyan-500 to-red-500 inline-block text-transparent bg-clip-text">
            About
          </h2>
        </div>

        <p className="text-xl mt-10">
          I have completed my Bachelor of Engineering at{" "}
          <a
            href="https://mite.ac.in/"
            target="_blank"
            rel="noreferrer"
            className="border-b-2 border-gray-500"
          >
            Mangalore Institute of Technology and Engineering
          </a>
           , Moodabidre in mechanical and I completed my Pre-University education from{" "}
          <a
            href="https://sribhuvanendra.org/"
            target="_blank"
            rel="noreferrer"
            className="border-b-2 border-gray-500"
          >
            Sri Bhuvanendra PU college 
          </a>
          , Karkala.
        </p>

        <br />

        <p className="text-xl">
        As a mechanical background student, I am interested in 3D designs. While watching a video on YouTube, I stumbled into a 3D website design video. I examined the video and found something interesting, which is how I was exposed to the web development scenario.
        </p>

        <br />

        <p className="text-xl">
        Currently, I am trying to upskill myself with new technologies. I am familiar with frontend libraries, frameworks, and databases such as MongoDB and SQL, and I am learning new things to become a better version of myself.  
        </p>

        <br />

        <p className="text-xl">
        As a fresher to the software field, I need an opportunity to gain exposure in order to become a better developer.
        </p>
      </div>
    </div>
  );
};

export default About;
