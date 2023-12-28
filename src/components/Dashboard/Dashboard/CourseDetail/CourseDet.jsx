import { IoCheckmarkSharp } from "react-icons/io5";
import { useState, useEffect } from "react";
import { tokenConfig } from "../../../../Config/Config";
import { swictchUserCourseUrl } from "../../../../store/reducers/billing";
import instance from "../../../../axios";
import { GoDotFill } from "react-icons/go";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ModuleDetail from "./components/ModuleDetail";
import { MoonLoader } from "react-spinners";
import { RiLoader4Fill } from "react-icons/ri";
import { useLocation } from "react-router-dom";
import { swicthFinishedCourseQuiz } from "../../../../store/reducers/Quizzes";
const CourseDetails = () => {
  const navigate = useNavigate()
  
  const dispatch = useDispatch()
  const loc = useLocation()
  const completed_CourseQuiz = useSelector((state) => state.quizzes.finished_Course_quiz)
    // const viewref = useRef(null);
    const [loading, setLoading] = useState(true)
    const param = useParams();
    // const loc = useLocation()
    // const vidoeRef = useRef(null)
    const [modules, setModules] = useState([]);
    const [current, setCurrent] = useState(1);
    
    const setCurrentDetails = (details) => {
      let last_item;
      for(let i=0; i < details.length; i ++){
        if(details[i].completed == true){
          last_item = details[i]
        }
      }

      // find the index in order to set is to identify the next one after it
      const index_of_completed = details.findIndex((item) => item.id == last_item.id)
      // console.log(index_of_completed)
      setCurrent(details[index_of_completed + 1].id)
      // if(indexes_not_allowed.includes(index_of_completed) == false) {
      //   setCurrent(details[index_of_completed + 1].id)
      // }
        // if(completed_CourseQuiz == true){
        //   
        // }
        
        // else {
        //   setCurrent(details[index_of_completed].id)
        // }
    }
  


    const get_modules = () => {
        setLoading(true)
        // console.log("working");
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
            // console.log(err);
          });
      };

      const changeCurrentModule = (id) => {
          if(id !== modules[0].id) {
              const index_of_the_clicked_module = modules.findIndex((item) => item.id == id)
              const prevMod = modules.find((item) => item.id === modules[index_of_the_clicked_module - 1].id)
              // console.log(prevMod, index_of_the_clicked_module)
              if(prevMod.completed == true){
                setCurrent(id)
              }
              else{
                console.log("rubbish")
              }
          }
          else {
            setCurrent(id)
          }
      }
      const changeCurrentModuleMob = (next) => {
        if(next){
            // const index_of_current_modules = modules.indexOf((mod) => mod.id == current)
            const index_of_current_modules = modules.findIndex((item) => item.id == current)
            console.log(current, modules)
            console.log(index_of_current_modules)
            const nextModule = modules.find((mod) => mod.id == modules[index_of_current_modules + 1].id)
            if(index_of_current_modules !== 0) {
              if(nextModule.title == "Pop Quiz"){
              dispatch(swictchUserCourseUrl(param.id))
                navigate(`/quizzes/${nextModule.lesson_number}/${nextModule.id}/${param.id}`)
              }
              else{
                setCurrent(nextModule.id)
              }
              
            }   
        }
        else {
          const index_of_current_modules = modules.indexOf((mod) => mod.id == current)
          const prevModule = modules.find((mod) => mod.id == modules[index_of_current_modules - 1].id)
          if(index_of_current_modules !== 0) {
            if(prevModule.title == "Pop Quiz"){
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

    return(loading ? "" : modules.find(mod => mod.id == current).title == "Pop Quiz"? navigate(`/quizzes/${modules.find(mod => mod.id == current).lesson_number}/${modules.find(mod => mod.id == current).id}/${param.id}`) :
        <div className="px-[2.06rem]">
            <div className="bg-[#FFFFFF] md:bg-inherit rounded-[5px] px-[1.5rem] py-[1.5rem]">
            {/* <h1 className="font-[600] text-[1.25rem]">
              {modules[0].title}
            </h1> */}
           { loading? "" : <p className="font-[400] text-[1rem] flex   flex-col gap-[8px]">
              <div className="text-[32px] font-lato font-bold">
              {
                modules.find(
                  (mod) => mod.id === current && mod
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
            <div className="hidden lg:flex flex-col gap-[1.5rem] px-[2.25rem] pb-[3.9375rem] bg-[#EFE7F4] w-[30%] text-[#4A4A4A] pt-[2.375rem] ">
          <div className="flex flex-col gap-[3.75rem] font-lato font-[500] text-[1rem] items-start">
            <div className="flex justify-start gap-[8px] items-center w-full ">
              {/* <GoDotFill /> */}
              <div className="text-left font-[500] font-lato leading-[25.6px]">
                MODULES IN THIS COURSE
              </div>
              <div>
              {loading ? <MoonLoader size={24} color="#5A0C91"/> :    ""}
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
    )
}







  

export default CourseDetails



const Module = ({ changeCurrentModule, title, id, level, current, completed,update_Module_completed, lesson_number,course_id }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // console.log(lesson_number)
    const param = useParams()
    // console.log(completed)
    const handleGotoQuiz = () => {
      dispatch(swictchUserCourseUrl(param.id))
      navigate(`/quizzes/${lesson_number}/${id}/${course_id}`)
    }

    const HandleClick = () => {
      console.log(title, "title")
      if(title == "Pop Quiz") {
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
  