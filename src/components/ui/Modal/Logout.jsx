import React from 'react'
import { IoCloseCircleOutline } from "react-icons/io5"
import { useAuthContext } from '../../../context/auth/auth'
import { useModalContext } from '../../../context/modal/modal'

const Logout = () => {
    const {logout} = useAuthContext()
    const {setLogOutModal} = useModalContext()
  return (
    <div className='bg-white flex flex-col gap-[110px] items-center '>
        {/* <IoCloseCircleOutline color="#232323" width={32} height={32} size={32}  className="md:mb-[40.5px] ml-auto cursor-pointer min-w-[32px] min-h-[32px] mt-[16px]" onClick={setLogOutModal}/> */}
    <div className=' flex flex-col gap-[24px] md:gap-[66px] items-center text-center py-[87px] md:py-[116px]'>
            <p className=' text-[16px] md:text-[28px] font-semibold leading-[33px] font-lato '>Are you sure you want to logout?</p>
            <div className='flex gap-[16px] md:gap-[39px]'>
            <button className='bg-[#5A0C91] rounded-[5px] w-[120px] h-[40px] text-white font-lato font-medium leading-[19px]' onClick={() => {logout(); setLogOutModal()} }>Logout</button> 
            <button className='border-solod border-[1px] border-[#5A0C91] bg-white rounded-[5px] w-[120px] h-[40px] text-black font-lato font-medium leading-[19px]' onClick={setLogOutModal}>Cancel</button>
            </div>
    </div>
    </div>
  )
}

export default Logout