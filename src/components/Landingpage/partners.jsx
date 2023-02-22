//asset
import assets from "../../assets/landingpage/export"


const OurPartners = () => {
    return (
        <section className="bg-greyBg w-[100%] min-h-[379px] bg-no-repeat  relative pt-[42px] pb-[50px]">
          <section className="bg-rippaperTexture h-[80px] w-full absolute top-0 rotate-180  "></section>
            <p className="font-lato font-bold text-[#5A0C91] text-center  text-[44px]">Our Partners</p>
        <div className="flex justify-between flex-wrap mt-[30px] pl-[5%] pr-[5%] ">
            <img  src={assets.BristishCouncilLogo} alt="british council logo" />
            <img  src={assets.cheveningLogo} alt="chevening logo" />
            <img  src={assets.tnciLogo} alt="TNCI logo" />
            <img  className="object-cover" src={assets.lagosGovLogo} alt="lagos state ministry of Education logo" />
            <img   src={assets.resAfricaLogo} alt="RES africa logo" />
            <img className="object-cover" src={assets.fedLogo} alt="federal government logo" />
        </div>
        <section className="bg-rippaperTexture h-[80px] w-full absolute bottom-0  "></section>
    </section>
    )
}


export default OurPartners