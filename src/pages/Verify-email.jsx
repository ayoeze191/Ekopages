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

const VerifyEmail = () => {
    const {token} = useParams()
    const [isloading, setIsloading] = useState(true)
    const [success, seSuccess] = useState(false)
    const [failed, setFailed] = useState(null)
    const {isAuth} = useAuthContext()

    const verifyEmail = (token) => {

      instance.post("registration/verify-email/", {key: token})
      .then((res) => {
        console.log(res.data)
        setIsloading(false)
        seSuccess(true)
      })
      .catch((err) => {
        console.log("error", err.response)
        setIsloading(false)
        setFailed("Couldnt Verify Your email")
      })
    }
   
  useEffect(() => {
    verifyEmail(token)
  }, [])  
  
  return (
    <div className='mx-auto h-[50vh] flex items-center font-Poppins px-7 md:px-0'>
      {/* {isAuth?<Navigate to='/' />:null} */}
        {isloading?
        <div className='flex justify-center flex-col items-center'>
          <div >
          <BounceLoader color='#5A0C91'/>
          </div>
          <p> Please wait while we verify Your email</p>
          </div>
        :success === true?
        <div className='flex justify-center flex-col items-center'>
          <div className=''>
          <img src={verificationsuccesful} />
          </div>
           <p className='text-[#5A0C91] text-center font-lato'> <span className='text-green-900 font-medium'> verification sucessfull</span> you can proceed to login</p>
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