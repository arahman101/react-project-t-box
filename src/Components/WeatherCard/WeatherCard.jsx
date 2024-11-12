import React, { useState, useEffect } from 'react';
import './WeatherCard.css';
import cloud_icon from '../Assets/Clouds_icon.png'
import rain_icon from '../Assets/Rain_icon.png'
import sun_icon from '../Assets/Sun_icon.png'
import axios from 'axios'

const url = "https://api.openweathermap.org/data/2.5/weather?"

const WeatherCard = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [responseData, setResponseData] = useState({});
  const allIcons ={
    "01d": sun_icon,
    "01n": sun_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": rain_icon,
    "04n": rain_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
  }
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  
  
    if (latitude && longitude) {
      axios.get(`${url}lat=${latitude}&lon=${longitude}&units=metric&appid=d0a10211ea3d36b0a6423a104782130e`)
        .then((response) => {
          setResponseData(response.data);
        })
    }
  }, [latitude, longitude]); 

  return (
    <div className="weather-card">
      <div className='weather-condition'>
        {responseData.weather && responseData.weather.length > 0 ? (
          <img src={allIcons[responseData.weather[0].icon]} />
        ) : (
          <></>
        )}
      </div>
      <div className='temperature'>
        <h3>{responseData.main && responseData.main.temp ? (
            `${Math.round(responseData.main.temp)}°C` 
          ) : (
              <></>
          )}</h3>
      </div>
      <div className='location'>
        <p>{responseData.name}</p>
      </div>
    </div>
  );
};

export default WeatherCard;