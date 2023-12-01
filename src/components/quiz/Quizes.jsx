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
import Resultviewal from "./Resultviewal";
const Quizes = () => {
  const [userSelected, setUserSelectedAnswers] = useState([])

  const [all_question, setAll_questions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(4);
  const [loading, setLoading] = useState(false);
  const [loadingQuestions, setloadingQuestions] = useState(false)
  const [showOverlay, setShowOverlay] = useState(false);
  const [sucessfully_Submited, setSucessfully_Submited] = useState(false);
  const get_allquizzes = () => {
    setloadingQuestions(false)
    instance
      .get("/dashboard-quizzes/start", tokenConfig())
      .then((res) => {
        setloadingQuestions(false)
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
      Check()
      
    } catch (error) {
      console.error("Error making API call", error);
      setLoading(false);
    }
  };
 
  const Check = () => {
    instance.get('/dashboard-quizzes/quiz/review/', tokenConfig())
      .then((res) => {
        setUserSelectedAnswers(res.data.review_data)
        setLoading(false);
      setShowOverlay(true);
      setSucessfully_Submited(true);
      })
      .catch((err) => {
      })
  }

  useEffect(() => {
    
    
  }, [setSucessfully_Submited])

  // function that checks if the user has done the test before


  const ClearInterface = () => {
    setShowOverlay(false)
    setSucessfully_Submited(false)
  }

  return (
    <Wrapper overlay={showOverlay}>
      {sucessfully_Submited && <Resultviewal ClearInterface={ClearInterface}/>}
      {loading && 
      <div className="fixed z-[99999000000]  w-full h-full flex justify-center items-center top-0 font-lato">
      <div className=" top-0 mx-auto">
        Computing...
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
          {loadingQuestions?<BeatLoader />:all_question.length == 0 ? "No Questions Yet":all_question.slice(start, end).map((quest, index) => (
            <Quiz
              {...Reform_to_suitable_form(quest)}
              selectedAnswer = {userSelected.length > 0 && userSelected.find((answer) => answer.question_text === Reform_to_suitable_form(quest).question).user_answer}
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
