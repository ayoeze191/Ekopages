// import axios from "axios";
import React from "react";
import { useState, useContext } from "react";
import { loginUser } from "./comp/Login";

export const AuthContext = React.createContext({
    isAuth: localStorage.getItem('access')?true:false, 
    access: localStorage.getItem('access'),
    refresh: localStorage.getItem('refresh'),
    user: JSON.parse(localStorage.getItem("user")),
    error: "",
    success: false,
    loading: false,
    login: (value) => {},
    logout: () => {},
    showLoginModal: false,
    setloginMode: () => {}
});



export const AuthProvider = ( { children }) => {
    const [success, setsucess] = useState(false);
    const [error, setError] = useState("");
    const [loading, setIsloading] = useState(false)
    const [loginModal, setLoginModal] = useState(false)

    const ChangeLoginModalMode = () => {
        setLoginModal(!loginModal)
    }

    const Login = (details) => {
      setIsloading(true)
      console.log("logging in")
      loginUser(details)
        .then((res) => {
          console.log(res.data.user)
          setsucess(true);
          setError("");
          localStorage.setItem('access', res.data.access_token)
          localStorage.setItem('refresh', res.data.refresh_token)
          localStorage.setItem('user', JSON.stringify (res.data.user))
          setIsloading(false)
          setLoginModal(!loginModal)
      })
      .catch((err) => {
        console.log(err.response.data, "logging in error")
          setIsloading(true)
          setIsloading(false)
          setsucess(false);
          setError(err.response.data);
          localStorage.removeItem('access')
          localStorage.removeItem('refresh')
          localStorage.removeItem('user')
      })
};
    return (
      <AuthContext.Provider
        value={{
          isAuth: localStorage.getItem('access')?true:false,
          // isAuth: true,
          access: localStorage.getItem('access'),
          refresh: localStorage.getItem('refresh'),
          user: JSON.parse(localStorage.getItem("user")),
          error,
          success,
          loading,
          login: Login,
          showLoginModal: loginModal,
          setloginMode: ChangeLoginModalMode
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  };

  export const useAuthContext = () => useContext(AuthContext);