import React from 'react'
import Vector15 from "./../../assets/EkoStore/Vector15.png"
import Star from "./../../assets/EkoStore/Star.png"
import { Add_to_cart } from '../../store/Actions/Cart'
import { useDispatch, useSelector } from 'react-redux'
import { finished_adding } from '../../store/reducers/Cart'

import AuthButton from '../authButton'
import AddToCartbtn from './AddToCartbtn'
import { useNavigate } from 'react-router-dom'
const StoreCard = ({name, image, available, author, price, id}) => {
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const addTocart = () => {
    dispatch(Add_to_cart(id))
  }

  if(cart.success) {
    navigate('/cart')
    dispatch(finished_adding())
  }



  //(image)
  const myArray = [Star, Star, Star, Star, Star]
  return (
    <div className='storecard flex items-center justify-center flex-col px-[2rem] pb-[2.5rem] w-full h-[420px]'>
        <div className='w-full'>
            {image ?<div className='relative mb-[2rem] -mt-24'><img src={image}  className='mx-auto w-[14.6875rem] h-[12.5625rem]' /></div>:null}
            <div className='flex justify-between font-lato font-[700] text-1.47rem mb-[0.5rem]'>{name}<p><img src={Vector15} /></p></div>
            <div className='font-lato font-[400] text-[1.125rem]'>Written by: {author}</div>
            <div className='flex gap-2 my-2 justify-left'>
              {
               myArray.map((value ,index) => <img src={value} key={index} /> ) 
              }
              
            </div>
            <div className='text-[0.8rem] mb-[1rem]'>{available?'In Stock': ''}</div>
        </div>
        
        <div className='flex justify-between w-full w-full border-t-solid pt-[2.68rem] border-t-[rgba(90, 12, 145, 0.5)] border-t-[0.15rem]'>
            <div className='font-[500] text-[1.68rem] font-lato'>
                #{price}
            </div>
            {/* <button className='px-[1.18rem] bg-[#5A0C91] text-[#ffffff] py-[0.656rem] rounded-[0.3125rem] font-lato font-[500] text-[1rem]' onClick={() => dispatch(Add_to_cart(id))}>
            
            </button> */}
            <AddToCartbtn name={"Add to Cart"} isLoading={(cart.prodid===id && cart.loading)? true:false} add={addTocart}></AddToCartbtn>
        </div>
    </div>
  )
}

export default StoreCard