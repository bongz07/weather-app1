# 🌤️ Weather App

A beautiful, simple weather application built with React, TypeScript, and Vite. Get current weather information for any city around the world using the OpenWeatherMap API.

## ✨ Features

- 🔍 Search weather by city name
- 🌡️ Current temperature and "feels like" temperature
- 💧 Humidity, pressure, and wind speed
- 🎨 Beautiful, modern UI with gradient backgrounds
- 📱 Fully responsive design
- ⚡ Fast and lightweight

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- OpenWeatherMap API key (free at [openweathermap.org](https://openweathermap.org/api))

### Installation

1. **Clone or navigate to the project directory**
   ```bash
   cd weather-app1
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Get your API key**
   - Sign up for free at [OpenWeatherMap](https://openweathermap.org/api)
   - Get your API key from the dashboard

4. **Create environment file**
   - Create a `.env` file in the root directory
   - Add your API key:
   ```
   VITE_WEATHER_API_KEY=your_api_key_here
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   - Navigate to the URL shown in the terminal (usually `http://localhost:5173`)
   - Start searching for weather!

## 📖 Detailed Guide

For a comprehensive step-by-step guide explaining how the app works, see [WEATHER_APP_GUIDE.md](./WEATHER_APP_GUIDE.md).

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
weather-app1/
├── src/
│   ├── components/
│   │   ├── WeatherCard.tsx      # Weather display component
│   │   └── WeatherCard.css      # Weather card styles
│   ├── services/
│   │   └── weatherApi.ts        # API service layer
│   ├── App.tsx                  # Main app component
│   ├── App.css                  # App styles
│   ├── index.css                # Global styles
│   └── main.tsx                 # Entry point
├── .env                         # Environment variables (create this)
├── index.html                   # HTML template
└── package.json                 # Dependencies
```

## 🎓 What You'll Learn

This project demonstrates:
- React hooks (useState)
- TypeScript for type safety
- API integration with async/await
- Error handling
- Form handling
- Responsive CSS design
- Environment variables in Vite

## 🔧 Technologies Used

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **OpenWeatherMap API** - Weather data

## 📝 License

This project is open source and available for learning purposes.

## 🤝 Contributing

Feel free to fork this project and add your own features!

---

**Note**: Remember to never commit your `.env` file with your API key to version control!
