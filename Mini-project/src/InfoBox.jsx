import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function InfoBox({ weather }) {

  // guard for first render
  if (!weather) return null;

  const Img_URL =
    "https://images.unsplash.com/36/STzPBJUsSza3mzUxiplj_DSC09775.JPG?q=80&w=1161&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const HOT_URL = "https://plus.unsplash.com/premium_photo-1726721211928-398be54193be?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG90JTIwc2Vhc29ufGVufDB8fDB8fHww"
  const COLD_URL = "https://plus.unsplash.com/premium_photo-1671127303935-6042d1d8fcd8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMHNlYXNvbnxlbnwwfHwwfHx8MA%3D%3D"
  const RAIN_URL = "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFpbnxlbnwwfHwwfHx8MA%3D%3D"
  return (
    <div className="InfoBox">
      <h2>Weather Info</h2>
      <div className="CardContainer">
        <Card sx={{ width: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={weather.main.humidity > 75
              ? RAIN_URL
              : weather.main.temp > 25
                ? HOT_URL
                : COLD_URL}
            title="weather image"
          />

          <CardContent>
            <Typography gutterBottom variant="h5">
              {weather.name}
              {weather.main.humidity > 75 ? (
                <ThunderstormIcon />
              ) : weather.main.temp > 25 ? (
                <WbSunnyIcon />
              ) : (
                <AcUnitIcon />
              )}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Temperature: {weather.main.temp} °C <br />
              Min Temp: {weather.main.temp_min} °C <br />
              Max Temp: {weather.main.temp_max} °C <br />
              Feels Like: {weather.main.feels_like} °C <br />
              Humidity: {weather.main.humidity}% <br />
              Condition: {weather.weather[0].description}
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
