import React from 'react'
import { useEffect, useState } from 'react'
import { useRef } from 'react'
import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useAuthContext } from '../context/auth/auth';
import instance from "./../axios.js"
import { BounceLoader } from 'react-spinners'
import {FcApproval} from 'react-icons/fc'
import {BiError} from "react-icons/bi";
import verificationsuccesful from "./../assets/emailverification/verificationsuccesful.png" 
import { Navigate } from 'react-router-dom'
import { useModalContext } from '../context/modal/modal'

const VerifyEmail = () => {
    const {token} = useParams()
    const [isloading, setIsloading] = useState(true)
    const [success, seSuccess] = useState(false)
    const [failed, setFailed] = useState(null)
    const {setLoginModal} = useModalContext()
    const {isAuth} = useAuthContext()

    const verifyEmail = (token) => {

      instance.post("registration/verify-email/", {key: token})
      .then((res) => {
        //(res.data)
        setIsloading(false)
        seSuccess(true)
      })
      .catch((err) => {
        //("error", err.response)
        setIsloading(false)
        setFailed("Couldnt Verify Your email")
      })
    }
   
  useEffect(() => {
    verifyEmail(token)
  }, [])  
  
  return (
    <div className='mx-auto h-[50vh] flex items-center font-Poppins px-7 md:px-0 justify-center'>
      {isAuth?<Navigate to='/' />:null}
        {isloading?
        <div className='flex justify-center flex-col items-center'>
          <div >
          <BounceLoader color='#5A0C91'/>
          </div>
          <p> Please wait while we verify Your email</p>
          </div>
        :success === true?
        <div className='flex justify-center flex-col items-center text-center gap-[29px]'>
          <div className=''>
          <img src={verificationsuccesful} />
          </div>
          <div className='flex flex-col gap-[16px]'>
           <p className='font-[700] font-lato text-[1.25rem] text-[#232323] md:text-[40px]'> Email address confirmed!</p>
           <p className='font-[400] font-lato text-[1rem] text-[#232323] md:text-[24px]'>
           Your email address has been activated. Proceed to log in
           </p>
            
           </div>
           <button className='font-lato text-[1rem] text-[#E9E9E9] font-[500] bg-[#0d0c0e] py-[8px] px-[20px] rounded-[5px]' onClick={() => setLoginModal()}>
            Log in
           </button>
        </div>:
           failed?
           <div>
            <div className=' flex justify-center'>
            <BiError color='red' size={'4rem'}/>
            </div>
            <p className='font-lato'>couldn't verify your email</p>
           </div>
           :null}
    </div>
  )
}

export default VerifyEmail