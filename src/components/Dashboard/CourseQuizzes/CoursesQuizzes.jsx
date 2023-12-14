import React, { useEffect, useState } from "react";
import back from "./../../../assets/back.png";
import { Link, useNavigate } from "react-router-dom";
import Quiz from "./Quiz";
import { useLocation, useParams } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import instance from "./../../../axios";
import { tokenConfig } from "../../../Config/Config";
import { Reform_to_suitable_form } from "../../../Utils/reformQuestions";
import {  useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { swicthFinishedCourseQuiz } from "../../../store/reducers/Quizzes";
const CourseQuizes = () => {
  // const navigate = useNavigate()
  const dispatch = useDispatch()
  const url = useSelector((state) => state.billing.url)
  console.log(url)
  const navigate = useNavigate() 
  const {redirect_id, completed_id} = useParams()
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
      // .get("/Quiz/list_Quizes", tokenConfig())
      .get(`/Quiz/start/${redirect_id}`, tokenConfig())
      .then((res) => {
        setloadingQuestions(false)
        console.log(res.data)
        console.log(res.data);
        setAll_questions(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    get_allquizzes();
  }, []);

  const addAnswer = (id, new_answer) => {
    console.log("working")
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
          "/Quiz/answer_quiz/",
          { question: item.question, answer: item.answer, quiz: redirect_id },
          tokenConfig()
        );
        const result = await response.data;
      }
      setAsCompleted()
      navigate(`/dashboard/MyCourses/${url}`)
    } catch (error) {
      console.error("Error making API call", error);
      setLoading(false);
    }
  };
 
  const setAsCompleted = async() => {
    try {
      const res = await instance.post('/services/completed/', {completed: true, lesson:completed_id} ,tokenConfig())
      console.log(res.data)
    }
    catch{
      throw("Can't set Completed")
    }
  }

  // const Check = () => {
  //   instance.get('/dashboard-quizzes/quiz/review/', tokenConfig())
  //     .then((res) => {
  //       setUserSelectedAnswers(res.data.review_data)
  //       setLoading(false);
  //     setShowOverlay(true);
  //     setSucessfully_Submited(true);
  //     })
  //     .catch((err) => {
  //     })
  // }

  useEffect(() => {
    
    
  }, [setSucessfully_Submited])

  // function that checks if the user has done the test before


  // const ClearInterface = () => {
  //   setShowOverlay(false)
  //   setSucessfully_Submited(false)
  // }
  

  return (
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
              Pop Quiz{" "}
            </div>{" "}
            <div  className="md:order-3"></div>{" "}
          </div>
        </section>
        <div className="section flex flex-col gap-[4.125rem] mb-10">
          {loadingQuestions?<BeatLoader />:all_question.length == 0 ? "No Questions Yet":all_question.map((quest, index) => (
            <Quiz
              {...Reform_to_suitable_form(quest)}
            //   selectedAnswer = {userSelected.length > 0 && userSelected.find((answer) => answer.question_text === Reform_to_suitable_form(quest).question).user_answer}
            //   correctAnswer = {userSelected.length > 0 && userSelected.find((answer) => answer.question_text === Reform_to_suitable_form(quest).question).correct_answer}
              number={index + 1}
              addAnswer={addAnswer}
            />
          ))}
          <div className="flex justify-between w-full px-0">
            {all_question.length  > 0? (
              <button
                onClick={HandleSubmit}
                className=" text-white text-[17.6px] md:text-[1rem] font-[700] py-[10.5px] px-[33px]  md:px-0 md:w-[216px] rounded-[8px]  border-solid border-2 bg-[#5A0C91]  font-lato w-fit mx-auto"
              >
                Complete Course
              </button>
            ) : null}
          </div>
        </div>
      </div>
  );
};

export default CourseQuizes;

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
