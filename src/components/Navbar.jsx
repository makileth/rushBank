
import { navLinks } from "../constants";
import { useState } from "react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full h-16 bg-neutral-900 items-center navbar py-6 justify-center mx-auto max-w-7xl flex flex-row ">
      <div className="flex items-center justify-between object-contain rounded-full w-[10rem] cursor-pointer ">
        <img src={logo} className="w-full h-full object-contain " alt="" />
      </div>

      <ul className="list-none sm:flex hidden flex-1 justify-center w-full ">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins  text-sky-50 ${
              index === navLinks.length - 1 ? "mr-0" : "mr-7"
            } text-lg hover:text-[#ffa5f3]  transition duration-300 `}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
        <li></li>
      </ul>

      <div className="flex justify-end items-center h-screen font-semibold font-poppins sm:flex-initial flex-1 ">
        <button className="rounded-full bg-black text-white border border-white px-4 py-2 mr-2 text-[12px] hover:text-black hover:bg-white transition duration-500">
          Log In
        </button>
        <button className="rounded-full bg-purple-600 text-white px-4 py-2 text-[12px] hover:bg-purple-400 transition duration-500">
          Sign Up
        </button>
      </div>
      <div className="sm:hidden flex justify-end items-center">
        <img
          src={
            toggle
              ? "https://icons-for-free.com/iconfiles/png/512/CLOSE-131994911256789607.png"
              : "https://www.svgrepo.com/show/312300/hamburger-menu.svg"
          }
          className="w-10 h-10 brightness(0) invert(1) object-contain ml-1"
          style={{ filter: "invert(1)" }}
          onClick={() => setToggle((prev) => !prev)}
          alt="menu"
        />
      </div>

      <div
        className={`${
          toggle ? "flex" : "hidden"
        } flex fixed top-0 right-0 h-full w-64 p-6 bg-gradient-to-r from-neutral-800 to-black transition-transform duration-500 ease-in-out transform ${
          toggle ? "translate-x-0" : "translate-x-full"
        } z-[1] `}
      >
        <div className="absolute top-4 right-4">
          <img
            src="https://icons-for-free.com/iconfiles/png/512/CLOSE-131994911256789607.png"
            className="w-10 h-10 brightness(0) invert(1) object-contain cursor-pointer"
            style={{ filter: "invert(1)" }}
            onClick={() => setToggle((prev) => !prev)}
            alt="close menu"
          />
        </div>

        <ul className={`list-none flex flex-1 justify-center w-full flex-col absolute top-[5%]`}>
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins text-sky-50 font-thin text-[24px] py-3 ${
                index === navLinks.length - 1 ? "mr-0" : "mr-10"
              } text-lg hover:text-[#ffa5f3]`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          <li></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
