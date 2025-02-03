
import  { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { GiShoppingBag } from "react-icons/gi";
import { FaCartArrowDown } from "react-icons/fa";

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative md:hidden">
    <button
      className="absolute -top-12 right-4 z-50"
      onClick={() => setIsOpen(!isOpen)}
    >
      {isOpen ? <IoClose className="text-white text-4xl" /> : <IoMdMenu className="text-white text-4xl" />}
    </button>
    {isOpen && (
      <div className={`${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } fixed z-20 inset-x-0 left-16 top-16 w-48 bg-white rounded-xl text-black transform transition-transform duration-200 ease-in-out lg:translate-x-0`}
      >
        <nav>
          <ul className="space-y-4 flex flex-col items-center gap-4 p-4">
          <Link to="/" className="hover:bg-slate-200">
              <li className="text-lg font-medium hover:text-blue-500">
              Home
              </li>
            </Link>
            <Link to="/productdetails">
              <li className="text-lg font-medium hover:text-blue-500">
               ProductDetails
              </li>
            </Link>
            <Link to="/aboutus">
              <li className="text-lg font-medium hover:text-blue-500">
                About
              </li>
            </Link>
            <Link to="/contact">
              <li className="text-lg font-medium hover:text-blue-500">
                 Blog
              </li>
            </Link>
            {/* <Link to={"becomesupplier"}>
              <li className="text-lg font-medium hover:text-blue-500">
              BecomeaSupplier
              </li>
            </Link> */}
          </ul>

{/* Login Button Start */}

 <div className="md:hidden flex flex-col py-6 items-center justify-center gap-4">
    <Link to={"/signup"}>

<button type="submit" className="w-full px-4 py-2 text-white bg-black rounded-lg hover:bg-indigo-700 focus:ring focus:ring-indigo-300">
            Sign Up
</button>
</Link>
 <Link to={"/cart"} className="flex relative">

<button type="submit" className="w-full px-4 py-2 text-white bg-black rounded-lg hover:bg-indigo-700 focus:ring focus:ring-indigo-300">
           For Cart 
</button>

{/* 
<GiShoppingBag className="text-[22px] text-white bg-orange-600 w-9 h-9 p-2 rounded-xl"/>
<span className="bg-white text-sm absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 rounded-full shadow-md ">0</span> */}
</Link>
</div>
{/* Login Button End */}

</nav>
</div>
    )}
  </div>
  );
};

export default Menu;
