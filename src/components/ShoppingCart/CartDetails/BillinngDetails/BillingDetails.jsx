import React, { useState } from 'react'
import { Formik, Field, Form, useFormik } from 'formik'
import { validate } from '../../../validate/validate'
import { useAuthContext } from '../../../../context/auth/auth'
import { useModalContext } from '../../../../context/modal/modal'
const BillingDetails = ({formik}) => {
  const {isAuth, } = useAuthContext()  
  const [create_an_account, setCreate_an_account] = useState(false)
  const {setSignupModal} = useModalContext()
  return (
    <div className='font-lato w-full md:w-[57%]'>
        <div className='font-[400] text-[1rem]'>
        <div className='mb-[5rem]'>
        <input type="text" placeholder='Enter coupon code' name="" id="" className='py-[1rem] px-[2.1rem] bg-inherit border-solid border-[1px] border-[#9E9E9E] rounded-[5px] relative -mr-[10px] x-[1]' />
        <button className='bg-[#5A0C91] text-white rounded-[5px] py-[1rem] px-[2.1rem] relative z-[10]'>
        Apply Coupon
        </button>
        </div>
        </div>

        <div className='flex flex-col gap-[2.43rem] font-lato font-[400] text-[1rem]'>
                <p className='mx-auto font-[600] text-[1.5rem]'>BILLING DETAILS</p>
            <div className='flex flex-col gap-[2.5rem]'>
            <div className='flex gap-[2.5rem] flex-col md:flex-row'>
                <div className='flex flex-col gap-[0.5rem] flex-1' >First name <input type="text" placeholder='e.g Richard' className='py-[1rem] px-[1.5rem] rounded-[5px] border-[#9E9E9E] border-[1px] bg-inherit' onChange={formik.handleChange} name='First_name' value={formik.values.First_name}/></div>
                <div className='flex flex-col gap-[0.5rem] flex-1'>Last name <input type="text" placeholder='e.g Daniels' className='py-[1rem] px-[1.5rem] rounded-[5px] border-[#9E9E9E] border-[1px] bg-inherit' onChange={formik.handleChange} name='Last_name' value={formik.values.Last_name}/></div>
            </div>
            <div className='flex flex-col gap-[0.5rem]'>
            Company name (optional) <input type="text" className='py-[1rem] px-[1.5rem] rounded-[5px] border-[#9E9E9E] border-[1px] bg-inherit' name='Company_name' value={formik.values.Company_name} onChange={formik.handleChange}/>
            </div>
            <div className='flex flex-col gap-[0.5rem]'>
            Country
            <select className='py-[1rem] px-[1.5rem] rounded-[5px] border-[#9E9E9E] border-[1px] bg-inherit px-[1.26rem]' name='country' value={formik.values.country} onChange={formik.handleChange}>
            <option value="Nigeria" >Nigeria</option>
            <option value="ghana">ghana</option>
            <option value="Cameroon">Cameroon</option>
            <option value="Austrailia">Austrailia</option>
            </select>
            </div>
            <div className='flex flex-col gap-[0.5rem]' >
            Street Address <input type="text" name='street_address' className='py-[1rem] px-[1.5rem] rounded-[5px] border-[#9E9E9E] border-[1px] bg-inherit' value={formik.values.street_address} onChange={formik.handleChange} placeholder='House number and street name'/>
            {formik.errors.street_address && formik.touched.street_address ? <p className="text-[12px] text-red-500 mt-4">{ formik.errors.street_address}</p>:null}
            </div>
            <div className='flex flex-col gap-[0.5rem]'>
            Apartment, Suit or Unit (optional)
            <input type="text" name='apartment' className='py-[1rem] px-[1.5rem] rounded-[5px] border-[#9E9E9E] border-[1px] bg-inherit' onChange={formik.handleChange} value={formik.values.apartment}/>
            
            </div>
            <div className='flex flex-col gap-[0.5rem]'>
            Town / City
            <input type="text" name='city' className='py-[1rem] px-[1.5rem] rounded-[5px] border-[#9E9E9E] border-[1px] bg-inherit' onChange={formik.handleChange} value={formik.values.city}/>
            {formik.errors.city && formik.touched.city ? <p className="text-[12px] text-red-500 mt-4">{ formik.errors.city}</p>:null}
            </div>
            <div className='flex flex-col gap-[0.5rem]'>
            State
            <select className='py-[1rem] px-[1.5rem] rounded-[5px] border-[#9E9E9E] border-[1px] bg-inherit pr-[1.26rem]' name='state' onChange={formik.handleChange} value={formik.values.state}>
            <option value="Lagos">Lagos</option>
            <option value="Oyo">Oyo</option>
            <option value="Ekiti">Ekiti</option>
            <option value="ondo">Ondo</option>
            <option value="Ogun">Ogun</option>

            </select>
            </div>
            
            <div className='flex flex-col gap-[0.5rem]'>
            Phone number 
            <input type="text" name="phone_number" id="" className='py-[1rem] px-[1.5rem] rounded-[5px] border-[#9E9E9E] border-[1px] bg-inherit' value={formik.values.phone_number} onChange={formik.handleChange}/>
            {formik.errors.phone_number && formik.touched.phone_number ? <p className="text-[12px] text-red-500 mt-4">{ formik.errors.phone_number}</p>:null}
            </div>
            <div className='flex flex-col gap-[0.5rem]'>
            Email Address {isAuth ? ("optional"):""}
            <input type="text" className='py-[1rem] px-[1.5rem] rounded-[5px] border-[#9E9E9E] border-[1px] bg-inherit' name='email' value={formik.values.email} onChange={formik.handleChange}/>
            {formik.errors.email && formik.touched.email ? <p className="text-[12px] text-red-500 mt-4">{ formik.errors.email}</p>:null}
            </div>
            {/* {isAuth && <div className='flex gap-[1rem] items-center'>
                
            <input type="checkbox" name="create_Account" checked={create_an_account} className='h-[2rem] w-[2rem]' onChange={() => setCreate_an_account(!create_an_account)  }/>
            <label htmlFor="create Account">create Account</label>
            </div>
} */}
            {/* <div className='flex gap-[1rem] items-center'>
            <input type="checkbox" value={'Deliver to a Different Address?'} name="Deliver to a Different Address?" className='h-[2rem] w-[2rem]' />
            <label htmlFor="Deliver to a Different Address?">Deliver to a Different Address?</label>
            </div> */}
            <div className=' flex flex-col gap-[0.5rem] ' >
                Order Notes
                <textarea name="Order_Notes" id="" cols="30" rows="5" placeholder='Special Notes about your delivery'  className='border-[#9E9E9E] border-solid border-[1px] bg-inherit p-[1.5rem] rounded-[5px]' onChange={formik.handleChange}></textarea>
            </div>
            </div>
        </div>

    </div>
  )
}

export default BillingDetails