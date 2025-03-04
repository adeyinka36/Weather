"use client";

import React from 'react'
import {CityWeather, ForecastDay} from '@/interfaces';
import { useDispatch } from 'react-redux'
import { pinCity, removeCity } from '@/features/weatherSlice'

interface CityCardProps {
    cityData: CityWeather
}

const CityCard: React.FC<CityCardProps> = ({ cityData }) => {
    const dispatch = useDispatch()
    return (
        <div className={`border rounded p-4 shadow ${ cityData.pinned ?'bg-amber-400' :'bg-white'}`}>
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">{cityData.city}</h2>
                <div>
                    <button
                        onClick={() => dispatch(pinCity(cityData.id))}
                        className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                    >
                        {cityData.pinned ? 'Unpin' : 'Pin'}
                    </button>
                    <button
                        onClick={() => dispatch(removeCity(cityData.id))}
                        className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                        Remove
                    </button>
                </div>
            </div>
            <div className="mt-2">
                <p>Temperature: {cityData.current.temp_c}°C</p>
                <p>Humidity: {cityData.current.humidity}%</p>
                <p>Wind Speed: {cityData.current.wind_kph} kph</p>
            </div>
            <div className="mt-2">
                <h3 className="font-semibold">5-Day Forecast:</h3>
                <div className="flex overflow-x-auto gap-2 mt-1">
                    {cityData.forecast.map((day: ForecastDay, index: number) => (
                        <div key={index} className="border p-2 rounded min-w-[100px]">
                            <p className="font-bold">{day.date}</p>
                            <p>{day.day.avgtemp_c}°C</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CityCard
