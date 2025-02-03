import { useContext } from "react";
import { useParams } from "react-router-dom"
import { ShopContext } from "../Context/ShopContext";
// import { useState } from "react";
import { FaStar } from "react-icons/fa";
// import { FaHeart } from "react-icons/fa";
import { LuMoveUpRight } from "react-icons/lu";
import Footer from '../Components/Footer';
import Navbar from  '../Components/Navbar'
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";


const Product = () => {


const {ProductData} = useContext(ShopContext);
 const {cartItems, addToCart, removeFromCart} = useContext(ShopContext);

const {id} = useParams(); 

const product = ProductData.find((item) =>{
return(
item.id === parseInt(id)
)
});
console.log(product);

//   const [isAddedToCart, setIsAddedToCart] = useState(false)

//    const handleAddToCart = () => {
//      setIsAddedToCart(true) 
//     alert('Product added to cart!')
//    }

//  const [cart, setCart] = useState([]);

//    const AddToCart = (product) => {
//      setCart([...cart, product]);
//    };
//  useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
//     setCart(storedCart);
//   }, []);

// const AddToCart = (product) => {
//     const updatedCart = [...cart, product];
//     setCart(updatedCart);
//     localStorage.setItem("Cart", JSON.stringify(updatedCart));
//   };

  return (
<>
<Navbar/>
 <section className="max-w-[1440px] w-full mx-auto px-6 lg:px-12 flex flex-col gap-4 xl:flex-row bg-sky-700 py-4">

   <div className="flex gap-x-2 xl:flex-1 py-5">
   <div className="flex items-center justify-center flex-col flex-wrap gap-[7px]">
   <img src={product.image} className="rounded-lg bg-gray-100" width={90} height={100}/>
    <img src={product.image} className="rounded-lg bg-gray-100" width={90} height={100}/>
    <img src={product.image} className="rounded-lg bg-gray-100" width={100} height={100}/>
     {/* <img src={product.image} className="rounded-lg bg-gray-100" width={100} height={100}/> */}
    {/* <img src={product.image} className="rounded-lg bg-gray-100" width={100} height={100}/> */}
 </div> 

 <div className="">
        <img src={product.image} className="rounded-lg bg-gray-100" width={300} height={300}/>
 </div> 
</div>

<div className="flex flex-col xl:flex-[1] bg-sky-700 px-6 py-2 rounded-xl">
        <h4 className="font-bold text-xl lg:text-4xl text-white">{product.title}</h4>

            <div className="flex items-baseline gap-x-6 font-bold sm:font-semibold mt-3">
                <div className="text-white">{product.price}.00</div>
            </div>

            <div className="flex items-start gap-x-1 text-orange-600">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
                <p className="text-slate-900">{223}</p>
            </div>
       

<div className="flex flex-col sm:flex-row gap-x-10 gap-y-3 my-4">
       <div>
       <h4 className="text-2xl font-semibold text-white">Select Size :</h4>
      <div className="flex gap-3 my-3">
      <div className="text-white border-[1.5px] border-slate-900/15 w-10 h-10 rounded-sm flex items-center justify-center cursor-pointer">S</div>
      <div className="text-white border-[1.5px] border-slate-900/15 w-10 h-10 rounded-sm flex items-center justify-center cursor-pointer">M</div>
      <div className="text-white border-[1.5px] border-slate-900/15 w-10 h-10 rounded-sm flex items-center justify-center cursor-pointer">L</div>
      <div className="text-white border-[1.5px] border-slate-900/15 w-10 h-10 rounded-sm flex items-center justify-center cursor-pointer">X</div>
      </div>
      </div>
 </div>
    <div className="flex gap-4 mb-4 flex-wrap">
     {/* <button className="bg-green-700 rounded-sm !px-4">
     <FaHeart className="text-red-600"/>
     </button> */}

     <button className="bg-black text-white rounded-sm sm:!px-20 flex items-center gap-x-2 py-2 px-4"
     onClick={() => addToCart(product.id)}>
      Add to Cart
    <LuMoveUpRight className="text-xl text-white" />
      </button> 
            {/* <button
              onClick={() => addToCart(product.id)}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex gap-2">
              Add to Cart <LuMoveUpRight className="text-xl text-white" />
            </button> */}
 

{/* Cart Section Start */}
{!cartItems?.[product.id] ? (
  <FaPlus
    onClick={() => addToCart(product.id)}
    className="bg-white w-8 h-8 p-2 rounded-full shadow-inner cursor-pointer"
  />
) : (
  <div className="bg-white rounded-full flex items-center justify-center gap-2 h-8">
    <FaMinus
      onClick={() => removeFromCart(product.id)}
      className="bg-orange-700 p-1 w-8 h-8 ml-1 rounded-full"
    />
    <p>{cartItems[product.id]}</p>
    <FaPlus
       onClick={() => addToCart(product.id)}
      className="bg-orange-700 p-1 w-8 h-8 mr-1 rounded-full"
    />
  </div>
)}

      </div>
        <div className="pt-4">  
            <Link
            to="/productdetails"
            className="bg-black text-white rounded-sm sm:!px-20 py-2 px-4">
            Back to Shop
          </Link> 
        </div> 
   </div>
    </section>
   
<Footer/> 
</>
    
  )
}

export default Product