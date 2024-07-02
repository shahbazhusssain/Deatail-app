// src/Weather.js
import React, { useState } from 'react';
import axios from 'axios';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    if (!city) return;

    const apiKey = '577ade1805753ab964cecdd5254d921f'; // Replace with your OpenWeather API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
      const response = await axios.get(url);
      setWeather(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setWeather(null);
    }
  };

  const handleSearchClick = () => {
    fetchWeather();
  };

  const getWeatherIconUrl = (iconCode) => {
    return `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
  };

  return (
    <div>
      <div className='card'>
        <div className='search'>
          <input
            type='text'
            placeholder='Enter city name'
            spellCheck='false'
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button onClick={handleSearchClick}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe07LCSNUCbuIdCy7MJyGD-ddfbUwQEQPZbQ&s' className='dee' alt='search-icon' />
          </button>
        </div>
        {weather && (
          <div className='weather'>
            <img src={getWeatherIconUrl(weather.weather[0].icon)} className='weatherapp' alt='weather-icon' />
            <h1 className='tem'>{weather.main.temp}°c</h1>
            <h2 className='city'>{weather.name}</h2>
            <div className='detail'>
              <div className='col'>
                <img src='https://cdn-icons-png.flaticon.com/128/5664/5664993.png' className='fro' alt='humidity-icon' />
                <div>
                  <p className='humidity'>{weather.main.humidity}%</p>
                  <p>Humidity</p>
                </div>
              </div>
              <div className='col'>
                <img src='https://cdn-icons-png.flaticon.com/128/9754/9754028.png' className='ree' alt='wind-icon' />
                <div>
                  <p className='wind'>{weather.wind.speed} km/h</p>
                  <p>Wind</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
