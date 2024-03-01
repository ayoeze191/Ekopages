//compoents
import LandingPage from "./pages/landingpage/landingPage";
import {Route,Routes,Navigate,BrowserRouter, Link, useLocation} from "react-router-dom"
import { BasicRoutes,  } from "./routes";
import NavHead from "./components/about/Navhead";
import Footers from "./components/footer/Footers";
import { useAuthContext } from "./context/auth/auth";
import Login from "./components/login";
import Rodal from "rodal";
import 'rodal/lib/rodal.css';
import Side_bar from "./components/ui/sidebar/Side_bar";
import { useState } from "react";
import Overlay from "./components/ui/Overlay";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import BecomeAPartner from "./components/ui/Modal/BecomeAPartner";
import { useModalContext } from "./context/modal/modal";
import StayIntouch from "./components/ui/Modal/StayIntouch";
import { useCookies, Cookies } from 'react-cookie';
import { createContext } from "react";
import generateRandomString from "./Utils/randomChar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import instance from "./axios";
import withErrorHandler from "./components/withErrHandler";
import {GoQuestion} from "react-icons/go"
import Logout from "./components/ui/Modal/Logout";
import PasswordReset from "./components/ui/Modal/PasswordReset";
import ReactGA from 'react-ga';

export const cookieContext = createContext({cookie: "", setContext: () => {}})


function App() {
  console.log("anyalzuins")
  const loc = window.location
  // const location = useLocation();
  // useEffect(() => {
  //   ReactGA.pageview(location.pathname + location.search);
  // }, [location]);
  useEffect(() => {
  ReactGA.pageview(window.location.pathname)
  }, [])
  //    useEffect(() => {
  //   ReactGA.event({
  //   category: 
  //   })
  // }, [location]);
  useEffect(() => {
      window.scrollTo(0, 0);

  }, [Routes, loc]);
  const [side, setSide] = useState(false)
  var currentDate = new Date();
  const [cookies, setCookie, removeCookie] = useCookies(['eko_session_id']);
  
  const {isAuth, update_token} = useAuthContext()



  //(cookies.eko__session_id)
  const sidebarHandler = () => {
    setSide(!side) 
  }

  const setCookieContext = () => {
      setCookie('eko_session_id', generateRandomString(15), { path: '/' }, {expires: currentDate.setDate(currentDate.getDate() + 5)})
  }

  if(!cookies.eko_session_id) {
    setCookieContext()
  }
    
  const {forgotPasswordModal, switchforgotPasswordModal, partnerModal, setpartnerModal, stayIntouchModal, setstayIntouchModal, logoutModal, setLogOutModal, setSignupModal} = useModalContext()
  const urlSearchParams = new URLSearchParams(window.location.search);
  const referenceValue = urlSearchParams.get('signup');
  useEffect(() => {
    if(referenceValue == 'true'){
      const currentUrl = window.location.href;
      setSignupModal()
    //   if (currentUrl.indexOf('signup=true') !== -1) {
    //     // Remove the 'signup' parameter
    //     var updatedUrl = currentUrl.replace('?signup=true', '');
    
    //     // Update the URL in the browser without reloading the page
    //     window.history.replaceState({}, document.title, updatedUrl);
    // }
    }
  }, [])


  return (
    <cookieContext.Provider value={{cookie: cookies.eko_session_id !== (undefined || null)? cookies.eko_session_id:null, setContext: setCookieContext }}>
    <div className="bg-[#F6F6F6] flex">

      <Rodal 
       customStyles={{
        width: "90%",
        paddingLeft: "0",
        paddingRight: "0",
        paddingTop: "0",
        paddingBottom: "0",
        background: "#F6F6F6",
        height: "90vh",
        overflowY:"scroll",
        maxWidth: "1000px",
        borderRadius: "10px 0px 0px 10px"
        }}
        onClose = {setpartnerModal}
        visible={partnerModal}
        
      >
        <BecomeAPartner />
      </Rodal>
      <Rodal 
       customStyles={{
        // background: "#F6F6F6",
        width: "80%",
        maxWidth:"668px",
        height: "fit-content",
        maxWidth: "1000px",
        borderRadius: "10px"
        }}
        onClose = {setLogOutModal}
        visible={logoutModal}
      >
        <Logout sidebarHandler={sidebarHandler}  sidebar={side}/>
      </Rodal>

      <Rodal 
       customStyles={{
        width: "90%",
        paddingLeft: "0",
        paddingRight: "0",
        paddingTop: "0",
        paddingBottom: "0",
        background: "#F6F6F6",
        height: "90vh",
        overflowY:"scroll",
        maxWidth: "1000px",
        borderRadius: "10px 0px 0px 10px"
        }}
        onClose = {setstayIntouchModal}
        visible={stayIntouchModal}
        
      >
        <StayIntouch />
      </Rodal>
      <Rodal 
      customStyles={{
        width: "90%",
        paddingLeft: "0",
        paddingRight: "0",
        paddingTop: "0",
        paddingBottom: "0",
        background: "#F6F6F6",
        height: "60vh",
        minHeight: "473px",
        maxWidth: "688px",
        borderRadius: "10px 0px 0px 10px"
        }}
        onClose={switchforgotPasswordModal}
      visible={forgotPasswordModal}>
        <PasswordReset />
      </Rodal>
      <ToastContainer />
      <BrowserRouter>
      <Routes>
      {/* <Route element= {<Login />}  path="/login" /> */}

      </Routes>
      <Overlay showSmallOnly={side} remove={sidebarHandler}/>
      {/* <Link className="fixed bottom-20 right-20 text-[#5A0C91] font-bold" to={'/faq'}><GoQuestion size={50} color="#5A0C91" /></Link> */}
      <Side_bar show={side} sideFunc={sidebarHandler}/>
      <div className="min-h-screen h-full w-full flex flex-col  justify-center">
      <NavHead sideHandler ={sidebarHandler}/>
        <Routes>
          {
            BasicRoutes.map((eachRoutes, id) => <Route key={id} path={eachRoutes.path} element={eachRoutes.component}></Route>
            )
          }
         
      </Routes>
      <Footers /> 
      </div>
      </BrowserRouter>
      
    </div>
    </cookieContext.Provider>
  );
}

export default App