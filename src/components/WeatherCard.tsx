import type { WeatherData } from '../services/weatherApi';
import './WeatherCard.css';

interface WeatherCardProps {
  weather: WeatherData;
}

export function WeatherCard({ weather }: WeatherCardProps) {
  const { name, main, weather: weatherInfo, wind, sys } = weather;
  const { temp, feels_like, humidity, pressure } = main;
  const { main: condition, description, icon } = weatherInfo[0];

  return (
    <div className="weather-card">
      <div className="weather-header">
        <h2 className="city-name">
          {name}, {sys.country}
        </h2>
        <p className="weather-description">{description}</p>
      </div>

      <div className="weather-main">
        <div className="temperature-section">
          <img
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            alt={condition}
            className="weather-icon"
          />
          <div className="temperature">
            <span className="temp-value">{Math.round(temp)}</span>
            <span className="temp-unit">°C</span>
          </div>
        </div>
        <p className="feels-like">Feels like {Math.round(feels_like)}°C</p>
      </div>

      <div className="weather-details">
        <div className="detail-item">
          <span className="detail-label">Humidity</span>
          <span className="detail-value">{humidity}%</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Pressure</span>
          <span className="detail-value">{pressure} hPa</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Wind Speed</span>
          <span className="detail-value">{wind.speed} m/s</span>
        </div>
      </div>
    </div>
  );
}

