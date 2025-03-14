import React from 'react'

import Img1 from "../assets/m1.jpg";
import Img2 from "../assets/m2.jpg";
import Img3 from "../assets/m3.jpg";
import Img4 from "../assets/m4.jpg";
import Img5 from "../assets/m5.jpg";
import Img6 from "../assets/m1.jpg";
import Img7 from "../assets/m2.jpg";
import Img8 from "../assets/m3.jpg";
import Img9 from "../assets/m4.jpg";
import Img10 from "../assets/m5.jpg";
import Img11 from "../assets/m1.jpg";
import Img12 from "../assets/m2.jpg";
import Img13 from "../assets/m3.jpg";
import Img14 from "../assets/m4.jpg";
import Img15 from "../assets/m5.jpg";


import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Man Shawl",
    rating: 5.0,
    color: "Brown",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Man Shawl",
    rating: 4.5,
    color: "Red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Man Shawl",
    rating: 4.7,
    color: "Red",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Man Shawl",
    rating: 4.4,
    color: "Grey",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Man Shawl",
    rating: 4.5,
    color: "Blue",
    aosDelay: "800",
  },
  {
    id: 6,
    img: Img6,
    title: "Man Shawl",
    rating: 5.0,
    color: "Black",
    aosDelay: "0",
  },
  {
    id: 7,
    img: Img7,
    title: "Man Shawl",
    rating: 4.5,
    color: "Gray",
    aosDelay: "200",
  },
  {
    id: 8,
    img: Img8,
    title: "Man Shawl",
    rating: 4.7,
    color: "Blue",
    aosDelay: "400",
  },
  {
    id: 9,
    img: Img9,
    title: "Man Shawl",
    rating: 4.4,
    color: "Golden",
    aosDelay: "600",
  },
  {
    id: 10,
    img: Img10,
    title: "Man Sahwl",
    rating: 4.5,
    color: "Black",
    aosDelay: "800",
  },
  {
      id: 11,
      img: Img11,
      title: "Man Shawl",
      rating: 5.0,
      color: "WhiteBrown",
      aosDelay: "0",
    },
    {
      id: 12,
      img: Img12,
      title: "Man Shawl",
      rating: 4.5,
      color: "Black",
      aosDelay: "200",
    },
    {
      id: 13,
      img: Img13,
      title: "Man Shawl",
      rating: 4.7,
      color: "Pink",
      aosDelay: "400",
    },
    {
      id: 14,
      img: Img14,
      title: "Man Shawl",
      rating: 4.4,
      color: "Blue",
      aosDelay: "600",
    },
    {
      id: 15,
      img: Img15,
      title: "Man Shawl",
      rating: 4.5,
      color: "Red ",
      aosDelay: "800",
    },
   
];

const MenShawl = () => {
  return (
    <>
    
    <div className="mt-12 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Products
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Men Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-red-400">
            Collection 2024
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* view all button */}
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
              View All Button
            </button>
          </div>
        </div>
      </div>
    </div>


    
    
    </>
  )
}

export default MenShawl