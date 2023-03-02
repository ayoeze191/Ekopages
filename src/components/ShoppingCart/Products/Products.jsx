import React from 'react'
// import nkem from "./../../assets/EkoStore/nkem.png";
import { useReducer } from 'react';
import { useSelector } from 'react-redux';
import GeneralUiOverlay from '../../ui/GeneralUiOverlayLoader';
// import { intialState } from '../../../reducer/Nav';
import Product from './Product';




const Products = () => {
  const cart = useSelector(state => state.cart)
  console.log(cart, "get calaa")
  //  const [state, dispatch] = useReducer(storeReducer, initialState) 
  return (
    cart.cart?
    <div className='px-6 lg:px-0'>
        <p className='text-[#5A0C91] md:hidden'>Continue Shopping</p>
        {cart.cart.map((prod) => <Product id={prod.product}/>)}
    </div>: cart.cartLoading?<GeneralUiOverlay />:"no product"
  )
}

export default Products 