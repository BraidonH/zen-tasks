import React from "react";

export default function Forecast(props) {
  const { weather } = props;

  return weather == null ? (
    <h5 className="forecast-container">no weather at this time</h5>
  ) : (
    <div className="forecast-container">
      <section className="temp">
        <h5>
          {Math.floor(1.8 * (weather.main.temp - 273) + 32)} F<span></span>
        </h5>
        <h5></h5>
      </section>
      <section style={{ display: "flex" }}>
        <img
          src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
          height="60rem"
          width="60rem"
        ></img>
        <h3>{weather.weather[0].description}</h3>
      </section>
    </div>
  );
}
