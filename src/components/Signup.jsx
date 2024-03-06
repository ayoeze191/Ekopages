//hooks
import useLogic from "../hooks/signup";
import   useSignup from "../hooks/Nav"
//componentss
import InputField from "./inputField"
import AuthButton from "./authButton"
//assets
import logi from "./../assets/login/login.png"
import facebook from "./../assets/login/facebook.png"
import google from "./../assets/login/google.png"
import * as assets from "../assets/signup";
import { useSignupContext } from "../context/auth/signup"
import { Link, redirect } from "react-router-dom"
import useSignupOnchange from "./useSignupOnchangeHandler";
import { useFormik } from "formik";
import { SignupValidate } from "./validate/validate";
import { useAuthContext } from "../context/auth/auth"
import { useModalContext } from "../context/modal/modal";





const Signup = () => {
  const signupObject = useLogic()
  const showsignup = useSignup()
  const {setLoginModal, setSignupModal} = useModalContext()
  // const {signUp, signupOnChangeHandler, details} = useSignupOnchange()
  // const NavLogicObject = useLogic()
  const urlSearchParams = new URLSearchParams(window.location.search);
  const referer_code = urlSearchParams.get('referral_code');
 
  const {loading, signup, success, error,} =  useSignupContext()
  const {setloginMode} = useAuthContext()
  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      first_name: "",
      last_name: "",
      password1: "",
      password2: "",
      referral_code:referer_code
    },
    onSubmit: values => {
        signup(values)
    },
    validate: SignupValidate
})

let err = null

if(error) {
  err = Object.keys(error).map((text) => <div className="text-[12px] text-red-500"> {error[text][0]} </div>)
}

    return (
      <div className="w-full flex h-[90vh]  items-center font-lato flex-col md:flex-row md:rounded-[20px] bg-[#F6F6F6]">
          <div className="md:h-[90vh] bg-[#5A0C91] w-full md:w-[43%] flex items-center ">
      <div className="relative md:left-32 w-[169px] md:w-[initial] mx-auto pb-2 pt-[22.29px]"><img src={logi} className=' w-full h-full'  alt="" /></div>
      </div>

        <div className="md:w-[57%] flex flex-col md:items-center w-full px-[23px] h-full overflow-y-scroll">     
        
        <p className="font-lato font-[700] text-[1.5rem] md:text-[1.75rem] text-[#232323] text-center mx-auto mt-[24px]  mb-[24px] ">Create an Account</p>
        <form  onSubmit={formik.handleSubmit} className="flex flex-col  w-full md:max-w-[20.37rem] gap-[1.5rem] ">
        <section className="flex flex-col">
                <InputField  blurHandler={signupObject.SignupFormObj.handleBlur} type="text" id="" onChangeHandler={formik.handleChange} value={formik.values.first_name} src={assets.profileIcon} fieldName={"First name"} name={"first_name"} desc="profile icons"  ></InputField>
                {formik.errors.first_name && formik.touched.first_name ? <p className="text-[12px] text-red-500 mt-4">{ formik.errors.first_name}</p>:null}
          </section>
          <section className="flex flex-col">
                <InputField  blurHandler={signupObject.SignupFormObj.handleBlur} type="text" id="" onChangeHandler={formik.handleChange} value={formik.values.last_name} src={assets.profileIcon} fieldName={"Last name"} name={"last_name"} desc="profile icons"  ></InputField>
                {formik.errors.last_name && formik.touched.last_name ? <p className="text-[12px] text-red-500 mt-4">{ formik.errors.last_name}</p>:null}
          </section>
        <section className="flex flex-col">
            <InputField blurHandler={signupObject.SignupFormObj}  type="email" id="email" onChangeHandler={formik.handleChange} value={formik.values.email} src={assets.profileIcon} fieldName={"Email Address"} name={"email"} desc="profile icons"  ></InputField>
            {formik.errors.email  && formik.touched.email ? <p className="text-[12px] text-red-500">
              {formik.errors.email}
          </p>:null}
          </section>
      
          <section className="flex flex-col">
                <InputField  blurHandler={signupObject.SignupFormObj.handleBlur} type="text" id="" onChangeHandler={formik.handleChange} value={formik.values.username} src={assets.profileIcon} fieldName={"Username"} name={"username"} desc="profile icons"  ></InputField>
                {formik.errors.username && formik.touched.username ? <p className="text-[12px] text-red-500 mt-4">{ formik.errors.username}</p>:null}
          </section>
         

          <section className="flex flex-col">
                <InputField blurHandler={signupObject.SignupFormObj.handleBlur} type="password" onChangeHandler={formik.handleChange} value={formik.values.password1} src={assets.inboxIcon} fieldName={"Password"} desc="Email icons" name={"password1"} ></InputField>
                {formik.errors.password1 && formik.touched.password1 ? <p className="text-[12px] text-red-500 mt-4">{ formik.errors.password1}</p>:null}
          </section>


          <section className="">
                <InputField blurHandler={signupObject.SignupFormObj.handleBlur} type="password" onChangeHandler={formik.handleChange} value={formik.values.password2} src={assets.callIcon} fieldName={"confirm password"} name={"password2"} desc="call icons"  ></InputField>
                {formik.errors.password2 && formik.touched.password2 ? <p className="text-[12px] text-red-500 mt-4">{ formik.errors.password2}</p>:null}

          </section>
          <section className="">
          <InputField type="text"  onChangeHandler={formik.handleChange} value={formik.values.referral_code} fieldName={"referral code"}  name="referer_code" ></InputField>
          </section>
       
          <div>
            {err}
          </div>
          <AuthButton isLoading={loading} name="Sign Up"></AuthButton>
          {success?<div className="text-[12px] text-green-500 mt-4 px-5">Check Your Email For Verification Link"</div>:null}
         </form>

         <section className="w-full flex flex-col gap-[1.5rem] mt-[0.5rem] mb-[168px] md:mb-[111px]">
          
          <div className="flex flex-row items-center w-full gap-[22px] text-[1rem] font-[500] font-lato mt-[40px] md:mt-[0]">
  <span className="flex-1 md:h-[1px] bg-[#CCB4DD]"></span>
  <span className="">Or Sign In using </span>
  <span className="flex-1 md:h-[1px] bg-[#CCB4DD] "></span>
           </div>
  
          <div className="flex justify-between gap-[40.8px] mx-auto items-center">
            <div> <img src = {google} /> </div>
            <div> <img src = {facebook} /> </div>
          </div>
           <p className=" text-[#000000] text-center text-[1rem] font-lato font-[500] ">Already have an account? <button className="text-[#5A0C91] text-[1rem] font-[500] md:text-[1rem]"  onClick={
    () => {
      setLoginModal()
      setSignupModal()
    }
  }>Log In here</button></p>
          </section>
         </div>
        </div>
    )
}

export default Signup