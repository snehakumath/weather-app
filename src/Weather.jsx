import React, { useState } from 'react'
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import './weather.css';

export default function Weather() {
    let [weatherInfo,setWeatherInfo]=useState( {
        city: "Delhi",
        feelslike: 24.84,
        temp: 25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity: 47,
        weather: "haze",
    })

    let updateInfo=(newInfo)=>{
         setWeatherInfo(newInfo);
    }
  return (
    <div style={{textAlign: "center"}}>
      <h2 className='header'>SkyWatch</h2>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo}/>
    </div>
  )
}

