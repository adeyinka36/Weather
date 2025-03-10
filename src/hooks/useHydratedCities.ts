import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCities } from '@/features/weatherSlice';
import { loadCities } from '@/functions/localStorage';
import type { AppDispatch } from '@/store/store';

export const useHydrateCities = () => {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        const stored = loadCities();
        if (stored) {
            dispatch(setCities(stored));
        }
    }, [dispatch]);
};