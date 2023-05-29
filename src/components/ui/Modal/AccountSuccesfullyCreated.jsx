import React from 'react'
import image from "./../../../assets/emailverification/creationsuccesful.png"
import { useSignupContext } from '../../../context/auth/signup'
import {BsXLg} from "react-icons/bs"
const AccountSuccesfullyCreated = () => {
  const {setaccountSuccessfullycreatedModal} = useSignupContext()
  return (
    <div className=' flex flex-col items-center justify-center font-lato text-center p-10 gap-[29.63px] '>
      <div className='h-mx-auto w-full  flex justify-center items-center'>
        <div className='mx-auto'>
      <img src={image}  className='w-full h-full'/>
        </div>
      </div>
      <div className='flex flex-col gap-[16px]'>
      <p className='font-[600] text-[20px] text-[#232323] md:text-[28px] '>
        Account successfully created!
      </p>
      <p className='font-[400]  text-[14px] md:text-[1rem]'>
      A confirmation link has been sent to your email address.
      </p>
      </div>
      <p className='font-[400] text-base mt-3'>
      Didn’t receive the mail? <span className='text-[#5A0C91]'> Resend confirmation link </span>
      </p>
    </div>
  )
}
export default AccountSuccesfullyCreated