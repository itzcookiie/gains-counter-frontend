import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { SessionProvider } from "next-auth/react"

// import '../global.css'
import '../styles/global.scss'
import { UserIdProvider } from '@contexts/UserId';
import { DateContextProvider } from '@contexts/Date';
import Home from './index';
import Navbar from '@blocks/Navbar/index';


export default function MyApp({ Component, pageProps: { session, ...pageProps } }): AppProps {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <SessionProvider>
        <UserIdProvider>
          <DateContextProvider>
            <Navbar />
            <Component {...pageProps} />
          </DateContextProvider>
        </UserIdProvider>
      </SessionProvider>
    </>
  )
}
