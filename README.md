# Weather Dashboard Application

This is a minimal weather dashboard application built with Next.js, TypeScript, Tailwind CSS, and Redux Toolkit. The app allows users to search for cities and view current weather conditions and a 5‑day forecast for each city. It uses the [WeatherAPI](https://www.weatherapi.com/) for fetching weather data.

## Features

- **City Search:** Users can add cities to the dashboard via a search bar.
- **Current Weather:** Displays current conditions (temperature, humidity, wind speed) for each added city.
- **5‑Day Forecast:** Shows a 5‑day weather forecast for each city.
- **Pin & Remove:** Users can pin/unpin cities or remove them from the dashboard.
- **Responsive Design:** Built with Tailwind CSS to work on various screen sizes.
- **State Management:** Uses Redux Toolkit for managing weather data.
- **Custom Hook:** Contains a custom hook (`useWeather`) to encapsulate weather data fetching logic.
- **Error Handling:** Proper error messages are displayed if API requests fail.

## Technology Stack

- **Next.js** with TypeScript
- **Tailwind CSS** for styling
- **Redux Toolkit** for state management
- **Axios** for HTTP requests
- **WeatherAPI** for weather data

## Project Structure

- **pages/**: Contains your Next.js page(s). The main dashboard is in `page.tsx`.
- **src/components/**: Contains UI components like the search bar, city card, and dashboard.
- **src/hooks/**: Contains custom hooks. For example, `useWeather` handles fetching weather data.
- **src/store/**: Contains Redux Toolkit configuration and the weather slice.
- **styles/**: Contains global styles, including Tailwind’s directives.

## Installation

- clone the repository
- cd weather-app
- npm install
- update the environment variables provided in the .env.example file
- npm run dev
