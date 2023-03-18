// import axios from "axios";
import React from "react";
import { useState, useContext } from "react";
import { loginUser,  logoutUser} from "./comp/Login";
import instance from "../../axios";
import { imageConfig, tokenConfig } from "../../Config/Config";
import { setProfilePic } from "../../store/reducers/profils";
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
    setloginMode: () => {},
    profpics: "",
    change_profile_pics: () => {},
    verifyEmail: (value) => {}
});



export const AuthProvider = ( { children }) => {
    const [success, setsucess] = useState(false);
    const [error, setError] = useState("");
    const [loading, setIsloading] = useState(false)
    const [loginModal, setLoginModal] = useState(false)
    const [auth, setisAuth] = useState(localStorage.getItem('access')?true:false)
    const [profpics, setProfpics] = useState(JSON.parse(localStorage.getItem("user"))?JSON.parse(localStorage.getItem("user"))['profile_picture']:null)
    console.log("initial profpics", profpics)
    const ChangeLoginModalMode = () => {
        setLoginModal(!loginModal)
    }

    const verifyEmail = (token) => {
      instance.post("registration/verify-email/", {key: token})
      .then((res) => {
        console.log(res.data)
      })
    }

    
    const changeProfilePics = (picture) => {
      console.log("changing profile pics")
      instance.put("auth/user/", {profile_picture: picture} ,imageConfig())
      
      .then((res) => {
      console.log("profile pics changed", res)
      setProfpics(res.data.profile_picture)
      localStorage.setItem('user', JSON.stringify(res.data))
      })
      .catch(err => {
        console.log("unable to change ")
          console.log(err)
      })
    }



    const Login = (details) => {
      setIsloading(true)
      loginUser(details)
        .then((res) => {
          console.log(res.data)
          setsucess(true);
          setError("");
          localStorage.setItem('access', res.data.access_token)
          setisAuth(true)
          localStorage.setItem('refresh', res.data.refresh_token)
          localStorage.setItem('user', JSON.stringify(res.data.user))
          setProfilePic(res.data.user.profile_picture)
          // setProfpics(res.data.user.profile_picture)
          setIsloading(false)
          setLoginModal(!loginModal)
      })
      .catch((err) => {
        setisAuth(false)
        console.log(err.response.data, "logging in error")
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
          logout,
          change_profile_pics: changeProfilePics,
          profile_pics: profpics,
          verifyEmail
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  };

  export const useAuthContext = () => useContext(AuthContext);