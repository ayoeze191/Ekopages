import React from 'react'
import { useEffect, useRef, useState } from 'react'
import ReactPlayer from 'react-player'
import instance from '../../../../../axios';
import { tokenConfig } from '../../../../../Config/Config';
const Video = ({vidoeRef, moduleDetails, current}) => {
  const [played, setPlayed] = useState(0);
  const initialRender = useRef(true)
  const [don , setDone] = useState(false)
  const sendRequest = () => {
    instance.get('/services/completed/', {completed: true, lesson:moduleDetails.find(
      (mod) => mod.lesson_number === current && mod
    ).id} ,tokenConfig())
    .then((res) => {
      setDone(true)
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    if(!initialRender.current){
      if(!don){
      if(vidoeRef.current.getDuration() - played <= 20){
        sendRequest()
        console.log("woking")
       
    }
  }
    }
    else{
      initialRender.current = false
    }
    // if(vidoeRef.current.getDuration() - played <= 20){
    //   console.log(vidoeRef.current.getDuration() - played)
    // }
    // console.log(vidoeRef.current.getDuration() - played, "played without cond")
 
  }, [played])
  return (
    <ReactPlayer
    onProgress={(progress) => setPlayed(progress.playedSeconds)}
    ref={vidoeRef}
      width={640}
      height={360}
      controls
      url={
        moduleDetails.find(
          (mod) => mod.lesson_number === current && mod
        ).video !== "null"
          ? moduleDetails.find(
              (mod) => mod.lesson_number === current && mod
            ).video
          : ""
      }
    />
  )
}

export default Video