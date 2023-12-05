import React from 'react'
import { useEffect, useRef } from 'react'
const Video = ({vidoeRef, moduleDetails, current}) => {

    // useEffect(() => {
    //     const video = vidoeRef.current
    //       const handleTimeUpdate = () => {
    //         if(video.currentTime >- 30){
    //           console.log("working");
    //       if(vidoeRef.current !== null){
    //           video.removeEventListener('timeupdate', handleTimeUpdate)
    //       }
    //         }
    //       }
    //       if(vidoeRef.current !== null){
    //       video.addEventListener('timeupdate', handleTimeUpdate)
    //       }
    //       return () => {
    //       if(vidoeRef.current !== null){
    //         video.removeEventListener('timeupdate', handleTimeUpdate);
    //       }
    //       }
    //       console.log(video, "video")
    //   }, [current])


  return (
    <video
    ref={vidoeRef}
      width={640}
      height={360}
      controls
      src={
        moduleDetails.find(
          (mod) => mod.lesson_number === current && mod
        ).video !== "null"
          ? moduleDetails.find(
              (mod) => mod.lesson_number === current && mod
            ).video
          : ""
      }
    ></video>
  )
}

export default Video