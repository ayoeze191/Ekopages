import React from 'react'
import Rectangle4304 from "./../../../../assets/Service/ekotales/Rectangle4304.png"
import Rectangle4305 from "./../../../../assets/Service/ekotales/Rectangle4305.png"
import Rectangle4306 from "./../../../../assets/Service/ekotales/Rectangle4306.png"




const tales = [
    {
        image: Rectangle4304,
        title:   "Save the Earth",
        date: "11.09.2022"
    },
    {
        image: Rectangle4305,
        title:   "Proper waste disposal and management",
        date: "11.09.2022"
    },
    {
        image: Rectangle4306,
        title:   "Gardening and its Impact",
        date: "11.09.2022"
    },
]




const Tales = ({image, title, date}) => {
    <div className='flex flex-col'>
        <div className='mb-[1.5rem] rounded-[5px]'><img src={image} alt="" /></div>
        <div className='mb-[0.5rem] text-[#232323] font-[500] text-[1.5rem]'>
            {title}
        </div>
        <p className='font-[500] text-[#4A4A4A] text-[12px]'>
            {date}
        </p>
    </div>
}










const OtherTales = () => {
  return (
    <div>
        {
            tales.map(tale => <Tales {...tale} />)
        }
    </div>
  )
}

export default OtherTales