import React from 'react'
import del from "./../../../../assets/cart/delete.png"
import TToN from "./../../../../assets/dashboard/orders/TToN.png"
import { useReducer } from 'react'
const ProductPending = ({image, Name, category, amount,author}) => {
    
  return (
    <div className='flex justify-between section font-lato border-b-solid border-b-[1px] border-b-[#BBBBBB] pb-[2.53125rem]'>
        <div className='flex gap-[3.25rem]'>
            <div>
            <img src={TToN} alt="" />
            </div>
            <div>
                <p className='font-[600] text-[1.5rem]'>{Name}</p>
                <p className='font-[400] font-[1rem]'>Written by: {author}</p>
                <p>Category: {category}</p>
            </div>
        </div>

        <div className='flex gap-[6.5rem] items-center'>
            <div className='border-[#705E5E] border-solid border-[1px]  flex items-center rounded-[0.3125rem]'>
                <button className='py-[0.32rem] px-[1rem] flex items-center'>-</button> 1 <button className='py-[0.32rem] px-[1rem] flex items-center'>+</button>
            </div>
            <p>
                Subtotal: {amount}
            </p>
            <div>
                <img src={del} alt="" />
            </div>
        </div>
    </div>
  )
}

export default ProductPending