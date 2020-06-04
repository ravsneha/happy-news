import React from 'react';
import './css/App.css';

let ArticleCard = (props) => {
    return (
      <div className="article-card">
      <a href={props.url} target="_blank">
        <img src={props.imgsrc} alt={props.title}/>
        <div className="article-info">
          <h3 className="article-title">{props.title}</h3>
          <p className="article-desc">{props.desc}</p>
        </div>
        </a>
        </div>
    );
}



export default ArticleCard;
