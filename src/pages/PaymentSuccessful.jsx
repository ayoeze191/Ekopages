import React, { useEffect } from 'react'
import instance from '../axios'
import { tokenConfig } from '../Config/Config'
const PaymentSuccessful = () => {
  const [verificationSuccesfull, setVerificationSuccesfull] = useState(false)

    const VerifyPayment = () => {
        instance.get(`/cart_payment/payment/verify/${referenceValue}` +  tokenConfig())
        .then((res)=> {
          setVerificationSuccesfull(true)
        })
        .catch((err) => setVerificationSuccesfull(false))
    }
    const referenceValue = urlSearchParams.get('reference');
    useEffect(() => {
        VerifyPayment()
    })
  return (
    verificationSuccesfull? <div>
        <div className='flex justify-center flex-col items-center text-center gap-[29px]'>
<div className='flex flex-col gap-[16px]'>
 <p className='font-[700] font-lato text-[1.25rem] text-[#232323] md:text-[40px]'> We Have Received Your Payment.thanks four your patronage"</p>
 <p className='font-[400] font-lato text-[1rem] text-[#232323] md:text-[24px]'>
 Continue Using the app
 </p>
 </div>
 <button className='font-lato text-[1rem] text-[#E9E9E9] font-[500] bg-[#0d0c0e] py-[8px] px-[20px] rounded-[5px]' onClick={() => nav('/')}>
 Continue
 </button>
 </div>
    </div>
    :""
  )
}


export default PaymentSuccessful

// :"opps, we didn't receive any payment