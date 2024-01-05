import React from 'react'
import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { tokenConfig } from '../../../../Config/Config';
import instance from '../../../../axios';
import excelentLogo from "./../../../../assets/quizzes/excelentLogo.svg";
import excelentBg from "./../../../../assets/quizzes/excelent-bg.svg";
import emoji from "./../../../../assets/quizzes/Emoji.svg"

const CourseCompletionModal = ({ClearInterface, id}) => {
    const navigate = useNavigate()
  const [result, setResult] = useState(null) 
  const [Loading, setLoading] = useState(true)
  const [total_score, setTotalScore] = useState()
  const get_scores = async () => {
    console.log("dont run twice")
    instance.get(`/Quiz/get_score/${id}`, tokenConfig())
    .then((result) => {
      // console.log(result.data)
      setResult(result.data.message === "Take the test again. Better luck next time"?"failed":"passed")
      setTotalScore(result.data.data.total)
      setLoading(false)
    })
  }
  console.log(result)
  const mode = {
    failed: {
      applaud: "Keep Going!",
      text: "While you didn’t make it beyond the average this time, we are certain you’ve learned a lot. You will do better next time.",
      logo: emoji
    },
    passed: {
      applaud: "Congratulations!",
      text: "You did a great job by above beyond the average. That earned you a certificate",
      logo: excelentLogo
    },
  };
  
  useEffect(() => {
    get_scores()
  }, [])
  return (
    Loading?<BeatLoader />:<motion.div className="fixed   w-full left-0 z-20 flex justify-center items-center "
    // initial={{  scale: 0 }}
    // animate={{ scale: [0, 2, 1] }} 
    // transition={{ type: "spring", stiffness: 200, duration: 10 }}
    >
      <div className="w-[350px] md:w-[688px] h-[80vh] bg-[#ffffff] z-50 mx-auto overflow-hidden flex flex-col items-center">
      <div className="bg-[#5A0C91] rounded-b-[100%] relative  -top-20 md:-top-24 md:right-5  h-[300px] w-[415px] md:w-[730px] bg-cover right-10 mx-auto">
            <img src={result == "passed"?excelentBg:""} className="bg-cover h-full" alt=""/>
          </div>
          <div className=" relative -top-40 mx-auto w-fit">
            <img src={mode[result].logo} alt="" srcset="" />
          </div>
          {/* body */}
          <div className="mx-auto w-fit flex flex-col items-center text-center relative -top-[6rem] font-lato">
            <motion.h3
              initial={{ x: 100 }}
              animate={{ x: [100, 0] }}
              transition={{ type: "spring", delay: 0.2, stiffness: 200 }}
              className="text-[22px] md:text-[24px] font-[500] leading-[26.4px] md:leading-[28px]"
            >
              {" "}
              {mode[result].applaud}
            </motion.h3>
            <motion.p className="text-[14px] md:text-[16px] md:leading-[22px] px-[29px] font-[400] leading-[16.8px] font-lato mt-[12px] md:w-[500px[" initial={{ rotateX: 180, scale: 0 }}
              animate={{ rotateX: [180,  0], scale: [0, 1]}}
              transition={{ type: "spring", delay: 0.4, stiffness: 200 }}>
            {mode[result].text}
            </motion.p>
            <p className="text-[16px] font-lato font-[500] leading-[16.8px] mt-[32px]">
              You Scored
            </p>
            <p className="mt-[12px] font-[500] text-[20px] leading-[24px] mb-[32px] flex">
            {total_score}<span className="text-[24px] flex gap-0">
              {/* {
              length.toString().split("").map((item, index) => { 
                console.log(index)
                return <motion.span initial={{ scale: 0 }}
              animate={{ scale: [0, 2, 1]}}
              transition={{ type: "spring", delay: index == 0 ? 0.6:0.4 * 2, stiffness: 200 }}> {item} </motion.span>})
              } */}
              </span>
            </p>
            <button className="bg-[#5A0C91] rounded-[5.5px] px-[20px] py-[13.5px] text-[#EFE7F4] text-[14px] mb-[20px]" onClick={ () => result !== 'passed' ? ClearInterface() : navigate('/certification')}>
              Continue
            </button>
            <p>Go Back to Courses</p>
          </div>
      </div>
    </motion.div>
  )
}

export default CourseCompletionModal