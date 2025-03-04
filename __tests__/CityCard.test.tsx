import React from 'react';
import { render, screen } from '@testing-library/react';
import CityCard from '@/components/CityCard';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import '@testing-library/jest-dom';


// Create a dummy store with an empty reducer
const store = configureStore({ reducer: () => ({}) })

// Sample city data to pass as prop
const sampleCity = {
    id: 'london',
    city: 'London',
    current: { temp_c: 15, humidity: 80, wind_kph: 10 },
    forecast: [
        { date: '2025-03-01', day: { avgtemp_c: 14 } },
        { date: '2025-03-02', day: { avgtemp_c: 16 } },
        { date: '2025-03-03', day: { avgtemp_c: 17 } },
        { date: '2025-03-04', day: { avgtemp_c: 18 } },
        { date: '2025-03-05', day: { avgtemp_c: 15 } },
    ],
    pinned: false,
}

describe('CityCard Component', () => {
    it('renders the city name', () => {
        render(
            <Provider store={store}>
                <CityCard cityData={sampleCity} />
            </Provider>
        )
        // Verify that the city name "London" is rendered
        expect(screen.getByText(/London/i)).toBeInTheDocument()
    })
})
