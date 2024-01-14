import { IoCloseCircleOutline } from "react-icons/io5"
import coursModalBg from  "./../../assets/coursModalBg.svg"
import star from "./../../assets/star.svg"
import naira from "./../../assets/naira.svg"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"   
import { useNavigate } from "react-router-dom"
import instance from '../../axios'
import { tokenConfig } from "../../Config/Config"
import { BeatLoader } from "react-spinners"
import { toast } from "react-toastify"
const CourseModal = ({picture, subject, Tutor, price, stars, modules, id,handleClose, courseModal}) => {
    // const toast = useToast()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [enrolled, setEnrolled] = useState(false)
    const Enrol = async () => {
        setLoading(true)
        // instance.post(`/services/enroll/${id}/`, null,tokenConfig())
        // .then((res) => {
        //     console.log(res)
        //     setTimeout(() => setEnrolled(true), 500) 
        //     // navigate('/dashboard')
        // })
        // .catch((error) => {
        //     console.log(error)
        // })  
        try {
            const res = await instance.post(`/services/enroll/${id}/`, null,tokenConfig())
            console.log(res)
            setTimeout(() => setEnrolled(true), 500) 
            setLoading(false)
            toast.success(`You have successfully enrolled for ${subject}`)
            navigate('/dashboard')  
        }
        catch(err){
            console.log(err)
        }
    }


    return (
        <AnimatePresence>
            {
                courseModal && 
                <div className="w-full fixed h-full flex items-center justify-center z-50 top-0">
        <motion.div
        exit={{scale: 0}}
        initial={{  scale: 0 }}
        animate={{ scale: [0, 1] }}
        transition={{  duration: 0.1 }} className="flex bg-[#F6F6F6]  rounded-[10px] h-[45vh] w-[90%] max-w-[400px] md:max-w-[1000px] md:h-4/5 overflow-y-scroll">
            <div className=" bg-red-400 px-0 rounded-l-[10px] hidden md:block w-[45%]"><img src={coursModalBg} className="  w-full object-cover  h-full rounded-l-[10px]" alt=""/></div>
 
      <div className="flex flex-col flex-1 md-[30px] lg:pt-[40px] h-full px-[16px] md:px-[30px] lg:px-[40px] overflow-y-scroll"> 
  <IoCloseCircleOutline color="#232323" width={32} height={32} size={32}  className="md:mb-[40.5px] ml-auto cursor-pointer min-w-[32px] min-h-[32px] mt-[16px]" onClick={handleClose}/>
      <p className="font-lato font-bold leading-[24px] md:leading-normal text-[20px] md:text-[28px] text-center">Course Payment</p>
      <div className="flex mt-[8px] gap-[18px] items-center">
      <div className=" bg-red-400 px-0 rounded-[10px] block md:hidden h-[203px] w-[144px]"><img src={coursModalBg} className="  w-full object-cover  h-full rounded-[10px]" alt=""/></div>
      <div className="md:mt-[40px] ">
        <p className="font-lato font-bold text-[18px] text-[#000000] md:text-[28px] leading-[21.6px] md:leading-[33px]">{subject?subject:"Introduction to SDG"}</p>
        <p className='font-[400] text-[13px] md:text-[16.76px] text-[#888888] flex leading-[15px] md:leading-[19.2px] mt-[4px] md:mt-[12px]'> <p className='text-[#4A4A4A] '>Tutor:{" "}</p> {Tutor?Tutor:" Tenn Zipa"}</p>
        <p className='font-[400] text-[12px] md:text-[20px] font-lato mt-[4px] md:mt-[8px] mb-[4px] md:mb-[8px] leading-[14px] md:leading-[24px] text-[#888888]'>{modules?modules:12} Modules</p>
        <div className='flex items-center md:items-end  gap-[0.14px]'>
            <img src={star} alt='' className="md:h-[22px] md:w-[22px] w-[11px] h-[11px]"/>
            <img src={star} alt='' className="md:h-[22px] md:w-[22px] w-[11px] h-[11px]"/>
            <img src={star} alt='' className="md:h-[22px] md:w-[22px] w-[11px] h-[11px]"/>
            <img src={star} alt='' className="md:h-[22px] md:w-[22px] w-[11px] h-[11px]"/>
            <img src={star} alt='' className="md:h-[22px] md:w-[22px] w-[11px] h-[11px]"/>
 {/* <img src={star} alt=''/> */}
        <p className="font-[400] text-[12px] md:text-base font-lato text-[#888888]  leading-[14.4px] md:leading-[19.2px]">(34)</p>
            </div>
            <p className="flex items-center font-lato font-semibold text-[16px] md:text-[32px] mt-[11px] md:mt-[22.4px] ">
                <img src={naira} className="h-3 lg:h-[initial]"/>{price?price:"3,500"}
            </p>
            <button className="bg-[#5A0C91] w-[100px] h-[32px] md:w-[216px] md:h-[59px] rounded-[10px] text-[#FFFFFF] font-[500] text-[14px] md:text-[24px] font-lato leading-[28.9px] mt-[24px] md:mt-[50px]" onClick={Enrol}>
              {loading?<BeatLoader />:"Buy Now"}
            </button>
      </div>
      </div>
      </div>


      </motion.div>
      </div>
}
      </AnimatePresence>
    )
  }


export default CourseModal