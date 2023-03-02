import React from 'react'
import { useFormik } from 'formik'
const BillingDetails = () => {
  const formik = useFormik({
    initialValues: {
      "First_name": "",
      "Last_name": "",
      "Company_name": "",
      "country": "Nigeria",
      "street_address": "",
      "city": "lagos",
      "apartment": "",
      "state": "",
      "phone_number": "",
      "email": "",
      "shipping_location": ""
    }
  })


  return (
    <div className='font-lato w-full md:w-[57%]'>
        <div className='font-[400] text-[1rem]'>
        <div className='mb-[5rem]'>
        <input type="text" placeholder='Enter coupon code' name="" id="" className='py-[1rem] px-[2.1rem] bg-inherit border-solid border-[1px] border-[#9E9E9E] rounded-[5px]' />
        <button className='bg-[#5A0C91] text-white rounded-[5px] py-[1rem] px-[2.1rem]'>
        Apply Coupon
        </button>
        </div>
        </div>

        <div className='flex flex-col gap-[2.43rem] font-lato font-[400] text-[1rem]'>
                <p className='mx-auto font-[600] text-[1.5rem]'>BILLING DETAILS</p>
            <div className='flex flex-col gap-[2.5rem]'>
            <div className='flex gap-[2.5rem] flex-col md:flex-row'>
                <div className='flex flex-col gap-[0.5rem] flex-1'>First name <input type="text" placeholder='e.g Richard' className='py-[1rem] px-[1.5rem] rounded-[5px] border-[#9E9E9E] border-[1px] bg-inherit' /></div>
                <div className='flex flex-col gap-[0.5rem] flex-1'>Last name <input type="text" placeholder='e.g Daniels' className='py-[1rem] px-[1.5rem] rounded-[5px] border-[#9E9E9E] border-[1px] bg-inherit'/></div>
            </div>
            <div className='flex flex-col gap-[0.5rem]'>
            Company name (optional) <input type="text" className='py-[1rem] px-[1.5rem] rounded-[5px] border-[#9E9E9E] border-[1px] bg-inherit' />
            </div>
            <div className='flex flex-col gap-[0.5rem]'>
            Country
            <select className='py-[1rem] px-[1.5rem] rounded-[5px] border-[#9E9E9E] border-[1px] bg-inherit px-[1.26rem]' >
            <option value="ipod" >Nigeria</option>
            {/* <option value="radio">Afgahnister</option> */}
            {/* <option value="computer">Computer</option> */}
            </select>
            </div>
            <div className='flex flex-col gap-[0.5rem]'>
            Street Address <input type="text" className='py-[1rem] px-[1.5rem] rounded-[5px] border-[#9E9E9E] border-[1px] bg-inherit' placeholder='House number and street name'/>
            </div>
            <div className='flex flex-col gap-[0.5rem]'>
            Apartment, Suit or Unit (optional)
            <input type="text"  className='py-[1rem] px-[1.5rem] rounded-[5px] border-[#9E9E9E] border-[1px] bg-inherit'/>
            </div>
            <div className='flex flex-col gap-[0.5rem]'>
            Town / City
            <select className='py-[1rem] px-[1.5rem] rounded-[5px] border-[#9E9E9E] border-[1px] bg-inherit pr-[1.26rem]'>
            <option value="ipod">Lagos</option>
            {/* <option value="radio">Afgahnister</option> */}
            {/* <option value="computer">Computer</option> */}
            </select>
            </div>
            <div className='flex flex-col gap-[0.5rem]'>
            State
            <select className='py-[1rem] px-[1.5rem] rounded-[5px] border-[#9E9E9E] border-[1px] bg-inherit pr-[1.26rem]'>
            <option value="ipod">Lagos</option>
            {/* <option value="radio">Afgahnister</option> */}
            {/* <option value="computer">Computer</option> */}
            </select>
            </div>
            
            <div className='flex flex-col gap-[0.5rem]'>
            Phone number 
            <input type="text" name="" id="" className='py-[1rem] px-[1.5rem] rounded-[5px] border-[#9E9E9E] border-[1px] bg-inherit' />
            </div>
            <div className='flex flex-col gap-[0.5rem]'>
            Email Address (optional)
            <input type="text" className='py-[1rem] px-[1.5rem] rounded-[5px] border-[#9E9E9E] border-[1px] bg-inherit'/>
            </div>
            <div className='flex gap-[1rem] items-center'>
                
            <input type="checkbox" value={'Create an Account'} name="create Account" className='h-[2rem] w-[2rem]'/>
            <label htmlFor="create Account">create Account</label>
            </div>
            <div className='flex gap-[1rem] items-center'>
            <input type="checkbox" value={'Deliver to a Different Address?'} name="Deliver to a Different Address?" className='h-[2rem] w-[2rem]' />
            <label htmlFor="Deliver to a Different Address?">Deliver to a Different Address?</label>
            </div>
            <div className=' flex flex-col gap-[0.5rem] ' >
                Order Notes
                <textarea name="SpecialNotes" id="" cols="30" rows="5" placeholder='Special Notes about your delivery' className='border-[#9E9E9E] border-solid border-[1px] bg-inherit p-[1.5rem] rounded-[5px]'></textarea>
            </div>
            </div>
        </div>

    </div>
  )
}

export default BillingDetails