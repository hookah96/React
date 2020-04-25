import React from "react";
import CountryCard from "./CountryCard";
import cityWeather from "../city-weather.json";
import "./Weather.css";

function Weather() {
  const details = cityWeather.map((el) => (
    <CountryCard
      key={el.id}
      name={el.name}
      countCode={el.sys.country}
      weather={el.weather.main}
      weatherDesc={el.weather.description}
      minTemp={el.main.temp_min}
      maxTemp={el.main.temp_max}
      long={el.coord.lon}
      lat={el.coord.lat}
    />
  ));
  return (
    <div className="main-div">
      <h1 className="title">Weather</h1>
      <div className="details-div">
        <p>{details}</p>
      </div>
    </div>
  );
}

export default Weather;
