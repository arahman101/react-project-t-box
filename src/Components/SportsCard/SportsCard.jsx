import React,{useEffect, useState} from 'react';
import './SportsCard.css';
import Parser from 'papaparse';
import Data from './I1.csv';
import { Link } from 'react-router-dom';

const SportCard = () => {
  const [data,setData] = useState([]);
  const [search, setSearch] = useState('');
  

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
    <div className="sportsCard">
      <div className='header'>
        <h2>Sport</h2>
      </div>
      <div className='searchBar'>
        <input type='text' placeholder='Input team name' className='input' onChange={(e)=> setSearch(e.target.value)} />
      </div>
      <div className='results'>

        {data.filter((row)=>{
          return search.toLowerCase() === '' ? row: row.HomeTeam.toLowerCase().includes(search.toLowerCase()) && row.FTR === 'H';
        }).slice(0,5).map((row)=>(
                 
                  <div>{row.AwayTeam}, Home</div>
                
              ))}

          {data.filter((row)=>{
          return search.toLowerCase() === '' ? row: row.AwayTeam.toLowerCase().includes(search.toLowerCase()) && row.FTR === 'A';
        }).slice(0,5).map((row)=>(
                
                  <div>{row.HomeTeam}, Away</div>
                
              ))}
              <Link to="/dashboard">back</Link>
      </div>
    </div>
  ); 
};

export default SportCard;