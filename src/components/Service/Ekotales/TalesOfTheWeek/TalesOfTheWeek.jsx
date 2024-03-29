import React, { useEffect, useRef } from 'react'
import Frame247 from "./../../../../assets/Service/ekotales/Frame247.png"
import { useState } from 'react'
import {BarLoader, ClipLoader} from "react-spinners"
import instance from '../../../../axios'
import { useNavigate } from 'react-router-dom'
import parse from "html-react-parser"

const TalesOfTheWeek = () => {
  const [loading, setLoading] = useState(true)
  const [tale, setTale] = useState(null);
  const [error, setError] = useState(false);
  const [showSmall, setShowsmall] = useState(true)

  const gettale = () => {
    instance.get('/services/tale_of_the_week')
    .then((res) => {
      //(res, "tales")
      setTale(res.data.data[res.data.data.length - 1]);
      setLoading(false);
    })
    .catch((err) => {
      setError(err.response);
      setLoading(false);
      //(err);
    })
  }
  const navigate = useNavigate()

  useEffect(() => {
    gettale()
    // console.log("scrolling")

  }, [])
 

  return (loading? 
  <div className='h-[30vh] mx-auto flex flex-col justify-center items-center'> <ClipLoader /></div>:
    <div className='font-lato max-w-5xl mx-auto flex- flex-col items-center mt-[7.3125rem] px-6 lg:px-0'>
        <div className='flex flex-col gap-[2rem] text-[#232323] items-center mb-[2rem]'>
            <p className='font-[700] text-[1.7rem] md:text-[3rem] font-lato'>Tales of The Week</p>
            <div><img src={tale.image} alt="" /></div>
            <p className='font-[700] text-[1.7rem] md:text-[3rem] font-lato'>{tale.title}</p>
        </div>

        <div className='flex flex-col gap-[2rem] text-[#232323] text-[1.25rem] mb-[5rem] font-[400] font-lato'>
{/*             
              {showSmall?
              <p>{tale.body.slice(0, 1000).split("</p>").map((p) => <p>{p}</p>)}</p>:
              tale.body.split("</p>").map((p) => <p>{p}</p>)
            } */}
            {parse(tale.body.slice(0, 1000))}
        </div>

    <div className='w-full flex justify-center'>
        <button className='rounded-[10px] bg-[#5A0C91] md:py-[0.937rem] px-[1.875rem] py-[0.93rem]  md:px-[0.875rem] mb-[6.25rem] text-[1.25rem] md:text-[1.5rem]  text-[#EFE7F4]' onClick={()=>navigate(`details/${tale.id}`)}> Continue Reading </button>
        </div>
    </div>
  )
}

export default TalesOfTheWeek