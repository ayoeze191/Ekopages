import React, { useEffect, useState } from 'react'
import star from "./../../assets/star.svg"
import ExploreCoursePicture from  "./../../assets/ExploreCoursePicture.svg"
import instance from '../../axios'
import { ClipLoader } from 'react-spinners'
import { useNavigate } from 'react-router-dom'
import { tokenConfig } from '../../Config/Config'
import axios from 'axios'
import { toast } from 'react-toastify'
const Course = ({picture, subject, Tutor, price, stars, modules, id, handleSelect}) => {
    const navigate = useNavigate()
    const [enrolled, setEnrolled] = useState(false)
    const [completed, setComplted] = useState(false)
  const getRegistered = () => {
    axios.get(`https://ekopages-production.up.railway.app/services/study_all/${id}`, tokenConfig())
    .then((res) => {
        // console.log(res.data)
        // console.log(res.data.message === "congratulaions scholar, You have passed this course, take on another challenge.")

        if(res.data.message === "congratulaions scholar, You have passed this course, take on another challenge."){
          // console.log("settin")
              setEnrolled(false)
              return setComplted(true)
        }
        else if(res.data.data.length > 0){
          return setEnrolled(res.data.data.length > 0)
        }
              // console.log("settin")
              setEnrolled(false)
              setComplted(false)
    })
    .catch((error) =>{
        console.log(error)
    })
  }  

  useEffect(() => {
    getRegistered()
  }, [])

  return (
    <div  className='font-lato  rounded-[9.5px] bg-white h-[370px] flex flex-col justify-between'>
        <div className='relative'>
            <div className={`absolute right-[13px] top-[13.76px] ${price === "FREE"?'bg-[#247A00]':'bg-[#5A0C91]'} h-[23px] w-[45px] text-white font-[500] text-[13.76px] leading-[16.5px] rounded-[2.58px] flex items-center justify-center `}>{price === "FREE"?"FREE":"PRO"}</div>
            <img src={ExploreCoursePicture} className='object-contain'/>
        </div>
        <div className='px-[13.76px] flex gap-[6px] flex-col'>
            <p className='font-[500] text-[20.64px] font-lato '>{subject}</p>
            <p className='font-[400] text-[10.32px] leading-[12.38px] text-[#888888]'>{modules}Modules</p>
            <p className='font-[600] text-[13.76px] leading-[16.51px] text-[#888888] flex'> <p className='text-[#4A4A4A] '>Tutor:{" "}</p> {Tutor}</p>
            <div className='flex'>
            <img src={star} alt=''/>
                <img src={star} alt=''/>
                <img src={star} alt=''/>
                 <img src={star} alt=''/>
                 <img src={star} alt=''/>
 <img src={star} alt=''/>
            </div>
        </div>
        <div className='px-[13.76px] flex justify-between '>
            <p className='font-[500] text-[22px] leading-[26px] font-lato'>{price}</p>
            <button className={`${!completed ? "bg-[#5A0C91]":"bg-green-600"} text-[#FFFFFF]  font-[400] leading-[18.24px] px-[18.92px] py-[9.46px] rounded-[9.6px] font-lato`} onClick={() =>{ 
                enrolled?navigate(`/dashboard/MyCourses/${id}`):completed?toast.info("You have taken this course before"):
                handleSelect(id)}}>{enrolled? "Continue Course": completed === true ?"Done": "Start learning"}</button>
        </div>
    </div>
  )
}

export default Course