import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {CityWeather, WeatherState} from "@/interfaces";
import {fetchWeather} from "@/functions/fetchWeather";

const initialState: WeatherState = {
    cities: [],
    loading: false,
    error: null,
}

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
