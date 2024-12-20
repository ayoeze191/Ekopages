
//asset
import assets from "../../assets/landingpage/export"

const Benefits = () => {
    return (
        <section className="bg-[#EFA30C] relative font-lato ">
            <div className="section">
             {/* <section className="bg-rippaperTexture h-[80px] w-full absolute top-[-1px] rotate-180  "></section> */}
         <div className="relative  w-full h-[495px] flex justify-between pl-[5%] pr-[5%] pt-[76px]">
        <section className="md:w-[60%]">
            <p className="pl-[10px] text-[#232323] font-lato font-500 text-[14px] md:text-[32px] font-[700]">Benefits of using our platform</p>
            <div className="grid grid-cols-2 gap-x-[19px] gap-y-[14px] md:flex justify-between mt-[13px] md:mt-[40px] font-lato">
                    <section className="flex flex-col items-center gap-[1rem]">
                        <div className=" ml-auto mr-auto md:w-[80px] md:h-[80px] w-[42px] h-[42px] md:rounded-[16px] rounded-[6px] bg-white flex items-center justify-center" >
                                <img src={assets.visualCard} alt="visualiseable content card" className="w-[17.01px] h-[12.5px] md:w-[initial] md:h-[initial]"/>
                               
                        </div>
                        <p className="text-[10.890px] font-[400] md:text-[13px] text-center  text-[#303030] font-lato ">Interactive learning for sustainability </p>
                    
                </section>
                    <section className="flex flex-col items-center gap-[1rem]">
                        <div className=" ml-auto mr-auto md:w-[80px] md:h-[80px] w-[42px] h-[42px] md:rounded-[16px] rounded-[6px] bg-white flex items-center justify-center" >
                        <img src={assets.engagementCard} alt="Increase Engagement and Participation card" className="w-[17.01px] h-[12.5px] md:w-[initial] md:h-[initial]" />
                        </div>
                        <p className="text-[10.890px] font-[400] md:text-[13px] text-center  text-[#303030] font-lato">Access to diverse educational content</p>

                   
                </section>
                    <section className="flex flex-col items-center gap-[1rem]">
                        <div className=" ml-auto mr-auto md:w-[80px] md:h-[80px] w-[42px] h-[42px] md:rounded-[16px] rounded-[6px] bg-white flex items-center justify-center">
                        <img src={assets.retentionCard} alt="Increase Retention by up to 100% card" className="w-[17.01px] h-[12.5px] md:w-[initial] md:h-[initial]" />
                        </div>
                        <p className="text-[10.890px] font-[400] md:text-[13px] text-center  text-[#303030] font-lato">Promotes foundational literacy and numeracy </p>

                  
                </section>
                    <section className="flex flex-col items-center gap-[1rem]">
                        <div className=" ml-auto mr-auto md:w-[80px] md:h-[80px] w-[42px] h-[42px] md:rounded-[16px] rounded-[6px] bg-white flex items-center justify-center">
                        <img  src={assets.prepareCard} alt="Prepares kids for the future card" className="w-[17.01px] h-[12.5px] md:w-[initial] md:h-[initial]"/>

                        </div>
                    <p className="text-[10.890px] font-[400] md:text-[13px] text-center  text-[#303030] font-lato">Empowers educators and students for the future</p>
                </section>
          
           
            </div>
        </section>
        <div className="h-full flex md:items-center mt-[12px] md:mt-[0px]">
            <img  src={assets.studentCard} className='w-[128px] h-[144px] md:w-[300px] md:h-[337px]' alt="student cartoon" />
        </div>

            </div>
            {/* <section className="bg-rippaperTexture h-[80px] w-[100%] absolute bottom-[-1px]  "></section> */}
            </div>
        </section>
       
    )
}

export default Benefits