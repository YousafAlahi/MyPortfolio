
import Navbar from '../Components/Navbar';
import About1 from '../assets/my1.png';
import { Link } from 'react-router-dom';
import { FaWindows } from "react-icons/fa6";
import About2 from '../assets/about2.svg';
import About3 from '../assets/about3.svg';
import About4 from '../assets/about4.svg';
import About5 from '../assets/about5.svg';
import About6 from '../assets/about6.svg';
import About7 from '../assets/about7.svg';
// import About8 from '../assets/new1.jpg';
// import About9 from '../assets/new2.jpg';
import About11 from '../assets/user1.png';
import About12 from '../assets/payout2.png';
import About13 from '../assets/payout2.png';
import Footer from '../Components/Footer';









const ImgData1 = [
  {
    id: 7,
    image: About2,
    name: "YousufBin overview: highlights of previous years",
    subtitle: "In 2020, we conducted our first User Experience and Awareness Survey to get to know the YousufBin community better. Out of 15,000+ respondents, 82.8% said they’d recommend Honeygain to their friends and.",
    button : "Download Report >",
  },
  {
    id: 8,
    image: About3,
    name: "User experience and awareness survey report 2021",
    subtitle: "With our User Experience and Awareness Survey, we learned YousufBin has an extremely active user base:we received just under 250,000 responses, and a whopping 91.02% of our users said they check their",
     button : "Download Report >",
  },
  {
    id: 9,
    image:About3,
    name: "User experience and awareness survey report 2020",
    subtitle: "In 2020, we conducted our first User Experience and Awareness Survey to get to know the YousufBin community better. Out of 15,000+ respondents, 82.8% said they’d recommend Honeygain to their friends and",
     button : "Download Report >",
  },
 
]


const ImgData2 = [
    {
        id: 1,
        image: About4,
    },
    {
        id: 2,
        image:About5,
    },
    {
        id: 3,
        image :About6,
    },
    {
        id: 4,
        image: About7,
    },
    // {
    //     id: 5,
    //     image: About8,
    // },
    // {
    //     id: 6,
    //     image: About9,
    // }
];

const ImgData3 = [
  {
      id: 10,
      image: About11,
      title: "2 500, 000+",
      sub : "User on Honeygain",
      
  },
  {
      id: 11,
      image:About12,
      title: "20, 000 +",
      sub : "payouts completed",
      
  },
  {
      id: 12,
      image :About13,
      title: "$26.58",
      sub : "Average payout sum",
      
  },
];



const Aboutus = () => {

  return (
<>
  <Navbar/>   
<section className="container max-w-[1440px] w-full lg:h-[400px] md:h-[650] min-h-[550px] bg-sky-700 text-black">

<div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-2 py-4 md:py-2">

 <div className="flex flex-col mt-6">
 <h1 className="text-2xl font-semibold md:text-4xl lg:text-6xl md:font-semibold md:py-10 py-2 text-white">About us</h1>
<p className='py-4 leading-loose text-white'>Armed with absolute transparency and user engagement, our team strives to build the best residential proxy network in the world. </p>
 <Link to={""} className='relative top-0 left-0 mt-4'>
 <FaWindows className='absolute top-5 left-4 text-white text-[16px]'/>
<button className='px-10 py-4 border-none bg-black rounded-lg text-white cursor-pointer'>Download for Windows</button></Link>
 </div>
 <div className="flex items-center justify-center">
 <img src = {About1} width={542} height={542}/>
</div>
  </div>
       
</section>

{/* 2nd Section Start */}
<section className='container max-w-[1440px] w-full py-8 lg:py-12 bg-slate-200 h-[550px]'>

<div className='grid grid-cols-1 place-content-center place-items-center '>
  <h1 className='text-xl lg:text-2xl font-bold py-6'>Our story</h1>
  <small className='w-96'>In 2019, the YousufBin team launched a cutting-edge product – a <span className='font-bold'>crowdsourced residential proxy network.</span> We knew from the start that creating direct value for our end-users won’t be enough: we had to make a long-term commitment to positively impact the proxy industry suffering from transparency issues.</small>

<small className='w-96 py-8'>Our team had a unique advantage: we were familiar with the industry and worked with seasoned providers who could provide us with exclusive insights into what the industry lacked. We launched successfully by <span className='font-bold'>onboarding real people</span> from around the world, explaining clearly what their network connection is used for, and compensating them adequately for participating.</small>

<small className='w-96'>We are proud to have such a strong audience that uses the app daily, actively discusses how YousufBin works and engages with us on social networks. Having reached millions already, we continue to improve YousufBin and invite even more people to discover it as the <span className='font-bold'>best passive income source</span> out there!</small>
</div>
</section>

                                        {/* 3rd Section End  */}

<section className="container max-w-[1440px] w-full py-2 lg:py-4 lg:h-[600px] md:h-[700] h-[950px] text-black mt-2 lg:mt-24 bg-sky-100/50">

<h1 className='text-xl md:text-2xl lg:text-3xl font-medium md:font-semibold lg:font-bold pt-4 pb-8 text-center'>Reports and documents</h1>
<div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-between place-self-center gap-4'>
  {ImgData1.map((list)=>{
    return(
      <div key={list.id} className='border-2 border-slate-600 p-4 rounded-2xl'>
        <div className='flex flex-col gap-4 py-6 '>
          <img src={list.image} width={50} height={50} className='rounded-full'/>
          <div>
            <p className='text-black font-semibold'>{list.name}</p>
            <small className='text-slate-600'>{list.subtitle}</small>
            <button className='text-blue-500 pt-8'>{list.button}</button>
            </div>
           </div>
        </div>
    ) 
  })}
</div>
</section>
                                        {/* 3rd Section End  */}
                                         {/* 4th Section Start Now  */}

     <div className="h-[250px] lg:h-[250px] container mt-96 lg:mt-2">
            <h1 className="text-center py-2 lg:py-8 text-xl md:text-2xl lg:text-3xl md:font-semibold">Explore our communities!</h1>
            <p className='text-center text-slate-600 pb-8'>Buzz with other YousufBin, get the latest news and enter contests.</p>
            <div className="flex items-center justify-center flex-wrap md:gap-6 flex-wrap">
               {ImgData2.map((item)=> {
                return(
                    <div key={item.id}>
                        <img src={item.image} width={50} height={50} className='cursor-pointer'/>
                    </div>
                )
               })}
            </div>
    </div>
                            {/* 4th Section EEnnnDD  */}
                           {/* 5th Section Start Now  */}

     <div className="h-[500px] lg:h-[250px] max-w-[1440px] w-full container lg:mt-2 mb-8">
            <h1 className="text-center py-8 text-xl md:text-2xl lg:text-3xl md:font-semibold">Some quick numbers</h1>
            <div className="flex items-center justify-center flex-wrap md:gap-6">
               {ImgData3.map((item)=> {
                return(
                    <div key={item.id} className='flex flex-col justify-center border-2 border-black py-4 px-8 rounded-2xl bg-slate-300'>
                        <img src={item.image} width={50} height={50} className='cursor-pointer m-auto'/>
                        <p className='font-bold py-2 text-center'>{item.title}</p>
                        <small>{item.sub}</small>
                    </div>
                )
               })}
            </div>
    </div>
                            {/* 5th Section EEnnnDD  */}
 <Footer/>
</>

  )
}

export default Aboutus