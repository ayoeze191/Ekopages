//componentss
import InputField from "./inputField"
import AuthButton from "./authButton"
import facebook from "./../assets/login/facebook.png"
import google from "./../assets/login/google.png"
//assets
import * as assets from "../assets/login"
//hooks
import useLogic from "../hooks/login"
import {useAuthContext} from "../context/auth/auth"
import { useState } from "react"
import logi from "./../assets/login/login.png"
import { ValidateLogin } from "./validate/validate"
// import Overlay from "./Overlay"
import { useFormik } from 'formik'
import Link from "antd/es/typography/Link"




const Login = () => {

  const loginObject = useLogic()
  
  const { login, loading } = useAuthContext()

  const handlesubmit = (data) => {
    login(data)
 }

  const formik = useFormik({
    initialValues: {
        "email": "",
        "password": ""
    },
    onSubmit: values => {
        login(values)
    },
    validate: ValidateLogin
})

    return (
      <div className="w-full flex h-full items-center font-lato flex-col md:flex-row md:rounded-[20px] bg-[#F6F6F6]" >
        <div className="md:h-full bg-[#5A0C91] w-full md:w-fit">
      <div className="relative md:left-32 w-[169px] md:w-[initial] mx-auto pb-2 pt-[22.29px]"><img src={logi} className=' w-full h-full'  alt="" /></div>
      </div>

        <div className="md:w-[57%] flex flex-col md:items-center px-[23px]">     
        
        <p className="font-lato font-[700] text-[1.5rem] md:text-[1.75rem] text-[#232323] text-center mx-auto mt-[24px] md:mt-[0] mb-[24px] md:mb-[0]">Log In</p>
        <form onSubmit={formik.handleSubmit} className='flex flex-col w-full max-w-[20.37rem] gap-[1.5rem]' >
         
              <section className="flex flex-col">
            <InputField type="email" onChangeHandler={formik.handleChange} value={formik.values.username} fieldName={"Email Address"} name="email" id="email"></InputField>
            <p className="text-[12px] text-red-600">{formik.touched.username && formik.errors.username ? formik.errors.username:null}</p>
          </section>
          <section className="flex  flex-col">
            <InputField type="password" onChangeHandler={formik.handleChange} value={formik.values.password} src={assets.passwordIcons}  fieldName={"Password"} desc="Passowrd icons" id="password"  showValue={loginObject.state.showPassword} handleVisibility={()=> loginObject.showPassword(loginObject.state)}></InputField>
            <p className="text-[12px] text-red-600">{formik.touched.password && formik.errors.password ? formik.errors.password:null}</p>
            <p className="text-[16px] text-[black] font-Poppins mt-[15px] mb-[15px]">
          Forgot Password?
          </p>
          </section>  
          <AuthButton name="LOG IN" isLoading={loading}></AuthButton>
           {loginObject.loginMutation.isError ? <p className="text-[12px] text-red-500 text-center mt-[10px]">{loginObject.loginMutation.error.response.data.non_field_errors[0]}</p> : null}
         </form>

        <section className="w-full flex flex-col gap-[1.5rem] mt-[0.5rem] mb-[168px] md:mb-0">
          
        <div className="flex flex-row items-center w-full gap-[22px] text-[1rem] font-[500] font-lato mt-[40px] md:mt-[0]">
<span className="flex-1 md:h-[1px] bg-[#CCB4DD]"></span>
<span className="">Or Sign In using </span>
<span className="flex-1 md:h-[1px] bg-[#CCB4DD] "></span>
         </div>

        <div className="flex justify-between gap-[40.8px] mx-auto items-center">
          <div> <img src = {google} /> </div>
          <div> <img src = {facebook} /> </div>
        </div>
         <p className=" text-[#000000] text-center text-[1rem] font-lato font-[500] ">Don’t have an account? <Link className="text-[#5A0C91] text-[1rem] font-[500] md:text-[1rem]">Sign up here</Link></p>
        </section>

        

         
         </div>



        </div>
    )
}

export default Login 