import React from 'react'
import clarity_certificate_line from "./../../../../assets/Service/clarity_certificate_line.png"
import fluent_quiz_new_28_regular from "./../../../../assets/Service/fluent_quiz_new_28_regular.svg"
import ph_books_light from "./../../../../assets/Service/ph_books_light.png"
import Package from './Package'

const details = [
    {
        image: clarity_certificate_line,
        title: "SDG COURSES",
        text: "Subscribe to our affordable school and group packages to access our books, courses, quizzes and games",
        btnValue: "See Courses"
    },
    {
        image: fluent_quiz_new_28_regular,
        title: "POP QUIZZES",
        text: "Subscribe to our affordable school and group packages to access our books, courses, quizzes and games",
        btnValue: "Take a Quiz",
    },
    {
        image: ph_books_light,
        title: "SDG THEMED BOOKS",
        text: "Subscribe to our affordable school and group packages to access our books, courses, quizzes and games",
        btnValue: "See Books",
    },
]



const PackageInclusion = () => {
  return (
    <div className=' w-full mt-[4.5rem] mx-auto lg:px-0 px-6 max-w-[77rem] font-lato '>
        <p className='font-[700] text-[1.5rem] mb-[4rem]'>Package inclusion;</p>
        <div className='grid grid-cols-2 md:flex gap-x-[8.15px] gap-y-[54.2px] md:gap-[5rem]'>
        {details.map((det )=> <Package {...det} />)}
        </div>
    </div>
  )
}

export default PackageInclusion