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
      console.log(index_of_completed)
      const indexes_not_allowed = [2, 4]
      if(indexes_not_allowed.includes(index_of_completed) == false) {
        setCurrent(details[index_of_completed + 1].id)
      }
      
      else {
        if(completed_CourseQuiz == true){
          setCurrent(details[index_of_completed + 1].id)
        }
        else {
          setCurrent(details[index_of_completed].id)
        }
      }
    }


    const get_modules = () => {
        setLoading(true)
        // console.log("working");
        instance
          .get(`services/study_all/${param.id}`, tokenConfig())
          .then((res) => {
            let myModules = res.data.data.map(
              (module) =>
                module.id && { title: module.topic, id: module.id, completed: module.completed }
            )
            // myModules.splice(3, 0, {level:1, title: "POP Quiz",  current:current})
            // myModules.splice(6, 0, {level:2, title: "POP Quiz", current:current})
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
              console.log(prevMod, index_of_the_clicked_module)
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
          let  module_three;
          // let 
          // for(let i=0; i < details.length; i ++){
          //   if(details[i].completed == true){
          //     last_item = details[i]
          //   }
          // }
      }

      useEffect(() => {
        console.log(completed_CourseQuiz, "completed_CourseQuiz")
        if(modules.length > 0){
        if(completed_CourseQuiz  === true){
          console.log("finie")
          let last_item;

          for(let i=0; i < modules.length; i ++){
            if(modules[i].completed == true){
              last_item = modules[i]
            }
          }
      // find the index in order to set is to identify the next one after it
          const index_of_completed = modules.findIndex((item) => item.id == last_item.id)
          console.log(modules, "index_of_completed")
          dispatch(swicthFinishedCourseQuiz())
          let NewModules = modules.map((item) => item.id == modules[index_of_completed + 1]? {...item, completed: true}: {...item})
          setModules(NewModules)
          setCurrent(modules[index_of_completed + 1].id) 
        }

      }
      }, [modules])

      useEffect(() => {
        get_modules();
      }, []);

      const Update_Module_Completed = (id) => {
        setModules(modules.map((mod) => mod.id == id ? {...mod, completed: true}:{...mod}))
      }

      const RefactoredModules = [...modules]
      RefactoredModules.splice(3, 0, {level:1, title: "POP Quiz",  current:current})
      RefactoredModules.splice(6, 0, {level:2, title: "POP Quiz", current:current})

    // console.log( modules.find(
    //     (mod) => mod.id === current && mod
    //   ))
    //   console.log(current, modules)
    return(loading ? <MoonLoader /> :
        <div className="px-[2.06rem]">
            <div className="bg-[#FFFFFF] md:bg-inherit rounded-[5px] px-[1.5rem] py-[1.5rem]">
            {/* <h1 className="font-[600] text-[1.25rem]">
              {modules[0].title}
            </h1> */}
            <p className="font-[400] text-[1rem]">
              {
                modules.find(
                  (mod) => mod.id === current && mod
                ).title
              }
            </p>
          </div>
          <div className="flex  pb-[3.75rem] font-lato gap-[2rem]">
            <div className="mt-[16px]">
              <ModuleDetail id={current}/>
              <div className="lg:hidden flex w-full justify-between mt-[16px]">
            <button className="text-[#232323] leading-[25px] font-[600] font-lato " 
              >
              Back
            </button>
            <button
              className="text-[#232323] leading-[25px] font-[600] font-lato"
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
                <RiLoader4Fill size={24} color="#5A0C91" />
              </div>
            </div>
            {RefactoredModules
              .sort((a, b) => a.id - b.id)
              .map((mod) => (
                <Module
                Update_Module_Completed={Update_Module_Completed}
                current = {current}
                completed={mod.completed}
                  changeCurrentModule={changeCurrentModule}
                  title={mod.title}
                  id={mod.id}
                  level={mod.level?mod.level:null}
                />
              ))}
          </div>
        </div>


          </div>

        </div>
    )
}






const Module = ({ changeCurrentModule, title, id, level, current, completed, Update_Module_Completed }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // console.log(id)
    const param = useParams()
    console.log(completed)
    const handleGotoQuiz = () => {
      dispatch(swictchUserCourseUrl(param.id))
      navigate(`/quizzes/${level}`)
    }

    const HandleClick = (val) => {
      if(id !== undefined) {
        changeCurrentModule(id)
        Update_Module_Completed(id)
      }
      else {
        handleGotoQuiz()
      }
    }

    
    // console.log(Completed)
  
    // console.log(param.id)
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
            {title}
          </button>
        </div>
      </div>
    );
  };
  

  export default CourseDetails