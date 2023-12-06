import React, { useState } from 'react'
import Quizes from './Quizes'
import ReviewQuizes from "./ReviewQuizzes/Quizes"
import { useParams } from 'react-router-dom'
const Index = () => {
    const {review} = useParams()
    const [rev, setRev] = useState(review)
    console.log("reviewing")
  return (
        rev ? <ReviewQuizes /> : <Quizes />
  )
}

export default Index