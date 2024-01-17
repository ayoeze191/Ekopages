import React, { useEffect, useState } from 'react'
import instance from '../../../../../axios'
import { tokenConfig } from '../../../../../Config/Config'
import parse from "html-react-parser"
const Text = ({ id, update_Module_completed, lesson}) => {
    const [timer, setTimer] = useState(1567879)
    const [completed, setCompleted] = useState(false)

    console.log(timer)
    useEffect(() => {
        setTimer(1567878)

        const interval = setInterval(() => {
          if(timer !== 0){
          setTimer((prevSeconds) => prevSeconds - 1);
          }
        }, 1000);
        // Cleanup function to clear the interval when the component is unmounted
        return () => clearInterval(interval);
      }, [lesson]);
      
      // console.log(timer)
      const sendRequest = () => {
        instance.post('/services/completed/', {completed: true, lesson:id} ,tokenConfig())
        .then((res) => {
          update_Module_completed(id)
          // Update_Module_Completed(id)
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
      }

    useEffect(() => {
        if(timer == 0){
            sendRequest()
        }
    }, [timer])

    // console.log(timer)
  return (
    <div className="md:w-[640px] font-lato bg-[#FFFFFF] md:bg-inherit py-[16px] md:px-[24px] leading-[28.8px] flex flex-col gap-6">
    {/* <h1 className='font-latomedium text-6xl'>{timer} </h1> */}
    {/* {lesson.split("<p>").map((p) => <p>{p}</p>)} */}
    {parse(lesson)}
  </div>
  )
}

export default Text