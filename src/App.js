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
function App() {
  const [side, setSide] = useState(false)



  const sidebarHandler = () => {
    setSide(!side)
  }

  const {isAuth} = useAuthContext()
  console.log(isAuth)
  // localStorage.removeItem('access')
  // localStorage.removeItem('refresh')
  // localStorage.removeItem('user')
  return (
    <div className="bg-[#F6F6F6] min-h-screen h-full flex flex-col  justify-center">

      

      <BrowserRouter>
      <Routes>
      {/* <Route element= {<Login />}  path="/login" /> */}
      </Routes>
      <Side_bar show={side} sideFunc={sidebarHandler}/>
      
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
      </BrowserRouter>
      
    </div>
  );
}

export default App;
