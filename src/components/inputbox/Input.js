import React from 'react';
import './Input.css';
import { WiThermometer } from "react-icons/wi";
const Input = (props) => {
  const { updateCity, fetchWeather } = props;

  return (
    <div className="input-container">
      <div className='image'>{<WiThermometer/>}</div>
      <p>🖐️!</p>
      <p>Find Weather of your city</p>
      <form onSubmit={fetchWeather}>
        <input
          className="city-input"
          onChange={(e) => updateCity(e.target.value)}
          placeholder="City"
        />
        <button type="submit" className="search-button">Search</button>
      </form>
    </div>
  );
}

export default Input;

