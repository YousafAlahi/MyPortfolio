
import { Link } from 'react-router-dom';
import Img1 from '../assets/my1.png';
import { FaShippingFast } from "react-icons/fa";
import { PiShippingContainerFill } from "react-icons/pi";
import { MdLocalShipping } from "react-icons/md";
import Img3 from '../assets/b11.jpg';
import Img4 from '../assets/k6.jpg';
import Img5 from '../assets/m6.jpg';



const MyData = [
{
id: 1,
icons : <FaShippingFast />,
name : "Fast Delivery",
text: "Fast delivery and a great platform aren't enough. A very fast delivery arm gave his variations of speed and length added potency.Free shipping is attractive to customers."

},
{
id: 2,
icons : <PiShippingContainerFill />,
name : "Free Shipping",
text: "Free shipping is an increasingly-popular option for online shopping, where customers do not have to pay an additional shipping charge. Free shipping is attractive to customers."

},
{
id: 3,
icons : <MdLocalShipping />,
name : " High Quality",
text: "Product quality refers to the characteristics, features, and attributes of a product that determine its ability to meet customer expectations and perform its intended function."

},
]

const MyData2 =[
{
id: 4,
image: Img3 ,
name: "Man Boski",
price: "$20",
},
{
id: 5,
image: Img4 ,
name: "Man Kurta",
price: "$25",
},
{
id: 6,
image: Img5 ,
name: "Man Shawls",
price: "$15",
},

]
const Hero = () => {
  return (
    <>
 {/* ============================ !st Section Start Now ============================== */}


      <section  className="container max-w-[1440px] w-full bg-sky-700 py-12">
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2'>
        {/* Context Section */}
          <div className='flex flex-col text-center justify-center space-y-4'>
            <h1 className='text-4xl font-semibold lg:font-bold lg:text-6xl lg:py-6 text-white'>Upto 50% off on all Men Wear</h1>
            <p className='text-xl font-serif text-white pb-4'>lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div className='hidden lg:block'><Link to={" "} className='text-black bg-white px-4 py-2 rounded-lg outline-none font-mono font-bold hover:bg-sky-700 transition-all hover:text-white'>Order Now</Link></div>
          </div>

          {/* Image Section */}
          <div className=''>
            <img src={Img1} width={700} height={700}/>
          </div>
        </div>
      </section>

 {/* =============================1nd  Section  Ennnddd============================== */}
  {/* ============================2nd Section Start Now============================== */}

  <section className='container max-w-[1440px] w-full lg:py-12 py-4'>
    <div className='relative'>
<h1 className='text-xl lg:text-2xl text-start font-serif font-semibold lg:font-bold lg:text-center text-sky-600'>Why Shop With Us</h1>
<div className='hidden lg:block lg:w-[130px] lg:bg-sky-600 h-[3px] lg:absolute lg:top-10 lg:left-[46%] rounded-full'></div>
<div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 justify-center lg:py-10'>
{MyData.map((items) =>{
return(
<div  key={items.id} className='flex flex-col items-center justify-between gap-6 p-4'>
<div className='bg-sky-600 flex flex-col items-center justify-between p-8 rounded-lg cursor-pointer hover:scale-100 hover:translate-y-2 transition-all'>
<h1 className='text-2xl text-white py-4 lg:text-4xl'>{items.icons}</h1>
<p className='text-xl lg:text-2xl font-mono font-semibold pb-2 text-white'>{items.name}</p>
<snall className="text-base text-white font-thin">{items.text}</snall>
</div>
</div>
)
})}
</div>
    </div>
  </section>

 {/* =============================2nd  Section  Ennnddd============================== */}
  {/* ============================3rd Section Start Now============================== */}
<section className='container max-w-[1440px] w-full bg-gray-300 min-h-[700]'>
<div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 justify-center'>
{/* image section */}
<div>
<img src={Img1} width={600} height={700}/>
</div>
{/* content section */}
<div className='pt-10 lg:pt-64'>
<h1 className='text-2xl font-mono font-semibold lg:text-4xl lg:font-bold py-4'>#NewArrivals</h1>
<p className='text-base pb-6 text-black'>The details displayed often include size, color, price, shipping information, reviews, and other relevant information customers may want to know before making a purchase.</p>
<div><Link to={" "} className='text-black bg-sky-600 px-4 py-2 rounded-lg outline-none font-mono font-bold hover:border-2 hover:border-sky-600 hover:bg-white transition-all'>Order Now</Link></div>


</div>
</div>
</section>
 {/* ============================= 3rd  Section  Ennnddd ============================== */}
  {/* ============================ 4th Section Start Now ============================== */}
<section className='container max-w-[1440px] w-full bg-sky-700 min-h-[700]'>

<div className='relative'>
<h1 className='text-2xl lg:text-4xl font-mono font-semibold lg:font-bold text-center py-6'>Our <span className='text-white font-bold'>Products</span></h1>
<div className='absolute left-[47%] top-16 bg-white w-[80px] h-[2px]'></div>
</div>
<div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 py-6'>
{MyData2.map((items)=>{
return(
<div key={items.id}>
<img src={items.image} width={300} height={300}/>
<h1 className='text-2xl font-mono font-semibold lg:text-2xl lg:font-bold text-start py-2 text-white'>{items.name}</h1>
<p1 className="text-xl font-mono font-semibold text-white">{items.price}</p1>

</div>
)
})}
</div>
</section>
 {/* ============================= 4th  Section  Ennnddd ============================== */}




    </>
  )
}

export default Hero