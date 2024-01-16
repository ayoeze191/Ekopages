import React, { useEffect, useState } from 'react'
import instance from '../../axios'
import { tokenConfig } from '../../Config/Config'
import Course from './Course'
import { ClipLoader } from 'react-spinners'
import withErrorHandler from '../withErrHandler'
import { useNavigate } from 'react-router-dom'
import { IoCloseCircleOutline } from "react-icons/io5";
import CourseModal from './CourseModal'


const ExploreCoursesComp = () => {
  const [couserPamentModal, setCoursePaymentModal] = useState(false)
  const [showOverlay, setShowOverlay] = useState(false);
  const [course_type, setCourseType] = useState('/all_courses')
  const [loading, setIsLoading] = useState(false)
  const [courses, setCourses] = useState([])
  const changeCourseType = (value) => {
      setCourseType(value)
  }
  const [selected, setSelected] = useState(null)

  const getCourses = () => {
    setIsLoading(true)
    instance.get(`/services${course_type}/`)
    .then((res) => {
      console.log(res)
      setCourses(res.data.data)
      setIsLoading(false)
    })
    .catch(() => {
      
    })
  }
  const navigate = useNavigate()
  useEffect(() => {
    getCourses()
  }, [course_type])
const [courseModal, setcourseModal] = useState(false)
  const handleSelect = (id) => {
    setShowOverlay(true)
    setSelected(courses.find((course) => course.id == id))
    setcourseModal(true)
  }

  const handleClose = () => {
    // console.log("closing")
    setShowOverlay(false)
    setcourseModal(false)
  }

// console.log(course_type)
  return (
    <Wrapper overlay={showOverlay} onclick={handleClose}>
    <CourseModal  courseModal={courseModal} {...selected} handleClose={handleClose}/>
    <div className='overflow-x-hidden mb-10'>
      <p className='text-center mt-[43px]  mx-auto text-[#000000] font-lato font-[600] text-[40px] leading-[48px]'>Explore Courses</p>
       <Buttons func={changeCourseType} course={course_type}/>
       
      <div className='grid md:grid-cols-4 mt-[61px] mx-auto w-full section gap-[32px]'>
      {loading? <ClipLoader  className='mx-auto'/>: courses.length > 0 ? courses.map((course) => 
          <Course {...course} handleSelect={handleSelect}/>
      ):<div className=' border-t-[orange] border-t-solid border-t-2 py-[14.2px] px-[17.8px] items-center font-[400] text-[12px] md:text-base font-lato mt-[1rem] text-[#4A4A4A] text-center bg-[#F8F8F8] w-fit mx-auto flex gap-2 md:gap-[17.9px] flex-col' >
        <p> No Courses  Yet</p>
     <button onClick={() => navigate('/')} className='font-[400] text-[#E9E9E9] py-[15px] px-[30px] bg-[#5A0C91] rounded-[5px] font-lato mx-auto text-sm md:text-base'>Return to Home Page</button>
    </div>}
      </div>
    </div>
    </Wrapper>
  )
}

export default  withErrorHandler(ExploreCoursesComp, instance)

const Buttons = ({func, course}) => {
  const [course_type, setCourseType] = useState([
        {
          name: "All",
          url: "/all_courses"
        },
        {
          name: "Beginner",
          url: "/beginner_courses"
        },
        {
          name: "Intermediate",
          url: "/intermediate_courses"
        },
        {
          name: "Advanced",
          url: "/advanced_courses"
        }
  ])

  return (
  <div className='mx-auto flex gap-[24px] md:gap-[48px] w-full md:w-fit mt-[40px] overflow-x-scroll md:overflow-hidden px-[26px] md:px-0'>
  
  {course_type.map(({name, url}) => {
      return <button className={`rounded-[10px] ${course == url && "bg-[#5A0C91] text-white border-none"} border-solid border-[#232323] border-[1px] py-[10px] px-[15.5px] md:px-[48px] w-full text-[12px] md:text-base`} onClick={() => func(url)}>
      {name}
        </button>
  })}
</div>
  )
}


const Wrapper = ({overlay,children, onclick}) => {
  return (
      <>
      <Overlay show={overlay} onclick={onclick}/>
      {children}
      </>
  )
}




const Overlay = ({ onclick, show }) => {
  return (
    show && (
      <div
        className="bg-black opacity-[0.7] fixed w-full h-full top-0 z-10"
        onClick={onclick}
      ></div>
    )
  );
};
