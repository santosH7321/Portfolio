import React, { useState } from 'react'
import { IoMoonOutline } from "react-icons/io5";
import { CiLight } from "react-icons/ci";
import { CgMenuGridO } from "react-icons/cg";

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
    <div className=''>
      <div className='flex justify-around items-center p-5 max-md:justify-items-end'>
        <div className='text-2xl font-bold text-sky-600 '>
            <h1>Santosh</h1>
        </div>
        <div className='flex justify-center items-center'>
            <ul className=' Dore flex justify-around items-center gap-10 max-md:hidden'>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Skills</a></li>
                <li><a href='#'>Qualifications</a></li>
                <li><a href='#'>Projects</a></li>
                <li><a href='#'>Contact Me</a></li>
            </ul>
            <span className='flex justify-center items-center pl-5'>
                <button onClick={nightModeHand}>
                    {
                        nightMode ? <CiLight /> : <IoMoonOutline />
                    }
                </button>
                {/* onClick={toggleMenu} className={menuOpen ? 'active' : '' */}
                <button onClick={toggleMenu}  className='md:hidden max-md:block text-2xl pl-5'>
                    <CgMenuGridO />
                </button>
            </span>
                        
        </div>
      </div>
      <hr />
    </div>
  )
}

export default Nav
