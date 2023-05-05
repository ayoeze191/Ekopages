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
const PendingProducts = () => {
    const {isAuth} = useAuthContext()
    const {cookie} = useContext(cookieContext)

    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()
    console.log(cart)

  useEffect(() => {
    dispatch(get_cart({
      isAuth,
      session_id: cookie
  }))
  }, [])

  return (
    <motion.div style={{overflowX: "hidden"}}
    initial = {{marginRight:"-100%", opacity:0}}
            animate = {{marginRight: ["-100%", "0"], opacity: [0, 1]}}
            // exit={{opacity: 0, marginRight:"-100%"}}
            transition={{ duration: 0.5,}}
    >
    <div className='mb-[2.5625rem]'>
    {cart.cart.map(prod => <Product {...prod} cartit={prod.id} qty={prod.quantity} />)}
    </div>
    <div className='w-full flex justify-end'>
    <button className='bg-[#5A0C91] py-[0.9375rem] w-full md:max- w-[29rem] text-white rounded-[5px] font-lato font-[600] text-[1.25rem] '>
        Place Order
    </button>
    </div>
    </motion.div>
  )
}

export default PendingProducts