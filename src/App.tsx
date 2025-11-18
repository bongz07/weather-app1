import { useState, useEffect } from "react";
import { fetchWeather } from "./services/weatherApi";
import type { WeatherData } from "./services/weatherApi";
import { WeatherCard } from "./components/WeatherCard";
import "./App.css";

function App() {
  const [city, setCity] = useState(""); //creates a state variable to store the city the user types in, starting as an empty string because nothing has been entered yet.
  const [weather, setWeather] = useState<WeatherData | null>(null); //Creates a state variable to store the fetched weather data, starting as null until the API returns results.
  const [loading, setLoading] = useState(false); //Tracks whether the app is currently fetching data, starting as false because nothing is loading at first.
  const [error, setError] = useState<string | null>(null); //Stores an error message when the API call fails, starting as null because there is no error initially.
  const [darkMode, setDarkMode] = useState(() => {
    //Loads the user’s saved theme from localStorage on first render to determine whether dark mode should start as on or off.
    // Check localStorage first, default to false
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : false;
  });

  // Save dark mode preference to localStorage
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
    }
  }, [darkMode]); //A dependency array. it only runs when darkMode changes, not on every render.

  const toggleDarkMode = () => {
    //It’s a helper function that flips the darkMode state so the theme can switch between light and dark mode.
    setDarkMode(!darkMode);
  };

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
    <div className={`app ${darkMode ? "dark-mode" : ""}`}>
      <div className="container">
        <header className="app-header">
          <div className="header-content">
            <div>
              <h1>🌤️ Weather Dashboard</h1>
              <p>Get up-to-date weather info for any location.</p>
            </div>
            <button
              className="theme-toggle"
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
              title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
          </div>
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
              {loading ? "Searching..." : "Search"}{" "}
              {/*If the app is currently loading, it shows "Searching...", otherwise it shows "Search", and the button is disabled while loading.*/}
            </button>
          </div>
        </form>
        {error && <div className="error-message">⚠️ {error}</div>}
        {weather && <WeatherCard weather={weather} />}{" "}
        {/*If weather exists (is not null or empty), then show the Weathercard component. */}
        {!weather &&
          !error &&
          !loading && ( //if there is no weather data, no error, and the app is not loading then show the welcome message.
            <div className="welcome-message">
              <p>👆 Enter a city name above to get started!</p>
            </div>
          )}
      </div>
    </div>
  );
}

export default App;
