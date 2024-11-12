import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './NewsCard.css'

const NewsPreview = ()=>{

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

    return(
      
    <div className="newsPreviewCard">
    <h3>{newsArticles[0]}</h3>
    <p>{newsArticles[1]}</p>
    <Link to="/news">more...</Link>
      </div>
 
    )
    
}

export default NewsPreview    