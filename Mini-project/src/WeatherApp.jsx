import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    name: "Pune",
    main: {
      temp: 22.25,
      feels_like: 22.25,
      temp_min: 22.05,
      temp_max: 21.23,
      humidity: 36,
    },
    weather: [{ description: "haze" }],
  });

  //error should be STRING
  const [error, setError] = useState("");

  const API_KEY = "2539e6463c2336857edea30d41d76b02";
  const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather";

  const fetchWeather = async (city) => {
    try {
      setError(""); // clear old error

      const response = await fetch(
        `${WEATHER_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );

      const data = await response.json();

      // check API response body
      if (data.cod && data.cod !== 200) {
        throw new Error("No such place exists");
      }

      setWeatherInfo(data);
    } catch (err) {
      setError("No such place exists ❌");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Weather App</h1>

      <SearchBox onSearch={fetchWeather} />

      {/*Error message */}
      {error && (
        <p style={{ color: "red", marginTop: "10px" }}>
          {error}
        </p>
      )}

      <InfoBox weather={weatherInfo} />
    </div>
  );
}
