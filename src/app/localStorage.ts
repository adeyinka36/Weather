import { CityWeather } from '@/features/weatherSlice';

export const loadCities = (): CityWeather[] | undefined => {
    try {
        const serializedCities = localStorage.getItem('cities');
        if (!serializedCities) {
            return undefined;
        }
        return JSON.parse(serializedCities) as CityWeather[];
    } catch (err) {
        console.error("Error loading cities from localStorage", err);
        return undefined;
    }
};

export const saveCities = (cities: CityWeather[]) => {
    try {
        const serializedCities = JSON.stringify(cities);
        localStorage.setItem('cities', serializedCities);
    } catch (err) {
        console.error("Error saving cities to localStorage", err);
    }
};
