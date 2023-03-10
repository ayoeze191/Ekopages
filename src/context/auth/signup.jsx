// import axios from "axios";
import React from "react";
import { useState, useContext } from "react";
import { signUp } from "./comp/signup";

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
        //("signing up 2")
        setIsloading(true)
        signUp(data)
        .then((res) => {
            //(res)
            setIsloading(false)
            setsucess(true);
            setError(null);
        })
        .catch((err) => {
            //(err, "signup error")
            setIsloading(false);
            setsucess(false);
            setError(err.response);
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