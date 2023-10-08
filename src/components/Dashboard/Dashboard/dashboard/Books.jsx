import React, { useEffect, useState } from 'react'
import clarity_certificate_line from "./../../../../assets/dashboard/clarity_certificate_line.png"
import { tokenConfig } from '../../../../Config/Config'
import instance from '../../../../axios'

export const Books = () => {
    const [books, setBooks] = useState([])
    const getCourse = () => {
        // instance.get('/dashboard-books/all_books/', tokenConfig())
        instance.get('/dashboard-books/read_book/1/', tokenConfig())

        .then((res) => {
            console.log(res.data)
          setBooks(res.data.data)
        })
        .catch((err) => {
          console.log(err)
        })
      }
      useEffect(() => {
        getCourse()
      }, [])
  return (
    <div>
        <div className='flex items-center gap-[17.9px] py-0 font-lato'><div className=''> <img src={clarity_certificate_line} alt="" /></div></div> <p className='text-[1.5rem] font-[500] font-lato text-center md:text-left' >My Courses</p>  

    </div>
  )
}
