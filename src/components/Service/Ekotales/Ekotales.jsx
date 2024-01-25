import React, {useEffect} from 'react'
import Frame246 from "./../../../assets/Service/ekotales/Frame246.png"
import Frame247 from "./../../../assets/Service/ekotales/Frame247.png"
import EkotalesAbout from './EkotalesAbout/EkotalesAbout'
import EkotalesText from './EkotalesText'
import TalesOfTheWeek from "./TalesOfTheWeek/TalesOfTheWeek"

const Ekotales = () => {
  const loc = window.location

  useEffect(() => {
      window.scrollTo(0, 0);
  }, [loc])
  return (
    <div>
        <EkotalesText />
        <EkotalesAbout />
        <TalesOfTheWeek />
    </div>
  )
}

export default Ekotales