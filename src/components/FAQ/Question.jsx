import React , {useState }from 'react'
import Add from "./../../assets/FAQ/Add.png"
import {AiOutlinePlus, AiOutlineMinus} from "react-icons/ai"
const Question = ({question, answer}) => {
  const [show, setShow] = useState(false)
  const CLickHanlder = () => {
      setShow(!show)
  }

  return (
    <div className={`bg-[#ffffff] px-[1rem] py-4  font-lato font-[600] text-black border-none max-w-5xl w-full overflow-hidden transition-all ${!show?'h-[4rem]':'h-fit md:h-24'} `}>
    <div className={`flex justify-between text-[24px] ${show&&'text-[#5A0C91]'}`}> <div>{question}</div> <div>{!show?<AiOutlinePlus onClick={CLickHanlder}/>: <AiOutlineMinus onClick={CLickHanlder}/>}</div></div>
     <div className='text-[#33363F] mt-3'>{answer}</div>
 </div>
  )
}
export default Question



export const  WHatIsEkoPages = () => {
  const [show, setShow] = useState(false)
  const CLickHanlder = () => {
    setShow(!show)
  }

  return (
    <div className={`bg-[#ffffff] px-[1rem] py-4  font-lato font-[600] text-black border-none max-w-5xl w-full overflow-hidden transition-all ${!show?'h-[4rem]':'h-fit md:h-24 '} `}>
    <div className={`flex justify-between text-[24px] ${show&&'text-[#5A0C91]'}`}> <div>{"What is Ekopages?"}</div> <div>{!show?<AiOutlinePlus onClick={CLickHanlder}/>: <AiOutlineMinus onClick={CLickHanlder}/>}</div></div>
     <div className='text-[#33363F] mt-3'>{"Ekopages is a Publishing outfit that immerses children into the act of environmental sustainablility with our top books and story"}</div>
 </div>
  )
}


export const  HowdoIbuybooks = () => {
  const [show, setShow] = useState(false)
  const CLickHanlder = () => {
    setShow(!show)
  }

  return (
    <div className={`bg-[#ffffff] px-[1rem] py-4  font-lato font-[600] text-black border-none max-w-5xl w-full overflow-hidden transition-all ${!show?'h-[4rem]':'h-fit md:h-96'} `}>
    <div className={`flex justify-between text-[24px] ${show&&'text-[#5A0C91]'}`}> <div>{"How do I buy books?"}</div> <div>{!show?<AiOutlinePlus onClick={CLickHanlder}/>: <AiOutlineMinus onClick={CLickHanlder}/>}</div></div>
     <div className='text-[#33363F] mt-4 flex flex-col gap-7'>
       <div> There are multiple ways to buy books on Ekopages website.</div>

       <div> To start, you can search for the book you want in our search bar.</div>

<div>You can also browse to the books or EkoStore to purchase your preferred book.</div>

<div>When you find a book you like, click "Add to Cart" to add it to your shopping cart. </div>
<div>Once you've got everything you want in your cart (you can always remove items later).</div>

<div>Enter your billing details and click on your delivery location. Once done, click "Place order" at the bottom right of your screen. You will be directed to make payment for your order.</div>
      
      </div>
 </div>
  )
}




export const  WHatIsEkoLearn = () => {
  const [show, setShow] = useState(false)
  const CLickHanlder = () => {
    setShow(!show)
  }
  return (
    <div className={`bg-[#ffffff] px-[1rem] py-4  font-lato font-[600] text-black border-none max-w-5xl w-full overflow-hidden transition-all ${!show?'h-[4rem]':'h-fit md:h-36'} `}>
    <div className={`flex justify-between text-[24px] ${show&&'text-[#5A0C91]'}`}> <div>{"What is EkoLearn?"}</div> <div>{!show?<AiOutlinePlus onClick={CLickHanlder}/>: <AiOutlineMinus onClick={CLickHanlder}/>}</div></div>
     <div className='text-[#33363F] mt-3 leading-10'>
You can subscribe to EkoLearn on the EkoPages website when you create a profile. You will be required to pay a yearly subscription. Once you've subscribed, you'll gain access to books, courses and certifications</div>
 </div>
  )
}

export const  HowdoISubscribeToEkolearn = () => {
  const [show, setShow] = useState(false)
  const CLickHanlder = () => {
    setShow(!show)
  }

  return (
    <div className={`bg-[#ffffff] px-[1rem] py-4  font-lato font-[600] text-black border-none max-w-5xl w-full overflow-hidden transition-all ${!show?'h-[4rem]':'h-fit md:h-36'} `}>
    <div className={`flex justify-between text-[24px] ${show&&'text-[#5A0C91]'}`}> <div>{"How do I buy books?"}</div> <div>{!show?<AiOutlinePlus onClick={CLickHanlder}/>: <AiOutlineMinus onClick={CLickHanlder}/>}</div></div>
     <div className='text-[#33363F] mt-3 flex flex-col gap-7'>
You can subscribe to EkoLearn on the EkoPages website when you create a profile. You will be required to pay a yearly subscription. Once you've subscribed, you'll gain access to books, courses and certifications.
      </div>
 </div>
  )
}