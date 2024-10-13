import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}) {
    const HOT_URL="https://images.unsplash.com/photo-1643931043183-7bca5a0a24c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnJpZ2h0JTIwc3VufGVufDB8fDB8fHww";
    const COLD_URL="https://images.unsplash.com/photo-1477468572316-36979010099d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZHxlbnwwfHwwfHx8MA%3D%3D";
    const RAIN_URL="https://media.istockphoto.com/id/1461681027/photo/rain-over-the-green-forest-carpathian-foggy-mountain-hills-rainy-day-in-summer.webp?a=1&b=1&s=612x612&w=0&k=20&c=k3L8D8nxcG3HURD97rlfROS6K8lTi26KBSzPFWmkwAw="
  return (
    <div>
      <div className='card'>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 
          ? RAIN_URL : info.temp < 15 
          ? COLD_URL : HOT_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {info.city} &nbsp;
        {info.humidity > 80 
          ? <ThunderstormIcon/> : info.temp < 15 
          ? <AcUnitIcon/> : <WbSunnyIcon/>}

        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
         <div>Temprature = {info.temp}&deg;C</div>
         <div>Humidity = {info.humidity}</div>
         <p>Min Temp = {info.tempMin}&deg;C</p>
         <p>Max Temp = {info.tempMax}&deg;C</p>
         <p>The weather can be describe as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
    </div>
  )
}


