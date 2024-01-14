import React from 'react'
import './Skeleton.css'
const SkeletonsElement = ({type}) => {
    const classes = `skeleton ${type}`
  return (
    <div className={classes}></div>
  )
}

export default SkeletonsElement