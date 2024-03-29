import React, {useEffect, useContext, useRef} from 'react'
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
import { ClipLoader, MoonLoader } from 'react-spinners'
import { memo } from 'react';
import { BsCart } from 'react-icons/bs';
import { Link } from 'react-router-dom'

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    if(ref.current != value){
    ref.current = value;
    }
  });
  return ref.current;
}


const Products = () => {

  const {isAuth} = useAuthContext()
  const disptach = useDispatch()
  const {cookie} = useContext(cookieContext)
  const cart = useSelector(state => state.cart)
  const prevAmount = usePrevious(cart.cart)

useEffect(() => {
  const authVerification = {
    isAuth,
    session_id: cookie
}

disptach(get_cart(authVerification))

}, [cart.total])

  return (
    cart.cart?
    <div className='px-6 lg:px-0'>
        <Link to='/ekostore' className='text-[#5A0C91] md:hidden'>Continue Shopping</Link>
          {cart.cart.filter((prod) => prod.quantity !== 0).length > 0? cart.cart.map((prod) => <Product id={prod.product} cartit={isAuth?prod.id:prod.id} qty={prod.quantity}/>):
          <div className='border-t-[orange] border-t-solid border-t-2 py-[14.2px] px-[17.8px] items-center font-[400] text-[12px] md:text-base font-lato mt-[1rem] text-[#4A4A4A] text-center bg-[#F8F8F8] w-fit mx-auto flex gap-2 md:gap-[17.9px]' >
            <div><BsCart className=''></BsCart></div>
            <p> Your Cart is currently empty consider adding some product</p>
          </div>}
    </div>:cart.cartLoading? 
    <div className='mx-auto w-full flex justify-center mx-center mt-20px'> <ClipLoader color='#5A0C91' className='mx-auto'/> </div> : 
    "No Product"
    )
}

export default  Products
