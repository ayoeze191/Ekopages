import React from 'react'
import SdgCourseWrapper from './SdgIntroductionHeader.jsx/sdgCourseWrapper'
import social from "./../../../../assets/dashboard/corusedetails/social.png"
import piechart from "./../../../../assets/dashboard/corusedetails/piechart.png"



const Objective = () => {
  return (
    <SdgCourseWrapper>
        <div className='px-[1.5rem]'>
            <div>
        <h1 className='font-[600] text-[1.25rem]'>Objectives of the SDGs</h1>
        <p className='font-[400]'>
        The SDGs build on the achievement of the Millennium Development Goals (MDGs) and aim to further eradicate all forms of poverty. The new goals are different because they want all countries, the poor, the rich, and the middle, to improve prosperity while protecting the planet. <br />
        The SDGs are broader and more advanced than the MDGs because they (SDGs) address the root causes of poverty and global development that works for all. The SDGs include three critical aspects of sustainable development;
        </p>
        </div>

        <div>
            <div><img src={social} alt="" srcset="" /></div>
            <div>
                <img src={piechart} alt="" />
            </div>
        </div>

        </div>
        
        </SdgCourseWrapper>

  )
}

export default Objective