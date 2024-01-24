import React, { useEffect, useState } from 'react'
import star from "./../../assets/star.svg"
import ExploreCoursePicture from  "./../../assets/ExploreCoursePicture.svg"
import instance from '../../axios'
import { BeatLoader, ClipLoader } from 'react-spinners'
import { useNavigate } from 'react-router-dom'
import { tokenConfig } from '../../Config/Config'
import axios from 'axios'
import { toast } from 'react-toastify'
const Course = ({picture, subject, Tutor, price, stars, modules, id, handleSelect}) => {
    const navigate = useNavigate()
    const [enrolled, setEnrolled] = useState(false)
    const [completed, setComplted] = useState(false)
    const [loading, setLoading] = useState(false)
  const getRegistered = async () => {
    setLoading(true)
    try{
    const Response = await axios.get(`https://ekopages-production.up.railway.app/services/study_all/${id}`, tokenConfig())
        if(await get_completion(id)){
              setEnrolled(false)
              setLoading(false)
              return setComplted(true)
        }
        else if(Response.data.data.length > 0){
          setComplted(false)
          setLoading(false)
          return setEnrolled(Response.data.data.length > 0)
        }
              setEnrolled(false)
              setLoading(false)
              setComplted(false)
      }
    catch(error){
      setEnrolled(false)
      setLoading(false)
      setComplted(false)
    }
  }  

  const get_completion = async (id) => {
    const res = await instance.get(`/services/percent_complete/${id}/`, tokenConfig())
    return (res.data.passed_course)
} 

  useEffect(() => {
    getRegistered()
  }, [])

  return (
    <div  className='font-lato  rounded-[9.5px] bg-white h-[370px] flex flex-col justify-between hover:border-solid hover:border-[1px] hover:border-[#5A0C91]'>
        <div className='relative'>
            <div className={`absolute right-[13px] top-[13.76px] ${price === "FREE"?'bg-[#247A00]':'bg-[#5A0C91]'} h-[23px] w-[45px] text-white font-[500] text-[13.76px] leading-[16.5px] rounded-[2.58px] flex items-center justify-center `}>{price === "FREE"?"FREE":"PRO"}</div>
            <img src={ExploreCoursePicture} className='object-contain'/>
        </div>
        <div className='px-[13.76px] flex gap-[6px] flex-col'>
            <p className='font-[500] text-[20.64px] font-lato '>
              {subject[0].toUpperCase() + subject.substr(1, subject.length - 1).toLowerCase()}
              </p>
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
            <button className={`${!completed ? "bg-[#5A0C91]":"bg-green-600"} text-[#FFFFFF]  font-[400] leading-[18.24px] px-[18.92px] py-[9.46px] rounded-[9.6px] font-lato mb-8`} onClick={() =>{ 
                enrolled?navigate(`/dashboard/MyCourses/${id}`):completed?navigate(`/dashboard/MyCourses/${id}`):
                handleSelect(id)}}>{loading ? <BeatLoader color='white'/>:enrolled? "Continue Course": completed === true ?"Done": "Start learning"}</button>
        </div>
    </div>
  )
}
export default Course