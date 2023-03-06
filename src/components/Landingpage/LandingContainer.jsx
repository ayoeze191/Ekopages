//component
import NavHeader from "../Nav"
import WelcomeComponent from "./welcome";
import OurPartners from "./partners";
import Benefits from "./benefits";
import Store from "./store/store";
import Achievement from "./achievement"
import { About } from "./about.js/about";
import { EkoNews } from "./news";
import { Footer } from "../footer/footer";
import Partners from "../about/Partners";







const LandingComponent = () => {
    return (
        <div className="w-full ">
            {/* <NavHeader></NavHeader> */}
            <WelcomeComponent></WelcomeComponent>
            {/* <OurPartners></OurPartners> */}
            <Partners />
            <About></About>
            <Benefits></Benefits>
            <Store></Store>
            <Achievement></Achievement>
            {/* <EkoNews></EkoNews>  */}
            
          </div>
    )
}

export default LandingComponent