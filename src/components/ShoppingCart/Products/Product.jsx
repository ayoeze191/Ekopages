import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import instance from '../../../axios';
import del from "./../../../assets/cart/delete.png"
import { SyncLoader, BarLoader } from 'react-spinners';
import { update_cart_items } from '../../../store/Actions/Cart';
import useProduct from './useProduct';
import { useAuthContext } from '../../../context/auth/auth';
import { useDispatch } from 'react-redux';

const Product = ({id, qty, cartit}) => {
    const {product, loading} = useProduct(id)
    const {isAuth} = useAuthContext()
    const dispatch = useDispatch()
    
    const update_cart = (type, initialVal) => {
        console.log("updating ")
        let quantity = initialVal
        if(type === "add"){
            quantity = quantity + 1
        }
        else {
            quantity = quantity - 1
        }
        console.log(cartit)
      dispatch(update_cart_items(cartit, quantity, isAuth))
    }
    // console.log(product)
    
  return (product?
    <div className='flex justify-between w-full  mx-auto max-w-[77rem] font-lato border-b-solid border-b-[1px] border-b-[#BBBBBB] py-[2.53125rem]' >
        <div className='flex gap-[13.15px] md:gap-[3.25rem]'>
            <div>
            <img className='w-[62.85px] h-[full]' src={product.data.image} alt="" />
            </div>
            <div>
                <p className='font-[600] text-[1rem] md:text-[1.5rem]'>{product.data.name}</p>
                <p className='font-[400] font-[1rem] text-[12px] md:text-[1rem]'>Written by: {product.data.author}</p>
                <p className='text-[9.96px] font-[500] md:text-[initial]'>Category: {product.data.category}</p>
            </div>
        </div>

        <div className='flex md:gap-[6.5rem] items-center flex-col md:flex-row justify-between'>
            <div className='border-[#705E5E] border-solid border-[1px]  flex items-center rounded-[0.3125rem]'>
                <button className='px-[10px]  py-[3.2px] md:py-[0.32rem] md:px-[1rem] flex items-center text-[15px] md:text-[1rem]' onClick={() => update_cart('substract', qty)}>-</button> {qty} <button className='px-[10px]  py-[3.2px] md:py-[0.32rem] md:px-[1rem] flex items-center' onClick={() => update_cart('add', qty)}>+</button>
            </div>
            <p className='text-[14px] md:text-[1rem] '>
                Subtotal: {product.data.price}
            </p>
            <div>
                <img src={del} className='w-[19.5px] h-[21px] md:w-initial md:h-initial' alt="" />
            </div>
        </div>
    </div>:loading? <div className='flex justify-center items-center'> <BarLoader /> </div> :<div> Couldnt Load Image </div>
  )
}

export default Product