import React from 'react'
import Service from './Service'
import book from "./../../assets/Service/book.png"
import ekoLearn from "./../../assets/Service/ekoLearn.png"
import ekotales from "./../../assets/Service/ekotales.png"
import SDG_Literacy_drive from "./../../assets/Service/SDG_Literacy_drive.png"
import material_symbols_library_books_outline from "./../../assets/Service/material_symbols_library_books_outline.png"
import gis_story_map from "./../../assets/Service/gis_story_map.png"
import publisher from "./../../assets/Service/publisher.jpeg"
import publishing from "./../../assets/Service/publishing.jpeg"


export const service = [
    {
        url: 'ekolearn',
        img: ekoLearn, 
        h: "Eko Learn",
        p: "Subscribe to our affordable school and group packages to access our books, courses, quizzes and games.",
        button: "Learn more",
        imagefirst: true,
        btntext: "learn more",
        smallimg: ""
    },
    {
        url: 'ekotales',
        img: ekotales, 
        h: "Eko Tales",
        p: "A weekly publication of children's stories, with themes that align with the sustainable development goals.",
        button: "Learn more",
        imagefirst: false,
        btntext: "learn more",
        bg: "#FAE2B4",
        smallimg: material_symbols_library_books_outline
    },
    {
        img: publishing, 
        h: "Be a Publisher",
        p: "Publish your SDG-themed books and courses for children and educators on our platform and start earning.",
        button: "coming soon",
        imagefirst: true,
        btntext: "coming soon",
        bg: "#B6E0FF",
        smallimg: material_symbols_library_books_outline
    },
    {
        img: book, 
        h: "Book a Tutor",
        p: "Parents and children will be able to book our certified tutors online to teach them about the Sustainable Development Goals.",
        button: "coming soon",
        imagefirst: false,
        btntext: "coming soon",
        bg: "#C3EFC2", 
        smallimg: gis_story_map
    }
]




const Services = () => {
  return (
    <div className='max-w-5xl px-6 lg:px-0 mx-auto mt-[6rem] mb-[10rem] flex flex-col gap-[5rem]'>
        {service.map((ser) => <Service {...ser}/>)}
    </div>
  )
}

export default Services