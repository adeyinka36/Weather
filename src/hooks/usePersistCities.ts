import { useEffect } from 'react';
import { saveCities } from '@/functions/localStorage';
import { RootState, store } from '@/store/store';

export const usePersistCities = () => {
    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            const state: RootState = store.getState();
            saveCities(state.weather.cities);
        });
        return () => unsubscribe();
    }, []);
};
