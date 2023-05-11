// import axios from "axios";
import React from "react";
import { useState, useContext } from "react";
import { signUp } from "./comp/signup";
import { toast } from "react-toastify";


export const SignUpContext = React.createContext({
    error: null,
    success: false,
    loading: false,
    signup: (value) => {}
});



export const SignUpProvider = ( { children }) => {
    const [success, setsucess] = useState(false);
    const [error, setError] = useState("");
    const [loading, setIsloading] = useState(false)

    const Signup = (data) => {
        console.log("signing up 2")
        setIsloading(true)
        signUp(data)
        .then((res) => {
            console.log(res.data)
            console.log("signingup")
            setIsloading(false)
            setsucess(true);
            setError(null);
            toast.success("Your Registration is Sucessfull")
        })
        .catch((err) => {
            console.log(err)
            setIsloading(false);
            setsucess(false);
            setError(err.response.data);
            setTimeout(() => setError(""), 5000)
            toast.success("Registration Failed")
        })

    }
    return (
      <SignUpContext.Provider
        value={{
          error,
          success,
          loading,
          signup: Signup
        }}
      >
        {children}
      </SignUpContext.Provider>
    );
  };

  export const useSignupContext = () => useContext(SignUpContext);