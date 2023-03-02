import React, {useEffect} from 'react'
// import nkem from "./../../assets/EkoStore/nkem.png";
import { useReducer } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import GeneralUiOverlay from '../../ui/GeneralUiOverlayLoader';
// import { intialState } from '../../../reducer/Nav';
import Product from './Product';
import { get_cart } from '../../../store/Actions/Cart';





const Products = () => {
  const disptach = useDispatch()
  const cart = useSelector(state => state.cart)

useEffect(() => {
  disptach(get_cart())
}, [])

  console.log(cart, "get calaa")
  //  const [state, dispatch] = useReducer(storeReducer, initialState) 
  return (
    cart.cart?
    <div className='px-6 lg:px-0'>
        <p className='text-[#5A0C91] md:hidden'>Continue Shopping</p>
        {cart.cart.map((prod) => <Product id={prod.product}/>)}
    </div>: "no product"
  )
}

export default Products 