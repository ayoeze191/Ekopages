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

// disptach(get_cart(authVerification))
console.log(cart, "the cart")
}, [])

  return (
    cart.cart?
    <div className='px-6 lg:px-0'>
        <p className='text-[#5A0C91] md:hidden'>Continue Shopping</p>
        {cart.cart.map((prod) => <Product id={prod.product} cartit={prod.id} qty={prod.quantity}/>)}
    </div>: "No Product"
  )
}

export default Products 