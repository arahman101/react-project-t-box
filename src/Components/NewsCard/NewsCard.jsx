import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './NewsCard.css'
import axios from 'axios'

export const NewsCard = () => {
  const [newsArticles, setNewsArticles] = useState([]);

  const getArticles = async ()=>{
    try{
      const res = await axios.get("http://localhost:4000/");
      setNewsArticles(res.data)
    } catch(error){
      console.log(error);
    
    };
    
  }

  useEffect(()=>{
    getArticles();
  },[])
  
  return (
    <div className="newsCard">
      <div className='header'>
      
        <h2>News</h2>
      </div>
      <div className='newsImage'>
        <img src={newsArticles[2]}/>
      </div>
      <div className='headline'>
      <h3>{newsArticles[0]}</h3>
      </div>
      <div className='subtext'>
      <p>{newsArticles[1]}</p>
      <Link to="/dashboard">back</Link>
    </div>
    </div>
  )
}

export default NewsCard;