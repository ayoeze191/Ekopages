import React from "react";
import { useState, useContext } from "react";

export const ModalContext = React.createContext({
    partnerModal:  false,
    stayIntouchModal: false,
    setpartnerModal: () => {},
    setstayIntouchModal: () => {},
    loginModal: false,
    setLoginModal: () => {},
    signupModal: false,
    setSignupModal: () => {},
    setLogOutModal: () => {},
    forgotPasswordModal: false,
    switchforgotPasswordModal: () => {},
    logoutModal: false,
});

export const ModalProvider = ({children}) => {
    const [partner, setpartner] = useState(false)
    const [stay, setStay] = useState(false)
    const [login, setLogin] = useState(false)
    const [signup, setSignup] = useState(false)
    const [logoutModal, setlogOutModal] = useState(false)
    const [forgotPasswordModal, setforgotPasswordModal] = useState(false)
    const setpartnerFunc = () => {
        setpartner(!partner)
    }
    const switchforgotPasswordModal = () => {
        setforgotPasswordModal(!forgotPasswordModal)
    }

    const setStayFunc = () => {
        setStay(!stay)
    }

    const setLoginFunc = () => {
        setLogin(!login)
    }
    const setSignupFunc = () => {
        setSignup(!signup)
    }
    const handleLogoutModal = () => {
        setlogOutModal(!logoutModal)
    }

    return (
        <ModalContext.Provider
        value={{
            partnerModal: partner,
            setpartnerModal: setpartnerFunc,
            stayIntouchModal: stay,
            setstayIntouchModal: setStayFunc,
            loginModal: login,
            setLoginModal: setLoginFunc,
            setSignupModal: setSignupFunc,
            signupModal: signup,
            logoutModal,
            setLogOutModal: handleLogoutModal,
            forgotPasswordModal,
            switchforgotPasswordModal
        }}
        >
            {children}
        </ModalContext.Provider>
    )
}


export const useModalContext = () => useContext(ModalContext);