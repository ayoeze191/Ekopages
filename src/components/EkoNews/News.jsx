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
import NewsSkeleton from './NewsSkeleton'


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
        //(err)
        setNews([])
        setLoading(false)
    })
}
    
    
useEffect(() => {
    get_news()
}, [])
  return (
    <div className='section flex flex-col gap-[6rem] md:mb-[95px]'>
        {loading?
        // <ClipLoader color='#5A0C91' size={100} className='mx-auto font-bold'/>
        [1, 2, 3, 4, 5].map((skeleton) => <NewsSkeleton key={skeleton} />)
        :
        news.length > 0 ?
        news.map((eachNews) => <SingleNews {...eachNews}/>):
        <div className='font-Poppins'>
            Sorry No News Yet
        </div>}
        {/* {} */}
    </div>
  )
}

export default withErrorHandler(News, instance)