import React, { useEffect, useRef, useState } from 'react'
import "./Titlecards.css"
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom'


const Titlecards = ({title, category}) => {

  const[apiData, setApiData] =  useState([])
  
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYzkxMzc0YjE3YmE0NTFhYTNiY2ZmZmY4ZTZkOGVkNiIsIm5iZiI6MTcyOTA0NzUyMi4zMDMzNjksInN1YiI6IjYzY2I3YjI2Y2VlNDgxMDBhNDQ3ODJiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rEu43D3dYot-GVZu-VImlR_Up9cUswHgaOx8TfOb99M'
    }
  };
  
  const handleWhell = (event)=>{
  event.preventDefault();
  cardsRef.current.scrollLeft += event.deltaY;
}

useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(response => response.json())
  .then(response => setApiData(response.results))
  .catch(err => console.error(err));

  cardsRef.current.addEventListener("wheel",handleWhell);
},[])
  
  return (
    <div className='titlecards'>
      <h2>{title ? title: "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
      {apiData.map((card, index)=>
        {
          return <Link to={`/player/${card.id}`} className='card' key={index}>
          <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
          <p>{card.original_title}</p>
         </Link> 
        })}
        </div>
      </div>
  )
}

export default Titlecards