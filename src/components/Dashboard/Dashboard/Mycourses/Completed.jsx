import React, { useEffect, useState } from 'react'
import { FaCheckCircle } from "react-icons/fa";
import instance from '../../../../axios';
import { tokenConfig } from '../../../../Config/Config';
import { MoonLoader } from 'react-spinners';
const Completed = () => {
    const [courses, setCourses] = useState([])
    const [loading, setLoading] = useState([])

    const getCourses = () => {
        console.log("getting course")
        setLoading(true)

        instance
        .get(`/user_courses/courses_enrolled/`, tokenConfig())
        .then( async (res) => {
            // setCourses(res.data.courses_with_progress.filter(cou => cou.completion_percentage < 100))
            let  ls = []
            for (let i of res.data.courses_with_progress.filter(cou => cou.completion_percentage >= 100)){
               const response = await get_number_of_exercises(i)
               ls.push(response)
            console.log(ls)
                // .then( res => {
                //     console.log(res)
                //     
                // })
            }
            setCourses(ls)
        setLoading(false)
    })
    .catch((err) => {
        console.log("error")
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