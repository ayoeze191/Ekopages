import React from 'react'
import AuthButton from '../../authButton'
import InputField from '../../inputField'
const BecomeAPartner = () => {
  return (
    <div>
        <div></div>
        <div>
            <p className='font-[700] font-lato text-[1.25rem] '>Are you passionate about SDG projects for children?</p>
            <div>
                <p>Then fill the form below detailing your intentions</p>
                    <p> OR </p>
 
                <p> Shoot us a mail at sales@ekopages.com </p>
            </div>

            <form action="">
            <section className="flex flex-col">
            <InputField type="text" onChangeHandler={formik.handleChange} value={formik.values.username} fieldName={"Name"} name="name" id="Name" placeholder={"Enter your name here"}></InputField>
            {/* <p className="text-[12px] text-red-600 mt-4">{formik.touched.username && formik.errors.username ? formik.errors.username:null}</p> */}
            </section>

            <section className="flex flex-col">
            <InputField type="email" onChangeHandler={formik.handleChange} value={formik.values.email} fieldName={"Email Address"} name="email" id="email" placeholder={"example@gmail.com"}></InputField>
            {/* <p className="text-[12px] text-red-600 mt-4">{formik.touched.username && formik.errors.username ? formik.errors.username:null}</p> */}
            </section>
            <section>
                <div>Message</div>
            <textarea name="message" id="" cols="30" rows="10"> Type your message herer </textarea>
            </section>
            <AuthButton isLoading={false} name={"Send message"}/>
            </form>
        </div>
    </div>
  )
}

export default BecomeAPartner