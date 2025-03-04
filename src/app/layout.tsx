
import '../styles/globals.css'
import ReduxProvider from '@/store/reduxProvider'
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
