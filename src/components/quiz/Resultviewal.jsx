import { motion } from "framer-motion";
import excelentLogo from "./../../assets/quizzes/excelentLogo.svg";
import excelentBg from "./../../assets/quizzes/excelent-bg.svg";
import instance from "../../axios";
import { tokenConfig } from "../../Config/Config";
import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";


const Resultviewal = ({ ClearInterface }) => {
  const [result, setResult] = useState(null) 
  const [Loading, setLoading] = useState(true)

  const get_scores = async () => {
    const response = await instance.get("/dashboard-quizzes/get_score/", tokenConfig());
    const result = await response.data;
    setResult(result.data.message === "Take the test again. Better luck next time"?"failed":"passed")
    setLoading(false)
  }

  useEffect(() =>{
     get_scores()
  }, [])


    const mode = {
      failed: {
        applaud: "Keep Going!",
        text: "While you didn’t make it beyond the average this time, we are certain you’ve learned a lot. You will do better next time.",
      },
      passed: {
        applaud: "Congratulations!",
        text: "You did a great job by above beyond the average.",
      },
    };
  
    return (
      Loading?<BeatLoader />:
      <motion.div className="fixed top-[10vh] w-full" 
      initial={{  scale: 0 }}
      animate={{ scale: [0, 2, 1] }}
      transition={{ type: "spring", stiffness: 200, duration: 10 }}
      >
        <div className="w-[350px] h-[80vh] bg-[#ffffff] z-50 mx-auto overflow-hidden   left-[30vh] flex flex-col items-center">
          <div className="bg-[#5A0C91] rounded-b-[100%] relative  -top-20  h-[300px] w-[415px] bg-cover right-10 mx-auto">
            <img src={excelentBg} className="bg-cover h-full" alt=""/>
          </div>
          <div className=" relative -top-40 mx-auto w-fit">
            <img src={excelentLogo} alt="" srcset="" />
          </div>
          {/* body */}
          <div className="mx-auto w-fit flex flex-col items-center text-center relative -top-[6rem] font-lato">
            <motion.h3
              initial={{ x: 100 }}
              animate={{ x: [100, 0] }}
              transition={{ type: "spring", delay: 0.2, stiffness: 200 }}
              className="text-[22px] font-[500] leading-[26.4px] "
            >
              {" "}
              {mode[result].applaud}
            </motion.h3>
            <motion.p className="text-[14px] px-[29px] font-[400] leading-[16.8px] font-lato mt-[12px]" initial={{ rotateX: 180, scale: 0 }}
              animate={{ rotateX: [180,  0], scale: [0, 1]}}
              transition={{ type: "spring", delay: 0.4, stiffness: 200 }}>
            {mode[result].text}
            </motion.p>
            <p className="text-[16px] font-lato font-[500] leading-[16.8px] mt-[32px]">
              You Scored
            </p>
            <p className="mt-[12px] font-[500] text-[20px] leading-[24px] mb-[32px] flex">
              64/<span className="text-[24px] flex gap-0">{
              [1, 0 , 3].map((item, index) => { 
                console.log(index)
                return <motion.span initial={{ scale: 0 }}
              animate={{ scale: [0, 2, 1]}}
              transition={{ type: "spring", delay: index == 0 ? 0.6:0.4 * 2, stiffness: 200 }}> {item} </motion.span>})
              }</span>
            </p>
            <button className="bg-[#5A0C91] rounded-[5.5px] px-[20px] py-[13.5px] text-[#EFE7F4] text-[14px] mb-[20px]" onClick={ClearInterface}>
              Review Your Submission
            </button>
            <p>Go Back to Courses</p>
          </div>
        </div>
      </motion.div>
    );
  };


  export default Resultviewal