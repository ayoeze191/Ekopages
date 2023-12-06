import React, { useState } from "react";

const Options = ({
  label,
  text,
  selected,
  onclick,
  correct_answer,
  selectedAnswer,
}) => {
  // const [selected, setSelected] = useState()
  // console.log(selected)
  if (selectedAnswer) {
    console.log(correct_answer && selectedAnswer.toLocaleUpperCase() == text.toLocaleUpperCase() && selectedAnswer.toLocaleUpperCase() == correct_answer.toLocaleUpperCase());
  }

  return !correct_answer ? (
    <div
      className={`${
        selected ? "bg-purple-700 text-white" : "bg-white text-[#4A4A4A]"
      } 
      flex gap-[1rem] py-[1.1rem] px-[4rem] font-lato font-[400] text-[1rem] items-center hover:underine cursor-pointer`}
      onClick={() => onclick(text)}
    >
      <div className="rounded-full p-[0.5rem] border-solid border-[1px] border-[#4A4A4A] w-7 h-7 flex items-center justify-center">
        {label}
      </div>
      <div className="text-[#4A4A4A]">{text}</div>
    </div>
  ):
  (
<div  className={`${
        correct_answer &&
        selectedAnswer.toLocaleUpperCase() == text.toLocaleUpperCase() &&
        selectedAnswer.toLocaleUpperCase() ==
          correct_answer.toLocaleUpperCase() &&
        "bg-green-700"
      }
      ${
        correct_answer &&
        selectedAnswer.toLocaleUpperCase() !==
          correct_answer.toLocaleUpperCase() &&
        selectedAnswer.toLocaleUpperCase() == text &&
        "bg-red-500"
      } flex gap-[1rem] py-[1.1rem] px-[4rem] font-lato font-[400] text-[1rem] items-center hover:underine cursor-pointer`}       
>
<div className="rounded-full p-[0.5rem] border-solid border-[1px] border-[#4A4A4A] w-7 h-7 flex items-center justify-center">
        {label}
      </div>
      <div className="text-[#4A4A4A]">{text}</div>
</div>
  )
};

export default Options;
