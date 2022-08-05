import { useState, useEffect } from "react";
import MainContainer from "./components/mainSection";
import "./App.css";
import background from "./assets/background.mp4";
import Forecast from "./components/forecast";
import Completed from "./components/completed";
import { useSelector, useDispatch } from "react-redux";
import { addWeather } from "./redux/slices/weather";

function App() {
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather.weather);

  useEffect(() => {
    const API_KEY = "YOUR_API_KEY";
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
    function success(pos) {
      const crd = pos.coords;
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=${API_KEY}`
      )
        .then((response) => response.json())
        .then((data) => {
          dispatch(addWeather(data));
        });
    }
    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    console.log(weather);
    navigator.geolocation.getCurrentPosition(success, error, options);
  }, []);

  return (
    <div className="App">
      <section>
        <Forecast weather={weather} />
      </section>
      <section className="completed-container">
        <Completed />
      </section>
      <video autoPlay muted loop id="myVideo">
        <source src={background} type="video/mp4" />
      </video>
      <p>
        <a href="https://giphy.com/gifs/cinemagraph-cinemagraphs-26ybxpXV89wqtPCow"></a>
      </p>
      <MainContainer />
    </div>
  );
}

export default App;
