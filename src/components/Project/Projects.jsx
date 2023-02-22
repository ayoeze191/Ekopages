import React from 'react'
import first from "./../../assets/projects/first.png"
import second from "./../../assets/projects/second.png"
import third from "./../../assets/projects/third.png"
import Project from './Project'
// import first from "./../../assets/projects/first.png"

const projects = [
    {
        img: first, 
        h1: "SDG Literacy Drive", 
        p: "Queen College, Lagos"
    },
    {
        img: second, 
        h1: "SDG Literacy Drive", 
        p: "Queen College, Lagos"
    },
    {
        img: third, 
        h1: "Save the Planet", 
        p: "Queen College, Lagos"
    },
    {
        img: third, 
        h1: "Save the Planet", 
        p: "Queen College, Lagos"
    },    
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