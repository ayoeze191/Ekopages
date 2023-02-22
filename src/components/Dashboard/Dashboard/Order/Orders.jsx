import React from 'react'
import { useState, useReducer } from 'react'
import { storeReducer, initialState } from '../../../../reducer/StoreCardReducer'
import ProductPending from './ProductPending'



const Orders = () => {
    const [status, setStatus] = useState(false)
    const [state, dispatch] = useReducer(storeReducer, initialState) 


    const style = ["border-[#888888] border-[1px] border-solid rounded-[5px] text-[#888888] text-[1rem] py-[0.5rem] px-[2.125rem]", "py-[0.5rem] px-[2.125rem] rounded-[5px] text-[#888888] text-[1rem] bg-[#C54D09] text-[white]"]

  return (
    <div className='pl-[1.68rem] pr-[5.0625rem] my-[6rem]'>
        <div className='mb-[4.68rem] flex justify-between '>
            <p>All Orders</p> <div className='flex gap-[1rem]'><button className={!status?style[1]:style[0]}>Pending</button><button className={status?style[1]:style[0]}>Completed</button></div> <div></div>
        </div>

    <div className='mb-[2.5625rem]'>
    {state.product.filter((pro) => pro.Name === "The Travails of Nkem").map(prod => <ProductPending {...prod} />)}
    </div>
    <div className='w-full flex justify-end'>
    <button className='bg-[#5A0C91] py-[0.9375rem] w-full max-w-[29rem] text-white rounded-[5px] font-lato font-[600] text-[1.25rem] '>
        Place Order
    </button>
    </div>
    </div>
  )
}

export default Orders