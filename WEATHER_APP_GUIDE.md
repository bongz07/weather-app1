# 🌤️ Weather App - Step-by-Step Guide

Welcome! This guide will walk you through building and using your weather app.

## 📋 Table of Contents
1. [Overview](#overview)
2. [Getting Your API Key](#getting-your-api-key)
3. [Setting Up the App](#setting-up-the-app)
4. [Understanding the Code Structure](#understanding-the-code-structure)
5. [Running the App](#running-the-app)
6. [How It Works](#how-it-works)

---

## 🎯 Overview

This is a simple, beautiful weather app built with:
- **React** - For building the user interface
- **TypeScript** - For type safety
- **Vite** - For fast development and building
- **OpenWeatherMap API** - For weather data

The app allows users to search for any city and get current weather information including:
- Temperature (current and feels like)
- Weather condition and description
- Humidity
- Pressure
- Wind speed

---

## 🔑 Step 1: Getting Your API Key

To use the weather app, you need a free API key from OpenWeatherMap:

1. **Visit OpenWeatherMap**
   - Go to [https://openweathermap.org/api](https://openweathermap.org/api)

2. **Sign Up for Free**
   - Click "Sign Up" or "Sign In" if you already have an account
   - The free tier gives you 60 calls per minute, which is perfect for development

3. **Get Your API Key**
   - After signing up, go to your account dashboard
   - Navigate to "API keys" section
   - Copy your default API key (or create a new one)

---

## ⚙️ Step 2: Setting Up the App

1. **Create Environment File**
   - In the root directory of your project, create a file named `.env`
   - Add the following line (replace with your actual API key):
   ```
   VITE_WEATHER_API_KEY=your_actual_api_key_here
   ```
   - **Important**: Never commit your `.env` file to version control!

2. **Install Dependencies** (if not already done)
   ```bash
   npm install
   ```

---

## 📁 Step 3: Understanding the Code Structure

Let's break down what each file does:

### **Main App Component** (`src/App.tsx`)
- **Purpose**: Main component that handles user input and state management
- **Key Features**:
  - Search form for city input
  - Loading states while fetching data
  - Error handling and display
  - Renders the WeatherCard component when data is available

**Key Concepts**:
- `useState`: React hook to manage component state (city, weather data, loading, errors)
- `handleSearch`: Async function that calls the weather API when form is submitted
- Form submission prevents default page reload

### **Weather API Service** (`src/services/weatherApi.ts`)
- **Purpose**: Handles all communication with the OpenWeatherMap API
- **Key Features**:
  - `fetchWeather()`: Function that makes the API call
  - TypeScript interfaces for type safety
  - Error handling for missing API keys and API errors

**How it works**:
1. Takes a city name as input
2. Constructs the API URL with the city name and API key
3. Makes a fetch request to OpenWeatherMap
4. Returns weather data or throws an error

**API Endpoint Used**:
```
https://api.openweathermap.org/data/2.5/weather?q={city}&appid={key}&units=metric
```
- `q={city}`: City name to search for
- `appid={key}`: Your API key
- `units=metric`: Returns temperature in Celsius

### **Weather Card Component** (`src/components/WeatherCard.tsx`)
- **Purpose**: Displays the weather information in a beautiful card
- **Key Features**:
  - Shows city name and country
  - Displays temperature with weather icon
  - Shows additional details (humidity, pressure, wind speed)
  - Responsive design for mobile devices

**Data Displayed**:
- City name and country code
- Weather icon (from OpenWeatherMap)
- Current temperature in Celsius
- "Feels like" temperature
- Humidity percentage
- Atmospheric pressure
- Wind speed

### **Styling Files**
- `src/App.css`: Styles for the main app layout, search form, and error messages
- `src/components/WeatherCard.css`: Styles for the weather card component
- `src/index.css`: Global styles and resets

---

## 🚀 Step 4: Running the App

1. **Start the Development Server**
   ```bash
   npm run dev
   ```

2. **Open in Browser**
   - The terminal will show a local URL (usually `http://localhost:5173`)
   - Open this URL in your browser

3. **Test the App**
   - Enter a city name (e.g., "London", "New York", "Tokyo")
   - Click "Search" or press Enter
   - Wait for the weather data to load
   - Try different cities!

---

## 🔍 Step 5: How It Works

### **User Flow**:
1. User enters a city name in the search input
2. User clicks "Search" or presses Enter
3. Form submission triggers `handleSearch` function
4. App shows loading state ("Searching...")
5. `fetchWeather()` function is called with the city name
6. API request is made to OpenWeatherMap
7. Response is received and parsed
8. Weather data is stored in state
9. `WeatherCard` component displays the information
10. If there's an error, it's displayed to the user

### **Error Handling**:
- **Missing API Key**: Shows error if API key is not set
- **Invalid City**: Shows error if city is not found
- **Network Errors**: Catches and displays network-related errors
- **Empty Input**: Prevents search if input is empty

### **State Management**:
- `city`: Current input value
- `weather`: Weather data object (null when no data)
- `loading`: Boolean to show loading state
- `error`: Error message string (null when no error)

---

## 🎨 Customization Ideas

Want to extend the app? Here are some ideas:

1. **Add More Weather Data**
   - Sunrise/sunset times
   - UV index
   - Visibility
   - Cloud coverage

2. **Add Features**
   - Search history
   - Favorite cities
   - 5-day forecast
   - Weather maps
   - Location-based weather (using geolocation)

3. **Improve UI**
   - Dark/light theme toggle
   - Animated weather icons
   - Background changes based on weather
   - More responsive design improvements

4. **Add Functionality**
   - Unit conversion (Celsius/Fahrenheit)
   - Multiple city comparison
   - Weather alerts
   - Share weather data

---

## 🐛 Troubleshooting

### **"API key is missing" Error**
- Make sure you created a `.env` file in the root directory
- Check that the variable name is exactly `VITE_WEATHER_API_KEY`
- Restart the dev server after creating/updating `.env`

### **"Failed to fetch weather data" Error**
- Check your internet connection
- Verify your API key is correct
- Make sure you've activated your API key (may take a few minutes after signup)
- Check if you've exceeded the free tier rate limit (60 calls/minute)

### **City Not Found**
- Try using the full city name
- Include country code if needed (e.g., "London, UK")
- Check spelling

---

## 📚 Learning Resources

- **React Documentation**: [https://react.dev](https://react.dev)
- **TypeScript Documentation**: [https://www.typescriptlang.org](https://www.typescriptlang.org)
- **OpenWeatherMap API Docs**: [https://openweathermap.org/api](https://openweathermap.org/api)
- **Vite Documentation**: [https://vite.dev](https://vite.dev)

---

## 🎉 Congratulations!

You've built a working weather app! You now understand:
- How to integrate third-party APIs
- React state management with hooks
- TypeScript for type safety
- Modern CSS for beautiful UIs
- Error handling in async operations

Happy coding! 🌈

