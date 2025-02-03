  
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Product from './Pages/Product'
import ProductDetails from './Pages/ProductDetails'
import Aboutus from './Pages/Aboutus'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Cart from './Pages/Cart'




const App = () => {

  return (
    <div>

<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/product' element={<Product/>}>
  <Route path='/product/:id' element={<Product/>}></Route>
  </Route>
  <Route path='/productdetails' element={<ProductDetails/>}></Route>
  <Route path='/aboutus' element={<Aboutus/>}></Route>
  <Route path='/contact' element={<Contact/>}></Route>
 <Route path="/login" element={<Login />} />
<Route path="/signup" element={<Signup />} />
<Route path="/cart" element={<Cart />} />

</Routes>

    </div>
  )
}

export default App