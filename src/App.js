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
import { get_cart } from "./store/Actions/Cart";
import BecomeAPartner from "./components/ui/Modal/BecomeAPartner";
import { useModalContext } from "./context/modal/modal";
import StayIntouch from "./components/ui/Modal/StayIntouch";
function App() {
  const [side, setSide] = useState(false)  
  const dispatch = useDispatch()
  const sidebarHandler = () => {
    setSide(!side)
  }
  
  const {isAuth} = useAuthContext()
  const {partnerModal, setpartnerModal, stayIntouchModal, setstayIntouchModal} = useModalContext()
  console.log(isAuth)
  // localStorage.removeItem('access')
  // localStorage.removeItem('refresh')
  // localStorage.removeItem('user')
  return (
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
  );
}

export default App;
