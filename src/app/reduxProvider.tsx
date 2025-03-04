// src/components/ReduxProvider.tsx
"use client";  // Make sure this is a client component
import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { store } from '@/app/store'

interface ReduxProviderProps {
    children: ReactNode;
}

export default function ReduxProvider({ children }: ReduxProviderProps) {
    return <Provider store={store}>{children}</Provider>
}
