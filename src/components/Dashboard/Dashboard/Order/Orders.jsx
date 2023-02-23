import React from 'react'
import { useState, useReducer } from 'react'
import { storeReducer, initialState } from '../../../../reducer/StoreCardReducer'
import ProductPending from './ProductPending'
import bell from "./../../../../assets/dashboard/bell.png"


const Orders = () => {
    const [status, setStatus] = useState(false)
    const [state, dispatch] = useReducer(storeReducer, initialState) 


    const style = ["border-[#888888] border-[1px] border-solid rounded-[5px] text-[#888888] text-[1rem] py-[0.5rem] px-[2.125rem]", "py-[0.5rem] px-[2.125rem] rounded-[5px] text-[#888888] text-[1rem] bg-[#C54D09] text-[white]"]

  return (
    <div className='pl-[1.68rem] pr-[5.0625rem] my-[6rem]'>
      <div className='flex justify-between'>
        <div className='mb-[4.68rem] flex justify-between flex-col md:flex-row flex-1 items-center md:items-start'>
            <p className='font-[700] md:font-[500] md:text-[20px] text-[1.5rem] text-[#232323] mb-[22.5px] md:mb-[0px] font-lato'>My Orders</p> <div className='flex gap-[1rem] text-[11.25px] font-[400] md:font-[500] md:text-[1rem]'><button className={!status?style[1]:style[0]}>Pending</button><button className={status?style[1]:style[0]}>Completed</button></div> <div></div>
        </div>
        <div>
              <img src={bell} alt="" />
            </div>
      </div>
    <div className='mb-[2.5625rem]'>
    {state.product.filter((pro) => pro.Name === "The Travails of Nkem").map(prod => <ProductPending {...prod} />)}
    </div>
    <div className='w-full flex justify-end'>
    <button className='bg-[#5A0C91] py-[0.9375rem] w-full md:max-w-[29rem] text-white rounded-[5px] font-lato font-[600] text-[1.25rem] '>
        Place Order
    </button>
    </div>
    </div>
  )
}

export default Orders