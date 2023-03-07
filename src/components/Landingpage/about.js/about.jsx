import  assets from "../../../assets/landingpage/export"
import { Explore } from "./explore"
import Frame155 from "./../../../assets/landingpage/Frame155.svg"
import Rectangle4232 from "./../../../assets/landingpage/Rectangle4232.svg"
import { Link } from "react-router-dom"


export const About = () => {
    

    return (
        <div className="">
            
            <div className="flex flex-col md:flex-row section items-center font-lato gap-[40px] md:py-[100px]">
               <div data-aos="zoom-out-right">
                   <p className="text-[#232323] font-[700] text-[24px] text-center mb-[2rem] md:text-[44px] md:hidden">About Us</p>
                   <div className="flex gap-[13.75px]">
                       <div className="flex flex-col gap-[8.5px]  relative md:-mt-[2.5rem] ">
                       <div className="w-[130.68px] h-[198.91px] lg:w-[246.26px] lg:h-[374.32px]">  <img src={Rectangle4232} className='w-full h-full' /></div>
                          <div className="bg-[#6C1EA3] text-[#ffffff] flex justify-end pb-[23px]  items-center flex-col rounded-b-[157.036px] w-[130.86px] h-[99.46px] lg:w-[246.26px] lg:h-[187.16px]">
                              <p className="font-[600] text-[25.5068px] lg:text-[48px]">6</p>
                              <p className="text-[12.7534px] font-[500] lg:text-[24px]">Countries</p>
                          </div>
                       </div>


                       <div className="flex flex-col gap-[8.5px] relative mt-[2.5rem] md:mt-[0]">
                       <div className="bg-[#6C1EA3] text-[#ffffff] flex justify-start pt-[23px] items-center flex-col rounded-t-[157.036px] w-[130.86px] h-[99.46px] lg:w-[246.26px] lg:h-[187.16px] ">
                              <p className="font-[600] text-[25.5068px] lg:text-[48px]">5000+</p>
                              <p className="text-[12.7534px] font-[500] lg:text-[24px]">Students</p>
                        </div>
                        <div className="w-[130.68px] h-[198.91px] lg:w-[246.26px] lg:h-[374.32px]">  <img src={Frame155} className='w-full h-full' /></div>
                       </div>
                   </div>
               </div>

               <div className="flex flex-col items-center" data-aos="fade-out-left">
                   <p className="hidden md:block text-[44px] font-[700] text-[#232323] md:mr-auto">About Us</p>
                    <p className="font-[500] text-[20px] text-center md:text-left mt-[24px] md:mr-auto mb-[16px]">Our <span className="text-[#5A0C91]"> purpose </span> is simple- <span className="text-[#5A0C91]">Catch  them young. </span></p>
                    <p className="text-[14px] font-[500] font-lato text-center md:text-left md:font-[400] text-[#4A4A4A] lg:text-[20px]">
                    We aim to catch children young to inspire them to lead the next generation fully aware of sustainability issues and how to address them via a proper representation of the realities the children are in without jeopardizing diversity. We need African children to read and see more books for them, with characters that look like them and a culture that represents them.
                    </p>
                    <Link to={'/about'} className="font-[600] md:font-[500] text-[14px] md:text-[24px] bg-[#5A0C91] py-[8px] px-[12px] md:px-[52px] md:py-[15px] text-[white] md:text-black rounded-[3px] mt-[16px] md:bg-[#EFA30C]">
                    Read more
                    </Link >
               </div>
            </div>

            <Explore></Explore>
           
          
            
    </div>
    )
}