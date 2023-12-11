import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLocation, useParams } from "react-router-dom";
import { useInView } from "framer-motion";
import { IoCheckmarkSharp } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import instance from "../../../../axios";
import { tokenConfig } from "../../../../Config/Config";
import { RiLoader4Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { swictchUserCourseUrl } from "../../../../store/reducers/billing";
import Video from "./components/Video";
const CourseDetails = () => {
  const viewref = useRef(null);
  const param = useParams();
  // const loc = useLocation()
  const vidoeRef = useRef(null)
  const [modules, setModules] = useState([]);
  const [moduleDetails, setmoduleDetails] = useState([]);
  const [current, setCurrent] = useState(1);




  useEffect (() => {
    // ref.current.scrollIntoView()
    // viewref.current.scrollIntoView({behaviour: "smooth"})
  }, [current])
  const get_modules = () => {
    console.log("working");
    instance
      .get(`services/study_all/${param.id}`, tokenConfig())
      .then((res) => {
        console.log(res.data);
        setModules(
          res.data.data.map(
            (module) =>
              module.id && { id: module.lesson_number, title: module.topic }
          )
        );
        setmoduleDetails(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const get_completed = () => {
    
  }

  useEffect(() => {
    get_modules();
  }, []);

  // useEffect(() => {
  //   if(loc.state !== null){
  //     if(loc.state.finished == 1){
  //       setCurrent(4)
  //     }
  //     else if(loc.state.finished == 2){
  //       setCurrent(6)
  //     }
  //   }
  // }, [])



  const changeCurrentModule = (lesson_number) => {
    setCurrent(lesson_number);
  };

  const RefactoredModules = [...modules]
  RefactoredModules.splice(3, 0, {level:1, title: "POP Quiz",  current:current})
  RefactoredModules.splice(6, 0, {level:2, title: "POP Quiz", current:current})

  return (
    <div className="px-[2.06rem]">
        {moduleDetails.length > 0 &&<div className="bg-[#FFFFFF] md:bg-inherit rounded-[5px] px-[1.5rem] py-[1.5rem]" ref={viewref}>
            <h1 className="font-[600] text-[1.25rem]">
              {moduleDetails[0].subject}
            </h1>
            <p className="font-[400] text-[1rem]">
              {
                moduleDetails.find(
                  (mod) => mod.lesson_number === current && mod
                ).topic
              }
            </p>
          </div>
            }
    <div className="flex  pb-[3.75rem] font-lato gap-[2rem]">
      {/* drop money */}
      {moduleDetails.length > 0 && (
        <div className="mt-[16px]">
        

          {moduleDetails.find((mod) => mod.lesson_number === current && mod)
            .video && (
            <Video
            moduleDetails = {moduleDetails}
            vidoeRef={vidoeRef}
            current={current}  
            />
          )}
          {
            <div className="md:w-[640px] font-lato bg-[#FFFFFF] md:bg-inherit py-[16px] px-[24px] leading-[28.8px]">
              {
                moduleDetails.find(
                  (mod) => mod.lesson_number === current && mod
                ).lesson
              }
            </div>
          }
          <div className="lg:hidden flex w-full justify-between mt-[16px]">
            <button className="text-[#232323] leading-[25px] font-[600] font-lato "  onClick={() =>
                changeCurrentModule(
                  current !== 1 ?
                  moduleDetails.find(
                    (mod) => mod.lesson_number === current && mod
                  ).lesson_number - 1
                  : modules.length
                )
              }>
              Back
            </button>
            <button
              className="text-[#232323] leading-[25px] font-[600] font-lato"
              onClick={() =>{
                changeCurrentModule(
                  current !== modules.length ?
                  moduleDetails.find(
                    (mod) => mod.lesson_number === current && mod
                  ).lesson_number + 1
                  : 1
                )
              }
            }
            >
              Next
            </button>
          </div>
        </div>
      )}

      {moduleDetails.length > 0 && (
        <div className="hidden lg:flex flex-col gap-[1.5rem] px-[2.25rem] pb-[3.9375rem] bg-[#EFE7F4] w-[30%] text-[#4A4A4A] pt-[2.375rem] ">
          <div className="flex flex-col gap-[3.75rem] font-lato font-[500] text-[1rem] items-start">
            <div className="flex justify-start gap-[8px] items-center w-full ">
              {/* <GoDotFill /> */}
              <div className="text-left font-[500] font-lato leading-[25.6px]">
                MODULES IN THIS COURSE
              </div>
              <div>
                <RiLoader4Fill size={24} color="#5A0C91" />
              </div>
            </div>
            {RefactoredModules
              .sort((a, b) => a.id - b.id)
              .map((mod) => (
                <Module
                current = {current}
                  changeCurrentModule={changeCurrentModule}
                  title={mod.title}
                  id={mod.id}
                  level={mod.level?mod.level:null}
                />
              ))}
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default CourseDetails;

const Module = ({ changeCurrentModule, title, id, level, current }) => {
  const dispatch = useDispatch()
  const [Completed, setCompleted] = useState(false);
  const navigate = useNavigate()
  console.log(id)
  const param = useParams()
  const checkForCompleted = () => {
    instance
      .get(`/services/check-completion/${id}`, tokenConfig())
      .then((res) => {
        setCompleted(res.data.completed);
      });
  };
  useEffect(() => {
    if(id !== undefined){
    checkForCompleted()
    }
  }, []);

  const handleGotoQuiz = () => {
    dispatch(swictchUserCourseUrl(param.id))
    navigate(`/quizzes/${level}`)
  }
  

  console.log(param.id)
  return (
    <div className="w-full flex flex-col items-center h-[20px] ">
      <div className="flex gap-[8px] items-center w-full  text-[#5A0C91] h-full">
        <div className='relative after:content-[""] after:text-[#D9D9D9] after:absolute after:w-[2px] after:h-12 after:bg-[#D9D9D9] after:left-[6.5px] after:top-5'>
          {Completed == true ? (
            <IoCheckmarkSharp
              size={24}
              // color="#D9D9D9"
              color="#5A0C91"
              width={24}
              height={24}
            />
          ) : current == id ? (
            <GoDotFill 
            color="#5A0C91"
            />
          ): <GoDotFill 
          color="#D9D9D9"
          />}
        </div>
        {/* <GoDotFill size={24} color='#5A0C91'/> */}
        <button
          onClick={() => id !== undefined ? changeCurrentModule(id):handleGotoQuiz()}
          className=" text-left w-full flex-1"
        >
          {title}
        </button>
      </div>
    </div>
  );
};
