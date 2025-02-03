 import Faq from "../Components/Faq"
import Footer from "../Components/Footer"
import Hero from "../Components/Hero"
  import Navbar from "../Components/Navbar"
//import Navbbar from "../Components/Navbbar"

const Home = () => {
  return (
    <div>
        <Navbar/> 
      {/* <Navbbar/> */}
      <Hero/>
        <Faq/>
      <Footer/>
     
      
    </div>
  )
}

export default Home