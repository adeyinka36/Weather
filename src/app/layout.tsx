
import './globals.css'
import ReduxProvider from '@/app/reduxProvider'
import React from "react";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>
        <ReduxProvider>
            {children}
        </ReduxProvider>
        </body>
        </html>
    )
}
