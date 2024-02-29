import { useEffect, useState } from "react"
import Subpart from "./parts";

export default function Mainpage({category}) {

    
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=b8542efe972446299c472baf4a4a73a1`;
        fetch(url).then(response => response.json()).then(data => setArticles(data.articles))
    }, [category])
    return (
        <div>
            {articles.map((news,index) =>{
                return <Subpart key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
            })}
        </div>
    )
}