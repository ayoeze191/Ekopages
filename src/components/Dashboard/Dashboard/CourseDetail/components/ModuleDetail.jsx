import React, { useEffect, useRef, useState } from 'react'
import instance from '../../../../../axios'
import { tokenConfig } from '../../../../../Config/Config'
// import Video from './Video'
import ReactPlayer from 'react-player'
import Video from './Video'
import Text from './Text'
const ModuleDetail = ({id, update_Module_completed}) => {
    // const vidoeRef = useRef(null)
    const [loading, setLoading] = useState(true)
    const [moduelDetails, setmoduleDetails] = useState(null) 


    const get_ModuleDetails = () => {
        setLoading(true)
        instance.get(`/services/study/${id}/`, tokenConfig())
        .then((res) => {
            console.log(res)
            setmoduleDetails(res.data.data)
            setLoading(false)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        get_ModuleDetails()
    }, [id])

    


// console.log(moduelDetails, "MEME")
  return (moduelDetails !== null ?
    <div>
        {moduelDetails.video !== null &&
         <Video
         update_Module_completed={update_Module_completed}
    // onProgress={(progress) => setPlayed(progress.playedSeconds)}
    // ref={vidoeRef}
      width={640}
      height={360}
      controls
      url={moduelDetails.video}
      id={id}
    //   url={
    //     moduleDetails.find(
    //       (mod) => mod.lesson_number === current && mod
    //     ).video !== "null"
    //       ? moduleDetails.find(
    //           (mod) => mod.lesson_number === current && mod
    //         ).video
    //       : ""
    //   }
    />
        }
        {
            moduelDetails.lesson !== null && 
            <Text lesson={moduelDetails.lesson} update_Module_completed={update_Module_completed} id={id} className="md:w-[640px] font-lato bg-[#FFFFFF] md:bg-inherit py-[16px] px-[24px] leading-[28.8px]" />
        }
    </div>
  :<div>No lessons here</div>)
}

export default ModuleDetail