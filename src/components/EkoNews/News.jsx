import React, { useEffect, useState } from 'react'
// import SDGLiteracydrive from "./../../assets/EkoNews/SDGLiteracydrive.png"
// import Children from "./../../assets/EkoNews/Children.png"
// import Climate from "./../../assets/EkoNews/Climate.png"
// import Scarcity from "./../../assets/EkoNews/Scarcity.png"
// import Gender from "./../../assets/EkoNews/Gender.png"
import SingleNews from './SingleNews'
import instance from '../../axios'
import {ClipLoader} from "react-spinners"
import withErrorHandler from '../withErrHandler'


const News = () => {
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
        news.length > 0 ?
        news.map((eachNews) => <SingleNews {...eachNews}/>):
        <div className='font-Poppins'>
            Sorry No News Yet

        </div>}
    </div>
  )
}

export default withErrorHandler(News, instance)