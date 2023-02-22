import { useReducer } from "react"
import { useFormik } from "formik"
//react-query
import { useMutation, useQuery, useQueryClient } from "react-query"
//reducer
import * as reducerObject from "../reducer/signup"
import axiosInstace from "../axios"



const useLogic = () => {
    const [state, dispatch] = useReducer(reducerObject.signupReducer, reducerObject.initialState)
    const queryClient = useQueryClient()
    
    const SignupFormObj = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            password: "",
            username: "",
            confirmPassword: "",
            accountType:""
        },
        validate,
        onSubmit: (values) => {
            alert("signup submitted successfully")
        }
    })

// validate form fields
    function validate(values) {
        const errors = {}
        if (!values.username) {
            errors.username = "required"
        }
        
        if (!values.firstName) {
            errors.firstName = "required"
        }
        if (!values.lastName) {
            errors.lastName = "required"
        }
        if (!values.email) {
            errors.email = "required"
        }

        if (!values.phoneNumber) {
            errors.phoneNumber = "required"
        }
        else if (typeof parseInt(values.phoneNumber) === "number") {
            errors.phoneNumber = "only number allowed"
            
        }
        else if( !/^\d{11}$/.test(values.phoneNumber) && !/^[+]234\d{10}$/.test(values.phoneNumber)) {
                errors.phoneNumber = "invalid number"
            
        }

        if (!values.password) {
            errors.password = "required"
            
        }
        if (!values.confirmPassword) {
            errors.confirmPassword = "required"
            
        }
        if (!values.accountType) {
            errors.accountType = "required"
            
        }

        return errors
    }

    const signupMutation = useMutation(registerUser, {
        onSuccess: () => {
            alert("signup success full")
        }
    })


 // register user
    function registerUser () {
        const data = {
            username: SignupFormObj.values.username,
            first_name: SignupFormObj.values.firstName,
            last_name: SignupFormObj.values.lastName,
            email: SignupFormObj.values.accountType,
            password1: SignupFormObj.values.password,
            password2: SignupFormObj.values.confirmPassword,
            accountType:SignupFormObj.values.accountType
        }
      return axiosInstace.post("registration/",data)
 }   


//handle password field value visibility
const showPassword = (state) => {
        if (state.showPassword === false) 
            return dispatch({ type: "SHOW_PASSWORD_VALUE", payload: { showPassword: true } })
        dispatch({type: "SHOW_PASSWORD_VALUE", payload: {showPassword: false}})
}
    
//handle confirm input value visibility
    const showConfirmPassword = (state) => {
        if (state.showCOnfirmPassword === false) 
        return dispatch({ type:"SHOW_CONFIRM_PASSWORD_VALUE", payload: { showCOnfirmPassword: true } })
    dispatch({type: "SHOW_CONFIRM_PASSWORD_VALUE", payload: {showCOnfirmPassword: false}})
    
}
    

    return {
        showPassword,
        showConfirmPassword,
        state,
        SignupFormObj
    }
}

export default useLogic

