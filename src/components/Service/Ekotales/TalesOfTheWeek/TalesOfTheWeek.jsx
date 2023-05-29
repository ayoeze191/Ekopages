import React, { useEffect } from 'react'
import Frame247 from "./../../../../assets/Service/ekotales/Frame247.png"
import { useState } from 'react'
import {BarLoader, ClipLoader} from "react-spinners"
import instance from '../../../../axios'
const TalesOfTheWeek = () => {
  const [loading, setLoading] = useState(true)
  const [tale, setTale] = useState(null);
  const [error, setError] = useState(false);
  const [showSmall, setShowsmall] = useState(true)

  const gettale = () => {
    instance.get('/services/tale_of_the_week')
    .then((res) => {
      console.log(res, "tales")
      setTale(res.data.data[res.data.data.length - 1]);
      setLoading(false);
    })
    .catch((err) => {
      setError(err.response);
      setLoading(false);
      console.log(err);
    })
  }

  useEffect(() => {
    gettale()
  }, [])


  return (loading? 
  <div className='h-[30vh] mx-auto flex flex-col justify-center items-center'> <ClipLoader /></div>:
    <div className='font-lato max-w-5xl mx-auto flex- flex-col items-center mt-[7.3125rem] px-6 lg:px-0'>
        <div className='flex flex-col gap-[2rem] text-[#232323] flex flex-col items-center mb-[2rem]'>
            <p className='font-[700] text-[3rem] font-lato'>{tale.title}</p>
            <div><img src={tale.image} alt="" /></div>
            <p className='text-[2rem] font-[700] text-[#232323]'>Eniye and the Flood Trust Donation</p>
        </div>

        <div className='flex flex-col gap-[2rem] text-[#232323] text-[1.25rem] mb-[5rem] font-[400] font-lato'>
            
              {showSmall?
              <p>{tale.body.slice(0, 200).split("<p>").map((p) => <p>{p}</p>)}</p>:
              tale.body.split("<p>").map((p) => <p>{p}</p>)
            }
            
        </div>

    <div className='w-full flex justify-center'>
        <button className='rounded-[10px] bg-[#5A0C91] md:py-[0.937rem] px-[1.875rem] py-[0.93rem]  md:px-[0.875rem] mb-[6.25rem] text-[1.25rem] md:text-[1.5rem]  text-[#EFE7F4]' onClick={() => setShowsmall(!showSmall)}> Continue Reading </button>
        </div>
    </div>
  )
}

export default TalesOfTheWeek