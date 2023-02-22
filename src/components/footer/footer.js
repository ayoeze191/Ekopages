import assets from "../../assets/NavHeader/export"
import asset from "../../assets/landingpage/export"
import { FaFacebookF } from "react-icons/fa"
import { AiFillInstagram ,AiFillLinkedin} from "react-icons/ai"
import {GrTwitter} from "react-icons/gr"



export const Footer = () => {
    

    return (
        <div className="bg-[#F6F6F6]">
        <div
            className="w-[100%] font-lato h-[400px]  border-box p-[30px]  pt-[130px] flex justify-between">

            <section className="w-[55%] h-[100%] flex justify-between ">
                <div>
                    <img src={assets.Logo} className="w-[121px] h-[50px]"></img>
                    <p className=" w-[360px] mt-[10px] ml-[30px] text-[#4A4A4A] text-[16px] font-[400] ">
                    Eko Pages is a publishing outfit that immerses children into the act of environmental sustainability with our top books, stories and publications. 

                    </p>
                    <p className="font-[700] ml-[30px]  mt-[30px]">Follow us on social media</p>
                    <section className="flex text-[16px] mt-[15px] ml-[30px] w-[130px]  justify-around">
                        <GrTwitter size={30} className="text-[#5A0C91]"></GrTwitter>
                        <AiFillInstagram size={30} className="text-[#5A0C91]"></AiFillInstagram>
                        <FaFacebookF size={30} className="text-[#5A0C91]"></FaFacebookF>
                        <AiFillLinkedin size={30} className="text-[#5A0C91]"></AiFillLinkedin>
                    
                    
                    
                        
                    </section>
                </div>

                <div className="w-[64px] text-[16px] font-[500]">
                    <p className="mb-[10px]">About us</p>
                    <p className="mb-[10px]">Projects</p>
                    <p className="mb-[10px]">Services</p>
                    <p >Eko Store</p>
                </div>

                <div className=" text-[16px] font-[500]">
                    <p className="mb-[10px]">Eko News</p>
                    <p className="mb-[10px]">Become a Partner</p>
                    <p className="mb-[10px]">Contact Us</p>
                    <p >FAQs</p>
                </div>
               
            </section>
            <section className="w-[35%] h-[100%]">
                <div className=" relative w-[100%] border-box h-[245px] border-box padding-[20px] bg-[#5A0C91] rounded-[10px]">
                    <img className="absolute top-[-100px] right-[-30px]" src={asset.bellIcon} alt="bell icons"/>
                   

                    <form className="pt-[60px] w-[80%] ml-auto mr-auto">
                    <p className="text-center text-white font-lato text-[24px] font-[500]">
                            Subscribe to our Newslettter
                            
                        </p>
                        <p  className="text-center  text-white text-[12px] mb-[20px] w-[75%] ml-auto mr-auto">
                        We would send you all the latest developments in
                            the world of Edtech. 
                        </p>
                        <div className="flex mt-[30px] w-[100%] border-box  border-none pr-[10px] justify-between rounded-[6px] h-[40px] bg-white items-center" >
                            <input className="p-[10px]  text-[12px] pw-[70%] border-box h-[100%] rounded  " placeholder="Type email address"></input>
                            <button className="text-[12px]  rounded-[10px] h-[25px] w-[90px] text-[white] bg-[#5A0C91]">Subscribe</button>
                             
                        </div>
                    </form>
                </div>
               
               
                </section>
                
           
            </div>
            <br></br>
            <hr />
            <p className="text-center font-lato text-[16px] font-[500] pt-[15px] text-[]">All rights reserved</p>
            </div>
    )
}