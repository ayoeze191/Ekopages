import React, { useEffect, useState, useRef } from 'react'
import clarity_certificate_line from "./../../../../assets/dashboard/clarity_certificate_line.png"
import { tokenConfig } from '../../../../Config/Config'
import instance from '../../../../axios'
import { Document, Page } from '@react-pdf/renderer';

export const Books = () => {
  const [books, setBooks] = useState(null)
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }


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
        // getCourse()
      }, [])
     
    
  return (
    <div>
        <div className='flex items-center gap-[17.9px] py-0 font-lato'><div className=''> <img src={clarity_certificate_line} alt="" /></div></div> <p className='text-[1.5rem] font-[500] font-lato text-center md:text-left' >My Books</p>  
        <Document file={'https://ekopages1.s3.amazonaws.com/static/pdf_files/hauwaking.pdf'} 
        onLoadSuccess={onDocumentLoadSuccess}
        >
          {Array.from(new Array(numPages), (el, index) => {
            <Page key={`page_${index + 1}`} 
            pageNumber={index + 1}
            />
          })}
        </Document> 
        <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  )
}
