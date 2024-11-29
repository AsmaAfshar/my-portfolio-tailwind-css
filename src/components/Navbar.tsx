
import React from 'react'
import {  useState} from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen ] = useState(false)

  const toggleMenu = ()=> {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <div className='container pt-8' >
      <div className='flex justify-between items-center'>

      <div className='text-xl font-medium'>Asma Khan</div>
    
      <ul className='gap-10 lg:gap-16 hidden md:flex'>
      <li className='menuLink'><a href="#hero">Home</a></li>
      <li className='menuLink'><a href="#about">About</a></li>
      <li className='menuLink'><a href="#contact">Contact</a></li>
      <li className='menuLink'><a href="#skills">Skills</a></li>
      </ul>

      <div className='md:hidden' onClick={toggleMenu}>
        {isMenuOpen ? <AiOutlineClose size={30} /> :
        <AiOutlineMenu size={30} />
        }
      </div>
      </div>
    </div>
  );
};

export default Navbar;
