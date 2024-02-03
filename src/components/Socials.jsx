import React from "react";
import { FaGithub, FaInstagram, FaLinkedin,FaAddressBook } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Socials = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Resume <FaAddressBook size={30} />
        </>
      ),
      href: "https://docs.google.com/document/d/1SY5lYtthxOCpwp7RFaloiD98ofm7mRCT2XSP_X-f5AI/edit?usp=sharing",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/sushanth-nayak",
    },
    {
      id: 3,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/sushanth-nayak-bbba8221a/",
    },
    {
      id: 4,
      child: (
        <>
          Instagram <FaInstagram size={30} />
        </>
      ),
      href: "https://www.instagram.com/sushanth_nayak_/",
    },
    {
      id: 5,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:sushanthnayak.in@gmail.com",
      style: "rounded-br-md",
    },
  ];

  return (
    <div className="hidden md:flex flex-col top-[35%] left-0 fixed z-10">
      <ul>
        {links.map(({ id, child, href, style }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 bg-gradient-to-r from-red-500 to-cyan-500 ml-[-100px] hover:rounded-md hover:ml-[-10px] duration-300" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Socials;
