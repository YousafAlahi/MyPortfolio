import React from 'react'

import Img1 from "../assets/b1.jpg";
import Img2 from "../assets/b2.jpg";
import Img3 from "../assets/b3.jpg";
import Img4 from "../assets/b4.jpg";
import Img5 from "../assets/b5.jpg";
import Img6 from "../assets/b7.jpg";
import Img7 from "../assets/b8.jpg";
import Img8 from "../assets/w1.jpg";
import Img9 from "../assets/w2.jpg";
import Img10 from "../assets/w3.jpg";
import Img11 from "../assets/w4.jpg";
import Img12 from "../assets/w5.jpg";
import Img13 from "../assets/b13.jpg";
import Img14 from "../assets/b14.jpg";
import Img15 from "../assets/b15.jpg";


import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Man Boski",
    rating: 5.0,
    color: "Black",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Man Boski",
    rating: 4.5,
    color: "Maroon",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Man Boski",
    rating: 4.7,
    color: "White",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Man Boski",
    rating: 4.4,
    color: "Sky",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Man Boski",
    rating: 4.5,
    color: "Brown",
    aosDelay: "800",
  },
  {
    id: 6,
    img: Img6,
    title: "Man Boski",
    rating: 5.0,
    color: "White",
    aosDelay: "0",
  },
  {
    id: 7,
    img: Img7,
    title: "Man Boski",
    rating: 4.5,
    color: "White",
    aosDelay: "200",
  },
  {
    id: 8,
    img: Img8,
    title: "Man Boski",
    rating: 4.7,
    color: "Black",
    aosDelay: "400",
  },
  {
    id: 9,
    img: Img9,
    title: "Man Boski",
    rating: 4.4,
    color: "Dark Skin",
    aosDelay: "600",
  },
  {
    id: 10,
    img: Img10,
    title: "Man Boski",
    rating: 4.5,
    color: "Kilaki",
    aosDelay: "800",
  },
  {
      id: 11,
      img: Img11,
      title: "Man Boski",
      rating: 5.0,
      color: "Pink",
      aosDelay: "0",
    },
    {
      id: 12,
      img: Img12,
      title: "Man Boski",
      rating: 4.5,
      color: "White",
      aosDelay: "200",
    },
    {
      id: 13,
      img: Img13,
      title: "Man Boski",
      rating: 4.7,
      color: "White",
      aosDelay: "400",
    },
    {
      id: 14,
      img: Img14,
      title: "Man Boski",
      rating: 4.4,
      color: "Black",
      aosDelay: "600",
    },
    {
      id: 15,
      img: Img15,
      title: "Man Boski",
      rating: 4.5,
      color: "WHite",
      aosDelay: "800",
    },
   
];



const WashWear = () => {
  return (
    <>
    <div className="mt-12 mb-14">
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

export default WashWear;