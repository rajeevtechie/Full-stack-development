import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InfoBox from "./InfoBox.jsx";
import "./SearchBox.css"

export default function SearchBox() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const API_KEY = "2539e6463c2336857edea30d41d76b02";
  const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather";

  const getWeatherInfo = async (city) => {
    try {
      const response = await fetch(
        `${WEATHER_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        throw new Error("City not found");
      }

      const weatherData = await response.json();
      setWeather(weatherData);
    } catch (error) {
      alert("City not found or API error");
      console.error(error);
    }
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeatherInfo(city);
    setCity("");
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          label="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
        <br /><br />
        <Button type="submit" variant="contained">
          Search
        </Button>
      </form>

      {/* Weather Card */}
      <InfoBox weather={weather} />
    </div>
  );
}
