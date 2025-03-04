import {createAsyncThunk} from "@reduxjs/toolkit";
import {CityWeather} from "@/interfaces";
import axios from "axios";
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://api.weatherapi.com/v1/forecast.json';

export const fetchWeather = createAsyncThunk<
    CityWeather,
    string,
    { rejectValue: string }
>('weather/fetchWeather', async (city: string, thunkAPI) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                key: API_KEY,
                q: city,
                days: 5,
                aqi: 'no',
                alerts: 'no',
            },
        })
        const data = response.data
        return {
            id: data.location.name.toLowerCase(),
            city: data.location.name,
            current: data.current,
            forecast: data.forecast.forecastday,
            pinned: false,
        }
    } catch (error: unknown) {
        let message = "Error fetching weather data.";

        if (axios.isAxiosError(error)) {
            const status = error.response?.status;
            if ([400, 404].includes(status!)) {
                message = "City not found. Please enter a valid city.";
            } else if ([401, 403].includes(status!)) {
                message = "Invalid API key. Please set a valid API key.";
            }
        } else if (error instanceof Error) {
            // Fallback for non-Axios errors
            message = error.message;
        }

        return thunkAPI.rejectWithValue(message);
    }
})