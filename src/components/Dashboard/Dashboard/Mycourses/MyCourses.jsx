import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import bell from "./../../../../assets/dashboard/bell.png"
import Pending from './Pending'
import { MdKeyboardArrowDown } from "react-icons/md";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { Tabs, TabList, TabPanels, Tab, TabPanel, chakra } from "@chakra-ui/react"
import  { motion, AnimatePresence, isValidMotionProp } from "framer-motion"
import Completed from './Completed';



const MyCourses = () => {
  const navigate = useNavigate()
  return (
    <div className=''>
      <Tabs isLazy={true} variant={'unstyled'}>
      <div className='py-[54px] pr-[78px] w-full flex flex-col gap-[1rem]'>
      <div className=' gap-[1rem] pl-[40px] flex ml-auto w-fit'>
          <Link className='bg-[#5A0C91] w-[125px] h-[40px] hidden md:flex border-solid border-[1px] text-center border-[#888888] text-[#FBFBFB] rounded-[5px] justify-center items-center' to={'/quizes'}>
          Take a Quiz
          </Link>
          <div>
              <img src={bell} alt="" />
        </div>
          </div>
        <div className='pl-[40px] md:grid md:grid-cols-3 flex flex-col  w-full items-center'>
          <div className='mb-[24px] md:mb-0'>
            <p className='font-[600] text-[24px] font-lato md:hidden'>My Courses</p>
            <p className='md:text-[20px] leading-[24px] font-lato font-medium'>Courses You are taking</p>
            </div>
            <TabList  style={{
                display: "flex",
                justifyContent: "center",
                gap: "1rem"
              }}>
        {/* <div className='flex  gap-[1rem] text-[#232323] flex-1  justify-center'> */}
          <Tab _selected={{ bg: "#C54D09", color:"white", border: "0px none" }} style={{
               width: '125px',
               height: '40px',
               borderRadius: "5px",
               border: "solid 1px #88888888"
             }}><button className='  '>
          Pending
          </button>
          </Tab>
          <Tab _selected={{ bg: "#C54D09", color:"white", border: "0px none" }} style={{
              //  padding: "0.5rem 2.125rem",
               width: '125px',
               height: '40px',
               borderRadius: "5px",
               border: "solid 1px #88888888"
             }}>
          <button className=''>
          Completed
          </button>
          </Tab>
          {/* </div> */}
          </TabList>
          </div>
         
      </div>
      
      <TabPanels>
      <TabPanel as={AnimatePresence}>
        <div className='flex flex-col md:flex-row md:pr-[64px] gap-[56px] md:gap-0 px-[20px] md:px-0'>
      <Pending /> <Achievement />
      </div>
    </TabPanel>
    <TabPanel as={AnimatePresence}>
      <div className='flex flex-col justify-between md:flex-row md:pr-[64px] gap-[56px] md:gap-0 px-[20px] md:px-0'>
             <Completed /> <Achievement />
             </div>
    </TabPanel>
    </TabPanels>
    </Tabs>
    
    </div>
  
  )
}




const Achievement = () => {
  return (
    <div className='bg-[#EFE7F4] rounded-[10px] pt-[30px] pb-[70px] px-[20px] w-full md:max-w-[270px] mb-20 md:mb-0'>
      <h3 className='flex gap-4 items-center'>
        <p className='text-[20px] leading-[24px] font-lato font-medium text-[#232322]'>Achievements</p>
        <div className='flex text-[#888888] border-[#888888] border-solid border-[1px] w-[90px] h-[25px] rounded-[5px] justify-center items-center bg-white'>
        <p className='text-[12px] font-lato font-medium leading-[14.4px]'>  This year </p><MdKeyboardArrowDown color='#888888'/>
        </div>
      </h3>
      <div className='flex mt-[47px] gap-[16px]'>
        <div>
        <AiOutlineSafetyCertificate size={30} width={23} height={28} color='#5A0C91'/>
        </div>
        <div>
          <h2 className='font-[600] leading-[19.2px] font-lato text-[16px]'>Certificate</h2>
          <p className='font-[600] font-lato text-[12px] text-[#888888] leading-[18px] mt-[4px]'>
          For this year, you have received <span className='text-[#232323]'>three certificates</span>. Congrats on your learning progress.
          </p>
        </div>
      </div>
      <div className='flex mt-[47px] gap-[16px]'>
        <div>
        <AiOutlineSafetyCertificate size={30} width={23} height={28} color='#5A0C91'/>
        </div>
        <div>
          <h2 className='font-[600] leading-[19.2px] font-lato text-[16px]'>Courses</h2>
          <p className='font-[600] font-lato text-[12px] text-[#888888] leading-[18px] mt-[4px]'>
          For this year, you have received <span className='text-[#232323]'>three certificates</span>. Congrats on your learning progress.
          </p>
        </div>
      </div>
    </div>
  )
}



const Empty = () => {
  const navigate = useNavigate()
  return (
  <div className='w-full h-full flex-1 flex justify-center items-center'>
  <div className='font-lato mx-auto text-center' >
  <p className='font-lato font-[500] text-[36px]'> No Courses  Yet</p> 
  <p className='text-[24px]'>
  Would you like to take a course? 
  </p>
<button onClick={() => navigate('/explore-courses')} className='font-[400] text-[#E9E9E9] py-[15px] px-[30px] bg-[#5A0C91] rounded-[10px] font-lato mx-auto text-sm md:text-base mt-[50px]'>View Courses</button>
</div>
<Pending />
</div>
  )
} 


export default MyCourses