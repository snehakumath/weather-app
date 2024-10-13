
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const[error,setError]=useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "a368409efcf66771bc4773683c2f2707";

  const getWeatherInfo = async () => {
    try {
      const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);

      if (!response.ok) {
        throw new Error("City not found or API request failed");
      }

      const jsonResponse = await response.json();
      const result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
      console.log(result);
      return result;

    } catch (error) {
      throw error;
    }
  };

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = async (e) => {
    try{
      e.preventDefault();
    console.log(city);
    setCity("");
    const newInfo = await getWeatherInfo();
    if (newInfo) {
      updateInfo(newInfo);
    }
    }
    catch(error){
  setError(true);
    }
  };

  return (
    <div className="searchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br /><br />
        <Button variant="contained" color="primary" type="submit">Search</Button>
        {error && <p style={{color:"red"}}>No such place exist!!</p>}
      </form>
    </div>
  );
}
