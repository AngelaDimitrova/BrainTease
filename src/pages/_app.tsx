import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import "../styles/internal.css";
import {UserProvider} from "@/context/UserContext";


export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
  )
}
