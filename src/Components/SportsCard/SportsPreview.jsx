import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './SportsCard.css';
import Parser from 'papaparse';
import Data from './I1.csv';


const SportsPreview = () => {

    const [data,setData] = useState([]);
  

  useEffect(()=>{
    const fetchData = async ()=>{ //async allows component to continue rendering without blocking the main thread meaning the componet can continue rendering while the component is being fetched
        const response = await fetch(Data);
        const reader = response.body.getReader();
        const result = await reader.read();
        const decoder = new TextDecoder("utf-8");
        const csvData = decoder.decode(result.value);
        const parsedData = Parser.parse(csvData,{
          header: true,
          skipEmptyLines: true
        }).data;
        setData(parsedData);

    };
    fetchData();
  },[]);


  return (
    <div className="sportsPreviewCard">
      {data.slice(0,1).map((row) => (
        <div key={row.id}>
          <h2>{row.HomeTeam} vs {row.AwayTeam}</h2>
          <p>Score: {row.FTHG} - {row.FTAG}</p>
          <Link to="/sports">more...</Link>
        </div>
      ))}
    </div>
  );
};

export default SportsPreview;