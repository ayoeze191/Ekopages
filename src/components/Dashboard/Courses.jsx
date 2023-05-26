import React from 'react'
import Course from './Course'



const courseDetails = [
    {
        title: "Introduction to SDGs",
        moduleLevel: "Module 5 of 12",
        completionLevel: "65%",
        timeleft: "5h 12m left",
    },
    {
        title: "History of SDGs",
        moduleLevel: "Module 5 of 12",
        completionLevel: "42%",
        timeleft: "7h 31m left",
    },
    {
        title: "History of SDGs",
        moduleLevel: "Module 5 of 12",
        completionLevel: "42%",
        timeleft: "7h 31m left",
    }
]


const Courses = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between w-full gap-[2rem]'>
        {courseDetails.map(course => <Course {...course} />)}
    </div>
  )
}

export default Courses