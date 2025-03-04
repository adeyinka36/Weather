"use client";

import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/app/store'
import { fetchWeather } from '@/features/weatherSlice'

export const useWeather = () => {
    const dispatch = useDispatch<AppDispatch>()
    const cities = useSelector((state: RootState) => state.weather.cities)
    const loading = useSelector((state: RootState) => state.weather.loading)
    const error = useSelector((state: RootState) => state.weather.error)

    const addCity = (city: string) => {
        dispatch(fetchWeather(city))
    }

    return { cities, loading, error, addCity }
}
