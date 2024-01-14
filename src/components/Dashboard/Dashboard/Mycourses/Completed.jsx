import React, { useEffect, useState } from 'react'
import { FaCheckCircle } from "react-icons/fa";
import instance from '../../../../axios';
import { tokenConfig } from '../../../../Config/Config';
import { MoonLoader } from 'react-spinners';
const Completed = () => {
    const [courses, setCourses] = useState([])
    const [loading, setLoading] = useState([])

    const getCourse = () => {
        setLoading(true)
        instance.get('/user_courses/courses_enrolled/', tokenConfig())
          .then(async (res) => {
            setLoading(false)
            const myCourse = []
            for(let i=0; i < res.data.courses_with_progress.length; i++){
                console.log(await get_completion(res.data.courses_with_progress[i].course_id))
                if(await get_completion(res.data.courses_with_progress[i].course_id) === true ){
                    myCourse.push({
                        course_name: res.data.courses_with_progress[i].course_name,
                        number_of_lessons: await get_number_of_exercises(res.data.courses_with_progress[i])
                      })
                    // console.log(get_number_of_exercises(res.data.courses_with_progress[i]))
                }
            }
            setCourses(myCourse)
          })
        }

console.log(courses)

    const get_number_of_exercises = async(cou) => {
        // let number_of_lessons = 0;
        console.log(cou)
        // let completed_res
        // try {
        //     completed_res = await get_completion(cou.course_id)
        // }
        // catch(err){
        //     console.log(err)
        // }
        
        const res = await instance.get(`services/study_all/${cou.course_id}`, tokenConfig())
        return res.data.total_lessons
    }   

    const get_completion = async (id) => {
        const res = await instance.get(`/services/percent_complete/${id}/`, tokenConfig())
        return (res.data.passed_course)
    } 
    useEffect(() => {
        getCourse()
    }, [])

  return (
    <div className='md:px-[72px] flex flex-col  gap-[24px] mt-[33px] w-full items-center justify-center'>
         {loading?<MoonLoader />:
        courses.map((course) => <Course {...course}/>)
  }
    </div>
  )
}

export default Completed


const Course = ({course_name, number_of_lessons}) => {
    return (
        <div className='flex  justify-between w-full shadow-sm bg-white md:h-[100px] items-center px-[24px] py-[19px] md:py-0 md:px-[40px]'>
            <p><h2 className='font-lato font-[500] md:text-[24px] text-[#232323] md:leading-[28.8px] text-[16px] '>{course_name}
            </h2>
            <p  className='font-lato md:leading-[19.2px] mt-[8px] text-[12px] md:text-base text-[#4A4A4A]'>{number_of_lessons} Excercises</p>
            </p>
            <div>
                <FaCheckCircle color='#174D00' width={32.5} height={32.5} size={32.5}/>
            </div>
        </div>
    )
}