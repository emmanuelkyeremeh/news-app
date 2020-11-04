import React,{useState,useEffect} from 'react'
import NewsItem from './NewsItem'
import Loading from "./Loading"


const Home = () => {
    const [news,setNews] = useState();
    useEffect(() => {
      document.title = "Headlines | News App"
    },[])
    useEffect (() => {
       fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=e24b7ef4a5184db1b14d4dfea7a70cd1')
       .then(res => res.json())
      .then(data => setNews(data))
    },[])
    
    return (
        <div>
            <h1 class="headline">Headlines</h1>
            { news ? news.articles.map((article) => (
               
                <NewsItem
                title={article.title}
                urlToImage={article.urlToImage}
                author= {article.author}
                description={article.description}
                url={article.url}
                content={article.content}
                name={article.source.name}
                publishedAt={article.publishedAt}
                />
            )) : <Loading/>  }
        </div>
    )
}

export default Home
