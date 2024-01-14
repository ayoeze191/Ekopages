import star from "./../../../../assets/star.svg"
import { useState, useEffect } from "react"
import instance from "../../../../axios"
import { tokenConfig } from "../../../../Config/Config"
import ExploreCoursePicture from "./../../../../assets/ExploreCoursePicture.svg"
import { MoonLoader } from "react-spinners"
import { Link } from "react-router-dom"
const Course = ({picture, course_name, Tutor, price, stars, modules,completed_lessons, total_lessons, completion_percentage, course_id}) => {
    // const navigate = useNavigate()
    // const [loading, setLoading] = useState(false)
  
  return (
    <div  className='font-lato  rounded-[9.5px] bg-white h-[353px] flex flex-col justify-between'>
        <div className='relative'>
            {/* <div className={`absolute right-[13px] top-[13.76px] ${price === "FREE"?'bg-[#247A00]':'bg-[#5A0C91]'} h-[23px] w-[45px] text-white font-[500] text-[13.76px] leading-[16.5px] rounded-[2.58px] flex items-center justify-center `}>{price === "FREE"?"FREE":"PRO"}</div> */}
            <img src={ExploreCoursePicture} className='object-cover w-full'/>
        </div>
        <div className='px-[13.76px] flex gap-[6px] flex-col'>
            <p className='font-[500] text-[20px] font-lato leading-[24px] '>{course_name}</p>
            <p className='font-[500] text-[12px] leading-[12.38px] text-[#888888]'>Modules {completed_lessons} of {total_lessons} </p>
            <div className="">
              <p>{completion_percentage}% completed</p>
            <div className="w-full bg-[#f9f9f9] rounded-[10px] h-[10px]">
          <div
            className="bg-[#5AAE38] rounded-[10px] h-full"
            style={{ width: `${completion_percentage}%` }}
          ></div>
        </div>
        </div>
        </div>
        <div className='px-[13.76px] flex justify-center w-full'>
            <Link className='bg-[#5A0C91] text-[#FFFFFF]  font-[400] leading-[18.24px] w-full max-w-[165px] h-[39px] flex items-center justify-center rounded-[10px] font-lato' to={`/dashboard/MyCourses/${course_id}`}
            
            >Continue Learning</Link>
        </div>
    </div>
  )
  }

  

const Pending = () => {
    const [courses, setCourses] = useState([])
    
  const [isLoading, setIsLoading] = useState(true)
  // console.log(courses)
  const getCourse = () => {
      setIsLoading(true)
      instance.get('/user_courses/courses_enrolled/', tokenConfig())
        .then(async (res) => {
          setIsLoading(false)
          const myCourse = []
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
    <div className="flex flex-col mx-auto md:grid md:grid-cols-3 gap-[16px] md:px-[16px] flex-1">
        {isLoading?<MoonLoader />:courses.length == 0 ?<div>
          
        </div>:
        courses.map((course) => <Course {...course}/>)
  }
    </div>
  )
}

export default Pending
