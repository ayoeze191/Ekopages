import React from 'react'
import SdgCourseWrapper from './SdgIntroductionHeader.jsx/sdgCourseWrapper'
import Frame364 from "./../../../../assets/dashboard/corusedetails/Frame364.png"
import Frame365 from "./../../../../assets/dashboard/corusedetails/Frame365.png"



const History = () => {
  return (
    <SdgCourseWrapper>
        <div className='bg-[#FFFFFF] px-[1.5rem] flex flex-col items-center'>
            <h1 className='font-[600] text-[1.25rem] mb-[1rem] w-full'>History of the SDGs</h1>
        <p className='font-[400] mb-[1.25rem]'>
        Following the Second World War, nations from around the globe united in 1945 to form a body with the goals of averting future conflicts and safeguarding all nations. The United Nations(UN) is that body. The United Nations is led by the Secretary General, and its headquarters is located in New York, USA
        </p>
        <div className='mb-[1.25rem]'>
            <img src={Frame364} alt="" />
        </div>

    <div className='flex flex-col mb-[3.125rem]'>
        <p >With 193 members, the UN and its members have worked together to improve the world and have done so ever since. The UN and its members were able to pinpoint important issues that the entire world has to concentrate on in order to advance peace and prosperity for all humans through Sustainable Development to make the world a much better place.
        </p>
The reach of sustainable development management has significantly increased at grassroot, local and international levels since the first UN Conference on the Human Environment in 1972. The Brundtland Report (Our Common Future) published by Oxford publishers in 1987, introduced the need for the integration of economic development, natural resource management and protection, and social equity and inclusion, and the report was instrumental in framing the discussions at the 1992 United Nations Conference on Environment and Development (UNCED) held at Rio de Janeiro, Brazil. The conference is also known as the Earth Summit or World Summit.
        <p></p>
    </div>

<div className='mb-[3.125rem]'>
    <img src={Frame365} alt="" />
</div>

    <div>
<p>The Rio Declaration was adopted at the World Summit in an effort to uphold and build upon the Stockholm Declaration of the first United Nations Conference on the Human Environment, adopted on June 16, 1972, with the following goals:</p>
<ul className='list-disc font-lato text-[#4A4A4A] flex flex-col gap text-[1rem]'>
    <li>
establishing a new and equitable global partnership through the creation of new levels of co-operation among States, key sectors of societies and people.
    </li>
    <li>
    Work towards international agreements which respect the interests of all.
    </li>
    <li>
    Protect the integrity of the global environmental and developmental system.
    </li>

    <li>
    Recognizing the integral and interdependent nature of the Earth.
    </li>
</ul>

<div>
The Rio Declaration established 27 principles intended to guide sustainable development around the world. <br />
The Commission for Sustainable Development (CSD), a high level political body of the UN was later established by the General Assembly in 1993 and tasked with monitoring and promoting the implementation of the Rio Declaration, including Agenda 21. <br />
Agenda 21 is a comprehensive plan of action to establish a worldwide partnership for sustainable development that aims to enhance human well-being and safeguard the environment. It sets out a plan of action to guarantee that life in the next millennium will change considerably for the better. In June 1992 at the World summit in Rio de Janeiro, over 178 nations adopted Agenda 21 <br />
</div>

    </div>



        </div>
        
    </SdgCourseWrapper>
  )
}

export default History