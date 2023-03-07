import React from 'react'
import AuthButton from '../../authButton'
import InputField from '../../inputField'
import { useFormik } from 'formik'
import amico from "./../../../assets/modal/amico.png"
const BecomeAPartner = () => {
    
    const formik = useFormik({
        initialValues: {
          "username": "",
            "email": "",
            "password": ""
        },
        // validate,
        
        // onSubmit: values => {
            // login(values)
        // },
    })


  return (
    <div className='flex flex-col md:flex-row rounded-[10px 0px 0px 10px] text-center font-lato'>
        <div className='w-full md:w-[50%] bg-[#EFA30C] flex items-center justify-center'>
        <div className='flex gap-[6px] items-center py-[20px] px-[20px] md:px-[0] md:py-[0]'>
        <div className='w-[120.97px] h-[136.12px] md:w-[initial] md:h-[initial]'>
            <img src={amico} className='w-full h-full' alt="" />
        </div>
        <div className='font-[500] text-[12px] flex flex-col mt-[4px] mb-[11px] md:hidden'>
        <p className='font-[700] font-lato md:text-[1.25rem] w-full md:fit'>Are you passionate about SDG projects for children?</p>
                <p className='font-[500] text-[12px] md:text-[1rem]'>Then fill the form below detailing your intentions</p>
                    <p> OR </p>
 
                <p> Shoot us a mail at <span className='text-[#5A0C91] mt-[4px]'> sales@ekopages.com </span></p>
            </div>
        </div>

        </div>
        <div className='w-full md:w-[50%] bg-[#F9F9F9] px-[33px] md:px-[79px] py-[80px]'>
            <p className='hidden md:block font-[700] font-lato text-[1.25rem] w-full md:fit'>Are you passionate about SDG projects for children?</p>
            <div className='hidden font-[500] text-[12px] md:flex flex-col gap-[1rem] mt-[4px] mb-[11px]'>
                <p>Then fill the form below detailing your intentions</p>
                    <p> OR </p>
 
                <p> Shoot us a mail at <span className='text-[#5A0C91]'> sales@ekopages.com </span></p>
            </div>

            <form action="" className='flex flex-col gap-[1.5rem]  w-full'>
            <div className="flex flex-col w-full">
            <InputField type="text" onChangeHandler={formik.handleChange} value={formik.values.username} fieldName={"Name"} name="name" id="Name" placeholder={"Enter your name here"}></InputField>
            {/* <p className="text-[12px] text-red-600 mt-4">{formik.touched.username && formik.errors.username ? formik.errors.username:null}</p> */}
            </div>

            <div className="flex flex-col w-full">
            <InputField type="email" onChangeHandler={formik.handleChange} value={formik.values.email} fieldName={"Email Address"} name="email" id="email" placeholder={"example@gmail.com"}></InputField>
            {/* <p className="text-[12px] text-red-600 mt-4">{formik.touched.username && formik.errors.username ? formik.errors.username:null}</p> */}
            </div>
            <div className='flex flex-col w-full'>
                <div className='font-[600] text-left text-[1rem] font-lato mb-[8px] '>Message</div>
            <textarea name="message" id="" cols="30" rows="10" placeholder='Type your message here' className='p-[1rem] border-[1px] border-solid border-[#CCB4DD] bg-[inherit] rounded-[2px]'> Type your message herer </textarea>
            </div>
            <AuthButton isLoading={false} name={"Send message"}/>
            </form>
        </div>
    </div>
  )
}

export default BecomeAPartner