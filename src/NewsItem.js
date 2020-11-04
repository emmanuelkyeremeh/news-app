import React from 'react'

const NewsItem = (props) => {
    return (
        <div className="main-container" style={{maxWidth:"80%",marginLeft:"10%",borderRadius:"25px",marginTop:"3rem"}}>
            <div className="first">
              <img src={props.urlToImage} style={{width:"100%",padding:"30px"}} alt=""/>  
            </div>
            <div className="second">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <p>{props.content}</p>
            <p>From:{props.name}</p>
            <p>{props.publishedAt}</p>
            <a href={props.url}>Read More</a>
            </div>
        </div>
    )
}

export default NewsItem
