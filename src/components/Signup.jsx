//hooks
import useLogic from "../hooks/signup"
//componentss
import InputField from "./inputField"
import AuthButton from "./authButton"
//assets
import logi from "./../assets/login/login.png"
import facebook from "./../assets/login/facebook.png"
import google from "./../assets/login/google.png"
import * as assets from "../assets/signup";
import { useSignupContext } from "../context/auth/signup"
import { Link } from "react-router-dom"
import useSignupOnchange from "./useSignupOnchangeHandler";
import { useFormik } from "formik";
import { SignupValidate } from "./validate/validate";




const Signup = () => {
  const signupObject = useLogic()
  // const {signUp, signupOnChangeHandler, details} = useSignupOnchange()
  const {loading, signup, success} =  useSignupContext()
  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      // last_name: "",
      // username: "",
      // account_type: "Individual",
      password1: "",
      password2: ""
      // password2: ""
    },
    onSubmit: values => {
        signup(values)
    },
    validate: SignupValidate
})

  
  // //(details[5].error, "error")
    return (
      <div className="w-full flex h-full  items-center font-lato flex-col md:flex-row md:rounded-[20px] bg-[#F6F6F6]">
          <div className="md:h-full bg-[#5A0C91] w-full md:w-[43%] flex items-center ">
      <div className="relative md:left-32 w-[169px] md:w-[initial] mx-auto pb-2 pt-[22.29px]"><img src={logi} className=' w-full h-full'  alt="" /></div>
      </div>

        <div className="md:w-[57%] flex flex-col md:items-center w-full px-[23px] h-full">     
        
        <p className="font-lato font-[700] text-[1.5rem] md:text-[1.75rem] text-[#232323] text-center mx-auto mt-[24px]  mb-[24px] ">Create an Account</p>
        <form  onSubmit={formik.handleSubmit} className="flex flex-col w-full w-full md:max-w-[20.37rem] gap-[1.5rem] ">
        <section className="flex flex-col">
            <InputField blurHandler={signupObject.SignupFormObj}  type="email" id="email" onChangeHandler={formik.handleChange} value={formik.values.email} src={assets.profileIcon} fieldName={"Email Address"} name={"email"} desc="profile icons"  ></InputField>
            {/* {signupObject.SignupFormObj.errors.username && signupObject.SignupFormObj.touched.username ? <p className="text-[12px] text-red-500">
            
            </p>:null} */}
          </section>
      
          <section className="flex flex-col">
                <InputField  blurHandler={signupObject.SignupFormObj.handleBlur} type="text" id="" onChangeHandler={formik.handleChange} value={formik.values.username} src={assets.profileIcon} fieldName={"Username"} name={"username"} desc="profile icons"  ></InputField>
                {/* {signupObject.SignupFormObj.errors.firstName && signupObject.SignupFormObj.touched.firstName ? <p className="text-[12px] text-red-500">{ signupObject.SignupFormObj.errors.firstName}</p>:null} */}
          </section>

          <section className="flex flex-col">
                <InputField blurHandler={signupObject.SignupFormObj.handleBlur} type="password" onChangeHandler={formik.handleChange} value={formik.values.password1} src={assets.inboxIcon} fieldName={"Password"} desc="Email icons" name={"password1"} ></InputField>
                {/* {signupObject.SignupFormObj.errors.email && signupObject.SignupFormObj.touched.email ? <p className="text-[12px] text-red-500">{ signupObject.SignupFormObj.errors.email}</p>:null} */}
          </section>

          <section className="">
                <InputField blurHandler={signupObject.SignupFormObj.handleBlur} type="password" onChangeHandler={formik.handleChange} value={formik.values.password2} src={assets.callIcon} fieldName={"password2"} name={"password2"} desc="call icons"  ></InputField>
                {/* <p className="text-[12px] text-red-500">{details[5].error?details[5].error:null }</p> */}

          </section>
          <AuthButton isLoading={loading} name="Sign Up"></AuthButton>
          {success?"Check Your Email For Verification":null}
         </form>

         <section className="w-full flex flex-col gap-[1.5rem] mt-[0.5rem] mb-[168px] md:mb-[111px]">
          
          <div className="flex flex-row items-center w-full gap-[22px] text-[1rem] font-[500] font-lato mt-[40px] md:mt-[0]">
  <span className="flex-1 md:h-[1px] bg-[#CCB4DD]"></span>
  <span className="">Or Sign Up using </span>
  <span className="flex-1 md:h-[1px] bg-[#CCB4DD] "></span>
           </div>
  
          <div className="flex justify-between gap-[40.8px] mx-auto items-center">
            <div> <img src = {google} /> </div>
            <div> <img src = {facebook} /> </div>
          </div>
           <p className=" text-[#000000] text-center text-[1rem] font-lato font-[500] ">Already have an account? <Link className="text-[#5A0C91] text-[1rem] font-[500] md:text-[1rem]">Log In here</Link></p>
          </section>
         </div>
        </div>
    )
}

export default Signup