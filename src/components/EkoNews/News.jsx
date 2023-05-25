import React, { useEffect } from 'react'
import SDGLiteracydrive from "./../../assets/EkoNews/SDGLiteracydrive.png"
import Children from "./../../assets/EkoNews/Children.png"
import Climate from "./../../assets/EkoNews/Climate.png"
import Scarcity from "./../../assets/EkoNews/Scarcity.png"
import Gender from "./../../assets/EkoNews/Gender.png"
import SingleNews from './SingleNews'
import instance from '../../axios'


export const details = [


    {   id: 0,
        path: 'sdg',
        img: SDGLiteracydrive,
        title: "SDG LITERACY DRIVE",
        text: "Championing the project to inculcate Literature books on sustainability and the SDGs in to the Federal curriculum "
    },
    {
        id: 1,
        path: '/children',
        img: Children,
        title: "5 ways Nigerian children can take care of the earth",
        text: "In commemoration of Earth Day 2022, we will be discussing 5 Ways Nigerian children can take care of Earth"
    },
    {
        id: 2,
        path: '/scarcity',
        img: Scarcity,
        title: "Scarcity of Clean water",
        text: "Championing the project to inculcate Literature books on sustainability and the SDGs in to the Federal curriculum  "
    },
    {
        id: 3,
        path: '/climate',
        img: Climate,
        title: "Climate Injustice",
        text: "Championing the project to inculcate Literature books on sustainability and the SDGs in to the Federal curriculum  "
    },
    {
        id: 4,
        path: '/gender',
        img: Gender,
        title: "End Gender Inequality",
        text: "Championing the project to inculcate Literature books on sustainability and the SDGs in to the Federal curriculum "
    },
]



const News = () => {
const get_news =  () => {
    instance.get('news/news_list/')
    .then((res) => {
        console.log(res, "our news")
    })
    .catch((err) => {
        console.log(err)
    })
}
    
    
useEffect(() => {
    get_news()
}, [])
  return (
    <div className='section flex flex-col gap-[6rem]'>
        {details.map((det, index) =><SingleNews {...det} key={index}/>)}
    </div>
  )
}

export default News