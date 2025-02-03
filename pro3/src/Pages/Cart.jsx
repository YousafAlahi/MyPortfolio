
import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { TbTrash } from "react-icons/tb";
import { Link } from 'react-router-dom';
const Cart = () => {

const {ProductData, cartItems, removeFromCart} = useContext(ShopContext);

  return (
<section className="max-w-[1440px] min-h-[300px] py-6 lg:py-12">
 <div className="flex items-center justify-center">  
            <Link
            to="/productdetails"
            className="bg-black text-white rounded-lg sm:!px-20 py-2 px-4">
            Back to Shop
          </Link> 
        </div> 
<div className="py-10">

<table className="w-full">
<thead>
<tr className="border-b border-slate-900/20 text-gray-300 text-start py-12 ">

<th className="p-1 text-left">Product</th>
<th className="p-1 text-left">Title</th>
<th className="p-1 text-left">Price</th>
<th className="p-1 text-left">Quantity</th>
{/* <th className="p-1 text-left">Total</th> */}
<th className="p-1 text-left">Remove</th>
</tr>
</thead>

<tbody>
{ProductData.map((product) =>{
if(cartItems[product.id] > 0){
return(
<tr key={product.id} className='border-b border-slate-900/30 text-black p-6 text-left'>
<td className='p-1'>
<img src= {product.image} width={45} height={45} className='rounded-lg ring-1 ring-slate-900/50 m-1'/>

</td>
<td className='p-1'><div>{product.title}</div></td>
<td className='p-1'>{product.price}</td>
<td>{cartItems[product.id]}</td>
 {/* <td className='p-1'>{product.price * cartItems[product.id]}</td>  */}

<td className='p-1'>
<div className='font-bold'>
<TbTrash onClick={() => removeFromCart(product.id)}/>
</div>
</td>
</tr>
)
}
return null;
})}
</tbody>
</table>
</div>
</section>
  )
}

export default Cart