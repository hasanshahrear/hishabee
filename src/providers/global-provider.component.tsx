"use client"
import { PrimeReactProvider } from "primereact/api";

import "primereact/resources/themes/lara-light-cyan/theme.css";

import 'primeicons/primeicons.css';
        
type TProps ={
    children: React.ReactNode
}

export function GlobalProvider({children}: TProps) {
    return (
        <PrimeReactProvider >
            {children}
        </PrimeReactProvider>
    )
}