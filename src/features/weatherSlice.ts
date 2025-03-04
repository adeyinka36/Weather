import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import {CityWeather, WeatherState} from "@/interfaces";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://api.weatherapi.com/v1/forecast.json';


const initialState: WeatherState = {
    cities: [],
    loading: false,
    error: null,
}

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
            id: data.location.name.toLowerCase(), // simple id – in production consider a more robust id
            city: data.location.name,
            current: data.current,
            forecast: data.forecast.forecastday,
            pinned: false,
        }
    } catch (error: any) {
        let message = "Error fetching weather data.";
        if([400, 404].includes(error.status)) {
            message = "City not found. Please enter a valid city."
        }
        if ([401, 403].includes(error.status)) {
            message = "Invalid API key. Please set a valid API key."
        }

        return thunkAPI.rejectWithValue(message)
    }
})

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        pinCity: (state, action: PayloadAction<string>) => {
            const city = state.cities.find(c => c.id === action.payload);
            if (city) {
                city.pinned = !city.pinned;
            }
        },
        removeCity: (state, action: PayloadAction<string>) => {
            state.cities = state.cities.filter(c => c.id !== action.payload);
        },
        clearError: (state) => {
            state.error = null;
        },
        setCities: (state, action: PayloadAction<CityWeather[]>) => {
            state.cities = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeather.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchWeather.fulfilled, (state, action) => {
                state.loading = false
                // Avoid duplicate cities
                if (!state.cities.find(c => c.id === action.payload.id)) {
                    state.cities.push(action.payload)
                }
            })
            .addCase(fetchWeather.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload || "Error fetching weather data."
            })
    },
})

export const { pinCity, removeCity, clearError, setCities } = weatherSlice.actions
export default weatherSlice.reducer
