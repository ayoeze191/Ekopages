import React, {useEffect, useContext} from 'react'
import { useReducer } from 'react'
import { storeReducer, initialState } from '../../../../reducer/StoreCardReducer'
// import 
import ProductPending from './ProductPending'
import { motion } from 'framer-motion'
import Product from '../../../ShoppingCart/Products/Product'
import Products from '../../../ShoppingCart/Products/Products'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { get_cart } from '../../../../store/Actions/Cart'
import { useAuthContext } from '../../../../context/auth/auth'
import { cookieContext } from '../../../../App'
import { Link } from 'react-router-dom'

const PendingProducts = () => {
    const {isAuth} = useAuthContext()
    const {cookie} = useContext(cookieContext)

    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()
    //(cart)

  useEffect(() => {
    dispatch(get_cart({
      isAuth,
      session_id: cookie
  }))
  }, [])
  //(cart.cart)

  return (
    <div
    >
    <div className='mb-[2.5625rem]'>
   <Products />
    </div>
    <div className='w-full flex justify-end px-6 lg:px-0'>
   {cart.cart.length > 0 && <Link to={'/cart'} className='text-center bg-[#5A0C91] py-[0.9375rem] w-full md:max- md:w-[29rem] text-white rounded-[5px] font-lato font-[600] text-[1.25rem]'>
        Place Order
    </Link>
  }

    </div>
    </div>
  )
}

export default PendingProducts