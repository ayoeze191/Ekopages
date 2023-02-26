import React from "react";
import { useState, useContext } from "react";

export const ModalContext = React.createContext({
    partnerModal:  false,
    stayIntouchModal: false,
    setpartnerModal: () => {},
    setstayIntouchModal: () => {},
    loginModal: () => {},
    setLoginModal: () => {}
});

export const ModalProvider = ({children}) => {
    const [partner, setpartner] = useState(false)
    const [stay, setStay] = useState(false)
    const [login, setLogin] = useState(false)

    const setpartnerFunc = () => {
        setpartner(!partner)
    }

    const setStayFunc = () => {
        setStay(!stay)
    }

    const setLoginFunc = () => {
        setLogin(!login)
    }
    return (
        <ModalContext.Provider
        value={{
            partnerModal: partner,
            setpartnerModal: setpartnerFunc,
            stayIntouchModal: stay,
            setstayIntouchModal: setStayFunc,
            loginModal: login,
            setLoginModal: setLoginFunc
        }}
        >
            {children}
        </ModalContext.Provider>
    )
}


export const useModalContext = () => useContext(ModalContext);