import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useAuthContext } from '../../context/auth/auth'
import { cookieContext } from '../../App'
import { useContext } from 'react'
import { update_cart_items } from '../../store/Actions/Cart'
import useProduct from '../ShoppingCart/Products/useProduct'
import Vector15 from "./../../assets/EkoStore/Vector15.png"
import {ClipLoader} from "react-spinners"
import Shimmer from '../ui/Shimmer/Shimmer'
import AddToCartbtn from '../EkoStore/AddToCartbtn'
import { Add_to_cart } from '../../store/Actions/Cart'


const BookProductDetail = ({id, qty, cartit}) => {
    const dispatch = useDispatch();
    const {isAuth} = useAuthContext();
    const {cookie} = useContext(cookieContext);
    const {product, loading} = useProduct(id);
    const update__loading = useSelector((state) => state.cart)
    const [clicked, setClicked] = useState(false)

    const addTocart = () => {
        const authVerification = {
          isAuth,
          session_id: cookie
      }
          dispatch(Add_to_cart(id, authVerification))
      }


    const authVerification = {
        isAuth,
        session_id: cookie
    }


    const update_cart = (type, initialVal) => {
        console.log("updating ")
        let quantity = initialVal
        if(type === "add"){
            quantity = quantity + 1
        }
        else {
            quantity = quantity - 1
        }
      dispatch(update_cart_items(
        cartit,
        quantity,
        authVerification,
        type))
    }


  return (product?
    <div className='flex font-lato gap-[9px]'>
        <div className='w-[127px] h-[153px]'>
        <img className='w-full h-full' src={product.data.image} alt="" /> 
        </div>
        <div className='flex-1 flex flex-col gap-2'>
        <p className='font-[600] text-[1.25rem] font-lato'>
            {product.data.name}
        </p>
        <p className='font-[400] font-[1rem] text-[12px] md:text-[1rem]'>Written by: {loading? <Shimmer />:product.data.author}</p>
            <p className='text-green-600 font-[500] font-lato'>In Stock</p>
            <div>
                <div className='flex justify-between'>
                <p>N{product.data.price}</p>
                <p><img src={Vector15} alt='like button'/></p>
                </div>
                <div className='flex gap-4'>
                <div className='border-[#705E5E] border-solid border-[1px]  flex items-center rounded-[0.3125rem] w-fit'>
          <button className='px-[10px]  py-[3.2px] md:py-[0.32rem] md:px-[1rem] flex items-center text-[15px] md:text-[1rem]' onClick={() =>
              { update_cart('sub', qty)
              setClicked(true)
          }
          }
              >{update__loading.update_subloading && clicked ?<ClipLoader size={'15px'} />:"-"}</button> {qty} <button className='px-[10px]  py-[3.2px] md:py-[0.32rem] md:px-[1rem] flex items-center' onClick={() =>
              { update_cart('add', qty)
              setClicked(true)
              }}>{update__loading.update_addloading && clicked?<ClipLoader size={'15px'} />:"+"}</button>
      </div>
      <AddToCartbtn name={"Add to Cart"}
      add={addTocart}
      >
 
      </AddToCartbtn>
                </div>
            </div>
        </div>
    </div>:null
  )
}

export default BookProductDetail