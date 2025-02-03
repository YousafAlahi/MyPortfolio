import Logo2 from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa6";


const Footer = () => {
  return (
   <>
     
<footer className='container max-w-[1440px] w-full min-h-[350px] bg-sky-700 py-6'>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
    <div>
        <div className='flex items-center gap-1'>
<img src={Logo2}/>
        <h1 className='text-black font-bold text-xl lg:text-4xl font-mono'>YousufBin</h1>
        </div>
        <div className='flex flex-col items-start'>
            <p className='w-[300px] py-6 text-white'>
            YousafBin is the first-ever website that allows its users to make money online by sharing their Internet connection. Reach your networks full potential by getting paid in USD or crypto!</p>
            <div className='flex items-start gap-2 justify-center pt-10 lg:py-8'>
             <Link to ={""}><FaFacebook className='text-2xl text-white'/></Link>
                <Link to ={""}><FaInstagram className='text-2xl text-white'/></Link>
                <Link to ={""}><FaTwitter className='text-2xl text-white'/></Link>
                <Link to ={""}><AiFillTikTok className='text-2xl text-white'/></Link>
                <Link to ={""}><FaYoutube className='text-2xl text-white'/></Link>
            </div>
        </div>
        </div>
        {/* Right side */}
        <div className='flex flex-wrap md:flex-col-2 lg:flex-col-4 justify-between'>
    <div>
     <h3 className='text-black py-2 font-semibold lg:text-2xl lg:font-bold font-mono'>Contact</h3>
        <p className='py-2 text-white inline-block'>FaFacebook</p>
        <p className='py-2 text-white'>TikTok</p>
        <p className='py-2 text-white'>Twitter</p>
        <p className='py-2 text-white'>Instagram</p>
        </div> 
            
        <div>
        <h3 className='text-black py-2 font-semibold lg:text-2xl lg:font-bold font-mono'>Products</h3>
        <p className='py-2 text-white'>Man Boski</p>
        <p className='py-2 text-white'>Man Kurta</p>
         <p className='py-2 text-white'>Man Shawls</p>
        </div>     
        <div className='hodden md:flex flex-col'>
         <h3 className='text-black py-2 font-semibold lg:text-2xl lg:font-bold font-mono'>Help</h3>
        <p className='py-2 text-white'>Support Center</p>
                <p className='py-2 text-white'>How to start?</p>
                <p className='py-2 text-white'>Payout process</p>
                <p className='py-2 text-white'>Privacy policy</p>
                <p className='py-2 text-white'>Terms of Use</p>
            </div>
        </div>
    </div>
    <hr className='w-full py-2 col-start-1 col-end-4'/>
    <small className='py-4 text-white text-start'>© 2025 YousufBin. All rights reserved.</small>
</footer>

{/* Footer Section End */}


   </>
  )
}

export default Footer