import  assets from  "../../assets/landingpage/export"


 const InformedComponent = () => {
    

    return (
        <div className="flex  h-[600px] w-[100%]  font-SourceSans">
            <section className="pt-[30px] pl-[10%] w-[49%] mr-[1%]">
                <h5 className=" mb-[12px] text-[#5A0C91] text-[40px] font-[600]">STAY INFORMED</h5>
                <p className="font-[600] text-[#646464] text-[24px] ">We would send you all the latest developments in the world of Edtech. </p>
                <form action="" className="font-Poppins">
                    
                    <input
                        className="  w-[90%] border-[1px] border-[#505050] ml-[auto] mr-[auto]  h-[80px] rounded-[10px] mt-[12px] mb-[12px] text-[24px] font-[400] text-center"
                        placeholder="Your Email Address"
                        type="text"
                    />
                    <button type="submit" className="text-[#24242] w-[90%] rounded-[10px] h-[80px] bg-[#EFA30C] text-[24px] font-[400]">Sign Up</button>
                    <div className="flex text-[16px] font-SourceSans text-[#646464] font-[600] mt-[25px] mb-[25px]">
                        <p>Keep me up to date on class events and new release</p>
                    </div>
                    <p className="font-SourceSans text-[16px] text-[#646464] font-[600] ">
                        By Sharing your email, your agree to our &nbsp;
                        <span className="text-[#5A0C91] ">TERMS & CONDITIONS</span> </p>
                </form>
            </section>
            <section className="w-[40%] ml-[30px] flex">
                <img className="w-[30%] h-[100%]" src={assets.firstSmile} alt="smile" />
                <img className="w-[30%] h-[100%]" src={assets.secondSmile} alt="smile"/>
                <img className="w-[30%] h-[100%]" src={assets.thirdSmile} alt="smile" />
            </section>
        </div>
    )
}

export default InformedComponent