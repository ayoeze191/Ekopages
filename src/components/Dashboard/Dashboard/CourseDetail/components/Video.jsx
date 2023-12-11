import React from 'react'
import { useEffect, useRef, useState } from 'react'
import ReactPlayer from 'react-player'
import instance from '../../../../../axios';
import { tokenConfig } from '../../../../../Config/Config';
const Video = ({vidoeRef, url, id}) => {
  const [played, setPlayed] = useState(0);
  const initialRender = useRef(true)
  const [don , setDone] = useState(false)
  const sendRequest = () => {
    instance.post('/services/completed/', {completed: true, lesson:id} ,tokenConfig())
    .then((res) => {
      setDone(true)
      // Update_Module_Completed(id)
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    if(initialRender.current !== undefined){
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
  }
    // console.log(vidoeRef.current.getDuration() - played, "played without cond")
  }, [played])
  return (
    <ReactPlayer
    ref={vidoeRef}
    onProgress={(progress) => setPlayed(progress.playedSeconds)}
    width={640}
    height={360}
    controls
    url={url}
    />
  )
}

export default Video