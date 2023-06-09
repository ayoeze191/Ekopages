import React from 'react'
import first from "./../../assets/projects/first.png"
import second from "./../../assets/projects/second.png"
import third from "./../../assets/projects/third.png"
import Project from './Project'
import sdgart from "./../../assets/projects/sdgart.png"

const projects = [
    {   path: "sdg",
        img: first, 
        h1: "SDG Literacy Drive", 
        p: "Queen College, Lagos"
    }, 
    {
        img: sdgart, 
        h1: "The SDG Art Exhibition",
        path: "sdgart",
    },
    {
        img: third, 
        h1: "The Teach Her Teach Him Project",
        path: "theteach",
    }  
]


const Projects = () => {
  return (
    <div className='w-full  mx-auto px-10 lg:px-0 max-w-[77rem] flex flex-col items-center md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-[2rem] mb-[11.1rem] gap-y-[4rem] mt-[5rem]'>
        {projects.map((proj) => <Project {...proj}/>
        )} 
    </div>
  )
}

export default Projects