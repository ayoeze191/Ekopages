
import NavHead from "./Navhead"
import { AboutUsComp } from "./aboutDetail"
import { MeetTeam } from "./meetteam"
import Partners from "./Partners"
import QualityEducation from "./QualityEducation"
import Vision from "./Vision"
import WhyUs from "./WhyUs"
import Footers from "../footer/Footers"



export const AboutContainer = () => {

    return <div className="bg-[#F6F6F6] overflowx-hidden">
        {/* <NavHead></NavHead> */}
        <AboutUsComp></AboutUsComp>
        <QualityEducation/>
        <WhyUs />
        <Partners />
        <Vision />
        <MeetTeam />
        {/* <Footers /> */}
    </div>
}