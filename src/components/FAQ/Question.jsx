import React , {useState }from 'react'
import Add from "./../../assets/FAQ/Add.png"
import {AiOutlinePlus, AiOutlineMinus} from "react-icons/ai"
const Question = ({question, answer}) => {
  const [show, setShow] = useState(false)
  const CLickHanlder = () => {
      setShow(!show)
  }

  return (
    <div className={`bg-[#ffffff] px-[1rem] py-4  font-lato font-[600] text-black border-none max-w-5xl w-full overflow-hidden transition-all ${!show?'h-[4rem]':'h-24'} `}>
       <div className={`flex justify-between text-[24px] ${show&&'text-[#5A0C91]'}`}> <div>{question}</div> <div>{!show?<AiOutlinePlus onClick={CLickHanlder}/>: <AiOutlineMinus onClick={CLickHanlder}/>}</div></div>
        <div className='text-[#33363F] mt-3'>{answer}</div>
    </div>
  )
}
export default Question