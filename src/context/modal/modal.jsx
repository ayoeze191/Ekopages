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
    logoutModal: false,
});

export const ModalProvider = ({children}) => {
    const [partner, setpartner] = useState(false)
    const [stay, setStay] = useState(false)
    const [login, setLogin] = useState(false)
    const [signup, setSignup] = useState(false)
    const [logoutModal, setlogOutModal] = useState(false)

    const setpartnerFunc = () => {
        setpartner(!partner)
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
            setLogOutModal: handleLogoutModal
        }}
        >
            {children}
        </ModalContext.Provider>
    )
}


export const useModalContext = () => useContext(ModalContext);