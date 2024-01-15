import React from 'react'
import { useEffect, useRef, useState } from 'react'
import ReactPlayer from 'react-player'
import instance from '../../../../../axios';
import { tokenConfig } from '../../../../../Config/Config';
const Video = ({url, id, update_Module_completed}) => {
  const vidoeRef = useRef(null)
  const [played, setPlayed] = useState(0);
  const initialRender = useRef(true)
  const [don , setDone] = useState(false)
  const sendRequest = () => {
    instance.post('/services/completed/', {completed: true, lesson:id,} ,tokenConfig())
    .then((res) => {
      setDone(true)
      console.log("completing")
      // Update_Module_Completed(id)
      update_Module_completed(id)
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
    }
    }
    else{
      initialRender.current = false
    }
  }

  initialRender.current = false
  }, [played])
  return (
    <div className= 'w-[100%] md:w-[640px]'>
    <ReactPlayer
    ref={vidoeRef}
    onProgress={(progress) => setPlayed(progress.playedSeconds)}
    // style={{width: "10%"}}
    width='100%'
    height='100%'

    // height={360}
    controls
    url={url}
    />
    </div>
  )
}

export default Video