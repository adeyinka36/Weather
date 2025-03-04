"use client";

import type { NextPage } from 'next';
import Head from 'next/head';
import SearchBar from '@/components/SearchBar';
import WeatherDashboard from '@/components/WeatherDashboard';
import { Provider } from 'react-redux';
import {RootState, store} from '@/app/store';
import { useHydrateCities } from '@/hooks/useHydratedCities';
import { usePersistCities } from '@/hooks/usePersistCities';
import { useSelector } from 'react-redux';
const Home: NextPage = () => {
    useHydrateCities();
    usePersistCities();

    const error = useSelector((state: RootState) => state.weather.error);
    const loading = useSelector((state: RootState) => state.weather.loading);

    return (
        <Provider store={store}>
            <Head>
                <title>Weather Dashboard</title>
                <meta name="description" content="Weather dashboard using WeatherAPI" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="min-h-screen bg-gray-100 p-4">
                <h1 className="text-3xl font-bold text-center mb-6">Weather Dashboard</h1>
                <div className="max-w-4xl mx-auto">
                    <SearchBar />
                    {loading && <p className="text-center my-4">Loading...</p>}
                    {error && <p className="text-center text-red-500 my-4">{error}</p>}
                    <WeatherDashboard />
                </div>
            </main>
        </Provider>
    );
};

export default Home;
