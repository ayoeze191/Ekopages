import React, { useEffect, useState } from "react";
import back from "./../../../assets/back.png";
import { Link, useNavigate } from "react-router-dom";
import Quiz from "./Quiz";
import { useLocation, useParams } from "react-router-dom";
import { BeatLoader, ClipLoader,FadeLoader } from "react-spinners";
import instance from "./../../../axios";
import { tokenConfig } from "../../../Config/Config";
import { Reform_to_suitable_form } from "../../../Utils/reformQuestions";
import {  useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { swicthFinishedCourseQuiz } from "../../../store/reducers/Quizzes";
import axios from "axios";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Return_Yet_To_Be_answered_Questions } from "../../../Utils/HasAnsweredAllQuizzes";
import ReviewQuizzes from "./ReviewQuiz/ReviewQuizzes";

// import { Modal } from "antd";
const CourseQuizes = () => {
  // const navigate = useNavigate()
  const dispatch = useDispatch()
  const url = useSelector((state) => state.billing.url)
  console.log(url)
  const navigate = useNavigate() 
  const {redirect_id, completed_id, course_id} = useParams()
  const [all_question, setAll_questions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(4);
  const [loading, setLoading] = useState(false);
  const [loadingQuestions, setloadingQuestions] = useState(false)
  const [showOverlay, setShowOverlay] = useState(false);
  const [sucessfully_Submited, setSucessfully_Submited] = useState(false);
  const [showModal, setShowmodal] = useState(false)
  const [moduleCompleted, setModuleCompleted] =  useState(false)
  const [course_completed, setCourse_completed] = useState(null)
  const [userSelected, setUserSelectedAnswers] = useState(null)
  const CheckwhetherQuizCompleted = async() => {
    setloadingQuestions(true)
    setShowOverlay(true)
    const course_comp = await CheckwhetherCourseCompleted(course_id)
    
    if(course_comp == true){
      const res = await Reviewquiz()
      const getting_questions = await get_allquizzes()
      console.log(getting_questions)
      console.log(res)
      setloadingQuestions(false)
      setShowOverlay(false)
      return setCourse_completed(true)
    }
    else{
      setCourse_completed(false)
    }
    const res = await instance.get(`services/study_all/${course_id}`, tokenConfig())
    const response = res.data.data.find((item) => item.id == completed_id)
    if(response.completed == true){
      setShowmodal(response.completed)
      setModuleCompleted(response.completed)
      setShowOverlay(true)
      setloadingQuestions(false)
      const get_quizzes = await get_allquizzes();
      console.log(get_allquizzes)
    }
    else{
      const get_quizzes = await get_allquizzes();
      setloadingQuestions(false)
      setShowOverlay(false)
      console.log(get_allquizzes)
    }
  }


  const CheckwhetherCourseCompleted = async (id) => {
    const res = await instance.get(`/services/percent_complete/${id}/`, tokenConfig())
    return res.data.passed_course
  }

  const get_allquizzes = async () => {
    // setloadingQuestions(true)
    try {
      const res = await instance.get(`/Quiz/start/${redirect_id}`, tokenConfig())
      setAll_questions(res.data.data);
      setloadingQuestions(false)
    }
    catch(err) {
      console.log(err)
    }
    return "done"
  };
  const Reviewquiz = async () => {
    const res = await instance.get(`/Quiz/Review/${redirect_id}`, tokenConfig())
    .then((res) => {
      setUserSelectedAnswers(res.data)
      setloadingQuestions(false)
    })
    return res
  }
  useEffect(() => {
    CheckwhetherQuizCompleted()
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
    const yet_to_be_answerd_quest = Return_Yet_To_Be_answered_Questions(answers, all_question)
    if(yet_to_be_answerd_quest.length > 0){
      window.alert("Please attempt all questions ")
      setShowOverlay(false);
      return setLoading(false)
    }
    try{
      if(moduleCompleted == false) {
        for (const item of answers) {
          try{
          const response = await instance.post(
                    "/Quiz/answer_quiz/",
                    { question: item.question, answer: item.answer, quiz: redirect_id },
                    tokenConfig()
                  );
                  const result = await response.data;
          }
          catch(error){
            console.log(error)
          } 
        }
        try{
          setAsCompleted()
        }
        catch(error){
          console.log(error)
        }
      }
      else {
        for (const item of answers) {
          const response = await instance.put(
            `/Quiz/functions/${item.question}/`,
            { question: item.question, answer: item.answer, quiz: redirect_id },
            tokenConfig()
          );
          const result = await response.data;
        }
      }
      navigate(`/dashboard/MyCourses/${url}`)
      setLoading(false)
    }
    catch(error){
      console.log("error")
    }
  };
 
  const setAsCompleted = async() => {
    
    try {
      const res = await instance.post('/services/completed/', {completed: true, lesson:completed_id} ,tokenConfig())
      console.log(res.data)
    }
    catch(error){
      console.log(error)
      // throw("Can't set Completed")
    }
  }

  useEffect(() => {
    
    
  }, [setSucessfully_Submited])

  // function that checks if the user has done the test before


  
  const redo = () => {
    setShowmodal(false)
    setShowOverlay(false)
  }
  const cont = () => {
    navigate(`/dashboard/MyCourses/${url}`)
  }
  console.log(course_completed)
  return (
    <Wrapper overlay={showOverlay}>
      {loading &&  <div className="fixed    flex justify-center items-center top-0 font-lato w-full h-full">
      <div className=" w-[350px] md:w-[688px] h-[80vh] z-[99999000000] top-0 mx-auto bg-white text-center flex flex-col items-center justify-center gap-[56px]">
       <p className="text-[28px] font-semibold font-lato text-center"> Quiz Submitted</p>
        <FadeLoader color="#5A0C91"/>
        <p className="font-lato text-base text-center">
        Please, hold on while we Submit your answer  
        </p>
        </div>
      </div>}
     { showModal && <Modal redo={redo} cont={cont} />  }
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
          {loadingQuestions?<ClipLoader />: course_completed == false ? all_question.length == 0 ? "No Questions Yet":all_question.map((quest, index) => (
            <Quiz
              {...Reform_to_suitable_form(quest)}
            //   selectedAnswer = {userSelected.length > 0 && userSelected.find((answer) => answer.question_text === Reform_to_suitable_form(quest).question).user_answer}
            //   correctAnswer = {userSelected.length > 0 && userSelected.find((answer) => answer.question_text === Reform_to_suitable_form(quest).question).correct_answer}
              number={index + 1}
              addAnswer={addAnswer}
            />
          )):course_completed == true ? <ReviewQuizzes all_question={all_question} selectedAnswers={userSelected}/> : "No Quizzes"}
          <div className="flex justify-between w-full px-0">
            {all_question.length  > 0? (
              <button
                onClick={course_completed?() => navigate(`/dashboard/MyCourses/${url}`):HandleSubmit}
                className=" text-white text-[17.6px] md:text-[1rem] font-[700] py-[10.5px] px-[33px]  md:px-0 md:w-[216px] rounded-[8px]  border-solid border-2 bg-[#5A0C91]  font-lato w-fit mx-auto"
              >
                {course_completed?"Back to Quiz" :" Complete Quizzes"}
              </button>
            ) : null}
          </div>
        </div>
      </div>
      </Wrapper>
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


const Modal = ({ redo, cont}) => {
  return(
    <div  className="fixed w-full h-full top-0  flex justify-center items-center ">
      
    <div className="font-lato flex items-center  bg-white flex-col w-[90vw] md:w-[55vw] h-[50vh] md:h-[60vh] max-w-[483px] max-h-[332px] rounded-[7.02px]">
    <div className="ml-auto w-fit h-fit mt-[20px] mr-[20px]">
      <IoCloseCircleOutline color="#232323" width={32} height={32} size={32} onClick={cont} className="mb-[40.5px] ml-auto cursor-pointer"/>
    </div>
      <div className="flex flex-col gap-[40px] items-center font-[500] text-[16px] leading-[19.2px] font-lato text-[#232323] text-center">
      This module was previously completed by you <button className="bg-[#5A0C91] cursor-pointer rounded-[5px] w-[129px] h-[40px] font-lato leading-[19.2px] text-[#ffffff]" onClick={redo}>Retake</button>
      </div>
    </div>
    </div>
  )
}




