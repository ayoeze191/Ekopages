//asset
import assets from "../../assets/landingpage/export"

const Testimonials = () => {
    return (
        <section className="min-h-[847px] min-h-[847px] w-full bg-[#EFA30C] pl-[100px] pr-[100px]">
                <div className="w-[100%] min-h-[100%] bg-greyBg bg-cover  pt-[70px] pr-[50px] pl-[50px] ">
                    <p className="font-Roboto font-[600] text-[32px] text-center pb-[50px]">Children love us</p>
                    <section className="flex flex-wrap justify-center ">
                        <img className="w-[239px] h-[370px]  m-[30px]" src={assets.twitterStories} alt="twitter stories card" />
                        <img className="w-[239px] h-[370px]  m-[30px]" src={assets.twitterStories} alt="twitter stories card" />
                        <img className="w-[239px] h-[370px]  m-[30px]" src={assets.twitterStories} alt="twitter stories card" />
                        <img className="w-[239px] h-[370px]  m-[30px]" src={assets.twitterStories} alt="twitter stories card" />
                        <img className="w-[239px] h-[370px]  m-[30px]" src={assets.twitterStories} alt="twitter stories card" />
                        <img className="w-[239px] h-[370px]  m-[30px]" src={assets.twitterStories} alt="twitter stories card" />
                        <img className="w-[239px] h-[370px]  m-[30px]" src={assets.twitterStories} alt="twitter stories card" />
                        <img className="w-[239px] h-[370px]  m-[30px]" src={assets.twitterStories} alt="twitter stories card" />
                        <img className="w-[239px] h-[370px]  m-[30px]" src={assets.twitterStories} alt="twitter stories card" />
                        <img className="w-[239px] h-[370px]  m-[30px]" src={assets.twitterStories} alt="twitter stories card" />
                    </section>
                </div>
            </section>
    )
}


export default Testimonials