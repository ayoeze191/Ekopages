import React from 'react'
import assets from "./../../../assets/NavHeader/export"
import { useSignupContext } from '../../../context/auth/signup'
import {BsXLg} from "react-icons/bs"
const AccountSuccesfullyCreated = () => {
  const {setaccountSuccessfullycreatedModal} = useSignupContext()
  return (
    <div className='h-[90vh] flex flex-col items-center justify-center'>
      <div className='h-mx-auto w-full  flex justify-center items-center'>
        <div className='mx-auto w-32'>
      <img src={assets.Logo}  className='w-full'/>
        </div>
      </div>

      <div className='flex gap-6 w-full flex-col py-10'>
        <div>
        <p className='font-bold text-center text-[20px] md:text-3xl'>Great!</p>
        <p className='text-center'>You have succesfully created an account <br /> check your email for verification</p>
        </div>
        <button className='w-fit mx-auto rounded-3xl px-10 py-2 text-white bg-red-500 text-lato flex gap-2 items-center' onClick={() => setaccountSuccessfullycreatedModal()}>
         <BsXLg size={'20px'}/> <p> Close </p>
        </button>
      </div>
    </div>
  )
}

export default AccountSuccesfullyCreated