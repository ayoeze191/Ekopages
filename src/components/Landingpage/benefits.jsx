
//asset
import assets from "../../assets/landingpage/export"

const Benefits = () => {
    return (
        <section className="bg-[#EFA30C] relative">
             <section className="bg-rippaperTexture h-[80px] w-full absolute top-[-1px] rotate-180  "></section>
         <div className="relative  w-full h-[495px] flex justify-between pl-[5%] pr-[5%] pt-[76px]">
        <section className="w-[60%]">
            <p className="pl-[10px] text-[#232323] font-lato font-500 text-[32px] font-[700]">Benefits of using our platform</p>
            <div className="flex justify-between mt-[40px] font-lato">
                    <section className="w-[140px]">
                        <div className=" ml-auto mr-auto w-[118px] h-[118px] rounded-[16px] bg-white flex items-center justify-center" >
                                <img src={assets.visualCard} alt="visualiseable content card" />
                               
                        </div>
                        <p className="text-[16px] text-center  text-[#303030]">Visualisable Content </p>
                    
                </section>
                    <section className="w-[140px]">
                        <div className=" ml-auto mr-auto w-[118px] h-[118px] rounded-[16px] bg-white flex items-center justify-center" >
                        <img src={assets.engagementCard} alt="Increase Engagement and Participation card" />
                        </div>
                        <p className="text-[16px] text-center text-[#303030]">Increase Engagement and Participation </p>

                   
                </section>
                    <section className="w-[140px]">
                        <div className=" ml-auto mr-auto w-[118px] h-[118px] rounded-[16px] bg-white flex items-center justify-center">
                        <img src={assets.retentionCard} alt="Increase Retention by up to 100% card" />
                        </div>
                        <p className="text-[16px] text-center text-[#303030]">Increase Retention by up to 100% </p>

                  
                </section>
                    <section className="w-[140px] ">
                        <div className=" ml-auto mr-auto w-[118px] h-[118px] rounded-[16px] bg-white flex items-center justify-center">
                        <img  src={assets.prepareCard} alt="Prepares kids for the future card" />

                        </div>
                    <p className="text-[16px] text-center text-[#303030]">Prepares kids for the future </p>
                </section>
          
           
            </div>
        </section>
        <section>
           
            <img  src={assets.studentCard} alt="student cartoon" />
            </section>

            </div>
            <section className="bg-rippaperTexture h-[80px] w-[100%] absolute bottom-[-1px]  "></section>

        </section>
       
    )
}

export default Benefits