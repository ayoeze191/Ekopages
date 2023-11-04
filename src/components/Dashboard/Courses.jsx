import React, { useEffect, useState } from 'react'
import Course from './Course'
import instance from '../../axios'
import { tokenConfig } from '../../Config/Config'
import {BarLoader} from "react-spinners"

const courseDetails = [
    {
      subject: "Introduction to SDGs",
      number_of_lessons: "Module 5 of 12",
        completionLevel: "65%",
        timeleft: "5h 12m left",
    },
    {
      subject: "History of SDGs",
      number_of_lessons: "Module 5 of 12",
        completionLevel: "42%",
        timeleft: "7h 31m left",
    },
    {
      subject: "History of SDGs",
      number_of_lessons: "Module 5 of 12",
        completionLevel: "42%",
        timeleft: "7h 31m left",
    }
]


const Courses = () => {
  const [courses, setCourses] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const getCourse = () => {
    setIsLoading(true)
      console.log("getting")
        instance.get('/services/all_courses', tokenConfig())
        
        .then((res) => {
          setIsLoading(false)
          console.log("getting")
          console.log(res, "response")
          setCourses(res.data.data)
        })
        .catch((err) => {
          console.log(err, "error")
          setIsLoading(false)
        })
      }
    

    useEffect(() => {
        getCourse()
        console.log("working")
    }, [])
  return (
    <div className='flex flex-col md:grid md:grid-cols-3 justify-between w-full gap-[2rem]'>
        {isLoading ? <BarLoader /> : courses.length > 
        0&&courseDetails.map(course => <Course {...course} />)
        }
    </div>
  )
}

export default Courses