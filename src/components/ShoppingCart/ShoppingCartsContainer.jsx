import React , {useEffect} from 'react'
import CartDetails from './CartDetails/CartDetails'
import Products from './Products/Products'
import ShoppingCartsText from './ShoppingCartsText'
import { useSelector, useDispatch } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
// import { get_cart } from '../../store/Actions/Cart' 


const ShoppingCartsContainer = () => {
  const cart = useSelector(state => state.cart)
  const navigate = useNavigate()


  return (
    <div className='bg-white'>
        <ShoppingCartsText />
        <Products />
        <>
        { cart.length>0?
        <CartDetails />:<div className='w-full flex justify-center items-center mt-[56px] mb-[155px]'> <button onClick={() => navigate('/ekostore')} className='font-[400] text-[#E9E9E9] py-[15px] px-[30px] bg-[#5A0C91] rounded-[5px] font-lato mx-auto text-sm md:text-base'>Return to Eko Store</button></div>
        }
        </>
    </div>
  )
}
export default ShoppingCartsContainer