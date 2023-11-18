import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { ClipLoader} from "react-spinners"
import instance from '../../../axios'
import OtherTales from './OtherEkotales/OtherTales'
import { useParams } from 'react-router-dom'
const EkoTalesDetails = () => {
  const [loading, setLoading] = useState(true)
  const [tale, setTale] = useState(null);
  const [error, setError] = useState(false);
  const [showSmall, setShowsmall] = useState(true)
  const {id} = useParams()

  //(id)

  const gettale = () => {
    instance.get(`/services/read/${id}/`)
    .then((res) => {
      //(res.data.data, "tales")
      setTale(res.data.data);
      setLoading(false);
    })
    .catch((err) => {
      setError(err.response);
      setLoading(false);
      //(err);
    })
  }

  useEffect(() => {
    gettale()
  }, [id])
  const imgRef = useRef(null)
  useEffect(() => {
    console.log("scrolling")
    console.log(imgRef)
    // imgRef.current.scrollIntoView()
    console.log("scrolling")
  }, [tale])

  return (loading? 
  <div className='mx-auto flex flex-col justify-center items-center relative w-full h-full'> <ClipLoader /></div>:
    <div className='font-lato max-w-5xl mx-auto flex- flex-col items-center mt-[7.3125rem] px-6 lg:px-0'>
            <p className='font-[700] text-[1.7rem] md:text-[3rem] font-lato'>{tale.title}</p>

        {/* <div className='flex flex-col gap-[2rem] text-[#232323] items-center mb-[2rem] w-full bg-red-100'> */}
            <div className='' ref={imgRef}><img src={tale.image} className='w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[initial] md:h-[initial] mr-auto' alt="" /></div>
        {/* </div> */}

        <div className='flex flex-col gap-[2rem] text-[#232323] text-[1rem] md:text-[1.25rem] mb-[5rem] font-[400] font-lato'>
            
              {showSmall?
              <p>{tale.body.split("<p>").map((p) => <p>{p}</p>)}</p>:
              tale.body.split("<p>").map((p) => <p>{p}</p>)
            }
            
        </div>
          <div className='relative w-full '>
        <OtherTales />
        </div>
    </div>
  )
}

export default EkoTalesDetails