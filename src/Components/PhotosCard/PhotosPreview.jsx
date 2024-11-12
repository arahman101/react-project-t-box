import React from "react";
import './PhotosCard.css';
import { Link } from "react-router-dom";

const PhotosPreview = ()=>{
    
    return(
    <div className="photosPreviewCard">
         <img src={localStorage.getItem("Uploadimage") } alt="No picture uploaded" width={220} height={220}/>
        <Link to="/photos">more...</Link>
    </div>
    )
    
}

export default PhotosPreview