// import '../global.css'
import '../styles/global.scss'
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { SessionProvider } from "next-auth/react"
import { useState, useEffect } from 'react';
import { UserIdProvider } from '@contexts/UserId';
import { login } from '@lib/api';


export default function MyApp({ Component, pageProps: { session, ...pageProps } }): AppProps {
  const [userId, setUserId] = useState();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <SessionProvider>
        <UserIdProvider>
          <Component {...pageProps} />
        </UserIdProvider>
      </SessionProvider>
    </>
  )
}
