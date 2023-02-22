import React from 'react'
import education from "./../../../../assets/projects/education.png";
import infrastructure from "./../../../../assets/projects/infrastructure.png";
import ocean from "./../../../../assets/projects/ocean.png";
import SingleProject from './SingleProject';


const details = [
    {
        img: infrastructure,
        h: "Infrastructure Development",
        p: "Honeywell Company, Benin"
    },
    {
        img: education,
        h: "Education as an future tool",
        p: "Roland Boys High School, Akure"
    },
    {
        img: ocean,
        h: "Saving the Ocean",
        p: "Landmark beach, Oniru, Lagos"
    }
]



const AllProjects = () => {
  return (
      <div className='flex flex-col section mt-[7.5rem] gap-[2.5rem]'>
          <p className='font-[500] text-[1.25rem] md:text-[2.25rem] text-center'>Check out other Projects</p>
    <div className='flex justify-between gap-[2rem] flex-col md:flex-row'>
        {
            details.map((proj) => < SingleProject {...proj} />)
        }
    </div>
    </div>
  )
}

export default AllProjects