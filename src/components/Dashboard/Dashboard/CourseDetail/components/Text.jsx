import React, { useEffect, useState } from 'react'
import instance from '../../../../../axios'
import { tokenConfig } from '../../../../../Config/Config'
const Text = ({children, id, update_Module_completed}) => {
    const [timer, setTimer] = useState(10)
    const [completed, setCompleted] = useState(false)
    useEffect(() => {
        const interval = setInterval(() => {
          setTimer((prevSeconds) => prevSeconds - 1);
        }, 1000);
        // Cleanup function to clear the interval when the component is unmounted
        return () => clearInterval(interval);
      }, []);
      
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
    <div className="md:w-[640px] font-lato bg-[#FFFFFF] md:bg-inherit py-[16px] px-[24px] leading-[28.8px]">
    {/* <h1 className='font-latomedium text-6xl'>{timer} </h1> */}

    {children}
  </div>
  )
}

export default Text