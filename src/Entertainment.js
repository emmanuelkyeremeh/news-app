import React,{useState,useEffect} from 'react'
import Loading from './Loading'
import NewsItem from "./NewsItem"

const Entertainment = () => {
    const [entertainment,setEntertainment] = useState()
    useEffect(() => {
        document.title="Entertainment | News"
    },[])
    useEffect(() => {
      fetch('https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=e24b7ef4a5184db1b14d4dfea7a70cd1')
      .then(res => res.json())
      .then(data => setEntertainment(data))
    },[])
    return (
        <div>
             <h1 class="headline">Entertainment News</h1>

            {entertainment ? entertainment.articles.map((entertain) => (
                <NewsItem
                title={entertain.title}
                urlToImage={entertain.urlToImage}
                author= {entertain.author}
                description={entertain.description}
                url={entertain.url}
                content={entertain.content}
                name={entertain.source.name}
                publishedAt={entertain.publishedAt}
                />
            )): <Loading/>}
        </div>
    )
}

export default Entertainment
