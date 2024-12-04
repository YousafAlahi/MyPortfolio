import React from 'react';
import Logo from '../assets/logo.png';
import { IoMenu } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";

const NavbarMenu = [
    {
        id: 1,
        title: "Home",
        link: "#"
    },
    {
        id: 2, 
        title: "Categories",
        link: "#"
    },
    {
        id: 3,
        title: "Blog",
        link: "#"
    },
    {
        id: 4,
        title: "About",
        link: "#"
    },
    {
        id: 5,
        title: "Contact",
        link: "#"
    },

]

const Navbar = () => {
  return (
    <div className='text-white py-8'>
        <div className='container flex items-center justify-between'>

            {/* Logo Section */}
        <div>
            <img src={Logo} className='max-w-[100px] invert'/>
        </div>

        {/* Menu Section */}

        <div className='hidden md:block'>
            <ul className='flex items-center gap-4 relative z-40'>
                {NavbarMenu.map((item)=> (
                    <li>
                        <a href={item.link} className='inline-block text-base font-semibold py-2 px-3 uppercase'>{item.title}</a>
                    </li>
                ))}

                <button className='text-xl ps-14'>
                <FaRegUser />
                </button>
            </ul>
        </div>


        {/* Humberger Section */}

        <div className='md:hidden'>
        <IoMenu className='text-4xl'/>
        </div>
        </div>
    </div>
  )
}

export default Navbar;