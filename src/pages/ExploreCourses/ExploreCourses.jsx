import React, {useEffect} from 'react'
import ExploreCoursesComp from '../../components/ExploreCourses/ExploreCoursesComp'

const ExploreCourses = () => {
  const loc = window.location

  useEffect(() => {
      window.scrollTo(0, 0);

  }, [ loc]);
  return (
    <div>
        <ExploreCoursesComp />
    </div>
  )
}

export default ExploreCourses