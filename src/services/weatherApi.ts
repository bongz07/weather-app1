// Weather API Service
// This service handles all API calls to OpenWeatherMap

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export interface WeatherData {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
    pressure: number;
  };
  weather: Array<{
    main: string;
    description: string;
    icon: string;
  }>;
  wind: {
    speed: number;
  };
  sys: {
    country: string;
  };
}

export interface WeatherError {
  message: string;
  cod?: string;
}

/**
 * Fetches current weather data for a given city
 * @param cityName - Name of the city to get weather for
 * @returns Promise with weather data or error
 */
export async function fetchWeather(cityName: string): Promise<WeatherData> {
  if (!API_KEY) {
    throw new Error('API key is missing. Please set VITE_WEATHER_API_KEY in your .env file');
  }

  const url = `${BASE_URL}/weather?q=${encodeURIComponent(cityName)}&appid=${API_KEY}&units=metric`;
  
  const response = await fetch(url);
  const data = await response.json();

  if (!response.ok) {
    const error: WeatherError = data;
    throw new Error(error.message || 'Failed to fetch weather data');
  }

  return data as WeatherData;
}

