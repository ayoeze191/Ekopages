import { useReducer } from "react"
import { useFormik } from "formik"
import { useMutation, useQuery, useQueryClient } from "react-query"
import axiosInstance from "../axios"


//reducer
import * as reducerObject from "../reducer/login"


const useLogic = () => {

    const [state, dispatch] = useReducer(reducerObject.LoginReducer, reducerObject.initialState)
    const queryClient = useQueryClient()
    const { isLoading, isError, data, error } = useQuery("login")
    


    //validate form fields 
    const validate = (values) => {
        const error = {
        
        }

        if (!values.email) {
            error.email = "required"
        }
        else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            error.email = 'Invalid email address';
          }

        if (!values.password) {
            error.password = "required"
        }

        return error
    } 
    
const formObj = useFormik({
        initialValues: {
            email: "",
            password:""
        },
        validate,
    onSubmit: (values) => {
        
        loginMutation.mutate()
       
        }
})
    


    const loginMutation = useMutation(authenticateUser, {
        onError: () => {
            
        },
        onSuccess: () => {
            alert("login successfull")
    }
})


// authenticate user
    async function authenticateUser() {
        // const data = {
        //     username:"string",
        //     email: formObj.values.email,
        //     password:formObj.values.password
        // }
        const data = {
            username: "string",
            email: "user@example.com",
            password: "string"
          }

        return axiosInstance.post("/auth/login/",data)
        
        
       
   }
    
//handle password field value visibility
const showPassword = (state) => {
        if (state.showPassword === false) 
            return dispatch({ type: "SHOW_PASSWORD_VALUE", payload: { showPassword: true } })
        dispatch({type: "SHOW_PASSWORD_VALUE", payload: {showPassword: false}})
}
    



    return {
        showPassword,
        state,
        formObj,
        loginMutation
    }
}

export default useLogic

