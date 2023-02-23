import React from 'react'
import del from "./../../../../assets/cart/delete.png"
import TToN from "./../../../../assets/dashboard/orders/TToN.png"
import { useReducer } from 'react'
const ProductPending = ({image, Name, category, amount,author}) => {
    
  return (
    <div className='flex justify-between section font-lato md:border-b-solid md:border-b-[1px] md:border-b-[#BBBBBB] pb-[2.53125rem]'>
         <div className='flex gap-[13.15px] md:gap-[3.25rem]'>
            <div>
            <img className='w-[62.85px] h-[full]' src={image} alt="" />
            </div>
            <div>
                <p className='font-[600] text-[1rem] md:text-[1.5rem]'>{Name}</p>
                <p className='font-[400] font-[1rem] text-[12px] md:text-[1rem]'>Written by: {author}</p>
                <p className='text-[9.96px] font-[500] md:text-[initial]'>Category: {category}</p>
            </div>
        </div>

        <div className='flex md:gap-[6.5rem] items-center flex-col md:flex-row justify-between'>
            <div className='border-[#705E5E] border-solid border-[1px]  flex items-center rounded-[0.3125rem]'>
                <button className='px-[10px]  py-[3.2px] md:py-[0.32rem] md:px-[1rem] flex items-center text-[15px] md:text-[1rem]'>-</button> 1 <button className='px-[10px]  py-[3.2px] md:py-[0.32rem] md:px-[1rem] flex items-center'>+</button>
            </div>
            <p className='text-[14px] md:text-[1rem] '>
                Subtotal: {amount}
            </p>
            <div>
                <img src={del} className='w-[19.5px] h-[21px] md:w-initial md:h-initial' alt="" />
            </div>
        </div>
    </div>
  )
}

export default ProductPending