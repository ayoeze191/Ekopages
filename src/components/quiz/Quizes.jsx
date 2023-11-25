import React, { useEffect, useState } from "react";
import Question from "../FAQ/Question";
import back from "./../../assets/back.png";
// import { questions } from './questionsLiteral'
import { Link } from "react-router-dom";
import Quiz from "./Quiz";
import { useLocation, useParams } from "react-router-dom";
import AuthButton from "../authButton";
import { BeatLoader, ClipLoader } from "react-spinners";
import instance from "../../axios";
import { tokenConfig } from "../../Config/Config";
import { Reform_to_suitable_form } from "../../Utils/reformQuestions";
import axios from "axios";
import GeneralUiOverlay from "../ui/GeneralUiOverlayLoader";
import excelentLogo from "./../../assets/quizzes/excelentLogo.svg";
// import Overlay from '../Overlay'
import { motion, transform } from "framer-motion";
import excelentBg from "./../../assets/quizzes/excelent-bg.svg";
const Quizes = () => {
  const params = useParams();
  const userScores = useState(null)
  const loc = useLocation();
  const [all_question, setAll_questions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(4);
  const [loading, setLoading] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [sucessfully_Submited, setSucessfully_Submited] = useState(false);
  const get_allquizzes = () => {
    instance
      .get("/dashboard-quizzes/start", tokenConfig())
      .then((res) => {
        console.log(res.data.data);
        setAll_questions(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    get_allquizzes();
  }, []);

  const forward = () => {
    setEnd(start);
    setStart(end + 4);
  };
  const backward = () => {
    setEnd(start);
    setStart(start - 4);
  };
  const addAnswer = (id, new_answer) => {
    const quest_id = answers.find((answer) => answer.question === id);
    let new_questions;
    if (quest_id) {
      new_questions = answers.map((old_answer) =>
        old_answer.question == id
          ? { ...old_answer, answer: new_answer }
          : { ...old_answer }
      );
    } else {
      new_questions = answers;
      new_questions.push({ question: id, answer: new_answer });
    }
    setAnswers(new_questions);
  };
  const HandleSubmit = async () => {
    setShowOverlay(true);
    setLoading(true);
    try {
      for (const item of answers) {
        console.log({ question: item.question, answer: item.answer })
        const response = await instance.post(
          "/dashboard-quizzes/answer_quiz/",
          { question: item.question, answer: item.answer },
          tokenConfig()
        );
        const result = await response.data;
      }
      console.log("All API calls completed successfully");
      setLoading(false);
      setShowOverlay(true);
      setSucessfully_Submited(true);
    } catch (error) {
      console.error("Error making API call", error);
      setLoading(false);
    }
  };
  const get_scores = async () => {
    const response = await instance.get(
      "/dashboard-quizzes/get_score/",
      tokenConfig()
    );
    const result = await response.data;
    console.log(result)
  }
  useEffect(() => {
    get_scores()
  })

  const getCourse__Module = (search) => {
    const [course, module] = search.split("&");
    return { course: course.split("=")[1], module: module.split("=")[0] };
  };

  return (
    <Wrapper overlay={showOverlay}>
      {sucessfully_Submited && <Resultviewal result={'passed'} />}
      {loading && 
      <div className="fixed z-[99999000000]  w-full h-full flex justify-center items-center top-0 font-lato">
      <div className=" top-0 mx-auto">
        Computing....
        <BeatLoader />
        </div></div>
        }
      <div>
        <section className=" h-[10.625rem] flex justify-center items-center font-lato bold">
          <div className="w-full  lg:px-0 px-6 max-w-[77rem] py-4 mx-auto h-fit px-7  text-[#444444] flex items-center justify-between">
            {" "}
            <Link
              to={"/services"}
              className=" h-full flex gap-[1.06rem] items-center text-[#5A0C91] font-[400] text-[1rem] cursor:pointer"
            >
              {" "}
              <div>
                <img src={back} alt="" />
              </div>
              back{" "}
            </Link>
            <div className="font-[700] text-[3rem] flex h-full items-center ">
              {" "}
              POP QUIZZES{" "}
            </div>{" "}
            <div></div>{" "}
          </div>
        </section>
        <div className="section flex flex-col gap-[4.125rem] mb-10">
          {all_question.slice(start, end).map((quest, index) => (
            <Quiz
              {...Reform_to_suitable_form(quest)}
              number={index + 1}
              addAnswer={addAnswer}
            />
          ))}
          <div className="flex justify-between w-full px-0">
            {start !== 0 && (
              <button className="ml-0 text-white text-[17.6px] md:text-[1rem] font-[700] py-[10.5px]px-[33px]  md:px-0 md:w-[216px] rounded-[8px]  border-solid border-2 bg-[#5A0C91]  font-lato w-fit mx-auto">
                Previous
              </button>
            )}
            {end >= all_question.length ? null : (
              <button
                className="mr-0 text-white text-[17.6px] md:text-[1rem] font-[700] py-[10.5px] px-[33px]  md:px-0 md:w-[216px] rounded-[8px]  border-solid border-2 bg-[#5A0C91]  font-lato w-fit mx-auto"
                onClick={forward}
              >
                Next
              </button>
            )}
            {end >= all_question.length ? (
              <button
                onClick={HandleSubmit}
                className="mr-0 text-white text-[17.6px] md:text-[1rem] font-[700] py-[10.5px] px-[33px]  md:px-0 md:w-[216px] rounded-[8px]  border-solid border-2 bg-[#5A0C91]  font-lato w-fit mx-auto"
              >
                Finish
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Quizes;

const Wrapper = ({ overlay, children }) => {
  return (
    <>
      <Overlay show={overlay} />
      {children}
    </>
  );
};

const Resultviewal = ({ sucessfully_Submited, result }) => {
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
    <motion.div className="fixed top-[10vh] w-full" 
    initial={{  scale: 0 }}
    animate={{ scale: [0, 2, 1] }}
    transition={{ type: "spring", stiffness: 200, duration: 10 }}
    >
      <div className="w-[350px] h-[80vh] bg-[#ffffff] z-50 mx-auto overflow-hidden   left-[30vh] flex flex-col items-center">
        <div className="bg-[#5A0C91] rounded-b-[100%] relative  -top-20  h-[300px] w-[415px] bg-cover right-10 mx-auto">
          <img src={excelentBg} className="bg-cover h-full" />
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
          <button className="bg-[#5A0C91] rounded-[5.5px] px-[20px] py-[13.5px] text-[#EFE7F4] text-[14px] mb-[20px]">
            Review Your Submission
          </button>
          <p>Go Back to Courses</p>
        </div>
      </div>
    </motion.div>
  );
};

const Overlay = ({ onclick, show }) => {
  console.log(show, "show");
  return (
    show && (
      <div
        className="bg-black opacity-[0.7] fixed w-full h-full top-0"
        onClick={onclick}
      ></div>
    )
  );
};
