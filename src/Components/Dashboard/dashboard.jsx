import React from 'react';
import './dashboard.css';
import WeatherCard from '../WeatherCard/WeatherCard.jsx';
import NewsPreview from '../NewsCard/NewsPreview.jsx';
import SportsPreview from '../SportsCard/SportsPreview.jsx';
import PhotosPreview from '../PhotosCard/PhotosPreview.jsx';
import TasksPreview from '../TasksCard/TasksPreview.jsx';
import ClothesCard from '../ClothesCard/ClothesCard.jsx';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="dashboard">
        <div className="title">
          <h1>Good morning {localStorage.getItem("username")}</h1>
          <p><Link to="/">Log Out</Link></p>
          </div>
      <div className="content-grid">
        <WeatherCard /> 
       <NewsPreview />
      <SportsPreview />
      <PhotosPreview />
      <TasksPreview />
      <ClothesCard />
      </div>
    </div>
  );
};

export default Dashboard;