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
    <div className='flex rounded-[10px 0px 0px 10px] text-center font-lato'>
        <div className='w-[50%] bg-[#EFA30C] flex items-center justify-center'>

        <div>
            <img src={amico} alt="" />
        </div>

        </div>
        <div className='w-[50%] bg-[#F9F9F9] px-[79px] py-[80px]'>
            <p className='font-[700] font-lato text-[1.25rem] '>Are you passionate about SDG projects for children?</p>
            <div className='font-[500] text-[12px] flex flex-col gap-[1rem] mt-[4px] mb-[11px]'>
                <p>Then fill the form below detailing your intentions</p>
                    <p> OR </p>
 
                <p> Shoot us a mail at <span className='text-[#5A0C91]'> sales@ekopages.com </span></p>
            </div>

            <form action="" className='flex flex-col gap-[1.5rem]'>
            <section className="flex flex-col">
            <InputField type="text" onChangeHandler={formik.handleChange} value={formik.values.username} fieldName={"Name"} name="name" id="Name" placeholder={"Enter your name here"}></InputField>
            {/* <p className="text-[12px] text-red-600 mt-4">{formik.touched.username && formik.errors.username ? formik.errors.username:null}</p> */}
            </section>

            <section className="flex flex-col">
            <InputField type="email" onChangeHandler={formik.handleChange} value={formik.values.email} fieldName={"Email Address"} name="email" id="email" placeholder={"example@gmail.com"}></InputField>
            {/* <p className="text-[12px] text-red-600 mt-4">{formik.touched.username && formik.errors.username ? formik.errors.username:null}</p> */}
            </section>
            <section className='flex flex-col'>
                <div className='font-[600] text-left text-[1rem] font-lato mb-[8px] '>Message</div>
            <textarea name="message" id="" cols="30" rows="10" placeholder='Type your message here' className='p-[1rem] border-[1px] border-solid border-[#CCB4DD] bg-[inherit] rounded-[2px]'> Type your message herer </textarea>
            </section>
            <AuthButton isLoading={false} name={"Send message"}/>
            </form>
        </div>
    </div>
  )
}

export default BecomeAPartner