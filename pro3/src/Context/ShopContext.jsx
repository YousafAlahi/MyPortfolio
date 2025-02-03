import { createContext} from "react"
import { ProductData } from "../assets/data"; 
import { useState } from "react";



export const ShopContext = createContext(null);


const ShopContextProvider = (props) => {

 const [cartItems, setCartItems] = useState({});

const addToCart = (id) => {
  setCartItems((prev) => ({
    ...prev,
    [id]: (prev[id] || 0) + 1, // Increment the quantity or initialize to 1
  }));
};

const removeFromCart = (id) => {
  setCartItems((prev) => {
    const updatedCart = { ...prev };
    if (updatedCart[id] > 1) {
      updatedCart[id] -= 1; // Decrease the quantity
    } else {
      delete updatedCart[id]; // Remove the item if quantity reaches 0
    }
    return updatedCart;
  });
};
 const ContextValue = {ProductData, cartItems, setCartItems, addToCart, removeFromCart}

// const ContextValue = {ProductData}

  return (
    <ShopContext.Provider value={ContextValue}>
    {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider
