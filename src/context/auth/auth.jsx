// import axios from "axios";
import React from "react";
import { useState, useContext } from "react";
import { loginUser,  logoutUser} from "./comp/Login";

export const AuthContext = React.createContext({
    isAuth: localStorage.getItem('access')?true:false, 
    access: localStorage.getItem('access'),
    refresh: localStorage.getItem('refresh'),
    user: JSON.parse(localStorage.getItem("user")),
    error: "",
    success: false,
    loading: false,
    logoutLoading: false,
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
    const [auth, setisAuth] = useState(localStorage.getItem('access')?true:false)

    const ChangeLoginModalMode = () => {
        setLoginModal(!loginModal)
    }


    const Login = (details) => {
      setIsloading(true)
      //("logging in")
      loginUser(details)
        .then((res) => {
          // //(res.data.access_token, "data")
          setsucess(true);
          setError("");
          localStorage.setItem('access', res.data.access_token)
          setisAuth(true)
          localStorage.setItem('refresh', res.data.refresh_token)
          localStorage.setItem('user', JSON.stringify (res.data.user))
          setIsloading(false)
          setLoginModal(!loginModal)
      })
      .catch((err) => {
        setisAuth(false)
        //(err.response.data, "logging in error")
          setIsloading(true)
          setIsloading(false)
          setsucess(false);
          setError(err.response);
          localStorage.removeItem('access')
          localStorage.removeItem('refresh')
          localStorage.removeItem('user')
      })
}


    const logout = () => {
      logoutUser()
      .then((res) => {
        console.log(res)
        localStorage.removeItem('access')
        localStorage.removeItem('refresh')
        localStorage.removeItem('user')
        setisAuth(false)
      })
      .catch((err) => {
        console.log(err)
      })
    }

    return (
      <AuthContext.Provider
        value={{
          isAuth: auth,
          // isAuth: true,
          access: localStorage.getItem('access'),
          refresh: localStorage.getItem('refresh'),
          user: JSON.parse(localStorage.getItem("user")),
          error,
          success,
          loading,
          login: Login,
          showLoginModal: loginModal,
          setloginMode: ChangeLoginModalMode,
          logout
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  };

  export const useAuthContext = () => useContext(AuthContext);