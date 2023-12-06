import React, { useEffect, useState } from "react";
// import Question from "../FAQ/Question";
import back from "./../../../assets/back.png";
import { Link } from "react-router-dom";
import Quiz from "./Quiz";
import { Reform_to_suitable_form } from "../../../Utils/reformQuestions";
import { useSelector } from "react-redux";
const Quizes = () => {
  const all_question = useSelector((state) => state.quizzes.quizzes)
  const userSelected = useSelector((state) => state.quizzes.quizzes_withAnswers)
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(4);
  // console.log(userSelected)

  const forward = () => {
    const rem = all_question.length - end
    console.log(rem)
    if(rem > 4 ) { 
    setStart(end);
    setEnd(end + 4);
    }
    else {
    setStart(end);
    setEnd(end + rem)
    }
  }; 
  const backward = () => {
    setEnd(start);
    setStart(start - 4);
  };
console.log(Reform_to_suitable_form(all_question[3]), Reform_to_suitable_form(all_question[4]), Reform_to_suitable_form(all_question[5]))
  return (
  
      <div>
        <section className=" h-[10.625rem] flex justify-center items-center font-lato bold">
          <div className="w-full  lg:px-0 px-6 max-w-[77rem] py-4 mx-auto h-fit px-7  text-[#444444] flex flex-col md:flex-row items-center justify-between">
            {" "}
            <Link
              to={"/services"}
              className=" h-full flex gap-[1.06rem] items-center text-[#5A0C91] font-[400] text-[1rem] cursor:pointer order-2 md:order-1 mr-auto md:mr-0"
            >
              {" "}
              <div>
                <img src={back} alt="" />
              </div>
              back{" "}
            </Link>
            <div className="font-[700]  text-[24px] md:text-[3rem] flex h-full items-center order-1 md:order-2">
              {" "}
              Review Quizzes{" "}
            </div>{" "}
            <div  className="md:order-3"></div>{" "}
          </div>
        </section>
        <div className="section flex flex-col gap-[4.125rem] mb-10">
          {userSelected.length == 0 ? "No Questions Yet":all_question.slice(start, end).map((quest, index) => (
            <Quiz
              {...Reform_to_suitable_form(quest)}
              selectedAnswer = {userSelected.length > 0 && userSelected.find((answer) => answer.question_text === Reform_to_suitable_form(quest).question).user_answer}
              correctAnswer = {userSelected.length > 0 && userSelected.find((answer) => answer.question_text === Reform_to_suitable_form(quest).question).correct_answer}
              number={index + 1}
            />
          ))}
          <div className="flex justify-between w-full px-0">
            {start !== 0 && (
              <button className="ml-0 text-white text-[17.6px] md:text-[1rem] font-[700] py-[10.5px]px-[33px]  md:px-0 md:w-[216px] rounded-[8px]  border-solid border-2 bg-[#5A0C91]  font-lato w-fit mx-auto" onClick={backward}>
                Previous
              </button>
            )}
            {(all_question.length - end) > 0 && (
              <button
                className="mr-0 text-white text-[17.6px] md:text-[1rem] font-[700] py-[10.5px] px-[33px]  md:px-0 md:w-[216px] rounded-[8px]  border-solid border-2 bg-[#5A0C91]  font-lato w-fit mx-auto"
                onClick={forward}
              >
                Next
              </button>
            )}
            {end >= all_question.length ? (
              <Link
                to={'/dashboard/MyCourses'}
              >
                <button className="mr-0 text-white text-[17.6px] md:text-[1rem] font-[700] py-[10.5px] px-[33px]  md:px-0 md:w-[216px] rounded-[8px]  border-solid border-2 bg-[#5A0C91]  font-lato w-fit mx-auto">
                Continue
                </button>
              </Link>
            ) : null}
          </div>
        </div>
      </div>
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
