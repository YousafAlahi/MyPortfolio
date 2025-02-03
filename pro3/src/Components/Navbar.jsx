
import { useState } from "react";
import Logo1 from '../assets/logo.png';
import { Link } from "react-router-dom";
import { GiShoppingBag } from "react-icons/gi";
import { MdAccountCircle } from "react-icons/md";
import Menu from "./Menu";


const Navbar = () => {

const items = ["اُردو","Português", "Español", "Deutsch", "日本語","Русский","Français","हिन्दी"]
 const [islang, setIsLang] = useState(false)

     
    const toggleDropdown = () => {
        setIsLang(!islang)
      }
 //const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="container bg-sky-700 max-w-[1440px] w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
              <div className="mt-4 lg:mt-0"> <img src={Logo1} width={50} height={50}/></div>
           
          </div>
          <div className="hidden md:flex space-x-4 style-none">
           <Link to="/"><li className="text-white hover:underline font-mono font-semibold text-xl list-none	">
              Home
            </li>
            </Link> 
            <Link to="/productdetails"><li className="text-white hover:underline font-mono font-semibold text-xl list-none">
              ProductDetails
            </li>
            </Link> 
            <Link to="/aboutus"><li className="text-white hover:underline font-mono font-semibold text-xl list-none">
              About
            </li>
            </Link> 
            <Link to="/contact"><li className="text-white hover:underline font-mono font-semibold text-xl list-none">
              Blog
            </li>
            </Link> 
          </div>

          {/* <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div> */}
{/* Language Section Start */}
{/* language Section Start */}
<div className='hidden md:relative md:flex gap-4'>
    <button onClick={toggleDropdown} className='font-mono border-2 border-white px-4 py-1 rounded-lg bg-white text-black outline-none'>English</button>
    {islang && (<div className='absolute top-9 left-0 w-22 bg-white min-h-[200px] origin-top-right rounded-lg shadow-2xl'>
   {items.map((item, index) => (
              <a
                key={index}
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200/50 hover:text-gray-900 rounded-lg"
                role="menuitem"
              >
                {item}
              </a>
            ))}

   </div>)}
   
 <div className="hidden lg:flex lg:gap-4">

 <Link to={"/cart"} className="flex relative">
<GiShoppingBag className="text-[22px] text-white bg-orange-600 w-9 h-9 p-2 rounded-xl"/>
<span className="bg-white text-sm absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 rounded-full shadow-md ">0</span>
</Link>

    <Link to={"/signup"}><MdAccountCircle className='text-white text-4xl'/></Link>
</div>

</div>
{/* language Section Enndd */}
 {/* Icons Section Sart */}

   
    {/* Icons Section End */}
        </div>
      </div>

<Menu/>

      {/* Mobile Menu */}
      {/* {isOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
           <Link to="/"> <li className="block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2">
              Home
            </li>
            </Link>
             <Link to="/productdetails"> <li className="block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2">
              ProductDetails
            </li>
            </Link>
             <Link to="/aboutus"> <li className="block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2">
              About
            </li>
            </Link>
            <Link to="/contact"> <li className="block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2">
              Blog
            </li>
            </Link>
          </div>
 
 <div className="md:hidden flex flex-col">
    <Link to={"/signup"}>
<button type="submit" className="w-full px-4 py-2 text-white bg-black rounded-lg hover:bg-indigo-700 focus:ring focus:ring-indigo-300">
            Sign Up
          </button></Link>
</div>
        </div>
      )} */}
    </nav>
  )
}

export default Navbar;