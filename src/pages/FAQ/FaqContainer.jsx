import React, {useEffect} from 'react'
import FAQContainer from '../../components/FAQ/FAQContainer'

const FaqContainer = () => {
  const loc = window.location

  useEffect(() => {
      window.scrollTo(0, 0);

  }, [ loc]);
  return (
    <div>
        <FAQContainer />
    </div>
  )
}

export default FaqContainer