import { useAuthContext } from "../../../context/auth/auth"
import InputField from "../../inputField"
import AuthButton from "../../authButton"
import bg from "./../../../assets/login/login.png"
import { useFormik } from "formik"
import instance from "../../../axios"
import { tokenConfig } from "../../../Config/Config"
import { useModalContext } from "../../../context/modal/modal"
import { useNavigate } from "react-router-dom"
import {toast} from 'react-toastify'
const Feedback = () => {
  const {lasturl, setFeedback} = useModalContext()
  const navigate = useNavigate()
    const handlesubmit = (data) => {
        instance.post('/feedback/feedback/', data)
        .then((res) => {
          toast.success('Your Feed back has been sent ')
          setFeedback()
          console.log(res.data)
          if(lasturl !== null){
            navigate(lasturl)
          }
          else {

          }
          
        })
        .catch(error => {
          toast.error('Your Feed back was not sent ')
          
        })  
     }

    const formik = useFormik({
        initialValues: {
            "email": "",
            "name": "",
            "organization": "",
            "easy_to_navigate": "",
            "best_feature":  "",
            "least_favourite_feature":  "",
            "additional_comment": ""
        },
        onSubmit: values => {
            handlesubmit(values)
        }
    })
    // const loginObject = useLogic()


  return (
    <div className="w-full flex flex-col md:flex-row h-[90vh] items-center " >
    <div className="md:h-full bg-[#5A0C91] flex items-center h-[300px] w-full md:w-[35%] px-[20px]">
  <div className="relative h-[250px] md:h-[intial] mx-auto"><img src={bg} className='w-full h-full relative'  alt="" /></div>
  </div>
    <div className="flex-1 md:px-[67px] px-[20px]  overflow-y-scroll h-full flex w-full items-center justify-center">
    <div className="flex items-center h-full">     
    <form onSubmit={formik.handleSubmit} className='flex flex-col gap-[1.5rem] h-full md:py-[72px] ' >
      <p className="font-lato font-[700] text-[1.75rem] text-[#232323] text-center mx-auto">Feedback Form</p>
      <p className="font-lato font-[700] text-[1rem] text-[#232323] text-center mx-auto">We want to hear from you!. Share your feedback on our website</p>
        <div className="flex flex-col md:flex-row gap-[20px] md:h-full mx-auto w-full">
          <div className="flex flex-col gap-5">
          <section className="flex flex-[0.5rem]">
        <InputField type="text" onChangeHandler={formik.handleChange} value={formik.values.name} fieldName={"Name"}  name="name"></InputField>
        {/* <p className="text-[12px] text-red-600">{loginObject.formObj.touched.email && loginObject.formObj.errors.email ? loginObject.formObj.errors.email:null}</p> */}
      </section>
      <section className="flex flex-[0.5rem]">
        <InputField type="text" onChangeHandler={formik.handleChange} value={formik.values.organization} fieldName={"Organization"}  name="organization"></InputField>
        {/* <p className="text-[12px] text-red-600">{loginObject.formObj.touched.email && loginObject.formObj.errors.email ? loginObject.formObj.errors.email:null}</p> */}
      </section> 
      <section className="flex flex-[0.5rem]">
        <InputField type="text" onChangeHandler={formik.handleChange} value={formik.values.best_feature} fieldName={"Whats is your best feature"}  name="best_feature"></InputField>
        {/* <p className="text-[12px] text-red-600">{loginObject.formObj.touched.email && loginObject.formObj.errors.email ? loginObject.formObj.errors.email:null}</p> */}
      </section>
          </div>
          <div className="flex flex-col gap-5">
          <section className="flex flex-[0.5rem]">
        <InputField type="email" onChangeHandler={formik.handleChange} value={formik.values.email} fieldName={"Email Address"}  name="email"></InputField>
        {/* <p className="text-[12px] text-red-600">{loginObject.formObj.touched.email && loginObject.formObj.errors.email ? loginObject.formObj.errors.email:null}</p> */}
      </section>
      <section className="w-full rounded-[8px] flex flex-col items-start gap-[0.5rem]">
      <p className=" font-Poppins font-[600] text-[1rem] font-lato text-[#232323] font-[500] md:font-[600]">Is the web app easy to navigate?</p>
        <select value={formik.values.easy_to_navigate} className=' w-full h-[100%] text-[16px] w-full h-[100%] text-[16px] text-[1rem] font-Poppins p-[0.8rem] font-Poppins border-solid border-[#232323] border-[1px] rounded-[5px] outline-none' name='easy_to_navigate'  onChange={formik.handleChange}>
        <option>choose an option</option>            
            <option value={true} >yes</option>
            <option value={false}>no</option>
            </select>
      </section> 
      <section className="flex flex-[0.5rem] w-full">
        <InputField type="text" onChangeHandler={formik.handleChange} value={formik.values.least_favourite_feature} fieldName={"What is your least favorite feature?"}  name="least_favourite_feature"></InputField>
        {/* <p className="text-[12px] text-red-600">{loginObject.formObj.touched.email && loginObject.formObj.errors.email ? loginObject.formObj.errors.email:null}</p> */}
      </section>
          </div>
        </div>

          <section className='flex flex-col flex-[0.5rem] w-full'>
                <div className='font-[600] text-left text-[1rem] font-lato mb-[8px] w-full'>Additional comment/observations(Optional)</div>
            <textarea  id="" cols="12" rows="2" value={formik.values.additional_comment} onChange={formik.handleChange} name='additional_comment' placeholder='Type your message here'  className='p-[1rem] border-[1px] border-solid border-[#CCB4DD] bg-[inherit] rounded-[2px]'></textarea>
            </section>
            <div className=" flex ">
      <AuthButton name="Submit" isLoading={false} className=''></AuthButton>
      </div>
       {/* {loginObject.loginMutation.isError ? <p className="text-[12px] text-red-500 text-center mt-[10px]">{loginObject.loginMutation.error.response.data.non_field_errors[0]}</p> : null} */}
      
     </form>
   
     </div>
     </div>



    </div>
  )
}

export default Feedback