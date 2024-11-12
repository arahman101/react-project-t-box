import React, { useState } from 'react';
import './PhotosCard.css';
import { Link } from 'react-router-dom';
import plus_btn from '../Assets/Plus_button.png';


export const PhotosCard = () => {
  const [image, setImage] = useState();
  localStorage.setItem("Uploadimage",image);

  const imageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      let url = URL.createObjectURL(file);
      setImage(url);
      
    } else {
      setImage(null);
    }
  };
  
  return (
    <div className="photosCard">
      <div className='title'><h1>Photos</h1></div>
      <div className='photosGrid'>
        <label htmlFor="inputPhoto" className="upload-label">	
                   {image ? (
                       <img src={image} width={220} height={220} alt="Uploaded Preview" />
                    ) : (
                        <img src={plus_btn} alt="Upload" width={220} height={220} />
                    )}
                    <input
                        type='file'
                        accept='image/*'
                        id='inputPhoto'
                        className='inputPhoto'
                        onChange={imageUpload}
                        hidden
                    />
                </label>
                
      
                <Link to="/dashboard">back</Link>
      </div>
  </div>
  )
}

export default PhotosCard;

{/* MOST RECENT ATTEMPT, NOT ABLE TO FINISH IN TIME
  import React, { useState } from 'react';
import './PhotosCard.css';
import { Link } from 'react-router-dom';
import plus_btn from '../Assets/Plus_button.png';

function PhotosCard() {
  const [image, setImage] = useState([]);
  const [newImage, setNewImage] = useState([]);

  const imageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      let url = URL.createObjectURL(file);
      setImage(f=>[...f,url])
      
    } else {
      setImage(null);
    }
  };

  return (
    <div className="photosCard">
      <div className='title'><h1>Photos</h1></div>
      <div className='photosGrid'>
        {image.map((image,index)=>{
          <div key={index}>
          <img
            src={image}
            width={220} height={220}
          />
                    <input
                        type='file'
                        accept='image/*'
                        id='inputPhoto'
                        className='inputPhoto'
                        onChange={imageUpload}
                        
                    />

        </div>
                    })}
                
      
                <Link to="/dashboard">back</Link>
      </div>
  </div>
  );

  }


export default PhotosCard;
  */}
