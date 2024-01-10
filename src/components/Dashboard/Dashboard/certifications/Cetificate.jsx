import React, { useState } from 'react'
import { FaDownload } from 'react-icons/fa'

import {saveAs} from "file-saver"
import {motion, AnimatePresence} from "framer-motion"
import downloadIcon from "./../../../../assets/downloadIcon.svg"
const Cetificate = ({image_fmt, title, date_created, pdf_fmt}) => {
  const [viewImage, setViewImage] = useState(false)
    const handleDownload = async () => {
      // window.location.replace(pdf_fmt)
        // console.log("1")
        //   try {
        //     const pdfBlob = await fetch(`${pdf_fmt}`).then((res) =>{
        //     console.log("2")
        //      return  res.blob()
        //     }
        //     );
        //     saveAs(pdfBlob, 'document.pdf');
        //     console.log("3")
        //   } catch (error) {

        //     console.error('Error downloading PDF', error);
        //   }
         const pdfUrl = pdf_fmt;
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Ekopages_SdgCertificate.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        }

      


  return (
    <div  className='flex gap-[22px] md:gap-[43px] w-fit mx-auto md:mx-0'>
     {viewImage && <ImageViewer img={image_fmt} handleClick={() => setViewImage(false)}/>}
        <div className=' w-[90px] h-[110px] md:w-[100px] md:h-[120px] lg:h-[148px] lg:w-[188px] rounded-[12px]'>
            <img src={image_fmt}  className='w-[100px] h-[120px] md:h-[148px] md:w-[188px] object-cover rounded-[12px] '/>
        </div>
        <div className='flex flex-col justify-between'>
            <div>
            <h3 className='font-lato font-medium text-[16px] md:text-[20px] text-[#4A4A4A]'>
                {title}
            </h3>
            <p className='text-[#888] text-[14px] md:text-base'>
               Date Completed:<span> {date_created}</span>
            </p>
            </div>
            <div className='text-[1rem] font-lato font-[500] flex gap-[16px] md:gap-[20px] lg:gap-[24px]'>
                <button className='rounded-[6px] border-[0.7px] border-solid w-[70px] h-[28px] md:w-[80px] md:h-[32px] lg:w-[94px] lg:h-[37px] border-[#4A4A4A] text-[12px] md:text-[14px] lg:text-base' onClick={() => setViewImage(true)}>View</button>
                <button className='bg-[#5A0C91] h-[28px] w-[118px] md:h-[32px] lg:w-[129px] lg:h-[37px] rounded-[6px] flex text-white justify-center items-center gap-[4px] md:gap-[8px] text-[12px] md:text-[14px] lg:text-base' onClick={handleDownload}>Download <span> <FaDownload /></span></button>
            </div>
        </div>
    </div>
  )
}

export default Cetificate




const ImageViewer = ({img, handleClick}) => {
  return<AnimatePresence> <div
  className='bg-black fixed opacity-90 w-full h-full flex justify-center items-center left-0 top-0 z-50' onClick={(e) => e.target.id !== "child" && handleClick()}>
    <motion.div
  initial = {{opacity: 0}}
            animate = {{opacity: [0, 1]}}
            exit={{opacity: [1, 0], }}
            transition={{ duration: 0.5, delay: 0.2,}} className='w-[80vw] h-[75vh] max-w-[40rem] z-[100] ' id = 'child'>
<img src={img} alt="" className='w-full h-full object-contain' id = 'child'/>
</motion.div>
  </div>
  </AnimatePresence>
}