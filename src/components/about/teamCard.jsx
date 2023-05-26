import instagram from "./../../assets/about/instagram.png"
import twitter from "./../../assets/about/twitter.png"
import linkedln from "./../../assets/about/linkedln.png"




export const MeetTeamCard = ({img, name, post}) => {
    return (
        <div className="border border-dashed border-[#5A0C91] w-full sm:w-[fit] px-[17.94px] py-[24px] mx-auto font-lato">
            <div>
            <section className="w-fit mx-auto md:max-w-[16225px] h-[111px] md:h-[200px]"><img src={img} className='w-full h-full'/></section>
            <p className="text-center text-[14px] md:text-[1.5rem] font-[600] text-[#232323]">{name}</p>
            <p className="text-center text-[12px] font-[400] md:text-[1rem] md:font-[400]" >{post}</p>
            </div>
            <div className="flex gap-[2rem] mx-auto w-fit mt-3 items-center">
                <div className="md:w-[24px] md:h-[24px] box-border"><img src={twitter} className='h-full w-full'/></div>
                <div className="md:w-[24px] md:h-[24px] box-border"><img src={instagram} className='h-full w-full'/></div>
                <div className="md:w-[24px] md:h-[24px] box-border"><img src={linkedln} className='h-full w-full' /></div>
            </div>
        </div>
    )
}