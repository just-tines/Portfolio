import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
// import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const links = [
    {
      id: 1,
      link: "AboutMe",
    },
    {
      id: 2,
      link: "Skills",
    },
    {
      id: 3,
      link: "Experience",
    },
    {
      id: 4,
      link: "Project",
    },
    {
      id: 5,
      link: "ContactMe",
    },
  ];
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="flex w-full justify-between bg-black items-center h-24 px-12 mx-auto text-white">
      <h1 className="text-3xl font-bold font-signature cursor-pointer text-[#00df9a]">
        <span className="text-white">My</span>Portfolio
      </h1>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-md text-white hover:text-[#00df9a] hover:scale-105 duration-300 ease-in-out"
          >
            {link}
          </li>
        ))}
      </ul>

      <div onClick={() => setNavOpen(!navOpen)} className="flex md:hidden cursor-pointer pr-4 z-10 text-gray-500">
        {navOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
      

      <div
        className= {`md:hidden ${
          navOpen ? "fixed" : "hidden"
        } left-0 top-0 w-[70%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500`}
      >
        <h1 className="text-3xl my-5 mx-5 font-signature cursor-pointer font-bold text-[#00df9a]">
          <span className="text-white ">My</span>Portfolio
        </h1>
        <ul className={`${navOpen ? "block" : "hidden"}`}>
          <li className="px-4 mx-5 my-5 cursor-pointer capitalize font-medium text-gray-500 hover:text-[#00df9a] hover:scale-105 duration-300 ease-in-out">
            AboutMe
          </li>
          <li className="px-4 my-5 mx-5 cursor-pointer capitalize font-medium text-gray-500 hover:text-[#00df9a] hover:scale-105 duration-300 ease-in-out">
            Skills
          </li>
          <li className="px-4 my-5 mx-5   cursor-pointer capitalize font-medium text-gray-500 hover:text-[#00df9a] hover:scale-105 duration-300 ease-in-out">
            Experience
          </li>
          <li className="px-4 my-5 mx-5  cursor-pointer capitalize font-medium text-gray-500 hover:text-[#00df9a] hover:scale-105 duration-300 ease-in-out">
            Project
          </li>
          <li className="px-4 my-5 mx-5  cursor-pointer capitalize font-medium text-gray-500 hover:text-[#00df9a] hover:scale-105 duration-300 ease-in-out">
            ContactMe
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
