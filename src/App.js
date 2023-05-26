//compoents
import LandingPage from "./pages/landingpage/landingPage";
import {Route,Routes,Navigate,BrowserRouter} from "react-router-dom"
import { BasicRoutes, PrivateRoutes } from "./routes";
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


export const cookieContext = createContext({cookie: "", setContext: () => {}})


function App() {
  const [side, setSide] = useState(false)
  const [cookies, setCookie, removeCookie] = useCookies(['eko_session_id']);
  
  const {isAuth, update_token} = useAuthContext()



  console.log(cookies.eko__session_id)
  const sidebarHandler = () => {
    setSide(!side) 
  }

  const setCookieContext = () => {
      setCookie('eko_session_id', generateRandomString(15), { path: '/' })

  }

  if(!cookies.eko_session_id) {
    setCookieContext()
  }

  console.log(cookies, "app")
  
  const {partnerModal, setpartnerModal, stayIntouchModal, setstayIntouchModal} = useModalContext()
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
      <ToastContainer />

      <BrowserRouter>
      <Routes>
      {/* <Route element= {<Login />}  path="/login" /> */}

      </Routes>
      <Overlay showSmallOnly={side} remove={sidebarHandler}/>
      <Side_bar show={side} sideFunc={sidebarHandler}/>
      <div className="min-h-screen h-full w-full flex flex-col  justify-center">
      <NavHead sideHandler ={sidebarHandler}/>
        <Routes>
          {
            BasicRoutes.map((eachRoutes, id) => <Route key={id} path={eachRoutes.path} element={eachRoutes.component}></Route>
            )
          }
          {
            isAuth?PrivateRoutes.map((eachRoutes, id ) => <Route key={id} path={eachRoutes.path} element={eachRoutes.component} /> ):null
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