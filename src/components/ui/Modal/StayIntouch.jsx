import React, { useRef, useState } from 'react'
import AuthButton from '../../authButton'
import InputField from '../../inputField'
import { useFormik } from 'formik'
import phoneCall from "./../../../assets/modal/phoneCall.png"
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify'
import {useModalContext} from "./../../../context/modal/modal"
// import mjml2html from 'mjml'






const StayIntouch = () => {
    const [loading, setLoading] = useState(false)
    const form = useRef()
    const {setstayIntouchModal} = useModalContext()
    // const formik = useFormik({
    //     initialValues: {
    //       "user_name": "",
    //         "user_email": "",
    //         "message": ""
    //     },
    //     // validate,
        
    //     onSubmit: values => {
    //       console.log("handling")
    //       handleSubmit(values)
    //     },
    // }) 

    const handleSubmit = (e) => {
      e.preventDefault()
      console.log("logging")
      setLoading(true)
      emailjs.sendForm('service_wre4psm', 'template_kjvcbf2', form.current, 'OaSBWydBNTXMiqT70')
      .then((result) => {
        console.log("successfull")
      setLoading(false)
        toast.success("Your message has been delivered, thank you.")
        setstayIntouchModal()
        form.current = null
          console.log(result.text);
      }, (error) => {
        console.log("failed")
      setLoading(false)
        toast.error("failed")
      setLoading(false)

          console.log(error.text);
      });
  };




  return (
    <div className='flex flex-col md:flex-row rounded-[10px 0px 0px 10px] text-center font-lato'>
        <div className='w-full md:w-[50%] bg-[#EFA30C] flex items-center justify-center'>

        <div className='w-full md:w-[initial] h-[200.12px] md:h-[initial]'>
            <img src={phoneCall} alt="" className='w-full  h-[100%]'/>
        </div>

        </div>
        <div className='w-full md:w-[50%] bg-[#F9F9F9] px-[20px] py-[20px] md:px-[79px] md:py-[80px]'>
            <div className='font-[700] text-[28px] flex flex-col gap-[1rem] mt-[4px] mb-[40px]'>
            Stay in touch with us
            </div>

            <form action="" className='flex flex-col gap-[1.5rem]' onSubmit={handleSubmit} ref={form}>
            <section className="flex flex-col">
            <div className='font-[600] text-left text-[1rem] font-lato mb-[8px] '>First Name</div>
            <input className='p-[1rem] border-[1px] border-solid border-[#CCB4DD] bg-[inherit] rounded-[2px]' type="text" name="user_name" id="Name" placeholder={"Enter your full  name here"}/>
            {/* <p className="text-[12px] text-red-600 mt-4">{formik.touched.username && formik.errors.username ? formik.errors.username:null}</p> */}
            </section>
            <section className="flex flex-col">
            <input className='p-[1rem] border-[1px] border-solid border-[#CCB4DD] bg-[inherit] rounded-[2px]' type="email"   name="user_email" id="email" placeholder={"example@gmail.com"}></input>
            {/* <p className="text-[12px] text-red-600 mt-4">{formik.touched.username && formik.errors.username ? formik.errors.username:null}</p> */}
            </section>
            <section className='flex flex-col'>
                <div className='font-[600] text-left text-[1rem] font-lato mb-[8px] '>Message</div>
            <textarea name="message" id="" cols="30" rows="10" placeholder='Type your message here'  className='p-[1rem] border-[1px] border-solid border-[#CCB4DD] bg-[inherit] rounded-[2px]'></textarea>
            </section>
            <AuthButton isLoading={loading} name={"Send message"}/>
            </form>
        </div>
    </div>
  )
}

export default StayIntouch