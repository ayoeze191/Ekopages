import React, {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'
import { details } from '../News'
import SingleNews from '../SingleNews'
import instance from '../../../axios'
import { ClipLoader } from 'react-spinners'


const Otherinteresting = () => {
  const [loading, setLoading] = useState(false)
  const [news, setNews] = useState([])

const get_news =  () => {
  setLoading(true)
  instance.get('news/news_list/')
  .then((res) => {
      setNews(res.data.data)
      setLoading(false)
  })
  .catch((err) => {
      console.log(err)
      setNews([])
      setLoading(false)
  })
}
  
  
useEffect(() => {
  get_news()
}, [])
return (
  <div className='section flex flex-col gap-[6rem]'>
      {loading?
      <ClipLoader color='#5A0C91' style={{ margin: 'auto', fontStyle:"bold"}}/>:
      news.map.length > 0 ?
      news.map((eachNews) => <SingleNews {...eachNews}/>):
      "No News Yet"}
  </div>
)
}

export default Otherinteresting
