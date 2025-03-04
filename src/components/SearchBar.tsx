"use client";

import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/store/store'
import {fetchWeather} from "@/functions/fetchWeather";


const SearchBar: React.FC = () => {
    const [city, setCity] = useState('')
    const dispatch = useDispatch<AppDispatch>()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (city.trim() === '') return
        dispatch(fetchWeather(city))
        setCity('')
    }

    return (
        <form onSubmit={handleSubmit} className="w-full flex gap-2 mb-2">
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city name..."
                className="flex-1 border border-gray-300 p-2 rounded"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Add City
            </button>
        </form>
    )
}

export default SearchBar
