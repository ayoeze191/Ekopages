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
import OtherTales from "../Service/Ekotales/OtherEkotales/OtherTales";

const LandingComponent = () => {
    return (
        <div className="w-full ">
            {/* <NavHeader></NavHeader> */}
            <WelcomeComponent></WelcomeComponent>
            {/* <OurPartners></OurPartners> */}
           <div className="section py-12 mx-auto lg:px-0 px-6 font-lato font-bold"> <OtherTales /></div>
            <Partners />
            <About></About>
            <Benefits></Benefits>
            <Store></Store>
            <p className="w-full  mx-auto px-6 lg:px-0 md:max-w-3xl md:text-[24px] mb-[2rem] font-[600] text-[1rem] text-[#232323] md:font-[500] font-Poppins text-center mt-[55px] md:hidden">
            Our Immersive Learning Environment for kids
            is on course for astronomical interactions</p>
            <Achievement></Achievement>
            <EkoNews></EkoNews> 
          </div>
    )
}

export default LandingComponent