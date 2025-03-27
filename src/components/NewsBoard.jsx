import { useEffect, useState } from "react"
import NewsItem from "./NewsItem"

const NewsBoard = ({category}) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setArticles(data.articles || [])
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching news data:', error)
        setLoading(false)
      })
  }, [category]) 

  return (
    <div className="container">
      <h2 className="text-center my-4">Latest <span className="badge bg-danger fs-4">NEWS</span></h2>
      {loading ? (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {articles.map((news, index) => (
            news.urlToImage && (
              <div key={index} className="col">
                <NewsItem 
                  title={news.title} 
                  description={news.description} 
                  url={news.url} 
                  src={news.urlToImage}
                />
              </div>
            )
          ))}
        </div>
      )}
    </div>
  )
}

export default NewsBoard