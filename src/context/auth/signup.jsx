// import axios from "axios";
import React from "react";
import { useState, useContext } from "react";
import { signUp } from "./comp/signup";
import { toast } from "react-toastify";
import { useModalContext } from "../modal/modal";


export const SignUpContext = React.createContext({
    error: null,
    success: false,
    loading: false,
    signup: (value) => {},
    accountSuccessfullycreatedModal: false,
    setaccountSuccessfullycreatedModal: () => {}
});



export const SignUpProvider = ( { children }) => {
    const [success, setsucess] = useState(false);
    const [error, setError] = useState("");
    const [loading, setIsloading] = useState(false)
    const [accountSuccessfullycreatedModal, setaccountSuccessfullycreatedModal] = useState(false)
    const {setSignupModal} = useModalContext()
    const Signup = (data) => {
        setIsloading(true)
        signUp(data)
        .then((res) => {
            console.log(res.data)
            console.log("signingup")
            setaccountSuccessfullycreatedModal(!accountSuccessfullycreatedModal)
            setIsloading(false)
            setsucess(true);
            setError(null);
            setSignupModal()
            toast.success("Your Registration is Sucessfull")
        })
        .catch((err) => {
            setIsloading(false);
            setsucess(false);
            setError(err.response.data)
            setTimeout(() => setError(""), 5000)
            toast.error("Registration Failed")
            setaccountSuccessfullycreatedModal(false)
        })
    }
    const setaccountSuccessfullycreatedModalFunc = () => {
      setaccountSuccessfullycreatedModal(!accountSuccessfullycreatedModal)
    }

    return (
      <SignUpContext.Provider
        value={{
          error,
          success,
          loading,
          signup: Signup,
          accountSuccessfullycreatedModal:accountSuccessfullycreatedModal,
          setaccountSuccessfullycreatedModal: setaccountSuccessfullycreatedModalFunc
        }}
      >
        {children}
      </SignUpContext.Provider>
    );
  };

  export const useSignupContext = () => useContext(SignUpContext);