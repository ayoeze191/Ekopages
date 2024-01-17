import { transform } from 'framer-motion';
import React from 'react'
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"
// import "react-circular-progressbar/dist/"

const CircularProgressBars = ({score}) => {
   const calColor = (percent, start, end) => {
    let a = percent / 100
    const b = (end - start) * a
    const c = b + start
    return "hsl(" + c + ", 100%, 50%)"
   }
   console.log(score)
  return (  
    <CircularProgressbar value={score} text={`${score}`} circleRatio={1}
    styles={{
      
      trail: {
        strokeLinecap: "butt",
        transform: "rotate(-126deg)",
        transformOrigin: "center center "
      },
      path: {
        strokeLinecap: "butt",
        transform: "rotate(-126deg)",
        transformOrigin: "center center ",
        stroke: "purple"
      },
      text: {
        fill: "#ddd",
      },
    }}
    strokeWidth={10}

    />
  )
}

export default CircularProgressBars