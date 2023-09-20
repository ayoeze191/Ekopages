import react from "react"
import Sdgtext from "../sdg/Sdgtext"
import ReusableComponent from "../reusableComponent"


const SdgArt = () => {
    return (
        <div className="section mb-[4rem]">
            <Sdgtext text={"SDG LITERACY DRIVE"}/>
            <div className='text-[1rem] md:text-[1.25rem] font-[400] text-[#4A4A4A] w-full flex flex-col gap-10'>
          <p>  The SDG Art Exhibition</p>
<p> Discover the power of art in driving positive change and creating a better world. The SDG Art Exhibition is a unique platform that celebrates the United Nations' Sustainable Development Goals (SDGs) through the captivating medium of art. Our exhibition showcases the exceptional talent of artists from around the globe, who use their creativity to raise awareness, inspire action, and advocate for a sustainable future. </p>

<p> We believe that art has the ability to transcend barriers, ignite conversations, and challenge the status quo. Through thought-provoking paintings, sculptures, installations, and multimedia presentations, we invite you to explore the pressing issues addressed by the 17 SDGs. Each artwork serves as a visual narrative, shedding light on topics such as poverty eradication, gender equality, climate action, sustainable cities, and responsible consumption.</p>

<p> Whether you are an art enthusiast, a sustainability advocate, or simply curious about the interconnectedness of art and global goals, the SDG Art Exhibition offers a captivating and enlightening experience for all.</p>

<p> By embracing art and its ability to evoke change, we can all become agents of transformation and work towards a better future for generations to come.</p>
        </div>
        <div className="mt-30">
          <p className='font-[500] text-[1.25rem] md:text-[2.25rem] text-center'>Check out other Projects</p>
        <ReusableComponent filter={'sdgart'}/>
        </div>
        </div>
    )
}

export default SdgArt