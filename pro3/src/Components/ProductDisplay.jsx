import { useContext } from "react"
import { ShopContext } from "../Context/ShopContext"
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa6";
// import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

// import Product from "../Pages/Product";
// import Item from "./Item";

const ProductDisplay = () => {

const {ProductData} = useContext(ShopContext);
 const {cartItems, addToCart, removeFromCart} = useContext(ShopContext);


// const [cartItems, setCartItems] = useState(false);
  return (
   <>
<section className="container max-w-[1440px] w-full mx-auto py-6 lg:px-12 bg-sky-700">

<div className='relative py-4'>
<h1 className='text-2xl lg:text-4xl font-mono font-semibold lg:font-bold text-center py-6'>Our <span className='text-white font-bold'>Products</span></h1>
<div className='absolute left-[47%] top-24 bg-white w-[80px] h-[2px]'></div>
</div>

 <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
{ProductData.map((product)=>{
return(
 <div key={product.id}>

{/* product link us waqt laga ha jub product image pr lick kr ky image detail pr jana hota ha */}

    <Link to={`/product/${product.id}`}>
     <img src={product.image} width={250} height={250} className="object-cover h-38 rounded-lg"/>
   </Link>

<div>
<h1 className="text-white text-2xl font-mono font-semibold py-2">{product.title}</h1>
<p className="text-white font-mono">{product.price}</p> 
<p className="flex items-center justify-start gap-1 text-white">
{product.rating}<FaStar className="text-yellow-500"/>
<FaStar className="text-yellow-500"/>
<FaStar className="text-yellow-500"/>
<FaStarHalf className="text-yellow-500" />
        </p> 

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


{/* Cart Section End */}
 </div>
 {/* </Link> */}

      {/* <Item product={product}/>          */}
 </div>
)
})}

</div>



</section>
    </>
  )
}

export default ProductDisplay