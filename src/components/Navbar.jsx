import React, { useState } from "react";
import {
  FaBars,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTimes,
} from "react-icons/fa";
import { HiOutlineLink, HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
      moff: -80,
    },
    {
      id: 3,
      link: "projects",
      doff: -80,
      moff: -80,
    },
    {
      id: 4,
      link: "skills",
      doff: -80,
      moff: -80,
    },
   
  ];

  const socialLinks = [
    {
      id: 3,
      child: (
        <>
          <HiOutlineLink size={30} />
        </>
      ),
      href: "https://docs.google.com/document/d/1SY5lYtthxOCpwp7RFaloiD98ofm7mRCT2XSP_X-f5AI/edit?usp=sharing",
    },
    {
      id: 3,
      child: (
        <>
          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/sushanth-nayak",
    },
    {
      id: 3,
      child: (
        <>
          <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/sushanth-nayak-bbba8221a/",
    },
    {
      id: 4,
      child: (
        <>
          <FaInstagram size={30} />
        </>
      ),
      href: "https://www.instagram.com/sushanth_nayak_/",
    },
    {
      id: 5,
      child: (
        <>
          <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:sushanthnayak.in@gmail.com",
    },
  ];

  return (
    <div
      id="navbar"
      className="flex justify-between items-center w-full h-20 px-4 text-white bg-gradient-to-r from-gray-800 via-black to-gray-800 fixed"
    >
      <div>
        <h1 className="text-4xl font-signature ml-2 bg-gradient-to-r from-cyan-500 to-red-500 inline-block text-transparent bg-clip-text hover:cursor-pointer pt-2">
          <Link to="home" smooth duration={500}>
            Sushanth Nayak
          </Link>
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link, doff }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-cyan-500 duration-200"
          >
            <Link to={link} smooth duration={500} offset={doff}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <div className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          <ul className="flex flex-col justify-center items-center">
            {links.map(({ id, link, moff }) => (
              <li
                key={id}
                className="px-4 py-6 text-3xl capitalize font-medium"
              >
                <Link
                  onClick={() => {
                    setNav(!nav);
                    window.scrollBy(0, 1);
                  }}
                  to={link}
                  smooth
                  duration={500}
                  offset={moff}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex flex-row justify-center items-center static">
            {socialLinks.map(({ id, child, href, style }) => (
              <li
                key={id}
                className="py-8 px-4 cursor-pointer hover:scale-105 duration-200"
              >
                <a href={href} target="_blank" rel="noreferrer">
                  {child}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
