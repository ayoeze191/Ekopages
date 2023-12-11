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
        <motion.div
        exit={{scale: 0}}
        initial={{  scale: 0 }}
        animate={{ scale: [0, 1] }}
        transition={{ type: "spring", stiffness: 200, duration: 10 }} className="flex fixed bg-[#F6F6F6] w-[58vw] z-50 left-[21vw] h-[70vh] top-[15vh] gap-0 rounded-[10px]">
            <div className="h-full bg-red-400 px-0 rounded-l-[10px]"><img src={coursModalBg} className="  w-full object-cover  h-full rounded-l-[10px]" alt=""/></div>
      <div className="flex flex-col flex-1 pt-[40px] h-full px-[40px]"> 
  <IoCloseCircleOutline color="#232323" width={32} height={32} size={32}  className="mb-[40.5px] ml-auto cursor-pointer" onClick={handleClose}/>
      <p className="font-lato font-bold text-[28px] text-center">Course Payment</p>
      <div className="mt-[40px] ">
        <p className="font-lato font-bold text-[28px] leading-[33px]">{subject?subject:"Introduction to SDG"}</p>
        <p className='font-[400] text-[16.76px] text-[#888888] flex leading-[19.2px] mt-[12px]'> <p className='text-[#4A4A4A] '>Tutor:{" "}</p> {Tutor?Tutor:" Tenn Zipa"}</p>
        <p className='font-[400] text-[20px] font-lato mt-[8px] mb-[8px] leading-[24px] text-[#888888]'>{modules?modules:12} Modules</p>
        <div className='flex items-end  gap-[0.14px]'>
            <img src={star} alt='' className="h-[22px] w-[22px]"/>
                <img src={star} alt=''  className="h-[22px] w-[22px]"/>
                <img src={star} alt=''  className="h-[22px] w-[22px]"/>
                 <img src={star} alt=''  className="h-[22px] w-[22px]"/>
                 <img src={star} alt='' className="h-[22px] w-[22px]"/>
 {/* <img src={star} alt=''/> */}
        <p className="font-[400] font-lato text-[#888888]  leading-[19.2px]">(34)</p>
            </div>
            <p className="flex items-center font-lato font-semibold text-[32px] mt-[22.4px]">
                <img src={naira} />{price?price:"3,500"}
            </p>
            <button className="bg-[#5A0C91] w-[216px] h-[59px] rounded-[10px] text-[#FFFFFF] font-[500] text-[24px] font-lato leading-[28.9px] mt-[50px]" onClick={Enrol}>
              {loading?<BeatLoader />:"Buy Now"}
            </button>
      </div>
      </div>
      </motion.div>
}
      </AnimatePresence>
    )
  }


export default CourseModal