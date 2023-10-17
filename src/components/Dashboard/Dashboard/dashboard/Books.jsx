import React, { useEffect, useState, useRef } from 'react'
import clarity_certificate_line from "./../../../../assets/dashboard/clarity_certificate_line.png"
import { tokenConfig } from '../../../../Config/Config'
import instance from '../../../../axios'
import { Document, Page, PDFViewer, View  } from '@react-pdf/renderer';
import {Buffer} from 'buffer';
import ReactPDF from '@react-pdf/renderer';
import mypdf from './../../../../assets/my.pdf'
// ReactPDF.render(<Books />, `${__dirname}/example.pdf`);


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
    const getBlob = async () => {
      const url = 'https://ekopages1.s3.amazonaws.com/static/pdf_files/hauwaking.pdf'
      let buf = await fetch(url, { mode: 'no-cors'}).then((r) => r.arrayBuffer());
      const data = Buffer.from(buf).toString("base64")
      console.log(data)
      // var f = new FileReader()
      // f.readAsDataURL(blob)
      // f.onload = d => {
      //   var uri = d.target.result;
      
      //   var link = document.creat
      // }
    } 
    useEffect(() => {
      getBlob()
    }, [])
    
  return (
    <div className='w-full'>
        {/* <iframe src='https://ekopages1.s3.amazonaws.com/static/pdf_files/hauwaking.pdf' width="100%" height="500px"></iframe> */}
        {/* <div className='w-full max-w-[1300px] mx-auto my-0'> 
          <iframe src={mypdf} className='border-[1px] border-solid border-[#ccc] w-[100%] h-[550px]' title='My ocurse'></iframe>
        </div> */}
      <div>
        <Document>
          <View>Hello</View>
        </Document>
      </div>
        {/* <object data={mypdf} type="application/pdf" width="100%" height="500px">
    <p>It appears you don't have a PDF plugin for this browser. No biggie... you can <a href="yourpdf.pdf">click here to download the PDF file.</a></p>
</object> */}
    </div>
  )
}


