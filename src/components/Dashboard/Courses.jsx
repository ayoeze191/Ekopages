import React, { useEffect, useState } from 'react'
import Course from './Course'
import instance from '../../axios'
import { tokenConfig } from '../../Config/Config'
import {ClipLoader} from "react-spinners"
import { Link } from 'react-router-dom'

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
        instance.get('/user_courses/courses_enrolled/', tokenConfig())
        .then(async (res) => {
          setIsLoading(false)
          const myCourse = []
          // setCourses(res.data.courses_with_progress)
          for(let i=0; i < res.data.courses_with_progress.length; i++){
              myCourse.push({completion_percentage:res.data.courses_with_progress[i].completion_percentage,
              completed_lessons:res.data.courses_with_progress[i].completed_lessons,
              total_lessons:res.data.courses_with_progress[i].total_lessons,
              course_id: res.data.courses_with_progress[i].course_id,
              passed_course: await get_completion(res.data.courses_with_progress[i].course_id),
              course_name: res.data.courses_with_progress[i].course_name

            })
            console.log(await get_completion(res.data.courses_with_progress[i].course_id))
          }
          
          setCourses(myCourse.filter(cou => cou.passed_course == false))
          
          console.log()
        })
        .catch((err) => {
          console.log(err, "error")
          setIsLoading(false)
        })
      }
  const get_completion = async (id) => {
    const res = await instance.get(`/services/percent_complete/${id}/`, tokenConfig())
    return (res.data.passed_course)
  } 

    useEffect(() => {
        getCourse()
        console.log("working")
    }, [])
  return (
    <div className='flex flex-col md:grid md:grid-cols-3 justify-between w-full gap-[2rem]'>
        {isLoading ? <ClipLoader  className='mx-auto'/> : courses.length > 
        0  ? courses.map(course => <Course {...course} />): 
        
        <div className=' border-t-[#b0ada7] border-t-solid border-t-2 py-[14.2px] px-[17.8px] items-center font-[400] text-[12px] md:text-base font-lato mt-[1rem] text-[#4A4A4A] text-center bg-[#F8F8F8] w-fit mx-auto flex gap-2 md:gap-[17.9px] flex-col' >
        <p> You are currently not taking any course. Use the button below to take course</p>
     <Link to={'/explore-courses'} className='font-[400] text-[#E9E9E9] py-[15px] px-[30px] bg-[#5A0C91] rounded-[5px] font-lato mx-auto text-sm md:text-base'>Take a Course</Link>
      
    </div>
        }
    </div>
  )
}

export default Courses