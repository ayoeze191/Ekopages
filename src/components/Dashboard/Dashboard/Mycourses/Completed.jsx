import React, { useEffect, useState } from 'react'
import { FaCheckCircle } from "react-icons/fa";
import instance from '../../../../axios';
import { tokenConfig } from '../../../../Config/Config';
import { MoonLoader } from 'react-spinners';
const Completed = () => {
    const [courses, setCourses] = useState([])
    const [loading, setLoading] = useState([])

    const getCourses = () => {
        setLoading(true)

        instance
        .get(`/user_courses/courses_enrolled/`, tokenConfig())
        .then( async (res) => {
            // setCourses(res.data.courses_with_progress.filter(cou => cou.completion_percentage < 100))
            let  ls = []
            for (let i of res.data.courses_with_progress.filter(cou => cou.completion_percentage < 100)){
               const response = await get_number_of_exercises(i)
               ls.push(response)
            console.log(response)
                // .then( res => {
                //     console.log(res)
                //     
                // })
            }
            setCourses(ls)
        setLoading(false)
    })
    
    }

    const get_number_of_exercises = async(cou) => {
        let number_of_lessons = 0;
        
        const res = await instance.get(`services/study_all/${cou.course_id}`, tokenConfig())
        for(let i of res.data.data) {
            // console.log(i.topic)
            if(i.topic == "Pop Quiz"){
                // console.log("POP quiz")
                number_of_lessons =+ 1;
            }
            if(i.topic === "Final POP QUIZ"){
                number_of_lessons += 1;
            }
        }
        return {...cou, number_of_lessons:number_of_lessons}
    }   

    useEffect(() => {
        getCourses()
    }, [])

  return (
    <div className='px-[72px] flex flex-col  gap-[24px] mt-[95px] w-full'>
         {loading?<MoonLoader />:
        courses.map((course) => <Course {...course}/>)
  }
    </div>
  )
}

export default Completed


const Course = ({course_name, number_of_lessons}) => {
    return (
        <div className='flex  justify-between w-full shadow-sm bg-white md:h-[100px] items-center px-[40px]'>
            <p><h2 className='font-lato font-[600] text-[24px] text-[#232323] leading-[28.8px]'>{course_name}
            </h2>
            <p  className='font-lato leading-[19.2px]'>{number_of_lessons} Excercises</p>
            </p>
            <div>
                <FaCheckCircle color='#174D00' width={32.5} height={32.5} size={32.5}/>
            </div>
        </div>
    )
}