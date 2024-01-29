import React, { useEffect, useState } from 'react'
import instance from '../../axios'
import { useLocation, useNavigate, useParams } from "react-router-dom"

import { tokenConfig } from '../../Config/Config'
import { ClipLoader, FadeLoader } from 'react-spinners'


const PaymentSuccessful = () => {
  const [verificationSuccesfull, setVerificationSuccesfull] = useState(false)
  const [loading, setLoading]  = useState(false)
  const urlSearchParams = new URLSearchParams(window.location.search);
  const nav = useNavigate()
  const referenceValue = urlSearchParams.get('reference');
    const VerifyPayment = () => {
        setLoading(true)
        instance.get(`/cart_payment/payment/verify/${referenceValue}` , tokenConfig())
        .then((res)=> {
          setVerificationSuccesfull(true)
          setLoading(false)
        })
        .catch((err) => {
          setVerificationSuccesfull(false);
          setLoading(false)
        } )
    }
    useEffect(() => {
        VerifyPayment()
    })
  return (
    loading == true ? <div className='mx-auto min-h-[50vh] mt-[20px]'>
      <ClipLoader />
    </div>:verificationSuccesfull == true ? <div>
        <div className='flex justify-center flex-col items-center text-center gap-[29px] mx-auto mb-10 min-h-[50vh]'>
<div className='flex flex-col gap-[16px] mx-auto'>
 <p className='font-[700] font-lato text-[1.25rem] text-[#232323] md:text-[40px]'> Payment Received</p>
 <p className='font-[400] font-lato text-[1rem] text-[#232323] md:text-[24px]'>
 Continue Using the app
 </p>
 </div>
 <button className='font-lato text-[1rem] text-[#E9E9E9] font-[500] bg-[#0d0c0e] py-[8px] px-[20px] rounded-[5px] w-fit mx-auto ' onClick={() => nav('/ekostore')}>
 Continue
 </button>
 </div>
    </div>
    :<div className='min-h-[50vh] mx-auto flex flex-col items-center mt-5'><div className='flex flex-col gap-[16px] mx-auto'>
    <p className='font-[700] font-lato text-[1.25rem] text-[#232323] md:text-[40px]'> Payment NOT Received</p>
    <p className='font-[400] font-lato text-[1rem] text-[#232323] md:text-[24px]'>
    </p>
    </div>
    <button className=' mb-10 font-lato text-[1rem] text-[#E9E9E9] font-[500] bg-[#0d0c0e] py-[8px] mx-auto px-[20px] rounded-[5px] w-fit ' onClick={() => nav('/ekostore')}>
    Continue
    </button>
    </div>
  )
}


export default PaymentSuccessful

// :"opps, we didn't receive any payment
