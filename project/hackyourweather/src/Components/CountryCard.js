import React from "react";
import "./CountryCard.css";

function CountryCard(props) {
  return (
    <div className="count-card">
      <h1>
        {props.name}, {props.countCode}
      </h1>
      <h2 className="weather">{props.weather}</h2>
      <h4 className="weather-description">{props.weatherDesc}</h4>
      <h4>min temp:{props.minTemp}</h4>
      <h4>max temp:{props.maxTemp}</h4>
      <h4>
        loacation: {props.long}, {props.lat}
      </h4>
    </div>
  );
}
export default CountryCard;
