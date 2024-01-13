import { IoCheckmarkSharp } from "react-icons/io5";
import { useState, useEffect } from "react";
import { tokenConfig } from "../../../../Config/Config";
import { swictchUserCourseUrl } from "../../../../store/reducers/billing";
import instance from "../../../../axios";
import { GoDotFill } from "react-icons/go";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ModuleDetail from "./components/ModuleDetail";
import { MoonLoader, SyncLoader } from "react-spinners";
import { RiLoader4Fill } from "react-icons/ri";
import { useLocation } from "react-router-dom";
import { swicthFinishedCourseQuiz } from "../../../../store/reducers/Quizzes";
import CircularProgressBar from "../../../ui/CircularProgressBar";
import CourseCompletionModal from "./CourseCompletionModal";
const CourseDetails = () => {
  const [coursePercentage, setCoursePercentage] = useState(100)
  const [modal, setShowModal] = useState(false)
  const [overlay, setShowOverlay] = useState(false)
  const navigate = useNavigate()
  const param = useParams();
  const getCoursePercentage = () => {
      //("getting")
        instance.get('/user_courses/courses_enrolled/', tokenConfig())
        .then((res) => {
          setCoursePercentage(res.data.courses_with_progress.find(cou => cou.course_id == param.id).completion_percentage)
        })
        .catch((err) => {
          //(err, "error")
        })
      }
  const dispatch = useDispatch()
  const loc = useLocation()
  const completed_CourseQuiz = useSelector((state) => state.quizzes.finished_Course_quiz)
    // const viewref = useRef(null);
    const [loading, setLoading] = useState(true)
    // const loc = useLocation()
    // const vidoeRef = useRef(null)
    const [modules, setModules] = useState([]);
    const [current, setCurrent] = useState(1);
  const CheckIfUserHasCompletedCourse = (details) => {
    // console.log(details, "det")
    let Completed = true
    for(let i=0; i < details.length; i ++){
      if(details[i].completed == false){
        console.log(details[i].completed)
          Completed = false
      }
    }
    return Completed
  }


    const setCurrentDetails = (details) => {
      let last_item;
      for(let i=0; i < details.length; i ++){
        if(details[i].completed == true){
          last_item = details[i]
        }
      }
      //(CheckIfUserHasCompletedCourse(details))
     
      const index_of_completed = details.findIndex((item) => item.id == last_item.id)
      setCurrent(details[index_of_completed + 1].id)
    }
  


    const get_modules = () => {
        setLoading(true)
        // //("working");
        instance
          .get(`services/study_all/${param.id}`, tokenConfig())
          .then((res) => {
            let myModules = res.data.data.map(
              (module) =>
                module.id && { title: module.topic, id: module.id, completed: module.completed, lesson_number: module.lesson_number}
            )
            setModules(myModules)
            setCurrent(res.data.data[0].id)
            setCurrentDetails(myModules)
            
            setLoading(false)
          })
          .catch((err) => {
            setLoading(false)
            // //(err);
          });
      };

      const changeCurrentModule = (id) => {
          if(id !== modules[0].id) {
              const index_of_the_clicked_module = modules.findIndex((item) => item.id == id)
              const prevMod = modules.find((item) => item.id === modules[index_of_the_clicked_module - 1].id)
              // //(prevMod, index_of_the_clicked_module)
              if(prevMod.completed == true){
                setCurrent(id)
              }
              else{
                //("rubbish")
              }
          }
          else {
            setCurrent(id)
          }
      }
      const changeCurrentModuleMob = (next) => {
        
        if(next === true){
            // const index_of_current_modules = modules.indexOf((mod) => mod.id == current)
            const index_of_current_modules = modules.findIndex((item) => item.id == current)
          console.log(index_of_current_modules)
            //(current, modules)
            //(index_of_current_modules)
            const nextModule = modules.find((mod) => mod.id == modules[index_of_current_modules + 1].id)
            if(index_of_current_modules !== 0) {
              if(nextModule.title == "Pop Quiz" || nextModule.title == "Final POP QUIZ" || nextModule.title == "Literaure Questions"){
              dispatch(swictchUserCourseUrl(param.id))
                navigate(`/quizzes/${nextModule.lesson_number}/${nextModule.id}/${param.id}`)
              }
              else{
                setCurrent(nextModule.id)
              }
            }   
        }
        else {
          const index_of_current_modules = modules.findIndex((item) => item.id == current)
          console.log(index_of_current_modules)
          const prevModule = modules.find((mod) => mod.id == modules[index_of_current_modules - 1].id)
          console.log(prevModule.title, "title")
          if(index_of_current_modules !== 0) {
            if(prevModule.title == "Pop Quiz" || prevModule.title == "Final POP QUIZ" || prevModule.title == "Literaure Questions"){
              navigate(`/quizzes/${prevModule.lesson_number}/${prevModule.id}/${param.id}`)
              dispatch(swictchUserCourseUrl(param.id))
            }
            else{
              setCurrent(prevModule.id)
            }
        }
      }
    }
      const update_Module_completed = (id) => {
        const newModules = modules.map(( mod) => mod.id == id ? {...mod, completed:true}:{...mod})
        setModules(newModules)
      }

      useEffect(() => {
        get_modules();
      }, []);
      useEffect(() => {
        if(modules.length > 0){
          if(CheckIfUserHasCompletedCourse(modules) === true){
            console.log("CheckIfUserHasCompletedCourse(modules)")
            setShowOverlay(true)
            setShowModal(true)
            }
        }
        getCoursePercentage()
      }, [current])

      const ClearInterface = () => {
        setShowOverlay(false)
        setShowModal(false)
      }
    return(loading ? <MoonLoader /> : (modules.find(mod => mod.id == current).title == "Pop Quiz" || modules.find(mod => mod.id == current).title == "Literaure Questions" || modules.find(mod => mod.id == current).title == "Final POP QUIZ")? navigate(`/quizzes/${modules.find(mod => mod.id == current).lesson_number}/${modules.find(mod => mod.id == current).id}/${param.id}`) :
        <Wrapper overlay={overlay}
        >
         {modal && <CourseCompletionModal id={param.id} ClearInterface={ClearInterface}/>}
          <div className="px-[2.06rem]">
            <div className="bg-[#FFFFFF] md:bg-inherit rounded-[5px] px-[1.5rem] py-[1.5rem]">
            <h1 className="font-[600] text-[1.25rem]">
              {modules[0].title}
            </h1>
           { loading? "" : <p className="font-[400] text-[1rem] flex   flex-col gap-[8px]">
              <div className="text-[32px] font-lato font-bold">
              {
                modules.find(
                  (mod) => mod.id == current && mod
                ).title.split("(")[1].replace(")", "")
              }
              </div>
              <div className="text-[#888] text-[20px]">
              {
                modules.find(
                  (mod) => mod.id === current && mod
                ).title.split("(")[0]
              }
              </div>
              
            </p>
}
          </div>
          <div className="flex  pb-[3.75rem] font-lato gap-[2rem]">
            <div className="mt-[16px]">
             {loading ? "": <ModuleDetail id={current} update_Module_completed={update_Module_completed}/>}
              <div className="lg:hidden flex w-full justify-between mt-[16px]">
            <button className="text-[#232323] leading-[25px] font-[600] font-lato"
            onClick={changeCurrentModuleMob}
              >
              Back
            </button>
            <button
              className="text-[#232323] leading-[25px] font-[600] font-lato"
            onClick={() => changeCurrentModuleMob(true)}
            >
              Next
            </button>
          </div>
            </div>
            <div className="hidden lg:flex flex-col gap-[1.5rem] px-[2.25rem] pb-[3.9375rem] 
            bg-[#EFE7F4]
             w-[30%] text-[#4A4A4A] pt-[2.375rem] ">
          <div className="flex flex-col gap-[3.75rem] font-lato font-[500] text-[1rem] items-start">
            <div className="flex justify-start gap-[8px] items-center w-full ">
              {/* <GoDotFill /> */}
              <div className="text-left font-[500] font-lato leading-[25.6px]">
                MODULES IN THIS COURSE
              </div>
              <div className='w-6'>
              <CircularProgressBar score={coursePercentage}/>
              </div>
            </div>
            {modules
              .sort((a, b) => a.id - b.id)
              .map((mod) => (
                <Module
                update_Module_completed={update_Module_completed}
                current = {current}
                completed={mod.completed}
                  changeCurrentModule={changeCurrentModule}
                  title={mod.title}
                  id={mod.id}
                  lesson_number={mod.lesson_number}
                  level={mod.level?mod.level:null}
                  course_id={param.id}
                />
              ))}
          </div>
        </div>
          </div>
        </div>
        </Wrapper>
    )
}







  

export default CourseDetails



const Module = ({ changeCurrentModule, title, id, level, current, completed,update_Module_completed, lesson_number,course_id }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // //(lesson_number)
    const param = useParams()
    // //(completed)
    const handleGotoQuiz = () => {
      dispatch(swictchUserCourseUrl(param.id))
      navigate(`/quizzes/${lesson_number}/${id}/${course_id}`)
    }

    const HandleClick = () => {
      //(title, "title")
      if(title == "Pop Quiz" || title == "Literaure Questions" || title == "Final POP QUIZ") {
        handleGotoQuiz()
        // Update_Module_Completed(id)
      }
      else {
        changeCurrentModule(id)
      }
    }
    return (
      <div className="w-full flex flex-col items-center h-[20px] ">
        <div className="flex gap-[8px] items-center w-full  text-[#5A0C91] h-full">
          <div className='relative after:content-[""] after:text-[#D9D9D9] after:absolute after:w-[2px] after:h-12 after:bg-[#D9D9D9] after:left-[6.5px] after:top-5'>
            {completed === true && current != id ? (
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
            // onClick={() => id !== undefined ? changeCurrentModule(id):handleGotoQuiz()}
            onClick={HandleClick}
            className=" text-left w-full flex-1"
          >
            {title.split("(").length > 1 ? title.split("(")[1].replace(")", ""):title.split("(")[0]}
          </button>
        </div>
      </div>
    );
  }












  export const Wrapper = ({ overlay, children }) => {
    return (
      <>
        <Overlay show={overlay} />
        {children}
      </>
    );
  };
  export const Overlay = ({ onclick, show }) => {
    //(show, "show");
    return (
      show && (
        <div
          className="bg-black opacity-[0.7] left-0 fixed w-full h-full top-0 z-10"
          onClick={onclick}
        ></div>
      )
    );
  };
  






  