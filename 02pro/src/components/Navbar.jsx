import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png'
import { FaSearchLocation } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import Image1 from '../assets/three.png';

const IamgeList = [
  {
    id : 1,
    img : Image1,
    title: "Upto 50% off on all Men's Wear",
    description: "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

  },
]


const Navbar = () => {
  return (
    <>
      <div className='container h-12 w-full'>
        <div className='flex flex-shrink-0 items-center justify-between'>
          {/* Navbar Section  */}
          <div className='hidden md:block'>
            <ul className='flex items-center gap-1 relative z-40'>
            <li>
          <Link to="/" className='pl-2 text-xl font-normal hover:text-red-800 hover:font-semibold'>Boski</Link>
        </li>
        <li>
          <Link to="/WashWear" className='pl-2 text-xl font-normal hover:text-red-800 hover:font-semibold'>WashWear</Link>
        </li>
        <li>
          <Link to="/Kurta" className='pl-2 text-xl font-normal hover:text-red-800 hover:font-semibold'>Kurta</Link>
        </li>
        <li>
          <Link to="/MenShawl" className='pl-2 text-xl font-normal hover:text-red-800 hover:font-semibold'>MenShawl</Link>
        </li>
            </ul>
          </div>

          {/* Logo Section */}

          <div>
            <img src={Logo} className='w-[50px]'/>
          </div>

          {/* Social-Icons Section*/}

          <div className='flex items-center gap-2 relative'>
          <FaSearchLocation className='hover:text-red-700 hover:text-xl transition-all'/>
          <FaHeart className='hover:text-red-700 hover:text-xl transition-all'/>
          <FaShoppingCart className='hover:text-red-700 hover:text-xl transition-all'/>
          <FaFacebook className='hover:text-red-700 hover:text-xl transition-all'/>
          <FaInstagram className='hover:text-red-700 hover:text-xl transition-all'/>
          </div>
        </div>
    </div>
    <hr className='h-0.5 bg-gray-300'/> 


    {/*  */}
  <div className='relative overflow-hidden max-h-[600px] sm:min-h-[600px] bg-gray-100 flex justify-center items-center'>

{/* Hero Section */}
<div className='container pb-8 sm:pb-0'>
  {IamgeList.map((data)=>
<div>
<div className='grid grid-cols-1 sm:grid-cols-2'>

{/* === Text Content Section === */}
<div className='flex flex-col justify-center gap-5 pt-12 sm:pt-0 text-center sm:text-left'>

 <h1 className='text-3xl sm:text-6xl lg:text-7xl font-bold'>{data.title}</h1>

 <p className='text-sm'>{data.description}</p>
 <div> 
   <button className='bg-orange-300 hover:scale-105 duration-200 text-white py-2 px-4 rounded-full hover:text-black'>
     Order Now 
   </button>
 </div>
</div>

{/* Iamge Section */}

<div className='order-1 sm:order-2'>
 <div className='relative z-10'>
 <img src={data.img} className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto'/>
 </div>
</div>
</div>
</div>

  )}
</div>
{/* === Hero Section End ===*/}


</div>
</>
  )}

export default Navbar;
