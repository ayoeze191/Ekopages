import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { ClipLoader } from 'react-spinners'
import { get_cart_total } from '../../../../store/Actions/Cart'
const CartTotals = ({submit}) => {
    const disptach = useDispatch()
    const total = useSelector((state) => state.cart.total)

    // console.log(total)

    useEffect(() => {
        disptach(get_cart_total())
    }, [])


  return (
      <div className='md:w-[42%] w-full'>
    <div className='font-lato px-[2rem] border-[1px] border-solid border-[#232323]  py-[3rem] rounded-[5px] h-fit'>
        <p className='mb-[1.5rem] text-[1.5rem] font-[500]'>Cart Totals</p>
        <div className='py-[1.5rem] flex justify-between border-solid border-y-[1px] border-[#9E9E9E]'>
            <p className='text-[1rem] font-[400]'>SUBTOTAL</p> <p className='font-[600]'>#{total? total: "null"}</p>
        </div>
        <div>
            <p className='py-[1.5rem] my-[1rem] text-[1rem] font-[400]'>
                SHIPPING
            </p>
            <div className='flex flex-col font-[500] text-[1rem] gap-[2rem]'>
                <div className='flex gap-[0.75rem] items-start'>
            <input type="radio" name="Lagos mainland" id="" className='w-[1.5rem] h-[1.5rem]'/>
            <label htmlFor="Lagos mainland">Lagos mainland #1000</label>
                </div>
                <div className='flex gap-[0.75rem] items-start'>
            <input type="radio" name="Lagos Island" id="" className='w-[1.5rem] h-[1.5rem]' />
            <label htmlFor="Lagos Island">Lagos Island #1500</label>
                </div>
                <div className='flex gap-[0.75rem] items-start box-content'>
                <input type="radio" name="Lagos mainland outskirts (Ikorodu, Berger, Mowe, Badagry shrink-0" id=""  className='w-[1.5rem] h-[1.5rem]'/>
                <label htmlFor="Lagos mainland outskirts (Ikorodu, Berger, Mowe, Badagry shrink-1">Lagos mainland outskirts (Ikorodu, Berger, Mowe, Badagry #2000)</label>
                </div>
                <div className='flex gap-[0.75rem] items-start'>
                <input type="radio" name="Lagos Island outskirts (Ibeju-Lekki" id="" className='w-[1.5rem] h-[1.5rem]'/>
                <label htmlFor="Lagos Island outskirts (Ibeju-Lekki">Lagos Island outskirts (Ibeju-Lekki #2000</label>
                </div>
                <div className='flex gap-[0.75rem] items-start'>
                <input type="radio" name="Other Western States (Oyo, Abeokuta, Ondo, Ekiti, Ogun   " id=""  className='w-[1.5rem] h-[1.5rem]'/>
                    <label htmlFor="Other Western States (Oyo, Abeokuta, Ondo, Ekiti, Ogun   " className=''>Other Western States (Oyo, Abeokuta, Ondo, Ekiti, Ogun  <div className='float-right'>GIG drop off: #2500</div> </label>
                </div>
                <div className='flex gap-[0.75rem] items-start'>
                <input type="radio" name="Eastern States ( Abia, Anambra, Ebonyi, Enugu, Imo," id="" className='w-[1.5rem] h-[1.5rem]'/>
                <label htmlFor="Eastern States ( Abia, Anambra, Ebonyi, Enugu, Imo,">Eastern States ( Abia, Anambra, Ebonyi, Enugu, Imo, <div className='float-right'>GIG drop off: #2500</div></label>
                </div>
                <div className='flex gap-[0.75rem] items-start'>
                    <input type="radio" name="Southern States ( Akwa Ibom, Bayelsa, Edo, Cross River, Rivers, Delta " id="" className='w-[1.5rem] h-[1.5rem]'/>
                    <label htmlFor="Southern States ( Akwa Ibom, Bayelsa, Edo, Cross River, Rivers, Delta ">
                    Southern States ( Akwa Ibom, Bayelsa, Edo, Cross River, Rivers, Delta <div className='float-right'>GIG drop off: #2500</div>
                    </label>
                </div>
                <div className='flex gap-[0.75rem] items-start'>
                    
            <input type="radio" name="Northern States ( Bauchi, Benue, Borno, Kano, Kastina, Kaduna, Plateau, Niger, Sokoto, Gombe, Jigawa, Kebbi state, Nassarawa, Yobe, Zamfara, Kwara" id=""className='w-[1.5rem] h-[1.5rem]' />
                    <label htmlFor="Northern States ( Bauchi, Benue, Borno, Kano, Kastina, Kaduna, Plateau, Niger, Sokoto, Gombe, Jigawa, Kebbi state, Nassarawa, Yobe, Zamfara, Kwara">
                    Northern States ( Bauchi, Benue, Borno, Kano, Kastina, Kaduna, Plateau, Niger, Sokoto, Gombe, Jigawa, Kebbi state, Nassarawa, Yobe, Zamfara, Kwara <div className='float-right'>GIG drop off: #2500</div>
                </label>
                </div>
                <div className='flex gap-[0.75rem] items-start'>
                <input type="radio" name="International Locations. See price list here " className='w-[1.5rem] h-[1.5rem]' id="" />
                    <label htmlFor="International Locations. See price list here">International Locations. See price list here
                    </label>
                </div>
            </div>

            <div className='mt-[4.5rem] py-[1.5rem] border-[#9E9E9E] border-y-solid border-y-[1px] flex justify-between font-[600]'>
               <span className='text-[20px]'> TOTAL: </span> <span className='text-[21px]'>#15,200</span> 
            </div>
        </div>
    </div>

    <button className='bg-[#5A0C91] py-[0.937rem] w-full text-center text-white text-[1.25rem] font-lato font-normal rounded-[5px] mt-[2rem]' type='submit'>Place Order</button>
    </div>
  )
}

export default CartTotals