import React from 'react'
import Frame247 from "./../../../../assets/Service/ekotales/Frame247.png"
const TalesOfTheWeek = () => {
  return (
    <div className='font-lato max-w-5xl mx-auto flex- flex-col items-center mt-[7.3125rem] px-6 lg:px-0'>
        <div className='flex flex-col gap-[2rem] text-[#232323] flex flex-col items-center mb-[2rem]'>
            <p className='font-[700] text-[3rem] font-lato'>Eko Tale for the Week</p>
            <div><img src={Frame247} alt="" /></div>
            <p className='text-[2rem] font-[700] text-[#232323]'>Eniye and the Flood Trust Donation</p>
        </div>

        <div className='flex flex-col gap-[2rem] text-[#232323] text-[1.25rem] mb-[5rem] font-[400] font-lato'>
            <p className=''>Eniye joined her mother in the living room to watch the 7 pm news after she was done with her assignment. Eniye was surprised to see the water and floods destroying many states in the country. While watching the news, Eniye's mother told her how she was a survivor of a flood when she was young. It was at night when the rain started pouring heavily, and the water level rose fast. She said that she had to swim for her life and was rescued by an old man who lived across from them. The newscaster named Bayelsa, Anambra, Cross River, Delta, and Kano as the most states affected by the flooding crisis.
</p>
            <p className='hidden md:block'>Eniye could see houses swallowed up by the high level of water. She wondered what would happen to the properties of the people affected by the flood crises.
‘Mummy, what causes flooding? Why were these people not aware of the flood?’
Her mother sighed. ‘ Several things can cause flooding. It usually starts with heavy rainfall, but unusual high tides, tsunamis due to undersea earthquakes, breaks or failures of dams, levees, retention ponds or lakes and other infrastructure that retains water can also cause floods.’
</p>
            <p className='hidden md:block'>
‘Does that mean we cannot prevent rain and flood, mummy?’ Eniye pressed.
‘Well, of course, Rain is God’s gift to us and so we cannot stop it. However, flooding can be prevented. It is the duty of both the Government and the individuals to create and implement the plans. While the government creates a good drainage system for excess water to escape, it is the duty of the citizens not to clog it with our bottles and waste. We must dispose of our waste properly, if not, the Government’s effort will be a waste.
</p>
        </div>

    <div className='w-full flex justify-center'>
        <button className='rounded-[10px] bg-[#5A0C91] md:py-[0.937rem] px-[1.875rem] py-[0.93rem]  md:px-[0.875rem] mb-[6.25rem] text-[1.25rem] md:text-[1.5rem]  text-[#EFE7F4]'> Continue Reading </button>
        </div>
    </div>
  )
}

export default TalesOfTheWeek