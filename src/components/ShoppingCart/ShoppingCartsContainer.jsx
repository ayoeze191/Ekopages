import React from 'react'
import CartDetails from './CartDetails/CartDetails'
import Products from './Products/Products'
import ShoppingCartsText from './ShoppingCartsText'
import { useSelector } from 'react-redux'
const ShoppingCartsContainer = () => {
  const cart = useSelector(state => state.cart)


  // console.log(cart, "all cart")
  return (
    <div>
        <ShoppingCartsText />
        
        <Products />
        <CartDetails />
    </div>
  )
}

export default ShoppingCartsContainer