import React,{useState,useEffect} from 'react'
import Loading from './Loading';
import NewsItem from "./NewsItem"

const Business = () => {
    const [business,setBusiness] = useState();

    useEffect(() => {
        document.title= "business News | News App"
    }, [])

    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e24b7ef4a5184db1b14d4dfea7a70cd1')
        .then(res => res.json())
        .then(data => setBusiness(data))
    }, [])
    return (
        <div>
             <h1 class="headline">Business News</h1>
            {business ? business.articles.map((businesses) => (
                <NewsItem
                title={businesses.title}
                urlToImage={businesses.urlToImage}
                author= {businesses.author}
                description={businesses.description}
                url={businesses.url}
                content={businesses.content}
                name={businesses.source.name}
                publishedAt={businesses.publishedAt}
                />
            )): <Loading/>}
        </div>
    )
}

export default Business
