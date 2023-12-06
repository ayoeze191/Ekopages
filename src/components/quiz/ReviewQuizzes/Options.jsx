import React, { useState } from "react";

const Options = ({
  label,
  text,
  correct_answer,
  selectedAnswer,
}) => {
  if (selectedAnswer) {
    // console.log(correct_answer && selectedAnswer.toLocaleUpperCase() == text.toLocaleUpperCase() && selectedAnswer.toLocaleUpperCase() == correct_answer.toLocaleUpperCase());
  }
  // console.log(selectedAnswer, correct_answer, text)
  // if(text === selectedAnswer){
  //   console.log(correct_answer && selectedAnswer.toLocaleUpperCase() === text.toLocaleUpperCase() && selectedAnswer.toLocaleUpperCase() !== correct_answer.toLocaleUpperCase())
  // }

       

  return (correct_answer && selectedAnswer.toLocaleUpperCase() === text.toLocaleUpperCase() && selectedAnswer.toLocaleUpperCase() !== correct_answer.toLocaleUpperCase() == true) ? (
<div  className={` bg-red-500
     flex gap-[1rem] py-[1.1rem] px-[4rem] font-lato font-[400] text-[1rem] items-center hover:underine cursor-pointer`}       
>
<div className="rounded-full p-[0.5rem] border-solid border-[1px] border-[#4A4A4A] w-7 h-7 flex items-center justify-center">
        {label}
      </div>
      <div className="text-[#4A4A4A]">{text}</div>
</div>) :  (correct_answer && selectedAnswer.toLocaleUpperCase() === text.toLocaleUpperCase() && text.toLocaleUpperCase() === correct_answer.toLocaleUpperCase()) == true ? 
(

<div  className={` bg-green-700
     flex gap-[1rem] py-[1.1rem] px-[4rem] font-lato font-[400] text-[1rem] items-center hover:underine cursor-pointer`}       
>
<div className="rounded-full p-[0.5rem] border-solid border-[1px] border-[#4A4A4A] w-7 h-7 flex items-center justify-center">
        {label}
      </div>
      <div className="text-[#4A4A4A]">{text}</div>
</div>
  ):
  (

    <div  className={`
         flex gap-[1rem] py-[1.1rem] px-[4rem] font-lato font-[400] text-[1rem] items-center hover:underine cursor-pointer`}       
    >
    <div className="rounded-full p-[0.5rem] border-solid border-[1px] border-[#4A4A4A] w-7 h-7 flex items-center justify-center">
            {label}
          </div>
          <div className="text-[#4A4A4A]">{text}</div>
    </div>
      )

  }

export default Options;