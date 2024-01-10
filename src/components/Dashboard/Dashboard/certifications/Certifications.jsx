import React, { useEffect, useState } from 'react'
import instance from '../../../../axios'
import { tokenConfig } from '../../../../Config/Config'
import Cetificate from './Cetificate'
import {Link, useNavigate} from "react-router-dom"
import emptyCertificate from "./../../../../assets/emptyCertificate.svg"
const Certifications = () => {

const [certificates, setCertificates] = useState([])
  const navigate = useNavigate()
const getCertificates = () => {
  console.log("running")
  instance.get('/services/my_certificates', tokenConfig())
  .then((res) => {
    setCertificates(res.data.data)
    // setCertificates([])

  })

}

useEffect(() => {
  
  getCertificates()
}, [])


  return (
    <div className='w-full pl-[42px] pr-[56px] pt-[60px] mb-10 md:mb-0 font-lato' >
        <div className='flex justify-center items-center md:justify-between mb-[32px]'>
            <p className=' text-[#232323] md:text-[#4A4A4A] text-[24px] md:text-[20px] font-[500] font-lato'>
                Certificates
            </p>
            <p className='text-[#5A0C91] text-[20px] font-[500] font-lato hidden md:block'>
                Back to my Courses
            </p>
        </div>
        
        {certificates.length == 0 ?
        <div className = "flex flex-col items-center mx-auto gap-[40px]">
          <div>
            <img src={emptyCertificate} alt='' className="w-[60px" />
          </div>
        <div className="text-[#9E9E9E] text-[20px] font-[500] text-center">
          You are yet to earn a certificate. Complete a course to earn one
        </div>
        <button className="bg-[#5A0C91] text-white rounded-[5px] w-[146px] h-[40px] mx-auto" onClick={() => navigate("/explore-courses")}>
Take a Course
        </button>
        </div>
        : certificates.map((cert) => <Cetificate {...cert}/>)}
    </div>
  )
}

export default Certifications