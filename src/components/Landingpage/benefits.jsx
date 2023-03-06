
//asset
import assets from "../../assets/landingpage/export"

const Benefits = () => {
    return (
        <section className="bg-[#EFA30C] relative">
             <section className="bg-rippaperTexture h-[80px] w-full absolute top-[-1px] rotate-180  "></section>
         <div className="relative  w-full h-[495px] flex justify-between pl-[5%] pr-[5%] pt-[76px]">
        <section className="w-[60%]">
            <p className="pl-[10px] text-[#232323] font-lato font-500 text-[14px] md:text-[32px] font-[700]">Benefits of using our platform</p>
            <div className="grid grid-cols-2 gap-y-[14px] gap-x-[47px] md:flex justify-between mt-[40px] font-lato">
                    <section className="flex flex-col items-center">
                        <div className=" ml-auto mr-auto md:w-[118px] md:h-[118px] w-[42px] h-[42px] md:rounded-[16px] rounded-[6px] bg-white flex items-center justify-center" >
                                <img src={assets.visualCard} alt="visualiseable content card" className="w-[17.01px] h-[12.5px] md:w-[initial] md:h-[initial]"/>
                               
                        </div>
                        <p className="text-[11.890px] font-[400] md:text-[16px] text-center  text-[#303030] w-[64.21px] md:w-[initial]">Visualisable Content </p>
                    
                </section>
                    <section className="flex flex-col items-center">
                        <div className=" ml-auto mr-auto md:w-[118px] md:h-[118px] w-[42px] h-[42px] md:rounded-[16px] rounded-[6px] bg-white flex items-center justify-center" >
                        <img src={assets.engagementCard} alt="Increase Engagement and Participation card" className="w-[17.01px] h-[12.5px] md:w-[initial] md:h-[initial]" />
                        </div>
                        <p className="text-[11.890px] font-[400] md:text-[16px] text-center  text-[#303030] w-[64.21px] md:w-[initial]">Increase Engagement and Participation </p>

                   
                </section>
                    <section className="flex flex-col items-center">
                        <div className=" ml-auto mr-auto md:w-[118px] md:h-[118px] w-[42px] h-[42px] md:rounded-[16px] rounded-[6px] bg-white flex items-center justify-center">
                        <img src={assets.retentionCard} alt="Increase Retention by up to 100% card" className="w-[17.01px] h-[12.5px] md:w-[initial] md:h-[initial]" />
                        </div>
                        <p className="text-[11.890px] font-[400] md:text-[16px] text-center  text-[#303030] w-[64.21px] md:w-[initial]">Increase Retention by up to 100% </p>

                  
                </section>
                    <section className="flex flex-col items-center">
                        <div className=" ml-auto mr-auto md:w-[118px] md:h-[118px] w-[42px] h-[42px] md:rounded-[16px] rounded-[6px] bg-white flex items-center justify-center">
                        <img  src={assets.prepareCard} alt="Prepares kids for the future card" className="w-[17.01px] h-[12.5px] md:w-[initial] md:h-[initial]"/>

                        </div>
                    <p className="text-[11.890px] font-[400] md:text-[16px] text-center  text-[#303030] w-[64.21px] md:w-[initial]">Prepares kids for the future </p>
                </section>
          
           
            </div>
        </section>
        <section>
           
            <img  src={assets.studentCard} className='w-[128px] h-[144px] md:w-[initial] md:h-[initial] mt-[15px]  md:mt-[initial]' alt="student cartoon" />
            </section>

            </div>
            <section className="bg-rippaperTexture h-[80px] w-[100%] absolute bottom-[-1px]  "></section>

        </section>
       
    )
}

export default Benefits