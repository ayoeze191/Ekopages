// import axios from "axios";
import React from "react";
import { useState, useContext } from "react";
import { loginUser,  logoutUser, refreshToken} from "./comp/Login";
import instance from "../../axios";
import { imageConfig, tokenConfig } from "../../Config/Config";
import { setProfilePic } from "../../store/reducers/profils";
import {toast} from "react-toastify"
import { useModalContext } from "../modal/modal";


export const AuthContext = React.createContext({
    isAuth: localStorage.getItem('eko_access')?true:false, 
    access: localStorage.getItem('eko_access'),
    refresh: localStorage.getItem('eko_refresh'),
    user: JSON.parse(localStorage.getItem("eko_user")),
    exp: localStorage.getItem('exp'),
    error: null,
    success: false,
    loading: false,
    logoutLoading: false,
    login: (value) => {},
    logout: () => {},
    showLoginModal: false,
    setloginMode: () => {},
    profpics: "",
    change_profile_pics: () => {},
    update_token: () => {},
});



export const AuthProvider = ( { children }) => {
  const {setLoginModal, loginModal} = useModalContext()
    const [success, setsucess] = useState(false);
    const [error, setError] = useState("");
    const [loading, setIsloading] = useState(false)
    // const [loginModal, setLoginModal] = useState(false)
    const [auth, setisAuth] = useState(localStorage.getItem('eko_access')?true:false)
    const [profpics, setProfpics] = useState(JSON.parse(localStorage.getItem("eko_user"))?JSON.parse(localStorage.getItem("eko_user"))['profile_picture']:null)
    //("initial profpics", profpics)
    const ChangeLoginModalMode = () => {
        setLoginModal(!loginModal)
    }

    

    
    const changeProfilePics = (picture) => {
      //("changing profile pics")
      instance.put("auth/user/", {profile_picture: picture} ,imageConfig())
      
      .then((res) => {
      //("profile pics changed", res)
      setProfpics(res.data.profile_picture)
      localStorage.setItem('eko_user', JSON.stringify(res.data))
      })
      .catch(err => {
        //("unable to change ")
          //(err)
      })
    }



    const Login = (details) => {
      setIsloading(true)
      loginUser(details)
        .then((res) => {
          //(res.data)
          setsucess(true);
          setError(null);
          localStorage.setItem('exp', res.data.access_token_expiration)
          localStorage.setItem('eko_access', res.data.access_token)
          setisAuth(true)
          localStorage.setItem('eko_refresh', res.data.refresh_token)
          localStorage.setItem('eko_user', JSON.stringify(res.data.user))
          setProfilePic(res.data.user.profile_picture)
          // setProfpics(res.data.user.profile_picture)
          setIsloading(false)
          setLoginModal(!loginModal)
          setLoginModal()
          toast.success("Sucessfully Logged In ")
      })
      .catch((err) => {
        setisAuth(false)
        //({err}, "logging in error")
          setIsloading(true)
          setIsloading(false)
          setsucess(false);
          setError(err.response.data);
          localStorage.removeItem('eko_access')
          localStorage.removeItem('eko_refresh')
          localStorage.removeItem('eko_user')
          toast.error("unable to login")
          
      })
}


    const logout = () => {
      logoutUser()
      .then((res) => {
        //(res)
        localStorage.removeItem('eko_access')
        localStorage.removeItem('eko_refresh')
        localStorage.removeItem('eko_user')
        localStorage.removeItem('exp')
        setisAuth(false)
        toast.info("Logged out")
      })
      .catch((err) => {
        //(err)
      })
    }

    const RefreshToken = () => {
        const exp = new Date(localStorage.getItem('exp'))
        const presentDate = new Date()
        //({"exp":exp}, {"presentDate": presentDate})
        //(exp >= presentDate, "checking for expiration date")
        if(presentDate >= exp){
        refreshToken()
        .then((res) => {
          //(res, "refresshing token")
          localStorage.setItem('exp', res.data.access_token_expiration)
          localStorage.setItem('eko_access', res.data.access)
          setisAuth(true)
        })
        .catch((err) => {
          //(err, "error refreshing token")
        })
        }   
    }

    return (
      <AuthContext.Provider
        value={{
          isAuth: auth,
          // isAuth: true,
          access: localStorage.getItem('eko_access'),
          refresh: localStorage.getItem('eko_refresh'),
          user: JSON.parse(localStorage.getItem("eko_user")),
          error,
          success,
          loading,
          login: Login,
          showLoginModal: loginModal,
          setloginMode: ChangeLoginModalMode,
          logout,
          change_profile_pics: changeProfilePics,
          profile_pics: profpics,
          exp: localStorage.getItem('exp'),
          update_token: RefreshToken
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  };

  export const useAuthContext = () => useContext(AuthContext);