import React from 'react'
import { useAuthContext } from '../../context/auth/auth'
import logi from "./../../assets/login/login.png"
import InputField from '../inputField'
import { useFormik } from 'formik'
import AuthButton from '../authButton'
import useLogic from '../../hooks/Nav'



const Login = () => {
    const { login } = useAuthContext()


    const handlesubmit = (data) => {
        //("working")
        login(data)
     }

    const formik = useFormik({
        initialValues: {
            "email": "",
            "password": ""
        },
        onSubmit: values => {
            handlesubmit(values)
        }
    })
    // const loginObject = useLogic()


  return (
    <div className="w-full flex h-screen items-center " >
    <div className="h-full bg-[#5A0C91] flex items-center w-[40%]">
  <div className="relative left-48"><img src={logi} className='w-full h-full relative '  alt="" /></div>
  </div>

    <div className="  h-full px-[7.1rem] flex items-center w-[50%]">     
    <div>
    <form onSubmit={formik.handleSubmit} className='flex flex-col gap-[1.5rem]' >
      <p className="font-lato font-[700] text-[1.75rem] text-[#232323] text-center mx-auto">Log In</p>
          <section className="flex flex-[0.5rem]">
        <InputField type="email" onChangeHandler={formik.handleChange} value={formik.values.email} fieldName={"Email"}  name="email"></InputField>
        {/* <p className="text-[12px] text-red-600">{loginObject.formObj.touched.email && loginObject.formObj.errors.email ? loginObject.formObj.errors.email:null}</p> */}
      </section>
      <section className="flex  flex-col">
        <InputField type="password" onChangeHandler={formik.handleChange} value={formik.values.password} name="password" ></InputField>
        <p className="text-[16px] text-[black] font-Poppins mt-[15px] mb-[15px]">
      Forgot Password?
      </p>
      </section>  
      
      
      <AuthButton name="Log In" isLoading={false}></AuthButton>
       {/* {loginObject.loginMutation.isError ? <p className="text-[12px] text-red-500 text-center mt-[10px]">{loginObject.loginMutation.error.response.data.non_field_errors[0]}</p> : null} */}
      <p className="mt-[15px] text-center text-[20px] font-Poppins font-[400] ">Don’t have an account? <span className="text-[#5A0C91]">Sign Up</span></p>
      
     </form>
     </div>



     <div>
       
     </div>
     </div>



    </div>
  )
}

export default Login