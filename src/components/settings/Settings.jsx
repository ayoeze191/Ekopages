import React from 'react'
import { useState } from 'react';
import bell from "./../../assets/dashboard/bell.png";
import bi_upload from "./../../assets/dashboard/bi_upload.png";
import bx_user from "./../../assets/dashboard/bx_user.png";




const Settings = () => {
    const [passwordReset, setPasswordReset] = useState(false)

  return (
    <div className='px-[3.625rem] py-[3rem] w-full md:border-solid md:border-[#CDCDCD] md:border-[1px] md:border-l-none h-[100%] flex flex-col font-lato'>
        <div className='flex flex-col w-full pb-[1.5rem]'>
            <div className='flex justify-between items-center'>
            <p>Profile Picture</p>
            <div><img src={bell} alt="" /></div>
            </div>

            <div className='flex gap-[0.75rem] items-center'>
                <div className='rounded-full border-[2px] border-solid border-[#888888] w-[3.75rem] h-[3.75rem] flex items-center justify-center'>
                    <img src={bx_user} alt="" />
                </div>
                <div className=''>
                <label htmlFor="profpics"><div className=' border-solid border-[1px] border-[#888888] px-[0.5rem] font-[400] text-[1rem] text-[#232323] flex items-center gap-[0.5rem]'> <p>Upload New</p>
                <div className='cursor-pointer'><img src={bi_upload} alt="" /></div>
                </div></label>
                <input type="file" src="" alt="" placeholder='Upload New' accept="image/*" name='profpics' id='profpics' className='hidden'/>
                </div>
            </div>
        </div> 


        <div className='border-t-solid border-t-[#CDCDCD] border-t-[1px] w-[70%] pt-[1.5rem] flex flex-col gap-[2rem] '>
            <div>
            <div className='flex gap-[3.5rem]'>
                <p className=''>Profile setting</p>
                <p className='text-[#5A0C91] cursor-pointer'>Edit</p>
            </div>
            </div>


            <div>
            <div className='flex gap-[3.5rem]'>
                <p>Password setting</p>
                <p className='text-[#5A0C91] cursor-pointer' onClick={() => setPasswordReset(!passwordReset)}>Edit</p>
            </div>
            {passwordReset?
            <div className='flex flex-col gap-[3.5rem]'>
            <div className='grid grid-cols-1 md:grid-cols-2 mt-[1rem] gap-x-[1.625rem] gap-y-[2.5rem]'>
                <div className='flex flex-col'> <label htmlFor="current password"><div className='font-lato font-[600] text-[1rem]'> Current Password </div></label> <input type="password"  name='current password' className='outline-none border-solid border-[#888888] border-[1px] rounded-[5px]'/> </div>
                <div className='flex flex-col'>  <label htmlFor="current password2"> <div className='font-lato font-[600] text-[1rem]'> Enter Current Password</div></label><input type="password" name='current password2' className='outline-none border-solid border-[#888888] border-[1px] rounded-[5px]'/> </div>
                <div className='flex flex-col'> <label htmlFor="new password"> <div className='font-lato font-[600] text-[1rem]'>New password</div> </label> <input type="password" name='new password' className='outline-none border-solid border-[#888888] border-[1px] rounded-[5px]'/> </div>
            </div>
            <button className='bg-[#5A0C91] rounded-[5px] font-[500] text-[1rem] py-[0.625rem] w-fit px-[2.125rem] text-[#EFE7F4]'>Update</button>
            </div>
:null}
</div>
                <p>Log Out</p>
            </div>
            <div>
            
        </div>
    </div>
  )
}

export default Settings