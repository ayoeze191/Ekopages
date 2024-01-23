import React, {useEffect} from 'react'
import EkoStoreCOntainer from '../../components/EkoStore/EkoStoreCOntainer'
const EkoStoreContainer = () => {
  const loc = window.location

  useEffect(() => {
      window.scrollTo(0, 0);

  }, [ loc]);
  return (

    <EkoStoreCOntainer />
  )
}

export default EkoStoreContainer