import React, { useState } from 'react';
import './PhotosCard.css';
import { Link } from 'react-router-dom';
import plus_btn from '../Assets/Plus_button.png';


export const PhotosCard = () => {
  const [images, setImages] = useState([]);
  

  const imageUpload = (event) => {
    const file = event.target.files[0]; // gets image path
    if (file) {
      setImages(prevImages=>{
        return [...prevImages,URL.createObjectURL(file)]
      });
      
    } 
  };


  const handleChange = (event, index) => {
    const file = event.target.files[0];
    if (file) {
      setImages(prevImages => {
        const newArr = [...prevImages];
        newArr[index] = URL.createObjectURL(file);
        return newArr;
      });
    }
  };
  
  return (
    <div className="photosCard">
      <div className='title'><h1>Photos</h1></div>
      <div className="photosGrid">
        <label className="upload-button">
          <img src={plus_btn} alt="Add photo" />
          <input
            type="file"
            accept="image/*"
            onChange={imageUpload}
            style={{ display: 'none' }}
          />
        </label>

        {images.map((image, index) => (
          <label key={index} className="image-container">
            <img src={image} width={220} height={220} alt={`Upload ${index + 1}`} />
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleChange(e, index)}
              hidden
            />
          </label>
        ))}
                <Link to="/dashboard">back</Link>
      </div>
  </div>
  )
}

export default PhotosCard;
