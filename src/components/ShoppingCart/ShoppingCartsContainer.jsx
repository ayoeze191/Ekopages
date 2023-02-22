import React from 'react'
import CartDetails from './CartDetails/CartDetails'
import Products from './Products/Products'
import ShoppingCartsText from './ShoppingCartsText'

const ShoppingCartsContainer = () => {
  return (
    <div>
        <ShoppingCartsText />
        
        <Products />
        <CartDetails />
    </div>
  )
}

export default ShoppingCartsContainer