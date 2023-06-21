import React from 'react';
import { WiDaySunny, WiCloud, WiRain, WiThunderstorm, WiDayHaze, WiSnow} from 'react-icons/wi';

import './Output.css';

const Output = (props) => {
  const { weather } = props;

  const getWeatherIcon = (description) => {
    if (description==='cloud') {
      return <WiCloud />;
    } else if (description==='clear') {
      return <WiDaySunny />;
    } else if (description==='thunderstorm') {
      return <WiThunderstorm />;
    } else if (description==='haze' || description==='mist') {
      return <WiDayHaze />;
    } else if (description==='snow') {
      return <WiSnow />;
    } else if (description==='rain') {
      return <WiRain />;
    } else {
      return null;
    }
  };
  function getWeatherKeywords(description) {
    const keywords = ['cloud', 'clear', 'thunderstorm', 'haze', 'snow','rain','mist'];
    console.log(description);
    for (let i = 0; i < keywords.length; i++) {
      const keyword = keywords[i];
      if (description.toLowerCase().includes(keyword)) {
        return keyword;
      }
    }
  
    return null;
  }
  
  return (
    <div className='card-container'>
      <div className='card'>
         <p className="city">{`${weather?.name}, ${weather?.sys?.country}`}</p>
         <p className="weather">{`${weather?.weather[0].description}`}</p>
         <div className='image'>{getWeatherIcon(getWeatherKeywords(weather?.weather[0].description))}</div>
         <p className="temp">{`${Math.floor(weather?.main?.temp - 273)}°C`}</p>
         <div className="minmaxContainer">
            <div className="min">
                <p className="minHeading">Min</p>
                <p className="minTemp">{`${Math.floor(weather?.main?.temp_min - 273)}°C`}</p>
        </div>
        <div className="max">
                <p className="maxHeading">Max</p>
                <p className="maxTemp">{`${Math.floor(weather?.main?.temp_max - 273)}°C`}</p></div>
        </div>
      </div>
    </div>
  );
};

export default Output;
