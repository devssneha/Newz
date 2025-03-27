import React from 'react'

const NewsItem = ({title, description, url, src}) => {
  return (
    <div className="card h-100 bg-dark text-light">
      <img 
        src={src} 
        className="card-img-top" 
        alt={title} 
        style={{
          height: '250px', 
          objectFit: 'cover'
        }} 
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title.slice(0, 50)}...</h5>
        <p className="card-text flex-grow-1">
          {description ? description.slice(0, 90) + '...' : 'No description available'}
        </p>
        <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-auto">
          Read more
        </a>
      </div>
    </div>
  )
}

export default NewsItem