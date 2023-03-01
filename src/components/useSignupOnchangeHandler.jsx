import React, {useState} from 'react'
import { SignupValidate } from './validate/validate'
import { useSignupContext } from '../context/auth/signup'


const useSignupOnchange = () => {
    const { signup } = useSignupContext()
    const [details, setDetails] = useState([
        {username: "", error: null},
        {first_Name: "", error: null},
        {Last_Name: "", error: null},
        {account_type: "", error: null},
        {Email: "", error: null},
        {Phone_Number: "", error: null},
        {Password: "", error: null},
        {confirm_password: "", error: null}
    ])
    
      const signupOnChangeHandler = (e) => {
        //   //(e.target.name, "changinh")
          let new_detail = {...details}
          let error = null
        //   //(e.target.name)
    
          if(e.target.name === "username") {
            new_detail[0].username = e.target.value
           if(  SignupValidate(e.target.value, e.target.name)){
             error =  SignupValidate(e.target.value, e.target.name)
             new_detail[0].error = error
           }
          }
    
          if(e.target.name === "first_Name") {
            new_detail[1].first_Name = e.target.value
            if(  SignupValidate(e.target.value, e.target.name)){
              error =  SignupValidate(e.target.value, e.target.name)
              new_detail[1].error = error
            }
          }

          if(e.target.name === "Last_Name") {
            new_detail[2].Last_Name = e.target.value
            if(  SignupValidate(e.target.value, e.target.name)){
              error =  SignupValidate(e.target.value, e.target.name)
              new_detail[2].error = error
            }
          }
          if(e.target.name === "account_type") {
            new_detail[3].account_type = e.target.value
            if(  SignupValidate(e.target.value, e.target.name)){
              error =  SignupValidate(e.target.value, e.target.name)
              new_detail[3].error = error
            }
          }
          if(e.target.name === "Email") {
            new_detail[4].Email = e.target.value
            if(  SignupValidate(e.target.value, e.target.name)){
              error =  SignupValidate(e.target.value, e.target.name)
              new_detail[4].error = error
            }
          }
          if(e.target.name === "Phone_Number") {
            new_detail[5].Phone_Number = e.target.value
            if(  SignupValidate(e.target.value, e.target.name)){
              error =  SignupValidate(e.target.value, e.target.name)
              //(error, "ero")
              new_detail[5].error = error
            }
          }
          if(e.target.name === "Password") {
            new_detail[6].Password = e.target.value
            if(  SignupValidate(e.target.value, e.target.name)){
              error =  SignupValidate(e.target.value, e.target.name)
              new_detail[6].error = error
            }
          }
          if(e.target.name === "confirm_password") {
            new_detail[7].confirm_password = e.target.value
            if(  SignupValidate(e.target.value, e.target.name)){
              error =  SignupValidate(e.target.value, e.target.name)
              new_detail[7].error = error
            }
          }
    
          setDetails(new_detail)
      }


      



    const signUp = (e) => {
      e.preventDefault()
      const data = {
        username: "ayoeze191",
        first_name: "ezekiel",
        last_name: "ayodele",
        email: "ayodele@yahoo.com",
        password1: "75739768jc",
        password2: "75739768jc",
        accountType:"user"
    }
      
      signup(data)
    }

      return { signupOnChangeHandler, details, signUp }
}

export default useSignupOnchange