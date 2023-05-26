import React from 'react'
import SdgCourseWrapper from './SdgIntroductionHeader.jsx/sdgCourseWrapper'
import share from "./../../../../assets/dashboard/corusedetails/share.png";
const MDGs = () => {
  return (
    <SdgCourseWrapper>
        <div className='font-lato font-[400] text-[1rem] font-[] text-[1rem]'>
            <p className='text-[#232323] font-[600] text-[1.25rem] mb-[3rem]'>The MDGs</p>
            <p>
THE MDGS <br />
The Millennium Development Goals (MDGs) were a set of goals (8) developed during the United Nations Millennium Summit in 2002 (MDGs).
They are based on the United Nations Millennium Declaration.
</p>
<div className='mb-[1.25rem] text-[1rem] text-[#4A4A4A]'><img src={share} alt="" /></div>

    <div className='flex flex-col gap-5'>
        <p>
    TRANSITIONING FROM MDGs TO SDGs
In 2012 at the Rio+20 Conference, the international community decided to establish a High-level Political Forum on Sustainable Development to subsequently replace the CSD. The High- level Political Forum on Sustainable Development held its first annual meeting on 24 September 2013.
Member States also decided to launch a process to develop a set of Sustainable Development Goals (SDGs), which were to build upon the Millennium Development Goals(MDGs).   
</p>
<p>
The UN Sustainable Development Goals (SDGs) replaced the Millennium Development Goals (MDGs) in 2015 as a new set of international development goals.
The UN also adopted the universal, integrated and transformative 2030 Agenda for Sustainable Development alongside 169 associated targets. The SDGs offer a new vision, and new challenges, for development actors around the world.
</p>
<p>
By endorsing the 2030 Agenda for Sustainable Development and its 17 Sustainable Development Goals (SDGs) in 2015, the world community reaffirmed its commitment to Sustainable Development.
</p>
<p>
Through this Agenda, 193 member states pledged to ensure sustained and inclusive economic growth, social inclusion, and environmental protection, and to do so in partnership and peace.
</p>
    </div>


        </div>
    </SdgCourseWrapper>
  )
}

export default MDGs