import  assets from "../../../assets/landingpage/export"
import { Explore } from "./explore"




export const About = () => {
    

    return (
        <div className="ml-[10%] mr-[10%] h-auto pb-[10px]">
            <div className="flex">
            <section  className="w-[246px] mr-[30px]">
                <img className="w-[246px] h-[374px] " src={assets.aboutImg} alt="" />
                <section className="bg-aboutBottomImg w-[246px] h-[187px] "></section>
                </section>
                <section className="min-w-[246px] mt-[60px] flex">
                    <div>
                    <img className=" w-[246px] h-[187px] mb-[3px]" src={assets.abtQualCount} alt="" />
                        <section className="bg-aboutQualImg w-[246px] h-[374px] m-[0px] p-[0px] "></section>
                    </div>
                    <div className="ml-[20px] w-[485px]">
                        <p className=" font-lato font-[700] text-[44px]">
                            About Us
                        </p>
                        <p className="text-[32px] font-[700] font-lato">
                        Our <span className="text-[#5A0C91]">purpose</span>  is simple-<span className="text-[#5A0C91]" >catch them young.</span>
                        </p>
                        <p className="text-[20px] text-[#4A4A4A]  font-lato">
                            We aim to catch children young to inspire them to lead the next generation
                            fully aware of sustainability issues and how to address them via a
                            proper representation of the realities the children are in without jeopardizing diversity.
                            We need African children to read and see more books for them, with characters that look like
                            them and a culture that represents them.


                        </p>

                        <button className="bg-[#EFA30C] text-[24px] w-[216px] h-[59px] rounded text-[#5A0C91]">
                                Read More
                        </button>
                   </div>
              
               
            </section>
            </div>

            <Explore></Explore>
           
          
            
    </div>
    )
}