import { useEffect } from 'react';
import { saveCities } from '@/app/localStorage';
import { RootState, store } from '@/app/store';

export const usePersistCities = () => {
    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            const state: RootState = store.getState();
            saveCities(state.weather.cities);
        });
        return () => unsubscribe();
    }, []);
};
