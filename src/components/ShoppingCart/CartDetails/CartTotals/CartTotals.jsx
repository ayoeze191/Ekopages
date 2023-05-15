import React, {useContext} from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { ClipLoader, MoonLoader } from 'react-spinners'
import { useAuthContext } from '../../../../context/auth/auth'
import { get_cart_total } from '../../../../store/Actions/Cart'
import { cookieContext } from '../../../../App'
import { TbLoaderQuarter,  } from 'react-icons/tb'
import { useState } from 'react'
import instance from '../../../../axios'
import { BeatLoader } from "react-spinners"





const CartTotals = ({formi, Locations,OverallAmount, loading}) => {
    const disptach = useDispatch()
    const {isAuth} = useAuthContext()
    const total = useSelector((state) => state.cart.total)
    const total_loading = useSelector((state) => state.cart.total_loading)
    const cart = useSelector(state => state.cart.cart)
    const {cookie} = useContext(cookieContext)
    
  


   


    useEffect(() => {
        disptach(get_cart_total({
            isAuth,
            session_id: cookie
        }))
    }, [cart])

    


    


  return (
      <div className='md:w-[42%] w-full'>
    <div className='font-lato px-[2rem] border-[1px] border-solid border-[#232323]  py-[3rem] rounded-[5px] h-fit'>
        <p className='mb-[1.5rem] text-[1.5rem] font-[500]'>Cart Totals</p>
        <div className='py-[1.5rem] flex justify-between border-solid border-y-[1px] border-[#9E9E9E]'>
            <p className='text-[1rem] font-[400]'>SUBTOTAL</p> <p className='font-[600]'>{total?total:total_loading ?<ClipLoader size={'2rem'} color='#5A0C91' />:0}</p>
        </div>
        <div>
            <p className='py-[1.5rem] my-[1rem] text-[1rem] font-[400]'>
                SHIPPING
            </p>
            <div className='flex flex-col font-[500] text-[1rem] gap-[2rem]'>
                {Locations.map((loc) => <div className='flex gap-[0.75rem] items-start'>
            <input type="radio" value={loc.id} id="" className='w-[1.5rem] h-[1.5rem]' onChange={formi.handleChange} name="shipping_location"/>
            <label htmlFor={loc.location}>{loc.location} {loc.price}</label>
                </div>)}                
            </div>

            <div className='mt-[4.5rem] py-[1.5rem] border-[#9E9E9E] border-y-solid border-y-[1px] flex justify-between font-[600]'>
               <span className='text-[20px]'> TOTAL: </span> <span className='text-[21px]'>{OverallAmount}</span> 
            </div>
            <div>
                <input type="hidden" name="amount" id="amount" value={total?total:null} onChange={formi.handleChange}/>
            </div>
        </div>
    </div>

    <button className='bg-[#5A0C91] py-[0.937rem] w-full text-center text-white text-[1.25rem] font-lato font-normal rounded-[5px] mt-[2rem]' type='submit' onClick={() => formi.handleSubmit()}>{loading?<BeatLoader color="#ffffff" ></BeatLoader>:"Place Order"}</button>
    </div>
  )
}

export default CartTotals