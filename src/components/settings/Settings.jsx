import React from 'react'
import { useState } from 'react';
import { useAuthContext } from '../../context/auth/auth';
import bell from "./../../assets/dashboard/bell.png";
import bi_upload from "./../../assets/dashboard/bi_upload.png";
import bx_user from "./../../assets/dashboard/bx_user.png";
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { profile, setPAssword } from '../../store/Actions/profile';
import { useSelector } from 'react-redux';
import GeneralUiOverlay from '../ui/GeneralUiOverlayLoader';
import { ClipLoader } from 'react-spinners';
import  { motion, AnimatePresence } from "framer-motion"


const Settings = () => {
    const [passwordReset, setPasswordReset] = useState(false)
    const {change_profile_pics, profile_pics, isAuth, logout} =  useAuthContext()
    
    const password = useSelector(profile => profile.profile)
    const dispatch = useDispatch()
    const [userprofile, setUserprofile] = useState(profile_pics)
    const handle__profile_picture = (Picture) => {
        console.log(Picture)
        change_profile_pics(Picture)
        finish()
    }
    const finish = () => {
        setUserprofile(profile_pics)
    }
    console.log(userprofile)

    const formik = useFormik({
        initialValues: {
            'password1': "",
            'new_password1': "",
            'new_password2': ""
        },
        onSubmit: (values) => {
            const data = {
                new_password1: values.new_password1,
                new_password2: values.new_password2   
            }
            dispatch(setPAssword(data))
        }
    })
    console.log(userprofile)

  return (
    <div className='px-[1.5rem] md:px-[3.625rem] py-[3rem] w-full md:border-solid md:border-[#CDCDCD] md:border-[1px] md:border-l-none h-[100%] flex flex-col font-lato'>
        <div className='flex flex-col w-full pb-[1.5rem]'>
            <div className='flex justify-between items-center'>
            <p className='text-[20px] md:text-[1rem] font-[500]'>Profile Picture</p>
            <div><img src={bell} alt="" /></div>
            </div>

            <div className='flex gap-[0.75rem] items-center'>
                <div className='rounded-full border-[2px] border-solid border-[#888888] w-[3.75rem] h-[3.75rem] flex items-center justify-center'>
                    <img src={userprofile?userprofile:bx_user} alt="" className='w-full h-full rounded-full object-cover' />
                </div>
                <div className=''>
                <label htmlFor="profpics"><div className=' border-solid border-[1px] border-[#888888] px-[0.5rem] font-[400] text-[1rem] text-[#232323] flex items-center gap-[0.5rem]'> <p>Upload New</p>
                <div className='cursor-pointer'><img src={bi_upload} alt="" /></div>
                </div></label>
                <input type="file"  placeholder='Upload New' accept="image/*" name='profpics' id='profpics' className='hidden' onChange={(e) => handle__profile_picture(e.target.files[0])}/>
                </div>
            </div>
        </div> 


        <div className='border-t-solid border-t-[#CDCDCD] border-t-[1px] w-[70%] pt-[1.5rem] flex flex-col gap-[2rem] '>
            <div>
            <div className='flex gap-[3.5rem]'>
                <p className=''>Profile setting</p>
                <p className='text-[#5A0C91] cursor-pointer font-[400]'>Edit</p>
            </div>
            </div>


            <div>
            <div className='flex gap-[3.5rem]'>
                <p>Password setting</p>
                <p className='text-[#5A0C91] cursor-pointer font-[400]' onClick={() => setPasswordReset(!passwordReset)}>Edit</p>
            </div>
            <AnimatePresence>
            {passwordReset&&
            <div className='flex flex-col gap-[3.5rem]' 
            >
            
            <div className='grid grid-cols-1 md:grid-cols-2 mt-[1rem] gap-x-[1.625rem] gap-y-[2.5rem]'>
                <motion.div initial = {{opacity: 0}}
            animate = {{opacity: [0, 1]}}
            exit={{opacity: 0}}
            transition={{ duration: 0.5,}} className='flex flex-col'> <label htmlFor="current password"><div className='font-lato font-[500] md:font-[600] text-[1rem]'> Current Password </div></label> <input type="password" onChange={formik.handleChange} value={formik.values.password1} name='password1' className='outline-none border-solid border-[#888888] border-[1px] rounded-[5px] px-5'/> </motion.div>
                <motion.div initial = {{opacity: 0}}
            animate = {{opacity: [0, 1]}}
            exit={{opacity: 0 ,dur:""}}
            transition={{ duration: 0.5, delay:0.2 }} className='flex flex-col'>  <label htmlFor="current password2"> <div className='font-lato font-[500] md:font-[600] text-[1rem]'> Enter Current Password</div></label><input type="password" onChange={formik.handleChange} value={formik.values.new_password1} name='new_password1' className='outline-none border-solid border-[#888888] border-[1px] rounded-[5px] px-5'/> </ motion.div>
                <motion.div initial = {{opacity: 0}}
            animate = {{opacity: [0, 1]}}
            exit={{opacity: 0, allowReorder: "yes"}}
            transition={{ duration: 0.5, delay: 0.4}} className='flex flex-col '> <label htmlFor="new password"> <div className='font-lato font-[500] md:font-[600] text-[1rem]'>New password</div> </label> <input type="password" onChange={formik.handleChange} value={formik.values.new_password2} name='new_password2' className='outline-none border-solid border-[#888888] border-[1px] rounded-[5px] px-5'/> </motion.div>
            </div>
            <p className='text-green-600 font-lato '> {password.password_reset_success?password.password_reset_success:null}</p>
            
            <button className='bg-[#5A0C91] rounded-[5px] font-[500] text-[1rem] py-[0.625rem] w-fit px-[2.125rem] text-[#EFE7F4]' onClick={formik.handleSubmit}>Update {password.passwordResetloading? <ClipLoader color='white' />:null}  </button>
            </div>
            }
            </AnimatePresence>
            
</div>
                <button className='mr-auto cursor-pointer' onClick={() => logout()}>Log Out</button>
            </div>
            <div>
            
        </div>
    </div>
  )
}


export default Settings