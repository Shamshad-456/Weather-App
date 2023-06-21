import React, { useState} from 'react';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Input from './components/inputbox/Input';
import Output from './components/outputbox/Output';
import Error from "./components/error/Error";
import Axios from "axios";

function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const [error, setError] = useState(null);
  const fetchWeather = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.get(
        `http://pro.openweathermap.org/data/2.5/weather?q=${city}&APPID=3833f2e34dc20ce83af2fa69f691f5c1`,
      );
      console.log(response);
      updateWeather(response.data);
    } catch (error) {
      setError(error);
    }
  };
  return (
    <div className="App">
      <Header />
      {error ? (
        <Error />
      ) : city && weather ? (
        <Output weather={weather} city={city} />
      ) : (
        <Input updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
      <Footer />
    </div>
  );  
}

export default App;

