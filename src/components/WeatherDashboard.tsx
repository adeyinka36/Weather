"use client";

import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/app/store'
import CityCard from './CityCard'

const WeatherDashboard: React.FC = () => {
    const cities = useSelector((state: RootState) => state.weather.cities)
    if (cities.length === 0) {
        return <p className="text-center my-4">No cities added. Please add a city.</p>
    }
    return (
        <div className="grid gap-4 w-full" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
            {cities.map(city => (
                <CityCard key={city.id} cityData={city} />
            ))}
        </div>
    )
}

export default WeatherDashboard
