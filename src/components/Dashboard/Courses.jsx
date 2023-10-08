import React, { useEffect, useState } from 'react'
import Course from './Course'
import instance from '../../axios'
import { tokenConfig } from '../../Config/Config'


const courseDetails = [
    {
      subject: "Introduction to SDGs",
        moduleLevel: "Module 5 of 12",
        completionLevel: "65%",
        timeleft: "5h 12m left",
    },
    {
      subject: "History of SDGs",
        moduleLevel: "Module 5 of 12",
        completionLevel: "42%",
        timeleft: "7h 31m left",
    },
    {
      subject: "History of SDGs",
        moduleLevel: "Module 5 of 12",
        completionLevel: "42%",
        timeleft: "7h 31m left",
    }
]


const Courses = () => {
  const [courses, setCourses] = useState([])
    const getCourse = () => {
        instance.get('/services/all_courses', tokenConfig())
        .then((res) => {
          setCourses(res.data.data)
        })
        .catch((err) => {
          console.log(err)
        })
      }
    

    useEffect(() => {
        getCourse()
    }, [])

  return (
    <div className='flex flex-col md:flex-row justify-between w-full gap-[2rem]'>
        {courseDetails.map(course => <Course {...course} />)}
    </div>
  )
}

export default Courses