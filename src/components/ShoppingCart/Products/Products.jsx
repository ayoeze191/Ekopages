import React, {useEffect, useContext} from 'react'
// import nkem from "./../../assets/EkoStore/nkem.png";
import { useReducer } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import GeneralUiOverlay from '../../ui/GeneralUiOverlayLoader';
// import { intialState } from '../../../reducer/Nav';
import Product from './Product';
import { get_cart } from '../../../store/Actions/Cart';
import { useAuthContext } from '../../../context/auth/auth';
import { cookieContext } from '../../../App';
import withErrorHandler from '../../withErrHandler';
import instance from '../../../axios';
import withCartErrorHandler from '../CartDetails/CartErrorHandler';
import { ClipLoader, MoonLoader } from 'react-spinners'



const Products = () => {
  const {isAuth} = useAuthContext()
  const disptach = useDispatch()
  const {cookie} = useContext(cookieContext)
  const cart = useSelector(state => state.cart)


  console.log(isAuth)

useEffect(() => {
  const authVerification = {
    isAuth,
    session_id: cookie
}

disptach(get_cart(authVerification))
console.log(cart.cart, "the cart")
}, [cart.cart])


  return (
    cart.cart?
    <div className='px-6 lg:px-0'>
        <p className='text-[#5A0C91] md:hidden'>Continue Shopping</p>
          {cart.cart.length > 0? cart.cart.map((prod) => <Product id={prod.product} cartit={isAuth?prod.id:prod.id} qty={prod.quantity}/>):<div className='h-[2rem] mt-[1rem] text-red-500 text-center font-Poppins '>Your cart is empty Consider Adding Product to the cart</div>}
        {}
    </div>:cart.cartLoading? <div className='mx-auto w-full flex justify-center mx-center mt-20px'> <ClipLoader color='#5A0C91' className='mx-auto'/> </div>  : "No Product"
    )
}

// export default withErrorHandler(Products, instance)

export default Products