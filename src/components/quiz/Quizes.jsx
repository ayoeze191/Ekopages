import React, { useEffect, useState } from "react";
import Question from "../FAQ/Question";
import back from "./../../assets/back.png";
// import { questions } from './questionsLiteral'
import { Link, useNavigate } from "react-router-dom";
import Quiz from "./Quiz";
import { useLocation, useParams } from "react-router-dom";
import AuthButton from "../authButton";
import { BeatLoader, FadeLoader , ClipLoader} from "react-spinners";
import instance from "../../axios";
import { tokenConfig } from "../../Config/Config";
import { Reform_to_suitable_form } from "../../Utils/reformQuestions";
import axios, { all } from "axios";
import GeneralUiOverlay from "../ui/GeneralUiOverlayLoader";
import excelentLogo from "./../../assets/quizzes/excelentLogo.svg";
// import Overlay from '../Overlay'
import { motion, transform } from "framer-motion";
import excelentBg from "./../../assets/quizzes/excelent-bg.svg";
import Resultviewal from "./Resultviewal";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setQuizzes, setQuizzes_with_answers } from "../../store/reducers/Quizzes";
import { Return_Yet_To_Be_answered_Questions } from "../../Utils/HasAnsweredAllQuizzes";

const Quizes = () => {
  const dispatch = useDispatch()
  const all_question = useSelector((state) => state.quizzes)
  const [answers, setAnswers] = useState([]);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(4);
  const [loading, setLoading] = useState(false);
  const [loadingQuestions, setloadingQuestions] = useState(false)
  const [showOverlay, setShowOverlay] = useState(false);
  const [sucessfully_Submited, setSucessfully_Submited] = useState(false);
  const get_allquizzes = () => {
    setloadingQuestions(true)
    instance
      .get("/dashboard-quizzes/start", tokenConfig())
      .then((res) => {
        setloadingQuestions(false)
        dispatch(setQuizzes(res.data.data))
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    get_allquizzes();
  }, []);

  const forward = () => {
    const rem = all_question.quizzes.length - end
    // console.log(rem)
    if(rem > 4 ) {
    setStart(end);
    setEnd(end + 4);
    }
    else {
    setStart(end);
    setEnd(end + rem)
    }
  };
  const rem = all_question.quizzes.length - end
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
    const yet_to_be_answerd_quest = Return_Yet_To_Be_answered_Questions(answers, all_question.quizzes)
    if(yet_to_be_answerd_quest.length > 0){
      window.alert("Please attempt all questions ")
      return setLoading(false)
    }
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
        dispatch(setQuizzes_with_answers(res.data.review_data))
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
  console.log(answers)

  const ClearInterface = () => {
    setShowOverlay(false)
    setSucessfully_Submited(false)
  }

  const navigate = useNavigate()
  return (
    <Wrapper overlay={showOverlay}>
      {sucessfully_Submited && <Resultviewal ClearInterface={ClearInterface} length={all_question.quizzes.length}/>}
      {loading && 
      <div className="fixed    flex justify-center items-center top-0 font-lato w-full h-full">
      <div className=" w-[350px] md:w-[688px] h-[80vh] z-[99999000000] top-0 mx-auto bg-white text-center flex flex-col items-center justify-center gap-[56px]">
       <p className="text-[28px] font-semibold font-lato text-center"> Quiz Submitted</p>
        <FadeLoader color="#5A0C91"/>
        <p className="font-lato text-base text-center">
        Please, hold on while we compile your score  
        </p>
        </div>
      </div>
        }
      <div>
        <section className=" h-[10.625rem] flex justify-center items-center font-lato bold">
          <div className="w-full  lg:px-0 px-6 max-w-[77rem] py-4 mx-auto h-fit px-7  text-[#444444] flex flex-col md:flex-row items-center justify-between">
            {" "}
            <button
            onClick={() => navigate(-1)}
              className=" h-full flex gap-[1.06rem] items-center text-[#5A0C91] font-[400] text-[1rem] cursor:pointer order-2 md:order-1 mr-auto md:mr-0"
            >
              {" "}
              <div>
                <img src={back} alt="" />
              </div>
              back{" "}
            </button>
            <div className="font-[700]  text-[24px] md:text-[3rem] flex h-full items-center order-1 md:order-2">
              {" "}
              Pop Quiz{" "}     </div>{" "}
            <div  className="md:order-3"></div>{" "}
          </div>
        </section>
        <div className="section flex flex-col gap-[4.125rem] mb-10">
          {loadingQuestions?<div className="w-full flex justify-center items-center"><ClipLoader /></div>:all_question.quizzes.length == 0 ? "No Questions Yet":all_question.quizzes.slice(start, end).map((quest, index) => (
            <Quiz
              {...Reform_to_suitable_form(quest, all_question.quizzes.findIndex((ques) => ques.id == quest.id))}
              // number={index + 1}
              answers = {answers}
              addAnswer={addAnswer}
            />
          ))}
          <div className="flex justify-between w-full px-0">
            {start !== 0 && (
              <button className="ml-0 text-white text-[17.6px] md:text-[1rem] font-[700] py-[10.5px]px-[33px]  md:px-0 md:w-[216px] rounded-[8px]  border-solid border-2 bg-[#5A0C91]  font-lato w-fit mx-auto" onClick={backward}>
                Previous
              </button>
            )}
            {(all_question.quizzes.length - end) > 0 && (
              <button
                className="mr-0 text-white text-[17.6px] md:text-[1rem] font-[700] py-[10.5px] px-[33px]  md:px-0 md:w-[216px] rounded-[8px]  border-solid border-2 bg-[#5A0C91]  font-lato w-fit mx-auto"
                onClick={forward}
              >
                Next
              </button>
            )}
            {end >= all_question.quizzes.length ? (
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

export const Wrapper = ({ overlay, children }) => {
  return (
    <>
      <Overlay show={overlay} />
      {children}
    </>
  );
};
export const Overlay = ({ onclick, show }) => {
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
