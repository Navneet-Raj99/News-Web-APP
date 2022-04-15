import React from 'react'
import './Newscard.css'
function Newscard(props) {
  return (
    <div id="news">
        <h1><div id="publishedat">{props.source}</div></h1>
      <h3><div id="title">{props.title}</div></h3>
      <div id="image">
          <img id="news_image" src={props.image==null?"https://cdn3.vectorstock.com/i/1000x1000/37/07/not-available-sign-or-stamp-vector-22523707.jpg":props.image}/>
      </div>
      <div id="author">{props.author}</div>
      <div id="description">{props.description==null?"No Information is there":props.description}</div>
      <div id="url"><a href={props.url} target="_blank">Read More.!!</a></div>
    </div>
  )
}

export default Newscard
