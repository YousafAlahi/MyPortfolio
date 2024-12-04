// import Navbar from "./components/Navbar";
import {Routes, Route} from 'react-router-dom'
import Boski from './components/Boski'
import WashWear from './components/WashWear'
import Kurta from './components/Kurta'
import MenShawl from './components/MenShawl'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Faq from './components/Faq'



function App() {
  return (
    <>
      <div className="overflow-hidden">
        <Navbar/>
       <Routes>
        <Route path='' element={<Boski/>}/>
        <Route path='WashWear' element={<WashWear/>}/>
        <Route path='Kurta' element={<Kurta/>}/>
        <Route path='MenShawl' element={<MenShawl/>}/>
       </Routes>
        <Faq/>
       <Footer/>
       </div>
    </>
  )
}

export default App
