import React, { useEffect } from 'react'
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

  const gettale = () => {
    instance.get(`/services/read/${id}/`)
    .then((res) => {
      console.log(res.data.data, "tales")
      setTale(res.data.data);
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
  <div className='mx-auto flex flex-col justify-center items-center relative w-full h-full'> <ClipLoader /></div>:
    <div className='font-lato max-w-5xl mx-auto flex- flex-col items-center mt-[7.3125rem] px-6 lg:px-0'>
        <div className='flex flex-col gap-[2rem] text-[#232323] items-center mb-[2rem]'>
            <p className='font-[700] text-[1.7rem] md:text-[3rem] font-lato'>{tale.title}</p>
            <div><img src={tale.image} alt="" /></div>
        </div>

        <div className='flex flex-col gap-[2rem] text-[#232323] text-[1.25rem] mb-[5rem] font-[400] font-lato'>
            
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