import React, {  useRef, useState } from 'react'
import instance from '../../../axios'
import { toast } from 'react-toastify'
import { ClipLoader } from 'react-spinners'

const PasswordReset = () => {
  const email  = useRef(null)
  const [success, setSuccess] = useState(false)
  const [Loading, setLoading] = useState(false)

  const HandleClick = () => {
    setLoading(true)
    instance.post('/auth/password/reset/', {email: email.current.value})
    .then((res) => {
    setLoading(false)
      toast.success("A reset Link has been sent to You mail")
      setSuccess(true)
    })
  }
  return (
    <div className='bg-white w-full text-center flex flex-col items-center justify-center h-full'>
        <div className='w-full'>
            <h2  className='text-[#232323] font-semibold text-[34px] '>Password Reset</h2>
            <p className='mt-[6px] font-normal text-[19px] font-lato text-[#4A4A4A]'>
                Enter Your email address below and a reset link will be sent to you
            </p>
            <div className='  flex flex-col gap-[8px] w-full max-w-[326px]  mx-auto'>
              <p className='font-lato text-[1rem] font-semibold leading-[19.2px] mt-[24px] text-left '>  Email address </p>
                <input type='email'  className='max-w-[326px] w-full h-[40px] rounded-[5px] border border-solid border-[#CCB4DD] outline-none px-2' ref={email} />
            </div>
            <button disabled={success} className={`${success ? "bg-green-800":'bg-[#5A0C91]'} rounded-[10px] w-[216px] h-[59px] font-lato text-[24px] font-medium text-white mt-[40px]`}
            onClick={HandleClick}>Reset Password {Loading?<ClipLoader color='white' size='20px'/>:''}</button>
             <div className="text-green-700 text-[20px] mt-[10px]">{success?"Please Check your mail for reset link":""}</div>
        </div>
    </div>
  )
}

export default PasswordReset