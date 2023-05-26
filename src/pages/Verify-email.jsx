import React from 'react'
import { useEffect, useState } from 'react'
import { useRef } from 'react'
import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useAuthContext } from '../context/auth/auth';
import instance from "./../axios.js"
import { BarLoader } from 'react-spinners'
import {FcApproval} from 'react-icons/fc'
import {BiError} from "react-icons/bi"

const VerifyEmail = () => {
    const {token} = useParams()
    const [isloading, setIsloading] = useState(true)
    const [success, seSuccess] = useState(false)
    const [failed, setFailed] = useState(null)

    const verifyEmail = (token) => {

      instance.post("registration/verify-email/", {key: token})
      .then((res) => {
        console.log(res.data)
        setIsloading(false)
        seSuccess(true)
      })
      .catch((err) => {
        console.log("error", err)
        setIsloading(false)
        setFailed("Couldnt Verify Your email")
      })
    }
   
  useEffect(() => {
    verifyEmail(token)
  }, [])  
  
  return (
    <div className='mx-auto h-[50vh] flex items-center font-Poppins'>
        {isloading?
        <div className='flex justify-center'>
            <BarLoader color='#5A0C91'/>
          <p > Please wait while we verify Your email</p></div>
        :success === true?
        <div>
          <div className='bg-[#5A0C91] '>
          <FcApproval size={'4rem'} color='white'/>
          </div>
           <p> verification sucessfull you can proceed to login</p></div>:failed?
           <div>
            <div className=' flex justify-center'>
            <BiError color='red' size={'4rem'}/>
            </div>
            <p className='font'>couldn't verify your email</p>
           </div>
           :null}
    </div>
  )
}

export default VerifyEmail