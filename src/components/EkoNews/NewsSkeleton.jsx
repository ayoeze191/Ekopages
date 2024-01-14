import React from 'react'
import './../../components/ui/skeletons/Skeleton.css'
import SkeletonsElement from '../ui/skeletons/SkeletonsElement'
const NewsSkeleton = () => {
  return (
    <div className='skeleton-wrapper'>
            <div className='skeleton-article '>
              <div>
            <SkeletonsElement type={'title'}/>
            <SkeletonsElement type={'title'}/>
            <SkeletonsElement type={'text'}/>
            </div>
                <div>
                <SkeletonsElement type={'images'}/>
                </div>
            </div>
    </div>
  )
}

export default NewsSkeleton