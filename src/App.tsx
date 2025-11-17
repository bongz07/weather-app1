import { useState } from "react";
import { fetchWeather } from "./services/weatherApi";
import type { WeatherData } from "./services/weatherApi";
import { WeatherCard } from "./components/WeatherCard";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!city.trim()) {
      setError("Please enter a city name");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const data = await fetchWeather(city);
      setWeather(data);
      setCity(""); // Clear input after successful search
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to fetch weather data"
      );
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <div className="container">
        <header className="app-header">
          <h1>🌤️ Weather Dashboard</h1>
          <p>Get current weather information for any city</p>
        </header>

        <form onSubmit={handleSearch} className="search-form">
          <div className="search-input-wrapper">
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter city name (e.g., Johannesburg, Cape Town, Pretoria)"
              className="search-input"
              disabled={loading}
            />
            <button type="submit" className="search-button" disabled={loading}>
              {loading ? "Searching..." : "Search"}
            </button>
          </div>
        </form>

        {error && <div className="error-message">⚠️ {error}</div>}

        {weather && <WeatherCard weather={weather} />}

        {!weather && !error && !loading && (
          <div className="welcome-message">
            <p>👆 Enter a city name above to get started!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
