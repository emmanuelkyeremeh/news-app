import React,{useState,useEffect} from 'react'
import Loading from './Loading'
import NewsItem from "./NewsItem"

const Sports = () => {
    const [sports,setSports] = useState()

    useEffect(()=> {
       document.title="Sports | News App"
    },[])
    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=e24b7ef4a5184db1b14d4dfea7a70cd1')
        .then(res => res.json())
        .then(data => setSports(data))
    },[])
    return (
        <div>
             <h1 class="headline">Sports News</h1>
            {sports ? sports.articles.map((sport) => (
                <NewsItem
                title={sport.title}
                urlToImage={sport.urlToImage}
                author= {sport.author}
                description={sport.description}
                url={sport.url}
                content={sport.content}
                name={sport.source.name}
                publishedAt={sport.publishedAt}
                />
            )): <Loading/>}
        </div>
    )
}

export default Sports
