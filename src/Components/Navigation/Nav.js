import React, { useState } from "react";
import { IoMoonOutline } from "react-icons/io5";
import { CiLight } from "react-icons/ci";
import { CgMenuGridR } from "react-icons/cg";
import { RxCross1 } from "react-icons/rx";

const Nav = () => {
  const [nightMode, setNightMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  // Night Mode
  const nightModeHand = () => {
    setNightMode((prevMode) => !prevMode);
  };

  //    ToggleMenu
  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  return (
    <div className="">
      <div className="flex justify-around items-center p-4  bg-sky-50 fixed w-full max-md:bottom-0 max-md:fixed max-md:p-2 shadow-xl">
        <div className="text-2xl font-bold text-sky-600 ">
          <h1>Santosh</h1>
        </div>
        <div className="flex justify-center items-center">
          <ul className="navbar flex justify-around items-center gap-10 max-md:hidden font-medium">
            <li>
              <a href="/" className="hover:text-blue-600">
                Home
              </a>
            </li>
            <li>
              <a href="/About" className="hover:text-blue-600">
                About
              </a>
            </li>
            <li>
              <a href="/Skills" className="hover:text-blue-600">
                Skills
              </a>
            </li>
            <li>
              <a href="/Qualifications" className="hover:text-blue-600">
                Qualifications
              </a>
            </li>
            <li>
              <a href="/Projects" className="hover:text-blue-600">
                Projects
              </a>
            </li>
            <li>
              <a href="/Contact" className="hover:text-blue-600">
                Contact Me
              </a>
            </li>
          </ul>
          <span className="flex justify-center items-center pl-5">
            <button onClick={nightModeHand}>
              {nightMode ? <CiLight /> : <IoMoonOutline />}
            </button>
            {/* onClick={toggleMenu} className={menuOpen ? 'active' : '' */}
            <button
              onClick={toggleMenu}
              className="md:hidden max-md:block text-2xl pl-5"
            >
              {menuOpen ? <RxCross1 /> : <CgMenuGridR />}
            </button>
          </span>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Nav;
