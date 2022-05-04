import 'tailwindcss/tailwind.css'
import {injectStyle} from "react-toastify/dist/inject-style";
import type {AppProps} from 'next/app'

export default function MyApp({Component, pageProps}: AppProps) {

    // Inject the toastify styles
    if (typeof document !== 'undefined') injectStyle();

    return <Component {...pageProps} />
}

